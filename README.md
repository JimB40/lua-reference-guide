# EdgeTX LuaDoc

This repository contains the EdgeTX Lua documentation site.

The live documentation source for the current site is in [website](website).

## Repo Layout

- `website/`: MkDocs content, theme assets, and navigation for the current docs site
- `docs-system/`: extraction contracts, overlays, generated artifacts, and pipeline notes
- `tools/`: local build and generation helpers

## Local Preview

```sh
uv run mkdocs serve -a 127.0.0.1:8014
```

## Review Workbench

For live API review pages with saved type decisions, run the local decision server in a second terminal:

```sh
uv run python3 tools/review_decision_server.py
```

Then open the preview at `http://127.0.0.1:8014/` and use the API review dashboard under the site navigation.

## Contributing

- Edit the current docs under `website/`
- Keep generated or pipeline-specific notes under `docs-system/`
- Use the site at `http://127.0.0.1:8014/` for review during local work
