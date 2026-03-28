# lvgl.arc

`lvgl.arc(params)`

Create an LVGL arc object.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `params` | yes | `table` | object definition table |

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `table` | created LVGL object |

## Availability

- Since: `3.0.0`
- Radio support: `color-lcd`

## Notes

- Arc keys:
 * `radius` (number or function)
 * `rounded` (boolean)
 * `thickness` (number)
 * `startAngle`, `endAngle`
 * `bgColor`, `bgOpacity`
 * `bgStartAngle`, `bgEndAngle`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
