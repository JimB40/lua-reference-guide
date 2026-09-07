# lvgl.arc

`lvgl.arc([parent], {settings})`

`parent:arc({settings})`

Display an arc.

## Parameters

See the API page for parameter description and common settings.

Note: 'w', 'h' and 'size' should not be used with lvgl.arc. Use 'radius' instead.

Arc specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| thickness | Number | Sets the width of the line used to draw the arc. | 1 |
| radius | Number or Function | Sets the radius of the arc | 0 |
| startAngle | Number or Function | Sets the starting angle or the arc. Measured in degrees - 0 - 360.; 0 is to the right (3 o'clock). | 0 |
| endAngle | Number or Function | Sets the ending angle for the arc. | 360 |
| opacity | Number or Function | Sets the opacity.; Note: range is 0 (transparent) to 255 (opaque). | 255 (opaque) |
| rounded | Boolean | If true makes the ends of the arc round. | false |
| bgColor | Color or Function | Sets the color of the background arc. | not used |
| bgOpacity | Number or Function | Sets the opacity of the background arc. | 0 (not visible) |
| bgStartAngle | Number or Function | Sets the starting angle or the background arc. Measured in degrees - 0 - 360.; 0 is to the right (3 o'clock). | 0 |
| bgEndAngle | Number or Function | Sets the ending angle for the arc. | 360 |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
