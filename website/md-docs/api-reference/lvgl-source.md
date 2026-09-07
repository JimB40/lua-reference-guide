# lvgl.source

`lvgl.source([parent], {settings})`

`parent:source({settings})`

Display a button showing a source name. When tapped the switch select popup is opened to allow the user to select a new source. Uses EdgeTX styling.

## Parameters

See the API page for parameter description and common settings.

Source specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| get | Function | Called to get the currently selected source, when the popup menu is first opened. | nil |
| set | Function | Called when the user taps on an source button.; The function is passed a single parameter wihich is the selected source value. | nil |
| filter | Number | Controls what source types can be chosen by the user.; The lvgl.SRC_xxx constants can be combined to create a custom filter to control which source the user can select. | lvgl.SRC_ALL |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Notes

The popup menu is closed when the user selects an item, and the 'set' function is called.

If the user taps outside the menu or the RTN key is pressed, the popup menu is closed and the 'set' function is not called.

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
