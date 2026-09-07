# lvgl.menu

`lvgl.menu({settings})`

Opens a popup menu with multiple options to choose from. Uses EdgeTX styling.

## Parameters

See the API page for parameter description and common settings.

Choice specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| title | String | Text to be displayed in the header of the popup menu. | Empty string |
| values | Table | Must contain a simple table of strings. Each string defines an options shown in the popup menu. | Empty list |
| get | Function | Called to get the index of the currently selected option, when the popup menu is first opened.; Must return a number between 1 and the number of values. | nil |
| set | Function | Called when the user taps on a menu item.; The function is passed a single parameter wihich is the index of the selected item (1 .. number of values) | nil |

## Returns

N/A

## Availability

- Since: `2.11.1`
- Radio support: `color-lcd`

## Notes

The popup menu is closed when the user selects an item, and the 'set' function is called.

If the user taps outside the menu or the RTN key is pressed, the popup menu is closed and the 'set' function is not called.

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
