# lvgl.color

`lvgl.color([parent], {settings})`

`parent:color({settings})`

Display a button showing a color swatch. When tapped the color picker dialog is opened allowing the user to select a new color. Uses EdgeTX styling.

## Parameters

See the API page for parameter description and common settings.

Choice specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| get | Function | Called to get the currently selected color, when the popup menu is first opened. | nil |
| set | Function | Called when the user taps on an color button.; The function is passed a single parameter wihich is the selected color value. | nil |

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
