# lvgl.setting

`lvgl.setting(params)`

Create an LVGL setting control.

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
- Setting keys:
 * `x`, `y`, `w`, `h`
 * `title` (string or function)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
