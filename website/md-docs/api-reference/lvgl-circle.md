# lvgl.circle

`lvgl.circle([parent], {settings})`

`parent:circle({settings})`

Display a solid or filled circle.

## Parameters

See the API page for parameter description and common settings.

Note: 'w', 'h' and 'size' should not be used with lvgl.circle. Use 'radius' instead.

Circle specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| thickness | Number | Sets the width of the line used to draw the arc. | 1 |
| filled | Boolean | If true the circle is filled with the 'color'value | false |
| radius | Number or Function | Sets the radius of the arc | 0 |
| opacity | Number or Function | Sets the opacity.; Note: range is 0 (transparent) to 255 (opaque). | 255 (opaque) |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
