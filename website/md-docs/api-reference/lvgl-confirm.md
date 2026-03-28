# lvgl.confirm

`lvgl.confirm(params)`

Show a confirmation dialog using the LVGL UI layer.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `params` | yes | `table` | dialog definition table |

## Returns

None.

## Availability

- Since: `3.0.0`
- Radio support: `color-lcd`

## Notes

- Confirm dialog keys:
 * `title` (string or function)
 * `message` (string)
 * `confirm` (function)
 * `cancel` (function)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
