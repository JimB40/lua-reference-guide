# lvgl.dialog

`lvgl.dialog({settings})`

Display a dialog box.

## Parameters

The lvgl.dialog function uses only the settings shown below. The common settings shown on the API page are not used.

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| title | String | Text to be displayed in the header of the dialog box. | Empty string |
| close | Function | Called when the dialog box is closed. | nil |
| flexFlow | Flow type - lvgl.FLOW_COLUMN or lvgl.FLOW_ROW | Enable flex layout for this box. | not used |
| flexPad | Number | When flex layout is used, set the padding between rows or columns.; Recommended to use the lvgl.PAD_xxx values. | 0 |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
