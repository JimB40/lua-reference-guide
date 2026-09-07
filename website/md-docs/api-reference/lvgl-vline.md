# lvgl.vline

`lvgl.vline([parent], {settings})`

`parent:hline({settings})`

Display a vertical line.

## Parameters

See the API page for parameter description and common settings.

The 'h' setting determinse the length of the line.

The 'w' setting determines the thickness of the line.

Vline specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| rounded | Boolean | If true then the end caps of the line are rounded. | false |
| opacity | Number or Function | Sets the opacity.; Note: range is 0 (transparent) to 255 (opaque) | 255 (opaque) |
| dashGap | Number | Sets the gap size for drawing dashed lines. | 0 |
| dashWidth | Number | Sets the dash size for drawing dashed lines.; Note: both dashGap and dashWidth must be > 0 in order to draw dashed lines. | 0 |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
