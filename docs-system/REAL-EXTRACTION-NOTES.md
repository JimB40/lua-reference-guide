# Real Extraction Notes

This note captures the first extraction run against a real local EdgeTX checkout, so the migration work can continue from a concrete baseline instead of sample data only.

## Extraction Baseline (updated)

The original baseline below was extracted from a development branch, not an actual release branch. Since this site targets the 2.12 documentation set, extraction was re-run against the real `2.12` release branch:

- EdgeTX source: `EdgeTX/edgetx`
- Lua source dir: `radio/src/lua`
- Extracted from branch `2.12`
- Extracted from commit `0e3b4115c3` (includes a luadoc-annotation-style normalization fix landed upstream: EdgeTX/edgetx#7769)
- Docs version used for the local run: `2.12`

Diff against the previous (`cpm-tlm-sim-fix`) baseline:

- **Added** (now parse correctly since the upstream annotation-style fix): `screenshot`, `model.getGlobalVariableDetails`, `model.setGlobalVariableDetails`
- **Removed** (exist on `main` but not on real `2.12` firmware — the previous baseline was extracted from a branch that had them, which would have misrepresented them as 2.12 APIs): `model.getSwitchWarning`, `model.setSwitchWarning`
- New item count: `153` (was `152`)

### Previous baseline (superseded, kept for history)

- EdgeTX source: `/Users/jimb40/GitHub/JimB40/edgetx`
- Lua source dir: `radio/src/lua`
- Extracted from branch `cpm-tlm-sim-fix`
- Extracted from commit `363a6e4f9`
- Docs version used for the local run: `local-dev`

## Current Results

- Extracted API items: `153`
- Modules discovered:
  - `runtime`: `73`
  - `lcd`: `39`
  - `model`: `37`
  - `Bitmap`: `4`

Generated artifacts:

- API model: `docs-system/generated/api-model.local.json`
- Quality report: `docs-system/generated/golden-module-quality.json`
- Markdown preview: `docs-system/generated/site-preview/`
- LuaLS preview: `docs-system/generated/luals-preview/`

## Quality Snapshot

From the current quality report:

- `runtime`: `19` unknown parameter types, `16` unknown return types
- `lcd`: `7` unknown parameter types, `0` unknown return types
- `model`: `5` unknown parameter types, `0` unknown return types
- backlog entries recorded: `30`

## What The Prototype Already Proves

- The extractor can parse the current upstream `/*luadoc */` format across the real Lua source tree.
- The normalized model is good enough to produce large-scale Markdown and LuaLS previews.
- The remaining quality issues are now mostly annotation-quality gaps rather than a missing pipeline.

## First High-Value Cleanup Targets

These look like the best next targets because they affect common APIs and surface directly in generated docs and LuaLS output.

### Runtime return typing

Examples:

- `getRSSI()` returns three values, but all currently resolve to `unknown`
- `getSourceValue()` still emits unknown return types for freshness/current-state values
- `popupConfirmation`, `popupInput`, and `popupWarning` have weak return typing

### Structured table parameters

Examples:

- `model.setModule(value)`
- `model.setInfo(value)`
- `model.setTimer(value)`

These are likely better solved by improving upstream annotation detail rather than only parser heuristics.

### LCD optional color/flag parameters

Examples:

- `lcd.drawText(..., inversColor)`
- `lcd.drawTimer(...)`
- `lcd.drawNumber(...)`

Some of these may be parser-fixable if we add better heuristics for color and flag-related parameter descriptions.

## Recommendation For The Next Pass

1. Focus on `runtime`, especially frequently used functions with `unknown` returns.
2. Improve upstream `/*luadoc */` comments first where the comments are underspecified.
3. Add parser heuristics only where the source comments are already clear and structured enough to support them.
4. Re-run `extract`, `report`, and `build` after each focused annotation batch to measure improvement.

## URL scheme fix and full rebuild (this pass)

`build`'s page-path functions (`page_name_for_item`, `group_page_name`, `module_page_name`, `review_page_name_for_item`) computed paths that didn't match how the live site was actually laid out on disk — `build` appears to have only ever been pointed at the isolated `docs-system/generated/site-preview/` scratch directory described above, never at `website/md-docs/` itself, so the code and the live content drifted apart. Fixed all four functions to match reality for hub/module/review pages (flat), and moved individual item pages to a nested `api-reference/<topic-group>/<item>.md` scheme (dropping the internal-only "runtime" pseudo-module prefix from bare functions' filenames, since it isn't a real Lua namespace) to match both the official EdgeTX/lua-reference-guide guide's existing convention and the pipeline code's own original intent. `page_href` (used for the hub pages' raw-HTML `<a>` card links, which MkDocs does not auto-correct the way it does markdown-syntax links) had a related bug: it didn't account for a flat page's own rendered URL being one directory level deeper than its file location under MkDocs' `use_directory_urls` default — fixed.

Also found and fixed a real group-taxonomy drift: `docs-system/api-groups.json` still had "hardware" (nav expects "radio-hardware") and one merged "Variables" group with 18 ids, even though the live `sources.md`/`switches.md`/`variables.md` pages had already been hand-split three ways (matching HANDOFF.md's stated "Sources, Switches, and Variables were separated properly"). Re-split the group config to match the already-live 3-way split, renamed the hardware group's slug to match nav, and wired the "Inputs" (`key-inputs`) group into nav — it had a real 5-item group defined but no nav entry at all.

**Known recurring regression to watch for**: several upstream firmware `/*luadoc*/` comments (in `lcd.getColor`'s neighbors and a few `runtime.*` functions) still contain broken markdown-style links (a mangled GitBook artifact reference, and dead `../appendix/units.html` / `../../part_vii_-_appendix/fonts.md` references) baked into the raw comment text itself. A prior pass (PR #2) fixed these in the *generated* `.d.lua`/`.md` output, but since the fix never landed in the upstream firmware source, re-running `extract`+`build` regenerates the LuaLS stub files straight from the still-broken raw text and silently reintroduces the same broken links. Fixed again in this pass, but this will keep recurring on every future re-extraction until a small upstream EdgeTX firmware PR fixes the actual `/*luadoc*/` comments (same pattern as the annotation-style fix in EdgeTX/edgetx#7769).
