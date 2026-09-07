# lvgl.build

`lvgl.build([parent], {{settings}})`

`parent:build({{settings}})`

Build a complex UI in a single operation.

## Parameters

See the API page for parameter description and common settings.

Build specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| type | String or type constant | Mandatory on each table entry to determine what type of LVGL object to create.; e.g.; type="rectangle"; type=lvgl.RECTANGLE |  |
| name | String |  | Empty string |
| children | Table |  | nil |

## Returns

Table of named LVGL objects.

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Notes

The 'settings' parameter to lvgl.build should be a table of tables. Each inner table creates a separate LVGL object based on the 'type' value.

For example the code below creates two object, a label and a rectangle.

```lua
lvgl.build({
    {type="label", x=0, y=0, text="Some text", color=BLACK},
    {type="rectangle", x=0, y=20, w=100, h=100, color=BLACK}
})
```

Objects can be nested by using the 'children' setting, this should be another table of tables just like the build settings.

For example this code creates another label as a child of the rectangle object. The x & y co-ordinates for the second label are relative to the top left corner of the parent rectangle.

```lua
lvgl.build({
    {type="label", x=0, y=0, text="Some text", color=BLACK},
    {type="rectangle", x=0, y=20, w=100, h=100, color=BLACK,
        children={
            {type="label", x=5, y=5, text="More text", color=BLACK}
        }
    }
})
```

The lvgl.build function will return a table of LVGL objects. This table will contain named references to any objects created that have the 'name' setting, Only references to named objects are returned.

For example this code assigns a name to the inner label and then updates the color.

```lua
local uiElements = lvgl.build({
    {type="label", x=0, y=0, text="Some text", color=BLACK},
    {type="rectangle", x=0, y=20, w=100, h=100, color=BLACK,
        children={
            {type="label", x=5, y=5, text="More text", color=BLACK, name="lbl1"}
        }
    }
})

uiElements["lbl1"]:set({color=BLUE})
```

**Warning:** Very large nested tables or very deeply nested tables may not work when compiled to a .luac script. If your script works when run from the .lua file; but fails when run from .luac, try breaking the lvgl.build call into multiple calls with smaller tables.

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
