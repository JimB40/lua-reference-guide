# lvgl.menu

`lvgl.menu(params)`

Show an LVGL menu popup.

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

- Menu keys:
 * `title` (string or function)
 * `values` (table of strings)
 * `get`, `set`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
