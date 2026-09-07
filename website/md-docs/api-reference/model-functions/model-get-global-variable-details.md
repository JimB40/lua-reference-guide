# model.getGlobalVariableDetails

`model.getGlobalVariableDetails(index)`

Returns details about a Global Variable, but not values

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `index` | yes | `integer` | zero based global variable index, use 0 for GV1, 8 for GV9 |

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `table` | details of the global variable: * `name` (string) global variable name  * `min` (number) minimum value  * `max` (number) maximum value  * `prec` (number) precision  * `unit` (number) unit  * `popup` (boolean) show popup - if exists |

## Availability

- Since: `2.11.0`
- Radio support: `all`

## Source

`radio/src/lua/api_model.cpp`
