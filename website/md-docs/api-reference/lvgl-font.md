# lvgl.font

`lvgl.font([parent], {settings})`

`parent:font({settings})`

Display a button showing a font name. When tapped a popup menu is opened to choose a font from. Uses EdgeTX styling.

## Parameters

See the API page for parameter description and common settings.

Choice specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| get | Function | Called to get the currently selected font, when the popup menu is first opened. | nil |
| set | Function | Called when the user taps on a font button.; The function is passed a single parameter wihich is the selected font value. | nil |
| active | Function | Set the enabled / disabled state. Return value must be a boolean - true to enable the control, false to disable. | nil |

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
