# lvgl.textEdit

`lvgl.textEdit(params)`

Create an LVGL text edit control.

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
- Text edit keys:
 * `x`, `y`, `w`, `h`
 * `value` (string)
 * `length` (number)
 * `set` (function)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
