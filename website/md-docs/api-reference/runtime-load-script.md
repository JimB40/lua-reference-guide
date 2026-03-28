# loadScript

`loadScript(file [, mode], [,env])`

Load a Lua script file, with optional EdgeTX pre-compilation support.

## Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `file` | yes | `string` | Full path and file name of script. The file extension is optional and ignored (see `mode` param to control which extension will be used). However, if an extension is specified, it should be ".lua" (or ".luac"), otherwise it is treated   as part of the file name and the .lua/.luac will be appended to that. |
| `mode` | no | `string` | (optional) Controls whether to force loading the text (.lua) or pre-compiled binary (.luac) version of the script. By default ETX will load the newest version and compile a new binary if necessary (overwriting any   existing .luac version of the same script, and stripping some debug info like line numbers).   You can use `mode` to control the loading behavior more specifically. Possible values are:    * `b` only binary.    * `t` only text.    * `T` (default on simulator) prefer text but load binary if that is the only version available.    * `bt` (default on radio) either binary or text, whichever is newer (binary preferred when timestamps are equal).    * Add `x` to avoid automatic compilation of source file to .luac version.        Eg: "tx", "bx", or "btx".    * Add `c` to force compilation of source file to .luac version (even if existing version is newer than source file).        Eg: "tc" or "btc" (forces "t", overrides "x").    * Add `d` to keep extra debug info in the compiled binary.        Eg: "td", "btd", or "tcd" (no effect with just "b" or with "x"). |
| `env` | no | `integer` | See documentation for Lua function loadfile(). |

## Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `function|nil` | The loaded script, or `nil` if there was an error (e.g. file not found or syntax error). |
| `-` | `string|nil` | Error message(s), if any. Blank if no error occurred. |

## Availability

- Since: `2.2.0`
- Radio support: `all`

## Notes

- Note that you will get an error if you specify `mode` as "b" or "t" and that specific version of the file does not exist (eg. no .luac file when "b" is used).
  Also note that `mode` is NOT passed on to Lua's loader function, so unlike with loadfile() the actual file content is not checked (as if no mode or "bt" were passed to loadfile()).

## Source

`radio/src/lua/api_general.cpp`

## Extended Description

`loadScript` fills a similar role to Lua's `loadfile()`, but it adds EdgeTX-specific handling for `.lua` and `.luac` files. On radio targets, that usually means better load-time performance and lower runtime overhead when a compiled version is available.

Use the short summary above as the API-level definition. Keep the deeper usage guidance here, where it can evolve without expanding the firmware-source comment block.

Typical reasons to use `loadScript` directly:

- load reusable helper modules from the SD card
- control whether text or precompiled bytecode is preferred
- handle `nil, errmsg` returns explicitly when a script is missing or invalid

## Examples

```lua
local chunk, errmsg = loadScript("/SCRIPTS/TOOLS/demo.lua")
if not chunk then
  return errmsg
end

local mod = chunk()
```
