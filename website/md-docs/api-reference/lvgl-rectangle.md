# lvgl.rectangle

`lvgl.rectangle(params)`

Create an LVGL rectangle object.

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

- Common keys:
 * `x`, `y`, `w`, `h`
 * `color`, `opacity`, `visible`
- Rectangle keys:
 * `rounded` (number)
 * `thickness` (number)
 * `filled` (boolean or function)
 * `flexFlow`, `flexPad`, `borderPad`
 * `align`, `scrollBar`, `scrollDir`, `scrollTo`, `scrolled`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
