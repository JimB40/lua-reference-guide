# lvgl.qrcode

`lvgl.qrcode([parent], {settings})`

`parent:qrcode({settings})`

Display a QR code.

## Parameters

See the API page for parameter description and common settings.

Note: 'w' and 'h' should be set to the same value for a QR code.

QR code specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| data | String | Sets the URL or other content to be enccoded in the QR code. | Empty string |
| bgColor | Color | Sets the background color for the QR code image. | COLOR_THEME_SECONDARY3 |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
