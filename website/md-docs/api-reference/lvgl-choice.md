# lvgl.choice

`lvgl.choice([parent], {settings})`

`parent:choice({settings})`

Display a button showing an option value. When tapped a popup menu is opened with multiple options to choose from. Uses EdgeTX styling.

## Parameters

See the API page for parameter description and common settings.

Choice specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| title | String | Text to be displayed in the header of the popup menu. | Empty string |
| values | Table | Must contain a simple table of strings. Each string defines an options shown in the popup menu.; The values table can be changed using the 'lvgl.set' function (in 2.11.6 or later). | Empty list |
| get | Function | Called to get the index of the currently selected option, when the popup menu is first opened.; Must return a number between 1 and the number of values. | nil |
| set | Function | Called when the user taps on a menu item.; The function is passed a single parameter wihich is the index of the selected item (1 .. number of values) | nil |
| active | Function | Set the enabled / disabled state. Return value must be a boolean - true to enable the control, false to disable. | nil |
| filter | Function | Allows the popup menu list to be filtered when the user opens the popup.; This function is called for each option in the values table. The index of the option is passed as a parameter to the function.; If the function returns true the option is shown in the popup, false will hide the option. | nil |
| popupWidth | Number | Set the width of the popup window. | 0 (use default width) |

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
