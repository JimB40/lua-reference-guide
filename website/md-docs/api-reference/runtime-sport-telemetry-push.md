# sportTelemetryPush

`sportTelemetryPush()`

This functions allows for sending SPORT telemetry data toward the receiver,
and more generally, to anything connected SPORT bus on the receiver or transmitter.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `sensorId` | yes | `integer` | physical sensor ID |
| `frameId` | yes | `integer` | frame ID |
| `dataId` | yes | `integer` | data ID |
| `value` | yes | `integer` | value |

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `boolean` | data queued in output buffer or not. |
| `-` | `nil` | incorrect telemetry protocol. |

## Availability

- Since: `2.2.0`
- Radio support: `all`

## Source

`radio/src/lua/api_general.cpp`
