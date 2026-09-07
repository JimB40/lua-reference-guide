# lvgl.numberEdit

`lvgl.numberEdit([parent], {settings})`

`parent:numberEdit({settings})`

Add a number edit box using the EdgeTX style.

## Parameters

See the API page for parameter description and common settings.

Number edit specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| get | Function | Called to get the current value to display. | nil |
| set | Function | Called when the user interacts with the control.; The function is passed the new value.; Note: this function is called for every change in the number value. To only get the final value when the user is finished editing use the 'edited' function. | nil |
| edited; Added in 2.11.5 | Function | Called after the user has finished editing the value.; The function is passed the final edited value. | nil |
| active | Function | Set the enabled / disabled state. Return value must be a boolean - true to enable the control, false to disable. | nil |
| min | Number | Sets the minimum allowed value. | -1024 |
| max | Number | Sets the maximum allowed value. | 1024 |
| display | Function | Can be used to override how the value is displayed in the control. The function is passed the current value as a parameter and must return a string to display the value. | nil |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
