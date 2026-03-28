# lvgl.qrcode

`lvgl.qrcode(params)`

Create an LVGL QR code object.

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

- QR code keys:
 * `x`, `y`, `w`
 * `data` (string)
 * `color` (number)
 * `bgColor` (number)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
