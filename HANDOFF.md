# EdgeTX LuaDoc Handoff

## Current Status

The docs structure is in a much better state than at the start of this session.

The biggest completed improvements are:

- top-level navigation was simplified and made more user-facing
- `API Overview` and `API Reference` now have clearer responsibilities
- `Sources`, `Switches`, and `Variables` were separated properly
- `Radio Hardware` was consolidated as a single group
- telemetry-related queue functions were moved under `Telemetry`
- RF-specific functions such as `getRAS` and `multiBuffer` remain under `RF module`
- several misplaced functions were moved into more natural groups:
  - `getFlightMode` -> `Model Functions`
  - `getOutputValue` -> `Model Functions`
  - `getStickMode` -> `Radio Hardware`
  - `getTrainerStatus` -> `Radio Hardware`

The current local preview port in use is:

- `http://127.0.0.1:8014/`

There are now two configs: `mkdocs.yml` (public/production, what actually
ships) and `mkdocs.dev.yml` (internal, adds back the Migration section,
per-module dashboards, and the API Review Dashboard). Use
`mkdocs serve -f mkdocs.dev.yml -a 127.0.0.1:8014` to see the full internal
site; see README.md for details.

## Navigation Decisions Locked In

These decisions were made intentionally and should be treated as the current baseline:

- `EdgeTX LuaDoc` is the root docs identity
- `API Overview` is conceptual and reference context
- `API Reference` is the user-facing API grouping area
- `Programming` is for coding/how-to guidance
- `Radios` is a separate top-level group
- `Migration / Update` remains separate from user docs

Within `API Reference`, the grouped structure is now closer to user language:

- `Audio-Sound`
- `Display LCD`
- `Display LVGL`
- `Filesystem`
- `Lua Scripts`
- `Model Functions`
- `Radio Hardware`
- `RF module`
- `Serial Ports`
- `Sources`
- `Switches`
- `System`
- `Telemetry`
- `Time`
- `Variables`

## What Still Needs Follow-Up

There is still polish work left, but it is mostly refinement instead of major structural uncertainty:

- fix older broken links carried over from legacy content
- improve weak placeholder summaries such as `Needs summary review`
- continue wording cleanup toward consistent user-facing language
- verify a few remaining edge-case function placements as they come up

## Resolved: Nested API Reference URLs

`api-reference/` is now nested by topic group (e.g.
`api-reference/display-lcd/lcd-draw-annulus.md`) instead of flat
(`api-reference/lcd-draw-annulus.md`). This replaces the two hand-patch
commits (`0988101a`, `67ba1431`) that fixed broken links by editing
already-generated files directly — the underlying page-path generation bug
in `tools/docs_pipeline.py` (`page_name_for_item`, `group_page_name`,
`module_page_name`, `page_href`, plus a new `nested_item_slug`/
`scoped_symbol_parts` pair) is fixed at the source instead.

This was ported and reworked directly onto `edgetx_2.12` from the
now-superseded `origin/docs/migrate-nested-topic-urls` branch (which had
stalled before the generated-file marker and dual-LuaLS-output work
landed) rather than merged — that branch is deleted. Along with the path
fix: `docs-system/api-groups.json`'s taxonomy was reconciled to match the
live nav (`hardware` → `radio-hardware`, the old merged `Variables` group
split into `Sources`/`Switches`/`Variables` to match the already-split live
pages), and a new `Inputs` nav entry was added for the previously-unwired
`key-inputs` group. `docs-system/generated/luals/` and
`website/md-docs/assets/luals/` are now both written by the same `build`
run (`--luals-output` takes multiple directories) and stay in sync.

Extracted fresh from `EdgeTX/edgetx` branch `2.12` at `16713095a1` — same
153 items as the old stalled branch found, confirmed as still the current
`2.12` tip. `display-lvgl.md` and its 44 `lvgl-*.md` pages are **not**
backed by the real extraction model at all (LVGL has no upstream `/*luadoc
*/` annotations yet — this is a separate, still-open gap, see "Next Major
Step" below) and were deliberately preserved rather than regenerated;
`build`'s zero-item-group guard protects them on future runs as long as
they stay on disk, but a manual `git checkout <prior-commit> --
website/md-docs/api-reference/display-lvgl.md website/md-docs/api-reference/lvgl-*.md`
was needed this time since the whole directory was wiped clean before
rebuilding — don't do a blanket wipe again without restoring those first.

**Follow-up before this site is public**: no redirect plugin exists
(`mkdocs-redirects` or otherwise). Skipped for this rework since the site
isn't live yet, but it does emit a real `sitemap.xml` against
`site_url: https://luadoc.edgetx.org/` — add old-flat-path →
new-nested-path redirects before treating this as the live site, or any
external links/bookmarks/search results made before that point will break.

## Next Major Step

The next major work item should be `Display LVGL`.

Current issue:

- the `Display LVGL` material was created in GitHub docs only
- the relevant syntax and API facts are not properly represented in EdgeTX C++ source comments
- that means the generated pipeline does not yet have a strong source-of-truth base for LVGL APIs

So the next step should be done in two connected parts:

1. bring `Display LVGL` content into the new docs structure properly
2. update the relevant EdgeTX C++ source files so the syntax comments exist in code and can feed generation cleanly

Practical expectation:

- do not treat GitHub-only LVGL docs as the final source of truth
- use them as input material to reconstruct proper upstream comments
- add or improve C++ annotation comments first where possible
- then regenerate or reshape the MkDocs output from that stronger source

## Recommended Next Actions

When work resumes, start here:

1. inventory the current `Display LVGL` docs pages and identify which parts are GitHub-only narrative versus real API syntax
2. find the corresponding EdgeTX C++ implementation files for the LVGL Lua bindings
3. add or normalize upstream-style syntax comments in those C++ files
4. decide how `Display LVGL` should be grouped internally in the docs page
5. regenerate or manually align the MkDocs `Display LVGL` section from the improved source data

## Notes For Resume

- prefer unified styling by copying existing repo patterns exactly
- prefer user-facing labels over internal/developer naming
- keep only one preview server active at a time on `8014`
- if preview looks stale, restart `8014` from the current files before assuming the docs are wrong
- to see Migration/review content locally, serve with `-f mkdocs.dev.yml`; plain `mkdocs serve` uses the public config and won't show it
- upstream C++ comments remain the long-term source of truth for generated API syntax
