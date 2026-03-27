# getValue

`getValue(source)`

Returns the value of a source.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `source` | yes | `string` | can be an index (number) (which was obtained by `getFieldInfo` or `getSourceIndex`) or a name (string) of the source. |

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `integer` | current source value (number). Zero is returned for: * non-existing sources  * for all telemetry source when the telemetry stream is not received  * far all non allowed sensors while FAI MODE is active |
| `-` | `table` | GPS position is returned in a table: * `lat` (number) latitude, positive is North  * `lon` (number) longitude, positive is East  * `pilot-lat` (number) pilot latitude, positive is North  * `pilot-lon` (number) pilot longitude, positive is East |
| `-` | `table` | GPS date/time, see getDateTime() |
| `-` | `table` | Cells are returned in a table (except where no cells were detected in which case the returned value is 0):  * table has one item for each detected cell:   * key (number) cell number (1 to number of cells)   * value (number) current cell voltage |

## Availability

- Since: `2.0.0`
- Radio support: `all`

## Notes

- Getting a value by its numerical identifier is faster then by its name.
While `Cels` sensor returns current values of all cells in a table, a `Cels+` or
`Cels-` will return a single value - the maximum or minimum Cels value.

## Source

`radio/src/lua/api_general.cpp`
