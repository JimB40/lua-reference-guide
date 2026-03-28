# lvgl.clear

`lvgl.clear([obj])`

Clear all LVGL content created by the current script, or clear the children of a specific object.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `obj` | no | `table` | LVGL object to clear instead of clearing the whole script UI |

## Returns

None.

## Availability

- Since: `3.0.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
