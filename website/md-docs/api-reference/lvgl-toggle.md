# lvgl.toggle

`lvgl.toggle([parent], {settings})`

`parent:toggle({settings})`

Add a toggle switch using the EdgeTX style.

## Parameters

See the API page for parameter description and common settings.

Toggle specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| get | Function | Called to get the curent state of the toggle switch.; Must return a boolean or a number value. 0 or false if the toggle switch is off, 1 or true if it should be on. | nil |
| set | Function | Called when the user interacts with the toggle switch.; The function is passed a single number parameter - 0 if the toggle switch is off, 1 if it is on. | nil |
| active | Function | Set the enabled / disabled state. Return value must be a boolean - true to enable the control, false to disable. | nil |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
