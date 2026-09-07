# lvgl.line

`lvgl.line([parent], {settings})`

`parent:line({settings})`

Display one or more connected lines.

## Parameters

See the API page for parameter description and common settings.

The 'x, 'y, 'w' and 'h' settings are not used.

Line specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| rounded | Boolean | If true then the end caps of the line are rounded. | false |
| thickness | Number | Sets the thickness of each line segment. | 1 |
| opacity | Number or Function | Sets the opacity.; Note: range is 0 (transparent) to 255 (opaque) | 255 (opaque) |
| pts | Table or FunctionTable of points. Each point must be a table with two number values ({x, y}) | Defines the points used to draw the line segments. There must be at least two points. | nil |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
