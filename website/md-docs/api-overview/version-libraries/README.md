<style>
  .md-typeset table tbody td:first-child a {
    color: inherit;
    text-decoration: none;
  }

  .md-typeset table tbody td:first-child a:hover {
    color: inherit;
    text-decoration: underline;
  }
</style>

# Lua version

## Included libraries

Up to version 2.10, EdgeTX uses Lua interpreter and compiler version 5.2. \
For detailed reference read [Lua 5.2 Reference Manual](https://www.lua.org/manual/5.2/manual.html)

From version 2.11, EdgeTX uses Lua interpreter and compiler version 5.3. \
For detailed reference read [Lua 5.3 Reference Manual](https://www.lua.org/manual/5.3/manual.html)

!!! warning

    Binary files `*.luac` compiled with Lua 5.2 are not compatible with the Lua 5.3 interpreter. If you distribute binary files, they must be recompiled.

## Included standard libraries

| Lua Standard Libraries                                   | Comment                                |
| -------------------------------------------------------- | --------------------------------------- |
| [math](https://www.lua.org/manual/5.2/manual.html#6.6)   | **included**                            |
| [string](https://www.lua.org/manual/5.2/manual.html#6.4) | **included**                            |
| [bit32](https://www.lua.org/manual/5.2/manual.html#6.7)  | **included**                            |
| [table](https://www.lua.org/manual/5.2/manual.html#6.5)  | **included only on color LCD Radios**   |
| [io](io-library.md)                                      | **included partially**                  |
| package                                                  | not included                            |
| coroutine                                                | not included                            |
| os                                                       | not included                            |
| debug                                                    | not included                            |
