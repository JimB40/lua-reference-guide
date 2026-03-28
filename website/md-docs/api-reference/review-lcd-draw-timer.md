# Review: lcd.drawTimer

[Back to dashboard](review.md) | [Open API page](lcd-draw-timer.md)

## Snapshot

- Module: `lcd`
- Current symbol: `lcd.drawTimer`
- Doc id: `lcd.draw-timer`
- Source: `radio/src/lua/api_colorlcd.cpp; radio/src/lua/api_stdlcd.cpp:338`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

<div class="decision-panel" data-item-id="lcd.drawTimer">
<div class="decision-status" data-role="status">Decision server not connected yet.</div>
<table class="decision-table">
<thead><tr><th>Field</th><th>Kind</th><th>Current Type</th><th>Description</th><th>Select Type</th></tr></thead>
<tbody>
<tr><td><code>x</code></td><td>param</td><td><code>integer</code></td><td>starting coordinate</td><td><select data-field-kind="param" data-field-name="x" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="x" data-custom-type="true" /></td></tr>
<tr><td><code>y</code></td><td>param</td><td><code>integer</code></td><td>starting coordinate</td><td><select data-field-kind="param" data-field-name="y" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="y" data-custom-type="true" /></td></tr>
<tr><td><code>value</code></td><td>param</td><td><code>integer</code></td><td>time in seconds</td><td><select data-field-kind="param" data-field-name="value" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="value" data-custom-type="true" /></td></tr>
<tr><td><code>flags</code></td><td>param</td><td><code>integer</code></td><td>please see [Lcd functions overview](../lcd-functions-less-than-greater-than-luadoc-begin-lcd/lcd_functions-overview.html)</td><td><select data-field-kind="param" data-field-name="flags" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="flags" data-custom-type="true" /></td></tr>
<tr><td><code>inversColor</code></td><td>param</td><td><code>string</code></td><td>overrides the inverse text color for INVERS</td><td><select data-field-kind="param" data-field-name="inversColor" data-current-type="string"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="inversColor" data-custom-type="true" /></td></tr>
</tbody>
</table>
<div class="decision-actions"><button type="button" data-role="save">Save Decisions</button></div>
<script type="application/json" class="decision-payload">{&quot;item_id&quot;: &quot;lcd.drawTimer&quot;, &quot;symbol&quot;: &quot;lcd.drawTimer&quot;, &quot;summary&quot;: &quot;Display a value formatted as time at (x,y)&quot;, &quot;parameters&quot;: [{&quot;name&quot;: &quot;x&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;starting coordinate&quot;}, {&quot;name&quot;: &quot;y&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;starting coordinate&quot;}, {&quot;name&quot;: &quot;value&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;time in seconds&quot;}, {&quot;name&quot;: &quot;flags&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: false, &quot;description&quot;: &quot;please see [Lcd functions overview](../lcd-functions-less-than-greater-than-luadoc-begin-lcd/lcd_functions-overview.html)&quot;}, {&quot;name&quot;: &quot;inversColor&quot;, &quot;type&quot;: &quot;string&quot;, &quot;required&quot;: false, &quot;description&quot;: &quot;overrides the inverse text color for INVERS&quot;}], &quot;returns&quot;: [], &quot;notes&quot;: [], &quot;since&quot;: &quot;2.0.0&quot;}</script>
</div>

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function lcd.drawTimer(x, y, value [, flags [, inversColor]])

Display a value formatted as time at (x,y)

@param x,y (positive numbers) starting coordinate

@param value (number) time in seconds

@param flags (optional) please see [Lcd functions overview](../lcd-functions-less-than-greater-than-luadoc-begin-lcd/lcd_functions-overview.html)

@param inversColor (lcd_text_flags, optional with INVERS flag) overrides the inverse text color for INVERS

@status current Introduced in 2.0.0
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

Display a value formatted as time at (x,y)

#### Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `x` | yes | `integer` | starting coordinate |
| `y` | yes | `integer` | starting coordinate |
| `value` | yes | `integer` | time in seconds |
| `flags` | no | `integer` | please see [Lcd functions overview](../lcd-functions-less-than-greater-than-luadoc-begin-lcd/lcd_functions-overview.html) |
| `inversColor` | no | `string` | overrides the inverse text color for INVERS |

#### Returns

None.

#### Notes

None.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function lcd.drawTimer([x, y, value, flags, inversColor])

Display a value formatted as time at (x,y)

@param x (integer) starting coordinate

@param y (integer) starting coordinate

@param value (integer) time in seconds

@param flags (integer) please see [Lcd functions overview](../lcd-functions-less-than-greater-than-luadoc-begin-lcd/lcd_functions-overview.html)

@param inversColor (string) overrides the inverse text color for INVERS

@status current Introduced in 2.0.0
~~~~
