# lvgl.textEdit

`lvgl.textEdit([parent], {settings})`

`parent:textEdit({settings})`

Add a text edit box using the EdgeTX style.

## Parameters

See the API page for parameter description and common settings.

Text edit specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| value | String or Function | Sets the text that the user can edit.; If a function is used then the text can be changed by both the Lua script and the user. | Empty string |
| length | Number | Sets the maximum length of the text that can be edited.; Must be a number between 1 and 128. | 32 |
| set | Function | Called when the user edits the text.; The function has a single parameter which is a string with the edited content. | nil |
| active | Function | Set the enabled / disabled state. Return value must be a boolean - true to enable the control, false to disable. | nil |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
