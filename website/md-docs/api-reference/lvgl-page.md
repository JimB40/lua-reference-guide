# lvgl.page

`lvgl.page({settings})`

Create a page layout for a One-Time script using EdgeTX styling. The page layout has a menu bar at the top with title and sub-title lines as well as a 'back' button in the top left corner.

## Parameters

The lvgl.page function uses only the settings shown below. The common settings shown on the API page are not used.

| Name | Type | Description | Default |
| --- | --- | --- | --- |
| title | String or Function | Text to be displayed as the title in the header of the page.; Title can be a function in 2.11.4 or later. | Empty string |
| subtitle | String or Function | Text to be displayed as the sub-title in the header of the page.; Subtitle can be a function in 2.11.4 or later. | Empty string |
| icon | String | Full path to an image file on the SD card to be displayed as the icon in the 'back' button (top left corner).; If not set then the EdgeTX logo icon is used.; The icon file is a mask image and should be 30x30 pixels in size and be a grey-scale image. White pixels are transparent and black pixels are fully opaque. | Empty string |
| back | Function | Called when the user taps the 'back' button, or presses the RTN key. See button description below | nil |
| menu; (Added in 2.11.4) | Function | Called when the user taps the 'menu' button. See button description below | nil |
| prevButton; (Added in 2.11.4) | Table | If set this will add a 'prev' navigation button to the header.; The table should containg a 'press' function that will be called when the button is tapped.; The table may contiain an 'active' function that sets the enabled / disabled state of the button (return false to disable the button). | nil |
| nextButton; (Added in 2.11.4) | Table | If set this will add a 'next' navigation button to the header.; The table should containg a 'press' function that will be called when the button is tapped.; The table may contiain an 'active' function that sets the enabled / disabled state of the button (return false to disable the button). | nil |
| flexFlow | Flow type - lvgl.FLOW_COLUMN or lvgl.FLOW_ROW | Enable flex layout for this page. | not used |
| flexPad | Number | When flex layout is used, set the padding between rows or columns.; Recommended to use the lvgl.PAD_xxx values. | PAD_OUTLINE |
| scrollBar | Boolean | Sets the allowed scrolling directions if child objects extend beyond the box boundaries. Only valid for stand alone scripts. | true |
| scrollDir | Scroll type - lvgl.SCROLL_xx | Sets the allowed scrolling directions if child objects extend beyond the page boundaries.; Only valid for stand alone scripts. | lvgl.SCROLL_ALL |
| scrolled | Function | Called when the box content is scrolled. Passed two parameters 'x', and 'y' which are the current scroll position of the box window. | nil |
| scrollTo | Function | Function to override the box scroll position. Must return two values, 'x' and 'y' which are the position to scroll the box window to. | nil |
| align; (Added in 2.11.4) | Alignment type:; - LEFT, RIGHT, CENTER, VTOP, VBOTTOM. VCENTER | Sets the alignment when using flex layouts.; NOTE: If the box content is larger than the box size (requiring a scroll bar), then do not use the alignment options in the same direction as the scroll. If the flex layout is FLOW_COLUMN and the box has a vertical scroll bar then VCENTER and VBOTTOM alignment will not work. If the flex layout is FLOW_ROW and the box has a horizontal scroll bar then CENTER and RIGHT alignment will not work | CENTER \| TOP |
| backButton; (Added in 2.11.4) | Boolean | If set to true displays an exit/back button in the header on the right side. | false |
| borderPad; (Added in 2.11.5) | Number or Table | Controls the border padding around the edges of the container.; Can be a number which sets uniform padding on all side. Or a table to set each side separately - e.g. {left=?, right=?, top=?, bottom=?} | PAD_OUTLINE If flexFlow is set, otherwise 0. |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Notes

The 'page' object should be created as the top level LVGL object in the script window, and all other LVGL objects added as children of the 'page' object.

The page will automatically add scroll bars if any child objects are placed outside of the page boundaries.

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
