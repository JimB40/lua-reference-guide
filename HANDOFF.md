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

## Known Branch Divergence — Nested API Reference URLs

`edgetx_2.12` currently has two commits (`0988101a`, `67ba1431`) that fixed
broken links by hand-editing already-generated `api-reference/*.md` files
directly, because the real generator fix wasn't available on this branch at
the time. That is exactly the kind of hand-edit the new generated-file
marker (see `docs-system/README.md`) exists to make visible going forward.

The real fix already exists, unmerged, on `origin/docs/migrate-nested-topic-urls`
(diverged from `7c3989a4`; commits `32f747e8`, `7538adb6`, `4ce760cd`,
`9931ac73`, `af867548`). It restructures the entire API reference from flat
paths (`api-reference/lcd-draw-annulus.md`) to nested-by-topic paths
(`api-reference/display-lcd/lcd-draw-annulus.md`) and re-extracts against a
corrected 2.12 firmware ref — 333 files changed. That's a URL-scheme
migration with real link/SEO implications, not a drop-in fix, so it has not
been merged or built on as part of the generated-file guardrail work.

This is a decision for whoever picks it up next: merge the nested-URL
restructure (and update anything that links to the current flat paths), or
abandon it and re-derive a smaller link-only fix against the current flat
layout. Either way, `docs-system/generated/luals/` and
`website/md-docs/assets/luals/` (kept in sync by `build` as of the pipeline
fix above) won't fully reconcile their *content* — only their write
mechanism is fixed — until a real extract+build cycle runs against whichever
firmware ref gets decided on here.

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
