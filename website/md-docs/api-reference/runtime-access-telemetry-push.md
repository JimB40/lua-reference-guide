# accessTelemetryPush

`accessTelemetryPush()`

This functions allows for sending SPORT / ACCESS telemetry data toward the receiver,
and more generally, to anything connected SPORT bus on the receiver or transmitter.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `module` | yes | `integer` | module index (0 = internal, 1 = external) |
| `rxUid` | yes | `integer` | receiver index |
| `sensorId` | yes | `integer` | physical sensor ID |
| `frameId` | yes | `integer` | frame ID |
| `dataId` | yes | `integer` | data ID |
| `value` | yes | `integer` | value |

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `boolean` | data queued in output buffer or not. |

## Availability

- Since: `2.3`
- Radio support: `all`

## Source

`radio/src/lua/api_general.cpp`
