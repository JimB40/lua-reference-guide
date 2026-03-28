# lvgl.button

`lvgl.button(params)`

Create an LVGL text button control.

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
- Button keys:
 * `x`, `y`, `w`, `h`
 * `text`, `font`
 * `color`, `textColor`
 * `cornerRadius` (number)
 * `press` (function)
 * `checked` (boolean)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
