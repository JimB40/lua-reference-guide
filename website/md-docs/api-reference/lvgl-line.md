# lvgl.line

`lvgl.line(params)`

Create an LVGL line object.

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

- Line keys:
 * `color`, `opacity`, `visible`
 * `rounded` (boolean)
 * `thickness` (number)
 * `pts` (table of `{x, y}` points or function returning that table)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
