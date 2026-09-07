# lvgl.button

`lvgl.button([parent], {settings})`

`parent:button({settings})`

Add a text button using the EdgeTX style.

## Parameters

See the API page for parameter description and common settings.

Button specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| text | String or Function | Text to be displayed in the button. | Empty string |
| press | Function | Called when the user taps on the button, after the user releases ENTER key or stops touching the screen.; Note: the 'press' function may optionally return a integer value. If the return value if non-zero then the button will be displayed in the 'checked' state. | nil |
| longpress | Function | Called when the user long taps on the button.; Note: the 'longpress' function may optionally return a integer value. If the return value if non-zero then the button will be displayed in the 'checked' state. | nil |
| active | Function | Set the enabled / disabled state. Return value must be a boolean - true to enable the control, false to disable. | nil |
| checked | Boolean | Sets the initial 'checked' state for the button. If true the button will display in the checked state. Can be updated with the set() function. | false |
| color | Color or Function | Sets the background color for the button. | EdgeTx button style color - PRIMARY2 theme color. |
| textColor | Color or Function | Sets the text color for the button label. | EdgeTx button style color - SECONDARY1 theme color. |
| cornerRadius | Number | Sets the radius for the corners of the button. | EdgeTx button style radius. |
| font | Font value or Function | Sets the font size.; E.G.:; - MIDSIZE; - DBLSIZE | STDSIZE |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
