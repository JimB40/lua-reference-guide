# lvgl.verticalSlider

`lvgl.verticalSlider(params)`

Create an LVGL vertical slider control.

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
- Vertical slider keys:
 * `x`, `y`, `h`
 * `color`
 * `min`, `max`
 * `get`, `set`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
