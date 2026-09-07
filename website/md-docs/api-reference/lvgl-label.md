# lvgl.label

`lvgl.label([parent], {settings})`

`parent:label({settings})`

Display a text label.

## Parameters

See the API page for parameter description and common settings.

Label specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| text | String or Function | Set the text to be displayed on the label | Empty string |
| font | Font value or Function | Sets the font size.; E.G.:; - MIDSIZE; - DBLSIZE | STDSIZE |
| align | Text alignment value or function | Sets the justification for the text.; E.G.:; - RIGHT; - VCENTER; Notes:RIGHT and CENTER alignment require the width for the label to be set.; LEFT, RIGHT and CENTER will align the text horizontally within the label bounding box (x,y,w,h).; VCENTER, VTOP and VBOTTOM will align the label bounding box vertically within the parent object. | LEFT |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
