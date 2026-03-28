# lvgl.page

`lvgl.page(params)`

Create an LVGL page container.

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

- Available only in standalone scripts and fullscreen widgets.
- Page keys:
 * `title`, `subtitle`, `icon`
 * `back`, `menu`
 * `backButton` (boolean)
 * `prevButton`, `nextButton` tables with `press` and `active`
 * `align`
 * `scrollBar`, `scrollDir`, `scrollTo`, `scrolled`
 * `children`

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
