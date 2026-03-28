# Review: model.setGlobalVariable

[Back to dashboard](review.md) | [Open API page](model-set-global-variable.md)

## Snapshot

- Module: `model`
- Current symbol: `model.setGlobalVariable`
- Doc id: `model.set-global-variable`
- Source: `radio/src/lua/api_model.cpp:1710`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

<div class="decision-panel" data-item-id="model.setGlobalVariable">
<div class="decision-status" data-role="status">Decision server not connected yet.</div>
<table class="decision-table">
<thead><tr><th>Field</th><th>Kind</th><th>Current Type</th><th>Description</th><th>Select Type</th></tr></thead>
<tbody>
<tr><td><code>index</code></td><td>param</td><td><code>integer</code></td><td>zero based global variable index, use 0 for GV1, 8 for GV9</td><td><select data-field-kind="param" data-field-name="index" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="index" data-custom-type="true" /></td></tr>
<tr><td><code>flight_mode</code></td><td>param</td><td><code>integer</code></td><td>Flight mode number (0 = FM0, 8 = FM8)</td><td><select data-field-kind="param" data-field-name="flight_mode" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="flight_mode" data-custom-type="true" /></td></tr>
<tr><td><code>value</code></td><td>param</td><td><code>source_range_1024</code></td><td>new value for global variable. Permitted range is from -1024 to 1024.</td><td><select data-field-kind="param" data-field-name="value" data-current-type="source_range_1024"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="value" data-custom-type="true" /></td></tr>
</tbody>
</table>
<div class="decision-actions"><button type="button" data-role="save">Save Decisions</button></div>
<script type="application/json" class="decision-payload">{&quot;item_id&quot;: &quot;model.setGlobalVariable&quot;, &quot;symbol&quot;: &quot;model.setGlobalVariable&quot;, &quot;summary&quot;: &quot;Sets current global variable value. See also model.getGlobalVariable()&quot;, &quot;parameters&quot;: [{&quot;name&quot;: &quot;index&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;zero based global variable index, use 0 for GV1, 8 for GV9&quot;}, {&quot;name&quot;: &quot;flight_mode&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;Flight mode number (0 = FM0, 8 = FM8)&quot;}, {&quot;name&quot;: &quot;value&quot;, &quot;type&quot;: &quot;source_range_1024&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;new value for global variable. Permitted range is from -1024 to 1024.&quot;}], &quot;returns&quot;: [], &quot;notes&quot;: [&quot;Global variable can only store integer values,\nany floating point value is converted into integer value\nby truncating everything behind a floating point.&quot;], &quot;since&quot;: &quot;unknown&quot;}</script>
</div>

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function model.setGlobalVariable(index, flight_mode, value)

Sets current global variable value. See also model.getGlobalVariable()

@param index  zero based global variable index, use 0 for GV1, 8 for GV9

@param flight_mode  Flight mode number (0 = FM0, 8 = FM8)

@param value (source_range_1024) new value for global variable. Permitted range is
from -1024 to 1024.

@notice Global variable can only store integer values,
any floating point value is converted into integer value
by truncating everything behind a floating point.
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

Sets current global variable value. See also model.getGlobalVariable()

#### Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `index` | yes | `integer` | zero based global variable index, use 0 for GV1, 8 for GV9 |
| `flight_mode` | yes | `integer` | Flight mode number (0 = FM0, 8 = FM8) |
| `value` | yes | `source_range_1024` | new value for global variable. Permitted range is from -1024 to 1024. |

#### Returns

None.

#### Notes

- Global variable can only store integer values,
any floating point value is converted into integer value
by truncating everything behind a floating point.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function model.setGlobalVariable([index, flight_mode, value])

Sets current global variable value. See also model.getGlobalVariable()

@param index (integer) zero based global variable index, use 0 for GV1, 8 for GV9

@param flight_mode (integer) Flight mode number (0 = FM0, 8 = FM8)

@param value (source_range_1024) new value for global variable. Permitted range is from -1024 to 1024.

@notice Global variable can only store integer values,
any floating point value is converted into integer value
by truncating everything behind a floating point.

@status current Introduced in unknown
~~~~
