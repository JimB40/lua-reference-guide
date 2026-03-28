# Review: resetGlobalTimer

[Back to dashboard](review.md) | [Open API page](runtime-reset-global-timer.md)

## Snapshot

- Module: `runtime`
- Current symbol: `resetGlobalTimer`
- Doc id: `runtime.reset-global-timer`
- Source: `radio/src/lua/api_general.cpp:2230`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

<div class="decision-panel" data-item-id="resetGlobalTimer">
<div class="decision-status" data-role="status">Decision server not connected yet.</div>
<table class="decision-table">
<thead><tr><th>Field</th><th>Kind</th><th>Current Type</th><th>Description</th><th>Select Type</th></tr></thead>
<tbody>
<tr><td><code>type</code></td><td>param</td><td><code>timer_type</code></td><td>if set to &#x27;all&#x27;, throttle ,throttle percent and session timers are reset too if set to &#x27;session&#x27;, radio session timer is reset too
                    if set to &#x27;ttimer&#x27;, radio throttle timer is reset too
                    if set to  &#x27;tptimer&#x27;, radio throttle percent timer is reset too</td><td><select data-field-kind="param" data-field-name="type" data-current-type="timer_type"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="type" data-custom-type="true" /></td></tr>
</tbody>
</table>
<div class="decision-actions"><button type="button" data-role="save">Save Decisions</button></div>
<script type="application/json" class="decision-payload">{&quot;item_id&quot;: &quot;resetGlobalTimer&quot;, &quot;symbol&quot;: &quot;resetGlobalTimer&quot;, &quot;summary&quot;: &quot;Resets the radio global timer to 0.&quot;, &quot;parameters&quot;: [{&quot;name&quot;: &quot;type&quot;, &quot;type&quot;: &quot;timer_type&quot;, &quot;required&quot;: false, &quot;description&quot;: &quot;if set to &#x27;all&#x27;, throttle ,throttle percent and session timers are reset too if set to &#x27;session&#x27;, radio session timer is reset too\n                    if set to &#x27;ttimer&#x27;, radio throttle timer is reset too\n                    if set to  &#x27;tptimer&#x27;, radio throttle percent timer is reset too&quot;}], &quot;returns&quot;: [], &quot;notes&quot;: [], &quot;since&quot;: &quot;2.2.2&quot;}</script>
</div>

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function resetGlobalTimer([type])

 Resets the radio global timer to 0.

@param type (timer_type, optional) if set to 'all', throttle ,throttle percent and session timers are reset too
                    if set to 'session', radio session timer is reset too
                    if set to 'ttimer', radio throttle timer is reset too
                    if set to  'tptimer', radio throttle percent timer is reset too

@status current Introduced in 2.2.2, param added in 2.3
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

Resets the radio global timer to 0.

#### Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `type` | no | `timer_type` | if set to 'all', throttle ,throttle percent and session timers are reset too if set to 'session', radio session timer is reset too                     if set to 'ttimer', radio throttle timer is reset too                     if set to  'tptimer', radio throttle percent timer is reset too |

#### Returns

None.

#### Notes

None.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function resetGlobalTimer([type])

Resets the radio global timer to 0.

@param type (timer_type) if set to 'all', throttle ,throttle percent and session timers are reset too if set to 'session', radio session timer is reset too
                    if set to 'ttimer', radio throttle timer is reset too
                    if set to  'tptimer', radio throttle percent timer is reset too

@status current Introduced in 2.2.2
~~~~
