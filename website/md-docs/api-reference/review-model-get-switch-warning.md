# Review: model.getSwitchWarning

[Back to dashboard](review.md) | [Open API page](model-get-switch-warning.md)

## Snapshot

- Module: `model`
- Current symbol: `model.getSwitchWarning`
- Doc id: `model.get-switch-warning`
- Source: `radio/src/lua/api_model.cpp:1018`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

<div class="decision-panel" data-item-id="model.getSwitchWarning">
<div class="decision-status" data-role="status">Decision server not connected yet.</div>
<table class="decision-table">
<thead><tr><th>Field</th><th>Kind</th><th>Current Type</th><th>Description</th><th>Select Type</th></tr></thead>
<tbody>
<tr><td><code>switch</code></td><td>param</td><td><code>integer</code></td><td>switch number (use 0 for SA) @param switch (string) switch name</td><td><select data-field-kind="param" data-field-name="switch" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="switch" data-custom-type="true" /></td></tr>
<tr><td><code>-</code></td><td>return</td><td><code>nil</code></td><td>when switch is a toggle or does not exist @retval number
0 = no warning
1 = switch up
2 = switch middle
3 = switch down</td><td><select data-field-kind="return" data-field-name="-" data-current-type="nil"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="return" data-field-name="-" data-custom-type="true" /></td></tr>
</tbody>
</table>
<div class="decision-actions"><button type="button" data-role="save">Save Decisions</button></div>
<script type="application/json" class="decision-payload">{&quot;item_id&quot;: &quot;model.getSwitchWarning&quot;, &quot;symbol&quot;: &quot;model.getSwitchWarning&quot;, &quot;summary&quot;: &quot;Get warning state for a switch&quot;, &quot;parameters&quot;: [{&quot;name&quot;: &quot;switch&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;switch number (use 0 for SA) @param switch (string) switch name&quot;}], &quot;returns&quot;: [{&quot;name&quot;: &quot;&quot;, &quot;type&quot;: &quot;nil&quot;, &quot;description&quot;: &quot;when switch is a toggle or does not exist @retval number\n0 = no warning\n1 = switch up\n2 = switch middle\n3 = switch down&quot;}], &quot;notes&quot;: [], &quot;since&quot;: &quot;3.0.0&quot;}</script>
</div>

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function model.getSwitchWarning(switch)

Get warning state for a switch

@param switch (unsigned number) switch number (use 0 for SA)
@param switch (string) switch name

@retval nil when switch is a toggle or does not exist
@retval number
0 = no warning
1 = switch up
2 = switch middle
3 = switch down

@status current Introduced in 3.0.0
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

Get warning state for a switch

#### Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `switch` | yes | `integer` | switch number (use 0 for SA) @param switch (string) switch name |

#### Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `nil` | when switch is a toggle or does not exist @retval number 0 = no warning 1 = switch up 2 = switch middle 3 = switch down |

#### Notes

None.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function model.getSwitchWarning([switch])

Get warning state for a switch

@param switch (integer) switch number (use 0 for SA) @param switch (string) switch name

@retval (nil) when switch is a toggle or does not exist @retval number
0 = no warning
1 = switch up
2 = switch middle
3 = switch down

@status current Introduced in 3.0.0
~~~~
