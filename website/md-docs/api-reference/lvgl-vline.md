# lvgl.vline

`lvgl.vline(params)`

Create an LVGL vertical line object.

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

- Common keys:
 * `x`, `y`, `w`, `h`
 * `color`, `opacity`, `visible`
- Vertical line keys:
 * `rounded` (boolean)
 * `dashGap` (number)
 * `dashWidth` (number)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
