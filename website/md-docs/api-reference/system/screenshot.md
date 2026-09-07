# screenshot

`screenshot()`

Takes a screenshot, which is saved to the SCREENSHOTS folder on the radio SD card.

## Parameters

None.

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `none` | `unknown` |  |

## Availability

- Since: `2.11`
- Radio support: `all`

## Notes

- This command is currently not rate limited, so repeated frequent calls will slow down the UI and can even freeze the entire radio, so should be used with care.

## Source

`radio/src/lua/api_general.cpp`
