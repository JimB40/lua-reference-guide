# Review: popupInput

[Back to dashboard](review.md) | [Open API page](runtime-popup-input.md)

## Snapshot

- Module: `runtime`
- Current symbol: `popupInput`
- Doc id: `runtime.popup-input`
- Source: `radio/src/lua/api_general.cpp:1804`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

<div class="decision-panel" data-item-id="popupInput">
<div class="decision-status" data-role="status">Decision server not connected yet.</div>
<table class="decision-table">
<thead><tr><th>Field</th><th>Kind</th><th>Current Type</th><th>Description</th><th>Select Type</th></tr></thead>
<tbody>
<tr><td><code>title</code></td><td>param</td><td><code>string</code></td><td>text to display</td><td><select data-field-kind="param" data-field-name="title" data-current-type="string"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="title" data-custom-type="true" /></td></tr>
<tr><td><code>event</code></td><td>param</td><td><code>integer</code></td><td>the event variable that is passed in from the Run function (key pressed)</td><td><select data-field-kind="param" data-field-name="event" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="event" data-custom-type="true" /></td></tr>
<tr><td><code>input</code></td><td>param</td><td><code>integer</code></td><td>value that can be adjusted by the +/- keys</td><td><select data-field-kind="param" data-field-name="input" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="input" data-custom-type="true" /></td></tr>
<tr><td><code>min</code></td><td>param</td><td><code>integer</code></td><td>min value that input can reach (by pressing the - key)</td><td><select data-field-kind="param" data-field-name="min" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="min" data-custom-type="true" /></td></tr>
<tr><td><code>max</code></td><td>param</td><td><code>integer</code></td><td>max value that input can reach</td><td><select data-field-kind="param" data-field-name="max" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="max" data-custom-type="true" /></td></tr>
<tr><td><code>-</code></td><td>return</td><td><code>integer</code></td><td>result of the input adjustment</td><td><select data-field-kind="return" data-field-name="-" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="return" data-field-name="-" data-custom-type="true" /></td></tr>
<tr><td><code>&quot;OK&quot;</code></td><td>return</td><td><code>string</code></td><td>user pushed ENT key</td><td><select data-field-kind="return" data-field-name="&quot;OK&quot;" data-current-type="string"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="return" data-field-name="&quot;OK&quot;" data-custom-type="true" /></td></tr>
<tr><td><code>&quot;CANCEL&quot;</code></td><td>return</td><td><code>string</code></td><td>user pushed EXIT key</td><td><select data-field-kind="return" data-field-name="&quot;CANCEL&quot;" data-current-type="string"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="return" data-field-name="&quot;CANCEL&quot;" data-custom-type="true" /></td></tr>
</tbody>
</table>
<div class="decision-actions"><button type="button" data-role="save">Save Decisions</button></div>
<script type="application/json" class="decision-payload">{&quot;item_id&quot;: &quot;popupInput&quot;, &quot;symbol&quot;: &quot;popupInput&quot;, &quot;summary&quot;: &quot;Raises a pop-up on screen that allows uses input&quot;, &quot;parameters&quot;: [{&quot;name&quot;: &quot;title&quot;, &quot;type&quot;: &quot;string&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;text to display&quot;}, {&quot;name&quot;: &quot;event&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;the event variable that is passed in from the Run function (key pressed)&quot;}, {&quot;name&quot;: &quot;input&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;value that can be adjusted by the +/- keys&quot;}, {&quot;name&quot;: &quot;min&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;min value that input can reach (by pressing the - key)&quot;}, {&quot;name&quot;: &quot;max&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;max value that input can reach&quot;}], &quot;returns&quot;: [{&quot;name&quot;: &quot;&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;description&quot;: &quot;result of the input adjustment&quot;}, {&quot;name&quot;: &quot;\&quot;OK\&quot;&quot;, &quot;type&quot;: &quot;string&quot;, &quot;description&quot;: &quot;user pushed ENT key&quot;}, {&quot;name&quot;: &quot;\&quot;CANCEL\&quot;&quot;, &quot;type&quot;: &quot;string&quot;, &quot;description&quot;: &quot;user pushed EXIT key&quot;}], &quot;notes&quot;: [&quot;Use only from stand-alone and telemetry scripts.&quot;], &quot;since&quot;: &quot;2.0.0&quot;}</script>
</div>

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function popupInput(title, event, input, min, max)

Raises a pop-up on screen that allows uses input

@param title (string) text to display

@param event (number) the event variable that is passed in from the
Run function (key pressed)

@param input (number) value that can be adjusted by the +/- keys

@param min  (number) min value that input can reach (by pressing the - key)

@param max  (number) max value that input can reach

@retval number result of the input adjustment

@retval "OK" (string) user pushed ENT key

@retval "CANCEL" (string) user pushed EXIT key

@notice Use only from stand-alone and telemetry scripts.

@status current Introduced in 2.0.0
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

Raises a pop-up on screen that allows uses input

#### Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `title` | yes | `string` | text to display |
| `event` | yes | `integer` | the event variable that is passed in from the Run function (key pressed) |
| `input` | yes | `integer` | value that can be adjusted by the +/- keys |
| `min` | yes | `integer` | min value that input can reach (by pressing the - key) |
| `max` | yes | `integer` | max value that input can reach |

#### Returns

| Name | Type | Description |
| --- | --- | --- |
| `-` | `integer` | result of the input adjustment |
| `"OK"` | `string` | user pushed ENT key |
| `"CANCEL"` | `string` | user pushed EXIT key |

#### Notes

- Use only from stand-alone and telemetry scripts.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function popupInput([title, event, input, min, max])

Raises a pop-up on screen that allows uses input

@param title (string) text to display

@param event (integer) the event variable that is passed in from the Run function (key pressed)

@param input (integer) value that can be adjusted by the +/- keys

@param min (integer) min value that input can reach (by pressing the - key)

@param max (integer) max value that input can reach

@retval (integer) result of the input adjustment

@retval "OK" (string) user pushed ENT key

@retval "CANCEL" (string) user pushed EXIT key

@notice Use only from stand-alone and telemetry scripts.

@status current Introduced in 2.0.0
~~~~
