# lvgl.triangle

`lvgl.triangle(params)`

Create an LVGL triangle object.

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

- Triangle keys:
 * `color`, `opacity`, `visible`
 * `pts` (table with three `{x, y}` points or function returning that table)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
