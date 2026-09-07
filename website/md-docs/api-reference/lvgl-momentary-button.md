# lvgl.momentaryButton

`lvgl.momentaryButton([parent], {settings})`

`parent:momentaryButton({settings})`

Add a momentary text button using the EdgeTX style.

## Parameters

See the API page for parameter description and common settings.

Button specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| text | String or Function | Text to be displayed in the button. | Empty string |
| press | Function | Called when the user first taps on the button. | nil |
| release | Function | Called when the user releases the ENTER key or stops touching the screen. | nil |
| active | Function | Set the enabled / disabled state. Return value must be a boolean - true to enable the control, false to disable. | nil |
| color | Color or Function | Sets the background color for the button. | EdgeTx button style color - PRIMARY2 theme color. |
| textColor | Color or Function | Sets the text color for the button label. | EdgeTx button style color - SECONDARY1 theme color. |
| cornerRadius | Number | Sets the radius for the corners of the button. | EdgeTx button style radius. |
| font | Font value or Function | Sets the font size.; E.G.:; - MIDSIZE; - DBLSIZE | STDSIZE |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Notes

Unlike the standard button the press function is called immediately when the user taps on the screen or presses the ENTER key when the momentary button is selected. The button shows in the 'checked' state until the user releases the ENTER key or stops touching the screen.

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
