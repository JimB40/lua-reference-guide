# lvgl.rectangle

`lvgl.rectangle([parent], {settings})`

`parent:rectangle({settings})`

Display a text label.

## Parameters

See the API page for parameter description and common settings.

Rectangle are based on the 'lvgl.box' object so all of the settings from 'lvgl.box' also apply.

Rectangle specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| thickness | Number | Sets the width of the line used to draw the border. | 1 |
| filled | Boolean or Function | If true the rectangle is filled with the 'color' value.; Filled can be a function in 2.11.4 or later. | false |
| rounded | Number | If greater than 0 makes the corners rounded with a radius set this value.; When set to a value greater than 0, must also be >= thickness. | 0 |
| opacity | Number or Function | Sets the opacity.; Note: range is 0 (transparent) to 255 (opaque) | 255 (opaque) |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Notes

When used in a stand alone tool script, the rectangle will automatically add scroll bars if any child objects are placed outside of the rectangle boundaries. For widgtes, child objects outside the rectangle bounds will be clipped.

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
