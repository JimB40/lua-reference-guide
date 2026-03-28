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

| Lua Standard Libraries                                   | Comment                                                              |
| -------------------------------------------------------- | -------------------------------------------------------------------- |
| [math](https://www.lua.org/manual/5.2/manual.html#6.6)   | <mark style="color:green;">included</mark>                           |
| [string](https://www.lua.org/manual/5.2/manual.html#6.4) | <mark style="color:green;">included</mark>                           |
| [bit32](https://www.lua.org/manual/5.2/manual.html#6.7)  | <mark style="color:green;">included</mark>                           |
| [table](https://www.lua.org/manual/5.2/manual.html#6.5)  | <mark style="color:#8a6b00;">included only on color LCD Radios</mark> |
| [io](io-library.md)                                      | <mark style="color:#8a6b00;">included partialy</mark>                 |
| package                                                  | <mark style="color:red;">not included</mark>                         |
| coroutine                                                | <mark style="color:red;">not included</mark>                         |
| os                                                       | <mark style="color:red;">not included</mark>                         |
| debug                                                    | <mark style="color:red;">not included</mark>                         |
