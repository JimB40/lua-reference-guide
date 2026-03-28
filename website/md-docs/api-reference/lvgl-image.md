# lvgl.image

`lvgl.image(params)`

Create an LVGL image object.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `params` | yes | `table` | object definition table |

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `table` | created LVGL object |

## Availability

- Since: `3.0.0`
- Radio support: `color-lcd`

## Notes

- Image keys:
 * `x`, `y`, `w`, `h`
 * `file` (string or function)
 * `fill` (boolean)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
