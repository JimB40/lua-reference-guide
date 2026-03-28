# lvgl.numberEdit

`lvgl.numberEdit(params)`

Create an LVGL number edit control.

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
- Number edit keys:
 * `x`, `y`, `w`, `h`
 * `min`, `max`
 * `get`, `set`
 * `display` (function)
 * `edited` (function)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
