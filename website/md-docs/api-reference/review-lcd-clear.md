# Review: lcd.clear

[Back to dashboard](review.md) | [Open API page](lcd-clear.md)

## Snapshot

- Module: `lcd`
- Current symbol: `lcd.clear`
- Doc id: `lcd.clear`
- Source: `radio/src/lua/api_colorlcd.cpp; radio/src/lua/api_stdlcd.cpp:57`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

<div class="decision-panel" data-item-id="lcd.clear">
<div class="decision-status" data-role="status">Decision server not connected yet.</div>
<table class="decision-table">
<thead><tr><th>Field</th><th>Kind</th><th>Current Type</th><th>Description</th><th>Select Type</th></tr></thead>
<tbody>
<tr><td><code>color</code></td><td>param</td><td><code>lcd_color_RGB565</code></td><td></td><td><select data-field-kind="param" data-field-name="color" data-current-type="lcd_color_RGB565"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="color" data-custom-type="true" /></td></tr>
</tbody>
</table>
<div class="decision-actions"><button type="button" data-role="save">Save Decisions</button></div>
<script type="application/json" class="decision-payload">{&quot;item_id&quot;: &quot;lcd.clear&quot;, &quot;symbol&quot;: &quot;lcd.clear&quot;, &quot;summary&quot;: &quot;Clear the LCD screen&quot;, &quot;parameters&quot;: [{&quot;name&quot;: &quot;color&quot;, &quot;type&quot;: &quot;lcd_color_RGB565&quot;, &quot;required&quot;: false, &quot;description&quot;: &quot;&quot;}], &quot;returns&quot;: [], &quot;notes&quot;: [&quot;This function only works in stand-alone and telemetry scripts.&quot;], &quot;since&quot;: &quot;2.0.0&quot;}</script>
</div>

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function lcd.clear([color])

Clear the LCD screen

@param color (lcd_color_RGB565, optional, only on color screens)

@status current Introduced in 2.0.0, `color` parameter introduced in 2.2.0 RC12

@notice This function only works in stand-alone and telemetry scripts.
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

Clear the LCD screen

#### Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `color` | no | `lcd_color_RGB565` |  |

#### Returns

None.

#### Notes

- This function only works in stand-alone and telemetry scripts.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function lcd.clear([color])

Clear the LCD screen

@param color (lcd_color_RGB565)

@notice This function only works in stand-alone and telemetry scripts.

@status current Introduced in 2.0.0
~~~~
