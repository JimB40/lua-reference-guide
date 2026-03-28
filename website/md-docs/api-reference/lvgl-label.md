# lvgl.label

`lvgl.label(params)`

Create an LVGL label object.

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
 * `color`, `opacity`
 * `visible`, `pos`, `size`
- Label keys:
 * `text` (string or function)
 * `font` (number or function)
 * `align` (number or function)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
