# lvgl.triangle

`lvgl.triangle([parent], {settings})`

`parent:triangle({settings})`

Display a filled triangle.

## Parameters

See the API page for parameter description and common settings.

The 'x, 'y, 'w' and 'h' settings are not used.

Triangle specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| opacity | Number or Function | Sets the opacity.; Note: range is 0 (transparent) to 255 (opaque) | 255 (opaque) |
| pts | Table or FunctionTable of points. Each point must be a table with two number values ({x, y}) | Defines the points used to draw the triangle. There must be three points. | nil |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Notes

Unlike the line drawing objects, there is no built in triangle drawing in LVGL. The method used to draw triangles is quite simple and does not do any anti-aliasing.

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
