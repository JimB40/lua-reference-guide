# lvgl.build

`lvgl.build(definition)`

Build multiple LVGL objects from a Lua table definition and return the created object references.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `definition` | yes | `table` | array-like table of object definition tables |

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `table` | array of created LVGL objects |

## Availability

- Since: `3.0.0`
- Radio support: `color-lcd`

## Notes

- Object definitions commonly use:
 * `type` (string or number) object type
 * `name` (string) optional name used in the returned reference table
 * `children` (table) nested child object definitions for containers
- Most objects also accept common keys such as:
 * `x`, `y`, `w`, `h`
 * `color`, `opacity`
 * `visible` returning a boolean
 * `pos` returning x and y
 * `size` returning width and height

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
