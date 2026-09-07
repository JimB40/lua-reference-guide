# Display LVGL

LVGL bindings for Lua scripts on radios with color display.

This page is temporarily out of date. The firmware source for the LVGL Lua bindings (`radio/src/lua/api_colorlcd_lvgl.cpp`) currently has no `/*luadoc*/` annotations at all, so this site's extraction pipeline has nothing to generate LVGL documentation from yet. A firmware PR adding proper source annotations for every LVGL function is in progress and expected to land soon; once it does, this page and the individual LVGL function pages will be regenerated directly from source, the same way every other page on this site is.

Function-level LVGL pages are not wired into navigation here in the meantime -- rather than hand-maintain a full copy of LVGL documentation that's about to be replaced by the source-generated version, this page is left as a placeholder until that firmware work lands.

For guidance on enabling LVGL in scripts and typical usage patterns, see [Using LVGL Library](../programming/core-concepts/lvgl-for-lua.md). For layout and picker constants, see [LVGL Constants](../api-overview/constants/lvgl-constants.md).
