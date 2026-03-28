# lvgl.source

`lvgl.source(params)`

Create an LVGL source picker control.

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
- Source picker keys:
 * `x`, `y`, `w`, `h`
 * `get`, `set`
 * `filter` (number mask such as `lvgl.SRC_*`)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
