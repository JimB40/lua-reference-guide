# Docs Pipeline

This directory contains the first implementation of the new Lua docs pipeline.

## Layout

- `schema/` defines the normalized API model consumed by renderers
- `examples/` contains sample extracted API data
- `overlays/` contains human-authored enrichment content
- `generated/` contains tracked sample output generated from the example data

## Commands

```sh
uv run python3 tools/docs_pipeline.py extract \
  --source-dir /path/to/edgetx/radio/src/lua \
  --docs-version 2.12 \
  --upstream-ref edgetx-2.12 \
  --output /tmp/api-model.2.12.json

uv run python3 tools/docs_pipeline.py validate /tmp/api-model.2.12.json

uv run python3 tools/docs_pipeline.py report /tmp/api-model.2.12.json \
  --output docs-pipeline/generated/golden-module-quality.json

uv run python3 tools/docs_pipeline.py build \
  --input /tmp/api-model.2.12.json \
  --overlay-dir docs-pipeline/overlays \
  --docs-output docs-site/api-reference \
  --luals-output docs-pipeline/generated/luals

uv run python3 tools/docs_pipeline.py validate docs-pipeline/examples/api-model.sample.json
uv run python3 tools/docs_pipeline.py build \
  --input docs-pipeline/examples/api-model.sample.json \
  --overlay-dir docs-pipeline/overlays \
  --docs-output docs-site/api-reference \
  --luals-output docs-pipeline/generated/luals

uv run mkdocs build
```

## Notes

This pipeline now includes a first extractor for real EdgeTX `/*luadoc */` blocks. It currently targets the existing upstream comment format and intentionally keeps the normalized model conservative until the upstream annotation contract is improved.

The intended boundary is:

- upstream C++ comments carry compact API facts such as syntax, summary, params, returns, and availability
- downstream overlays carry richer teaching material such as examples, long explanations, compatibility notes, media, and rename guidance

The extractor now only promotes the first summary paragraph plus tagged API fields from `/*luadoc */` blocks. If a function needs richer documentation, add it under `docs-pipeline/overlays/<doc-id>.md` or the legacy `docs-pipeline/overlays/<api-id>.md`.

The normalized model also supports a docs-owned stable `doc_id` plus alias metadata:

- `doc_id` for stable page and overlay identity
- `symbol` for the current preferred callable name
- `aliases` for still-supported alternate names
- `deprecated_aliases` for names being phased out

Semantic review types live in `docs-pipeline/type-definitions.json`. The generated LuaLS output emits `---@alias` lines from that registry so docs-oriented types such as `lcd_color_RGB565` remain LuaLS-compatible.

The repo now includes a minimal `pyproject.toml` and `uv.lock` for the docs toolchain. `uv run ...` is the preferred way to execute both the pipeline and MkDocs locally.

The `report` command is focused on the current golden modules:

- `runtime`
- `lcd`
- `model`

It helps separate parser-fixable issues from likely upstream comment problems before opening EdgeTX PRs.
