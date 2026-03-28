# Review: setTelemetryValue

[Back to dashboard](review.md) | [Open API page](runtime-set-telemetry-value.md)

## Snapshot

- Module: `runtime`
- Current symbol: `setTelemetryValue`
- Doc id: `runtime.set-telemetry-value`
- Source: `radio/src/lua/api_general.cpp:1984`
- Recommended action: **No action needed**
- Why: Parsed output looks structurally healthy.

## Decide

- This one looks structurally complete, but you can still change any param or return type below if you want to override it.

### Decision Controls

<div class="decision-panel" data-item-id="setTelemetryValue">
<div class="decision-status" data-role="status">Decision server not connected yet.</div>
<table class="decision-table">
<thead><tr><th>Field</th><th>Kind</th><th>Current Type</th><th>Description</th><th>Select Type</th></tr></thead>
<tbody>
<tr><td><code>id</code></td><td>param</td><td><code>integer</code></td><td>Id of the sensor, valid range is from 0 to 0xFFFF</td><td><select data-field-kind="param" data-field-name="id" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="id" data-custom-type="true" /></td></tr>
<tr><td><code>subID</code></td><td>param</td><td><code>integer</code></td><td>subID of the sensor, usually 0, valid range is from 0 to 7</td><td><select data-field-kind="param" data-field-name="subID" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="subID" data-custom-type="true" /></td></tr>
<tr><td><code>instance</code></td><td>param</td><td><code>integer</code></td><td>instance of the sensor (SensorID), valid range is from 0 to 0xFF</td><td><select data-field-kind="param" data-field-name="instance" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="instance" data-custom-type="true" /></td></tr>
<tr><td><code>value</code></td><td>param</td><td><code>integer</code></td><td>fed to the sensor</td><td><select data-field-kind="param" data-field-name="value" data-current-type="integer"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="value" data-custom-type="true" /></td></tr>
<tr><td><code>unit</code></td><td>param</td><td><code>unit_type</code></td><td>unit of the sensor [Full list](../../appendix/units.html)</td><td><select data-field-kind="param" data-field-name="unit" data-current-type="unit_type"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="unit" data-custom-type="true" /></td></tr>
<tr><td><code>precision</code></td><td>param</td><td><code>prec_type</code></td><td>the precision of the sensor * `0 or not present` no decimal precision.
 * `!= 0` value is divided by 10^precision, e.g. value=1000, prec=2 =&gt; 10.00.</td><td><select data-field-kind="param" data-field-name="precision" data-current-type="prec_type"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="precision" data-custom-type="true" /></td></tr>
<tr><td><code>name</code></td><td>param</td><td><code>string</code></td><td>Name of the sensor if it does not yet exist (4 chars). * `not present` Name defaults to the Id.
 * `present` Sensor takes name of the argument. Argument must have name surrounded by quotes: e.g., &quot;Name&quot;</td><td><select data-field-kind="param" data-field-name="name" data-current-type="string"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="param" data-field-name="name" data-custom-type="true" /></td></tr>
