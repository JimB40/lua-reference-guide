# lvgl.set

`lvgl.set([parent], {settings})`

`parent:set({settings})`

Update the settings for an LVGL object.

## Parameters

See the API page for parameter description and common settings.

See the function description pages for settings specific to each LVGL object type.

### Notes

This can be used to update one or more settings for an existing LVGL object. The 'settings' parameter should contain values relevant to the type of object being created.

This can be used to update settings that do not support being controlled by functions (e.g. rectangle thickness).

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
