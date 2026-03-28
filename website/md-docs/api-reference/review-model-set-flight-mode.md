# Review: model.setFlightMode

[Back to dashboard](review.md) | [Open API page](model-set-flight-mode.md)

## Snapshot

- Module: `model`
- Current symbol: `model.setFlightMode`
- Doc id: `model.set-flight-mode`
- Source: `radio/src/lua/api_model.cpp:526`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

<div class="decision-panel" data-item-id="model.setFlightMode">
<div class="decision-status" data-role="status">Decision server not connected yet.</div>
<table class="decision-table">
<thead><tr><th>Field</th><th>Kind</th><th>Current Type</th><th>Description</th><th>Select Type</th></tr></thead>
<tbody>
<tr><td><code>index</code></td><td>param</td><td><code>integer</code></td><td>flight mode number (use 0 for FM0)</td><td><select data-field-kind="param" data-field-name="index" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="index" data-custom-type="true" /></td></tr>
<tr><td><code>params</code></td><td>param</td><td><code>table|nil</code></td><td>see model.getFlightMode return format for table format.</td><td><select data-field-kind="param" data-field-name="params" data-current-type="table|nil"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="params" data-custom-type="true" /></td></tr>
</tbody>
</table>
<div class="decision-actions"><button type="button" data-role="save">Save Decisions</button></div>
<script type="application/json" class="decision-payload">{&quot;item_id&quot;: &quot;model.setFlightMode&quot;, &quot;symbol&quot;: &quot;model.setFlightMode&quot;, &quot;summary&quot;: &quot;Set Flight mode parameters&quot;, &quot;parameters&quot;: [{&quot;name&quot;: &quot;index&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;flight mode number (use 0 for FM0)&quot;}, {&quot;name&quot;: &quot;params&quot;, &quot;type&quot;: &quot;table|nil&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;see model.getFlightMode return format for table format.&quot;}], &quot;returns&quot;: [], &quot;notes&quot;: [], &quot;since&quot;: &quot;2.3.10&quot;}</script>
</div>

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function model.setFlightMode(index, params)

Set Flight mode parameters

@param index (unsigned number) flight mode number (use 0 for FM0)

@param params (table|nil) see model.getFlightMode return format for table format.

@status current Introduced in 2.3.10
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

Set Flight mode parameters

#### Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `index` | yes | `integer` | flight mode number (use 0 for FM0) |
| `params` | yes | `table|nil` | see model.getFlightMode return format for table format. |

#### Returns

None.

#### Notes

None.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function model.setFlightMode([index, params])

Set Flight mode parameters

@param index (integer) flight mode number (use 0 for FM0)

@param params (table|nil) see model.getFlightMode return format for table format.

@status current Introduced in 2.3.10
~~~~
