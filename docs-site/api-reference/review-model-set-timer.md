# Review: model.setTimer

[Back to dashboard](review.md) | [Open API page](model-set-timer.md)

## Snapshot

- Module: `model`
- Current symbol: `model.setTimer`
- Doc id: `model.set-timer`
- Source: `radio/src/lua/api_model.cpp:329`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

<div class="decision-panel" data-item-id="model.setTimer">
<div class="decision-status" data-role="status">Decision server not connected yet.</div>
<table class="decision-table">
<thead><tr><th>Field</th><th>Kind</th><th>Current Type</th><th>Description</th><th>Select Type</th></tr></thead>
<tbody>
<tr><td><code>timer</code></td><td>param</td><td><code>integer</code></td><td>timer index (0 for Timer 1)</td><td><select data-field-kind="param" data-field-name="timer" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="timer" data-custom-type="true" /></td></tr>
<tr><td><code>value</code></td><td>param</td><td><code>table</code></td><td>timer parameters, see model.getTimer()</td><td><select data-field-kind="param" data-field-name="value" data-current-type="table"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="value" data-custom-type="true" /></td></tr>
</tbody>
</table>
<div class="decision-actions"><button type="button" data-role="save">Save Decisions</button></div>
<script type="application/json" class="decision-payload">{&quot;item_id&quot;: &quot;model.setTimer&quot;, &quot;symbol&quot;: &quot;model.setTimer&quot;, &quot;summary&quot;: &quot;Set model timer parameters&quot;, &quot;parameters&quot;: [{&quot;name&quot;: &quot;timer&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;timer index (0 for Timer 1)&quot;}, {&quot;name&quot;: &quot;value&quot;, &quot;type&quot;: &quot;table&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;timer parameters, see model.getTimer()&quot;}], &quot;returns&quot;: [], &quot;notes&quot;: [&quot;If a parameter is missing from the value, then\nthat parameter remains unchanged.&quot;], &quot;since&quot;: &quot;2.0.0&quot;}</script>
</div>

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function model.setTimer(timer, value)

Set model timer parameters

@param timer (number) timer index (0 for Timer 1)

@param value (table) timer parameters, see model.getTimer()

@notice If a parameter is missing from the value, then
that parameter remains unchanged.

@status current Introduced in 2.0.0, name added in 2.3.6, showElapsed added in 2.8.0
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

Set model timer parameters

#### Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `timer` | yes | `integer` | timer index (0 for Timer 1) |
| `value` | yes | `table` | timer parameters, see model.getTimer() |

#### Returns

None.

#### Notes

- If a parameter is missing from the value, then
that parameter remains unchanged.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function model.setTimer([timer, value])

Set model timer parameters

@param timer (integer) timer index (0 for Timer 1)

@param value (table) timer parameters, see model.getTimer()

@notice If a parameter is missing from the value, then
that parameter remains unchanged.

@status current Introduced in 2.0.0
~~~~
