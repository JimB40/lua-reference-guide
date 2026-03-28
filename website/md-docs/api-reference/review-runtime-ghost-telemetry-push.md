# Review: ghostTelemetryPush

[Back to dashboard](review.md) | [Open API page](runtime-ghost-telemetry-push.md)

## Snapshot

- Module: `runtime`
- Current symbol: `ghostTelemetryPush`
- Doc id: `runtime.ghost-telemetry-push`
- Source: `radio/src/lua/api_general.cpp:1299`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

<div class="decision-panel" data-item-id="ghostTelemetryPush">
<div class="decision-status" data-role="status">Decision server not connected yet.</div>
<table class="decision-table">
<thead><tr><th>Field</th><th>Kind</th><th>Current Type</th><th>Description</th><th>Select Type</th></tr></thead>
<tbody>
<tr><td><code>command</code></td><td>param</td><td><code>integer</code></td><td>command</td><td><select data-field-kind="param" data-field-name="command" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="command" data-custom-type="true" /></td></tr>
<tr><td><code>data</code></td><td>param</td><td><code>table</code></td><td>table of data bytes</td><td><select data-field-kind="param" data-field-name="data" data-current-type="table"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="data" data-custom-type="true" /></td></tr>
<tr><td><code>-</code></td><td>return</td><td><code>boolean</code></td><td>data queued in output buffer or not.</td><td><select data-field-kind="return" data-field-name="-" data-current-type="boolean"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="return" data-field-name="-" data-custom-type="true" /></td></tr>
<tr><td><code>-</code></td><td>return</td><td><code>nil</code></td><td>incorrect telemetry protocol.</td><td><select data-field-kind="return" data-field-name="-" data-current-type="nil"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="return" data-field-name="-" data-custom-type="true" /></td></tr>
</tbody>
</table>
<div class="decision-actions"><button type="button" data-role="save">Save Decisions</button></div>
<script type="application/json" class="decision-payload">{&quot;item_id&quot;: &quot;ghostTelemetryPush&quot;, &quot;symbol&quot;: &quot;ghostTelemetryPush&quot;, &quot;summary&quot;: &quot;This functions allows for sending telemetry data toward the Ghost link.&quot;, &quot;parameters&quot;: [{&quot;name&quot;: &quot;command&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;command&quot;}, {&quot;name&quot;: &quot;data&quot;, &quot;type&quot;: &quot;table&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;table of data bytes&quot;}], &quot;returns&quot;: [{&quot;name&quot;: &quot;&quot;, &quot;type&quot;: &quot;boolean&quot;, &quot;description&quot;: &quot;data queued in output buffer or not.&quot;}, {&quot;name&quot;: &quot;&quot;, &quot;type&quot;: &quot;nil&quot;, &quot;description&quot;: &quot;incorrect telemetry protocol.&quot;}], &quot;notes&quot;: [], &quot;since&quot;: &quot;2.7.0&quot;}</script>
</div>

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function ghostTelemetryPush()

This functions allows for sending telemetry data toward the Ghost link.

When called without parameters, it will only return the status of the output buffer without sending anything.

@param command (integer) command

@param data table of data bytes

@retval boolean  data queued in output buffer or not.

@retval nil      incorrect telemetry protocol.

@status current Introduced in 2.7.0
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

This functions allows for sending telemetry data toward the Ghost link.

#### Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `command` | yes | `integer` | command |
| `data` | yes | `table` | table of data bytes |

#### Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `boolean` | data queued in output buffer or not. |
| `-` | `nil` | incorrect telemetry protocol. |

#### Notes

None.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function ghostTelemetryPush([command, data])

This functions allows for sending telemetry data toward the Ghost link.

@param command (integer) command

@param data (table) table of data bytes

@retval (boolean) data queued in output buffer or not.

@retval (nil) incorrect telemetry protocol.

@status current Introduced in 2.7.0
~~~~
