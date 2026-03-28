# lvgl.switch

`lvgl.switch(params)`

Create an LVGL switch picker control.

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
- Switch picker keys:
 * `x`, `y`, `w`, `h`
 * `get`, `set`
 * `filter` (number mask such as `lvgl.SW_*`)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
