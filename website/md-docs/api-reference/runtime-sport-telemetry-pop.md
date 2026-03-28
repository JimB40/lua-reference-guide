# sportTelemetryPop

`sportTelemetryPop()`

Pop a received SPORT telemetry packet from the queue.

## Parameters

None.

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `nil` | queue does not contain any (or enough) bytes to form a whole packet |
| `sensor_id` | `integer` |  |
| `frame_id` | `integer` |  |
| `data_id` | `integer` |  |
| `value` | `integer` |  |

## Availability

- Since: `2.2.0`
- Radio support: `all`

## Source

`radio/src/lua/api_general.cpp`
