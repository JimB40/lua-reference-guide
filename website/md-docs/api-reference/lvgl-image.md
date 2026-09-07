# lvgl.image

`lvgl.image([parent], {settings})`

`parent:image({settings})`

Display an image. The image will be centered in the frame (x, y, w, h). Images can be scaled to either fit entirely within the frame or completely fill the frame.

## Parameters

See the API page for parameter description and common settings.

Image specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| file | String | File name of the image to display. Must include full path to image file on the SD card. | Empty string |
| fill | Boolean | If true the image is scaled to completely fill the frame. The image may be cropped.; If false it is scaled to fit entirely in the frame. The result may have empty borders. | false |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
