## Extended Description

`loadScript` should eventually include examples showing how to load reusable Lua modules and how to handle `nil, errmsg` error returns cleanly.

## Examples

```lua
local chunk, errmsg = loadScript("/SCRIPTS/TOOLS/demo.lua")
if not chunk then
  return errmsg
end

local mod = chunk()
```
