# lvgl.set

`lvgl.set(obj, params)`

Update an existing LVGL object from a parameter table.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `obj` | yes | `table` | LVGL object previously created by the `lvgl` library |
| `params` | yes | `table` | updated properties for the object |

## Returns

None.

## Availability

- Since: `3.0.0`
- Radio support: `color-lcd`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
