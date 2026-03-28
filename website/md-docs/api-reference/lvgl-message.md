# lvgl.message

`lvgl.message(params)`

Show a message dialog using the LVGL UI layer.

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

- Message dialog keys:
 * `title` (string or function)
 * `message` (string)
 * `details` (string)

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