<tr><td><code>true,</code></td><td>return</td><td><code>boolean</code></td><td>if the sensor was just added. In this case the value is ignored (subsequent call will set the value)</td><td><select data-field-kind="return" data-field-name="true," data-current-type="boolean"><option value="TODO">TODO</option><option value="integer">integer</option><option value="number">number</option><option value="string">string</option><option value="boolean">boolean</option><option value="table">table</option><option value="function">function</option><option value="pointer">pointer</option><option value="nil">nil</option><option value="integer|string">integer|string</option><option value="table|nil">table|nil</option><option value="function|nil">function|nil</option><option value="string|nil">string|nil</option></select><input type="text" placeholder="Custom type" data-field-kind="return" data-field-name="true," data-custom-type="true" /></td></tr>
</tbody>
</table>
<div class="decision-actions"><button type="button" data-role="save">Save Decisions</button></div>
<script type="application/json" class="decision-payload">{&quot;item_id&quot;: &quot;setTelemetryValue&quot;, &quot;symbol&quot;: &quot;setTelemetryValue&quot;, &quot;summary&quot;: &quot;&quot;, &quot;parameters&quot;: [{&quot;name&quot;: &quot;id&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;Id of the sensor, valid range is from 0 to 0xFFFF&quot;}, {&quot;name&quot;: &quot;subID&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;subID of the sensor, usually 0, valid range is from 0 to 7&quot;}, {&quot;name&quot;: &quot;instance&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;instance of the sensor (SensorID), valid range is from 0 to 0xFF&quot;}, {&quot;name&quot;: &quot;value&quot;, &quot;type&quot;: &quot;integer&quot;, &quot;required&quot;: true, &quot;description&quot;: &quot;fed to the sensor&quot;}, {&quot;name&quot;: &quot;unit&quot;, &quot;type&quot;: &quot;unit_type&quot;, &quot;required&quot;: false, &quot;description&quot;: &quot;unit of the sensor [Full list](../../appendix/units.html)&quot;}, {&quot;name&quot;: &quot;precision&quot;, &quot;type&quot;: &quot;prec_type&quot;, &quot;required&quot;: false, &quot;description&quot;: &quot;the precision of the sensor * `0 or not present` no decimal precision.\n * `!= 0` value is divided by 10^precision, e.g. value=1000, prec=2 =&gt; 10.00.&quot;}, {&quot;name&quot;: &quot;name&quot;, &quot;type&quot;: &quot;string&quot;, &quot;required&quot;: false, &quot;description&quot;: &quot;Name of the sensor if it does not yet exist (4 chars). * `not present` Name defaults to the Id.\n * `present` Sensor takes name of the argument. Argument must have name surrounded by quotes: e.g., \&quot;Name\&quot;&quot;}], &quot;returns&quot;: [{&quot;name&quot;: &quot;true,&quot;, &quot;type&quot;: &quot;boolean&quot;, &quot;description&quot;: &quot;if the sensor was just added. In this case the value is ignored (subsequent call will set the value)&quot;}], &quot;notes&quot;: [&quot;All three parameters `id`, `subID` and `instance` can&#x27;t be zero at the same time. At least one of them\nmust be different from zero.&quot;], &quot;since&quot;: &quot;2.2.0&quot;}</script>
</div>

<div class="review-workbench">
<section class="review-panel">
### Source luadoc

~~~~text
@function setTelemetryValue(id, subID, instance, value [, unit [, precision [, name]]])

@param id (integer) Id of the sensor, valid range is from 0 to 0xFFFF

@param subID (integer) subID of the sensor, usually 0, valid range is from 0 to 7

@param instance (number) instance of the sensor (SensorID), valid range is from 0 to 0xFF

@param value (number) fed to the sensor

@param unit (unit_type) unit of the sensor [Full list](../../appendix/units.html)

@param precision (prec_type) the precision of the sensor
 * `0 or not present` no decimal precision.
 * `!= 0` value is divided by 10^precision, e.g. value=1000, prec=2 => 10.00.

@param name (string) Name of the sensor if it does not yet exist (4 chars).
 * `not present` Name defaults to the Id.
 * `present` Sensor takes name of the argument. Argument must have name surrounded by quotes: e.g., "Name"

@retval true, (boolean) if the sensor was just added. In this case the value is ignored (subsequent call will set the value)

@notice All three parameters `id`, `subID` and `instance` can't be zero at the same time. At least one of them
must be different from zero.

@status current Introduced in 2.2.0
~~~~
</section>
<section class="review-panel">
### Parsed doc

#### Summary

None.

#### Parameters

| Name | Req | Type | Description |
| --- | --- | --- | --- |
| `id` | yes | `integer` | Id of the sensor, valid range is from 0 to 0xFFFF |
| `subID` | yes | `integer` | subID of the sensor, usually 0, valid range is from 0 to 7 |
| `instance` | yes | `integer` | instance of the sensor (SensorID), valid range is from 0 to 0xFF |
| `value` | yes | `integer` | fed to the sensor |
| `unit` | no | `unit_type` | unit of the sensor [Full list](../../appendix/units.html) |
| `precision` | no | `prec_type` | the precision of the sensor * `0 or not present` no decimal precision.  * `!= 0` value is divided by 10^precision, e.g. value=1000, prec=2 => 10.00. |
| `name` | no | `string` | Name of the sensor if it does not yet exist (4 chars). * `not present` Name defaults to the Id.  * `present` Sensor takes name of the argument. Argument must have name surrounded by quotes: e.g., "Name" |

#### Returns

| Name | Type | Description |
| --- | --- | --- |
| `true,` | `boolean` | if the sensor was just added. In this case the value is ignored (subsequent call will set the value) |

#### Notes

- All three parameters `id`, `subID` and `instance` can't be zero at the same time. At least one of them
must be different from zero.

</section>
</div>

## Suggested luadoc patch

Use this as a starting point when the issue is in the C++ annotation. `TODO` means you still need to choose the real type.

~~~~text
@function setTelemetryValue([id, subID, instance, value, unit, precision, name])

@param id (integer) Id of the sensor, valid range is from 0 to 0xFFFF

@param subID (integer) subID of the sensor, usually 0, valid range is from 0 to 7

@param instance (integer) instance of the sensor (SensorID), valid range is from 0 to 0xFF

@param value (integer) fed to the sensor

@param unit (unit_type) unit of the sensor [Full list](../../appendix/units.html)

@param precision (prec_type) the precision of the sensor * `0 or not present` no decimal precision.
 * `!= 0` value is divided by 10^precision, e.g. value=1000, prec=2 => 10.00.

@param name (string) Name of the sensor if it does not yet exist (4 chars). * `not present` Name defaults to the Id.
 * `present` Sensor takes name of the argument. Argument must have name surrounded by quotes: e.g., "Name"

@retval true, (boolean) if the sensor was just added. In this case the value is ignored (subsequent call will set the value)

@notice All three parameters `id`, `subID` and `instance` can't be zero at the same time. At least one of them
must be different from zero.

@status current Introduced in 2.2.0
~~~~
