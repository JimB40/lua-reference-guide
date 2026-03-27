# getRSSI

`getRSSI()`

Get RSSI value as well as low and critical RSSI alarm levels (in dB)

## Parameters

None.

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `rssi` | `integer` | RSSI value (0 if no link) |
| `alarm_low` | `integer` | Configured low RSSI alarm level |
| `alarm_crit` | `integer` | Configured critical RSSI alarm level |

## Availability

- Since: `2.2.0`
- Radio support: `all`

## Source

`radio/src/lua/api_general.cpp`
