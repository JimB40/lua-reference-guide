#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
import re
import shutil
import subprocess
import tarfile
import tempfile
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable


SUMMARY_RE = re.compile(r"^(?P<indent>\s*)\* \[(?P<title>.+)\]\((?P<path>[^)]+)\)\s*$")
HINT_OPEN_RE = re.compile(r'^\{%\s*hint style="(?P<style>[^"]+)"\s*%\}\s*$')
HINT_CLOSE_RE = re.compile(r"^\{%\s*endhint\s*%\}\s*$")
TAB_OPEN_RE = re.compile(r'^\{%\s*tab title="(?P<title>[^"]+)"\s*%\}\s*$')
TABS_OPEN_RE = re.compile(r"^\{%\s*tabs\s*%\}\s*$")
TAB_CLOSE_RE = re.compile(r"^\{%\s*endtab\s*%\}\s*$")
TABS_CLOSE_RE = re.compile(r"^\{%\s*endtabs\s*%\}\s*$")
LINK_RE = re.compile(r"(!?\[[^\]]*\])\(([^)]+)\)")


@dataclass
class SummaryNode:
    title: str
    path: str
    children: list["SummaryNode"] = field(default_factory=list)


def repo_root() -> Path:
    return Path(__file__).resolve().parent.parent


def run_archive(ref: str, dest_dir: Path) -> None:
    archive_bytes = subprocess.check_output(["git", "archive", ref], cwd=repo_root())
    with tempfile.NamedTemporaryFile() as temp_file:
        temp_file.write(archive_bytes)
        temp_file.flush()
        with tarfile.open(temp_file.name) as tar:
            tar.extractall(dest_dir)


def parse_summary(text: str) -> list[SummaryNode]:
    roots: list[SummaryNode] = []
    stack: list[tuple[int, SummaryNode]] = []

    for raw_line in text.splitlines():
        match = SUMMARY_RE.match(raw_line)
        if not match:
            continue

        indent = len(match.group("indent"))
        node = SummaryNode(match.group("title"), match.group("path"))

        while stack and stack[-1][0] >= indent:
            stack.pop()

        if stack:
            stack[-1][1].children.append(node)
        else:
            roots.append(node)

        stack.append((indent, node))

    return roots


def normalize_nav_path(path: str) -> str:
    return "index.md" if path == "README.md" else path


def nav_entry(node: SummaryNode) -> dict[str, object]:
    path = normalize_nav_path(node.path)
    if not node.children:
        return {node.title: path}

    children: list[object] = [{node.title: path}]
    children.extend(nav_entry(child) for child in node.children)
    return {node.title: children}


def build_nav(summary_nodes: list[SummaryNode]) -> list[object]:
    nav: list[object] = []
    for node in summary_nodes:
        title = "EdgeTX LuaDoc" if node.path == "README.md" else node.title
        rewritten = SummaryNode(title=title, path=node.path, children=node.children)
        nav.append(nav_entry(rewritten))
    return nav


def convert_hint_style(style: str) -> str:
    return {
        "info": "info",
        "warning": "warning",
        "danger": "danger",
        "success": "success",
    }.get(style, "note")


def indent_block(lines: Iterable[str]) -> list[str]:
    return [f"    {line}" if line else "" for line in lines]


def rewrite_link_target(target: str, source_file: Path, source_root: Path) -> str:
    if target.startswith(("http://", "https://", "mailto:", "#")):
        return target

    if ".gitbook/assets/" in target:
        return target.replace(".gitbook/assets/", "assets/legacy-2.11/")

    if target.startswith("/"):
        return target

    bare_target, hash_part = (target.split("#", 1) + [""])[:2]
    suffix = f"#{hash_part}" if hash_part else ""
    if not bare_target:
        return target

    if bare_target.endswith("/"):
        candidate = (source_file.parent / bare_target / "README.md").resolve()
        if candidate.exists():
            return f"{bare_target}README.md{suffix}"

    relative_path = (source_file.parent / bare_target).resolve()
    if relative_path.is_dir() and (relative_path / "README.md").exists():
        stripped = bare_target.rstrip("/")
        return f"{stripped}/README.md{suffix}"

    if not Path(bare_target).suffix and relative_path.with_suffix(".md").exists():
        return f"{bare_target}.md{suffix}"

    try:
        relative_path.relative_to(source_root.resolve())
    except ValueError:
        return target

    return target


