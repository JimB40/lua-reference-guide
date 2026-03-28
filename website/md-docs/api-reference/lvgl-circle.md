# lvgl.circle

`lvgl.circle(params)`

Create an LVGL circle object.

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

- Common bordered-object keys:
 * `color`, `opacity`, `visible`
 * `thickness` (number)
 * `filled` (boolean or function)
 * `radius` (number or function)
 * `flexFlow`, `flexPad`, `borderPad`
- Circle position uses the center point with `radius`.

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
