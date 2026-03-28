# lvgl.dialog

`lvgl.dialog(params)`

Create an LVGL dialog container.

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
- Dialog keys:
 * `title` (string or function)
 * `w`, `h`
 * `close` (function)
 * `children`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
