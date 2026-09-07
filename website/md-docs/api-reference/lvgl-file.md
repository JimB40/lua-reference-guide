# lvgl.file

`lvgl.file([parent], {settings})`

`parent:file({settings})`

Display a button showing a filename. When tapped a popup file picker is opened. Uses EdgeTX styling.

## Parameters

See the API page for parameter description and common settings.

Choice specific settings:

| Name | Type | Description | Default if not set |
| --- | --- | --- | --- |
| title | String | Text to be displayed in the header of the popup menu. | Empty string |
| get | Function | Called to get the name of the currently selected file, when the popup menu is first opened.; Must return a string. | nil |
| set | Function | Called when the user taps on a file name.; The function is passed the file name selected (does not include file path). | nil |
| active | Function | Set the enabled / disabled state. Return value must be a boolean - true to enable the control, false to disable. | nil |
| folder | String | Folder on SD card to browse for files, | nil |
| extension | String | Filter for extension matching.; Concatenate desired extensions into a single string.; E.G. ".png" will match only PNG image files. ".png.bmp" will match both PNG and BMP images. | nil |
| hideExtension | Boolean | Hide the file extension in the picker list.; If true the file extension is not included in when the 'set' function is called. | false |
| maxLen | Number | Limits the maximum file name length. If set, files with longer names are not shown in the picker list. | 255 |

## Returns

LVGL object

## Availability

- Since: `2.11.0`
- Radio support: `color-lcd`

## Notes

The popup menu is closed when the user selects an item, and the 'set' function is called.

If the user taps outside the menu or the RTN key is pressed, the popup menu is closed and the 'set' function is not called.

## Source

`radio/src/lua/api_colorlcd_lvgl.cpp`
