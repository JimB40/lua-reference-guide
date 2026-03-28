# Review: del

[Back to dashboard](review.md) | [Open API page](runtime-del.md)

## Snapshot

- Module: `runtime`
- Current symbol: `del`
- Doc id: `runtime.del`
- Source: `radio/src/lua/api_filesystem.cpp:157`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

No fields to edit.

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function del(file or directory)

 Returns FRESULT (e.g. 0=OK, 4=File not found, 5=Path not found, 6=Path invalid)

@status current Introduced in 2.9.0

### Example

```lua
  if del("/SCRIPTS/TOOLS/deleteme.txt") == 0 then
     -- successfully deleted file
  else
     -- failed to delete file
  end
```
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

Returns FRESULT (e.g. 0=OK, 4=File not found, 5=Path not found, 6=Path invalid)

#### Parameters

None.

#### Returns

None.

#### Notes

None.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function del()

Returns FRESULT (e.g. 0=OK, 4=File not found, 5=Path not found, 6=Path invalid)

@status current Introduced in 2.9.0
~~~~
