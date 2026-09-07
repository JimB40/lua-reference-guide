# lvgl.slider

`lvgl.slider([parent], {settings})`

`parent:slider({settings})`

Add a slider using the EdgeTX style.

## Parameters

See the API page for parameter description and common settings.

The size of the slider is set with the 'w' property. The 'h' property is not used.

Slider specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| min | Number | Minimum value for the slider range (left end). | 0 |
| max | Number | Maximum value for the slider range (right end). | 100 |
| get | Function | Called to get the currrent value for the slider knob.; Should rethrn a value between min and max (inclusive). | nil |
| set | Function | Called when the user interacts with the slider and changes the knob position.; The function is passed a single number parameter with the new value. |  |
| active | Function | Set the enabled / disabled state. Return value must be a boolean - true to enable the control, false to disable. | nil |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
