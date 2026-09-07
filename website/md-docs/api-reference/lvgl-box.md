# lvgl.box

`lvgl.box([parent], {settings})`

`parent:box({settings})`

Create a container for managing object layout.

## Parameters

See the API page for parameter description and common settings.

Box specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| flexFlow | Flow type - lvgl.FLOW_COLUMN or lvgl.FLOW_ROW | Enable flex layout for this box. | not used |
| flexPad | Number | When flex layout is used, set the padding between rows or columns.; Recommended to use the lvgl.PAD_xxx values. | PAD_OUTLINE |
| scrollBar | Boolean | Enables or disables scroll bars. Set to false to disable scroll bars. | true |
| scrollDir | Scroll type - lvgl.SCROLL_xx | Sets the allowed scrolling directions if child objects extend beyond the box boundaries.; Only valid for stand alone scripts. | lvgl.SCROLL_ALL |
| scrolled | Function | Called when the box content is scrolled. Passed two parameters 'x', and 'y' which are the current scroll position of the box window. | nil |
| scrollTo | Function | Function to override the box scroll position. Must return two values, 'x' and 'y' which are the position to scroll the box window to. | nil |
| align; (Added in 2.11.4) | Alignment type:; - LEFT, RIGHT, CENTER, VTOP, VBOTTOM. VCENTER | Sets the alignment when using flex layouts.; NOTE: If the box content is larger than the box size (requiring a scroll bar), then do not use the alignment options in the same direction as the scroll. If the flex layout is FLOW_COLUMN and the box has a vertical scroll bar then VCENTER and VBOTTOM alignment will not work. If the flex layout is FLOW_ROW and the box has a horizontal scroll bar then CENTER and RIGHT alignment will not work. | CENTER \| VTOP |
| borderPad; (Added in 2.11.5) | Number or Table | Controls the border padding around the edges of the container.; Can be a number which sets uniform padding on all side. Or a table to set each side separately - e.g. {left=?, right=?, top=?, bottom=?} | PAD_OUTLINE If flexFlow is set, otherwise 0. |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Notes

The box object is a helper for managing screen layouts.

When adding controls such as button, toggle, textEdit etc, be sure to leave enough space for the focus outline around the control.

When used in a stand alone tool script, the box will automatically add scroll bars if any child objects are placed outside of the box boundaries. For widgets, child objects outside the box bounds will be clipped.

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