def transform_markdown(content: str, source_file: Path, source_root: Path) -> str:
    lines = content.splitlines()
    output: list[str] = []
    i = 0

    while i < len(lines):
        line = lines[i]

        hint_open = HINT_OPEN_RE.match(line)
        if hint_open:
            style = convert_hint_style(hint_open.group("style"))
            block: list[str] = []
            i += 1
            while i < len(lines) and not HINT_CLOSE_RE.match(lines[i]):
                block.append(lines[i])
                i += 1
            output.append(f"!!! {style}")
            output.extend(indent_block(block))
            if block:
                output.append("")
            i += 1
            continue

        if TABS_OPEN_RE.match(line) or TABS_CLOSE_RE.match(line):
            i += 1
            continue

        tab_open = TAB_OPEN_RE.match(line)
        if tab_open:
            output.append(f"#### {tab_open.group('title')}")
            output.append("")
            i += 1
            continue

        if TAB_CLOSE_RE.match(line):
            output.append("")
            i += 1
            continue

        output.append(line)
        i += 1

    rewritten = "\n".join(output)

    def replace_link(match: re.Match[str]) -> str:
        label, target = match.groups()
        return f"{label}({rewrite_link_target(target, source_file, source_root)})"

    rewritten = LINK_RE.sub(replace_link, rewritten)
    return f"{rewritten.rstrip()}\n"


def copy_current_theme_assets(output_docs_dir: Path) -> None:
    current_docs_root = repo_root() / "website" / "md-docs"
    for folder_name in ("assets", "javascripts", "stylesheets"):
        src = current_docs_root / folder_name
        dst = output_docs_dir / folder_name
        if dst.exists():
            shutil.rmtree(dst)
        shutil.copytree(src, dst)


def copy_legacy_assets(source_root: Path, output_docs_dir: Path) -> None:
    legacy_assets = source_root / ".gitbook" / "assets"
    if not legacy_assets.exists():
        return
    dst = output_docs_dir / "assets" / "legacy-2.11"
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(legacy_assets, dst)


def build_output_tree(source_root: Path, output_docs_dir: Path) -> None:
    if output_docs_dir.exists():
        shutil.rmtree(output_docs_dir)
    output_docs_dir.mkdir(parents=True, exist_ok=True)

    copy_current_theme_assets(output_docs_dir)
    copy_legacy_assets(source_root, output_docs_dir)

    for source_file in sorted(source_root.rglob("*.md")):
        relative_path = source_file.relative_to(source_root)
        destination = output_docs_dir / relative_path
        destination.parent.mkdir(parents=True, exist_ok=True)
        transformed = transform_markdown(source_file.read_text(encoding="utf-8"), source_file, source_root)
        destination.write_text(transformed, encoding="utf-8")
        if relative_path == Path("README.md"):
            (output_docs_dir / "index.md").write_text(transformed, encoding="utf-8")


def build_config(output_docs_dir: Path, nav: list[object], config_path: Path, site_dir: Path) -> None:
    config = {
        "site_name": "EdgeTX LuaDoc",
        "site_description": "Legacy EdgeTX 2.11 Lua documentation imported from the GitBook branch",
        "site_url": "https://luadoc.edgetx.org/",
        "docs_dir": str(output_docs_dir),
        "site_dir": str(site_dir),
        "theme": {
            "name": "material",
            "logo": "assets/edgetx-logo.svg",
            "favicon": "assets/edgetx-logo.svg",
            "palette": {"primary": "custom", "accent": "custom"},
            "features": ["navigation.path"],
        },
        "extra_css": ["stylesheets/extra-live-v2.css"],
        "extra_javascript": [
            "javascripts/api-function-breadcrumb.js",
            "javascripts/mobile-nav-inline.js",
            "javascripts/version-switcher.js",
            "javascripts/legacy-version-banner.js",
            "javascripts/toc-visibility.js",
        ],
        "extra": {
            "version": {"provider": "mike", "default": "latest", "alias": True},
            "legacy_version": {
                "enabled": True,
                "label": "Legacy version",
                "message": "This documentation version preserves the original 2.11 GitBook content and structure for reference.",
            },
        },
        "markdown_extensions": ["tables", "admonition", "fenced_code"],
        "nav": nav,
    }
    config_path.parent.mkdir(parents=True, exist_ok=True)
    config_path.write_text(json.dumps(config, indent=2, ensure_ascii=False), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Import a GitBook-era branch into a MkDocs-ready legacy docs tree.")
    parser.add_argument("--ref", default="upstream/edgetx_2.11")
    parser.add_argument("--output-docs-dir", default=".generated/legacy-2.11-docs")
    parser.add_argument("--output-config", default=".generated/mkdocs-legacy-2.11.yml")
    parser.add_argument("--site-dir", default="site-legacy-2.11")
    args = parser.parse_args()

    root = repo_root()
    output_docs_dir = (root / args.output_docs_dir).resolve()
    output_config = (root / args.output_config).resolve()
    site_dir = (root / args.site_dir).resolve()

    with tempfile.TemporaryDirectory(dir=root / ".tmp", prefix="legacy-gitbook-") as temp_dir:
        source_root = Path(temp_dir)
        run_archive(args.ref, source_root)
        summary_text = (source_root / "SUMMARY.md").read_text(encoding="utf-8")
        summary_nodes = parse_summary(summary_text)
        build_output_tree(source_root, output_docs_dir)
        build_config(output_docs_dir, build_nav(summary_nodes), output_config, site_dir)

    print(f"Generated legacy docs in {output_docs_dir}")
    print(f"Generated MkDocs config at {output_config}")


if __name__ == "__main__":
    main()
