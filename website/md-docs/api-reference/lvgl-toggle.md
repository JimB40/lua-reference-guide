# lvgl.toggle

`lvgl.toggle(params)`

Create an LVGL toggle control.

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
- Toggle keys:
 * `x`, `y`
 * `get` (function)
 * `set` (function)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
