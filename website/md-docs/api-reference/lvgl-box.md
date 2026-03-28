# lvgl.box

`lvgl.box(params)`

Create an LVGL box container.

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

- Box keys:
 * `x`, `y`, `w`, `h`
 * `color`, `opacity`, `visible`
 * `align`
 * `flexFlow`, `flexPad`, `borderPad`
 * `scrollBar`, `scrollDir`, `scrollTo`, `scrolled`
 * `children`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
