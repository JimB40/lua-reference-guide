# lvgl.getContext

`lvgl.getContext()`

For a widget, returns the local instance table created (and returned from) the script 'create()' function.

## Parameters

The function has no parameters.

## Returns

Widget scripts return a table of data local to the instance of the script from the script 'create()' function. This function retrieves this table for use in other functions.

Always returns nil for stand alone tool scripts.

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
