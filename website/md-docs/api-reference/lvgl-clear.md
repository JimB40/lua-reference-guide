# lvgl.clear

`lvgl.clear([parent])`

`parent:clear()`

Delete LVGL objects.

## Parameters

See the API page for parameter description and common settings.

The 'settings' parameter is not used.

### Notes

If 'parent' is not set then the entire script UI is deleted. Use this when the UI changes dramatically (e.g. widget size changes).

When the 'parent' parameter is defined, only the child LVGL objects within the parent are deleted. Use this to remove and replace a specific set of objects.

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
