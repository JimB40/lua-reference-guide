# lvgl.setting

`lvgl.setting([parent], {settings})`

`parent:setting({settings})`

Create a container for managing object layout.

## Parameters

See the API page for parameter description and common settings.

Setting specific settings:

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| title | String or Function; (Function support available in 2.11.6 or later) | Text to be displayed on the left. | Empty string |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Notes

The setting object is designed to manage a single row in a page of user settings. It automatically includes the necesary padding for correctly displaying controls such as toggle, textEdit, button etc.

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
