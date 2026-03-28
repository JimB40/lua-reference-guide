# lvgl.timer

`lvgl.timer(params)`

Create an LVGL timer picker control.

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

- Available only in standalone scripts and fullscreen widgets.
- Timer picker keys:
 * `x`, `y`, `w`, `h`
 * `get`, `set`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
