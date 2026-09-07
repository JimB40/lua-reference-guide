# model.setGlobalVariableDetails

`model.setGlobalVariableDetails(index, params)`

Sets details about a Global Variable, but not values

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `index` | yes | `integer` | zero based global variable index, use 0 for GV1, 8 for GV9 |
| `params` | yes | `table` | see model.getGlobalVariableDetails(index) return format for table format |

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `none` | `unknown` |  |

## Availability

- Since: `2.11.0`
- Radio support: `all`

## Source

`radio/src/lua/api_model.cpp`
