# Review: playNumber

[Back to dashboard](review.md) | [Open API page](runtime-play-number.md)

## Snapshot

- Module: `runtime`
- Current symbol: `playNumber`
- Doc id: `runtime.play-number`
- Source: `radio/src/lua/api_general.cpp:1501`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

<div class="decision-panel" data-item-id="playNumber">
<div class="decision-status" data-role="status">Decision server not connected yet.</div>
<table class="decision-table">
<thead><tr><th>Field</th><th>Kind</th><th>Current Type</th><th>Description</th><th>Select Type</th></tr></thead>
<tbody>
<tr><td><code>value</code></td><td>param</td><td><code>integer</code></td><td>number to play. Value is interpreted as integer.</td><td><select data-field-kind="param" data-field-name="value" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="value" data-custom-type="true" /></td></tr>
<tr><td><code>unit</code></td><td>param</td><td><code>integer</code></td><td>unit identifier [Full list]((../appendix/units.html))</td><td><select data-field-kind="param" data-field-name="unit" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="unit" data-custom-type="true" /></td></tr>
<tr><td><code>attributes</code></td><td>param</td><td><code>integer</code></td><td>possible values: * `0 or not present` plays integral part of the number (for a number 123 it plays 123)
 * `PREC1` plays a number with one decimal place (for a number 123 it plays 12.3)
 * `PREC2` plays a number with two decimal places (for a number 123 it plays 1.23)</td><td><select data-field-kind="param" data-field-name="attributes" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="attributes" data-custom-type="true" /></td></tr>
<tr><td><code>none</code></td><td>return</td><td><code>nil</code></td><td></td><td><select data-field-kind="return" data-field-name="none" data-current-type="nil"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="return" data-field-name="none" data-custom-type="true" /></td></tr>
</tbody>
</table>
<div class="decision-actions"><button type="button" data-role="save">Save Decisions</button></div>
<script type="application/json" class="decision-payload">{&quot;item_id&quot;: &quot;playNumber&quot;, &quot;symbol&quot;: &quot;playNumber&quot;, &quot;summary&quot;: &quot;Play a numerical value (text to speech)&quot;, &quot;parameters&quot;: [{&quot;name&quot;: &quot;value&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;number to play. Value is interpreted as integer.&quot;}, {&quot;name&quot;: &quot;unit&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;unit identifier [Full list]((../appendix/units.html))&quot;}, {&quot;name&quot;: &quot;attributes&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: false, &quot;description&quot;: &quot;possible values: * `0 or not present` plays integral part of the number (for a number 123 it plays 123)\n * `PREC1` plays a number with one decimal place (for a number 123 it plays 12.3)\n * `PREC2` plays a number with two decimal places (for a number 123 it plays 1.23)&quot;}], &quot;returns&quot;: [{&quot;name&quot;: &quot;none&quot;, &quot;type&quot;: &quot;nil&quot;, &quot;description&quot;: &quot;&quot;}], &quot;notes&quot;: [], &quot;since&quot;: &quot;2.0.0&quot;}</script>
</div>

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function playNumber(value, unit [, attributes [, volume]])

Play a numerical value (text to speech)

@param value (number) number to play. Value is interpreted as integer.

@param unit (number) unit identifier [Full list]((../appendix/units.html))

@param attributes (unsigned number) possible values:
 * `0 or not present` plays integral part of the number (for a number 123 it plays 123)
 * `PREC1` plays a number with one decimal place (for a number 123 it plays 12.3)
 * `PREC2` plays a number with two decimal places (for a number 123 it plays 1.23)
 
 @param volume (number):
 - (1..5) override radio settings Wav volume for the duration of file
 - omitting the parameter uses radio settings Wav volume

@retval none (nil)

@status current Introduced in 2.0.0, changed in 2.10

// targets: BW, COLOR
//
// EXAMPLES:
// playNumber(123, 3, 0, 5) -- play number 123, unit mAh, use Wav volume 5
// playNumber(123, 3, 0, 1) -- play number 123, unit mAh, use Wav volume 1
// playNumber(123, 3, 0)    -- play number 123, unit mAh, use radio settings Wav volume
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

Play a numerical value (text to speech)

#### Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `value` | yes | `integer` | number to play. Value is interpreted as integer. |
| `unit` | yes | `integer` | unit identifier [Full list]((../appendix/units.html)) |
| `attributes` | no | `integer` | possible values: * `0 or not present` plays integral part of the number (for a number 123 it plays 123)  * `PREC1` plays a number with one decimal place (for a number 123 it plays 12.3)  * `PREC2` plays a number with two decimal places (for a number 123 it plays 1.23) |

#### Returns

| Name | Type | Description |
| --- | --- | --- |
| `none` | `nil` |  |

#### Notes

None.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function playNumber([value, unit, attributes])

Play a numerical value (text to speech)

@param value (integer) number to play. Value is interpreted as integer.

@param unit (integer) unit identifier [Full list]((../appendix/units.html))

@param attributes (integer) possible values: * `0 or not present` plays integral part of the number (for a number 123 it plays 123)
 * `PREC1` plays a number with one decimal place (for a number 123 it plays 12.3)
 * `PREC2` plays a number with two decimal places (for a number 123 it plays 1.23)

@retval none (nil)

@status current Introduced in 2.0.0
~~~~
