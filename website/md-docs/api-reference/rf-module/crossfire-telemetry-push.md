# crossfireTelemetryPush

`crossfireTelemetryPush()`

This functions allows for sending telemetry data toward the TBS Crossfire link.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `command` | yes | `unknown` | command |
| `data` | yes | `table` | table of data bytes |

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
