# lvgl.slider

`lvgl.slider(params)`

Create an LVGL slider control.

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
- Slider keys:
 * `x`, `y`, `w`
 * `color`
 * `min`, `max`
 * `get`, `set`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
