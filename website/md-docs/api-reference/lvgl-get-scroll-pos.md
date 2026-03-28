# lvgl.getScrollPos

`lvgl.getScrollPos(obj)`

Return the current scroll position of an LVGL object.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `obj` | yes | `table` | LVGL object previously created by the `lvgl` library |

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `x,y` | `integer` | horizontal and vertical scroll offsets |

## Availability

- Since: `3.0.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
