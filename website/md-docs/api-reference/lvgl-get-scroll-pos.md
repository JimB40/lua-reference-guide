# lvgl.getScrollPos

`lvgl.getScrollPos(parent)`

`parent:getScrollPos()`

Get the current scroll position (X, Y) of a container object.

## Parameters

None.

### Returns

Two values, X and Y, being the current scroll position of the top left corner of the container.

### Notes

Only applies to container objects such as 'box', 'rectangle' and 'page'.

## Availability

- Since: `2.11.2`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
