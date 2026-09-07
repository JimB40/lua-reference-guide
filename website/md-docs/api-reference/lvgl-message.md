# lvgl.message

`lvgl.message({settings})`

Display a message dialog box.

## Parameters

The lvgl.confirm function uses only the settings shown below. The common settings shown on the API page are not used.

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| title | String | Text to be displayed in the header of the dialog box. | Empty string |
| message | String | Text to be displayed in the body of the dialog box | Empty string |
| details | Function | Text to be displayed in the body of the dialog box | Empty string |

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
