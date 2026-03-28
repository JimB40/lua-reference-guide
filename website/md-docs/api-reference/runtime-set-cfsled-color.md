# setCFSLedColor

`setCFSLedColor(id, rvalue, bvalue, cvalue)`

Overrides the LED color for a custom function switch

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `id` | yes | `string` | identifying a custom function switch name |
| `rvalue` | yes | `interger` | value of red channel |
| `bvalue` | yes | `interger` | value of green channel |
| `cvalue` | yes | `interger` | value of blue channel |

## Returns

None.

## Availability

- Since: `3.0.0`
- Radio support: `all`

## Source

`radio/src/lua/api_general.cpp`
