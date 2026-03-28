# Display LVGL

LVGL bindings for Lua scripts on radios with color display.

## Runtime Helpers

<div class="api-grid">
<a class="api-card" href="../lvgl-build/">
<span class="api-card-title">lvgl.build</span>
<span class="api-card-summary">Build multiple LVGL objects from a Lua table definition and return the created object references.</span>
</a>
<a class="api-card" href="../lvgl-clear/">
<span class="api-card-title">lvgl.clear</span>
<span class="api-card-summary">Clear all LVGL content created by the current script, or clear a specific object.</span>
</a>
<a class="api-card" href="../lvgl-set/">
<span class="api-card-title">lvgl.set</span>
<span class="api-card-summary">Update an existing LVGL object from a parameter table.</span>
</a>
<a class="api-card" href="../lvgl-show/">
<span class="api-card-title">lvgl.show</span>
<span class="api-card-summary">Show an LVGL object that was previously hidden.</span>
</a>
<a class="api-card" href="../lvgl-hide/">
<span class="api-card-title">lvgl.hide</span>
<span class="api-card-summary">Hide an LVGL object without destroying it.</span>
</a>
<a class="api-card" href="../lvgl-enable/">
<span class="api-card-title">lvgl.enable</span>
<span class="api-card-summary">Enable interaction for an LVGL control object.</span>
</a>
<a class="api-card" href="../lvgl-disable/">
<span class="api-card-title">lvgl.disable</span>
<span class="api-card-summary">Disable interaction for an LVGL control object.</span>
</a>
<a class="api-card" href="../lvgl-close/">
<span class="api-card-title">lvgl.close</span>
<span class="api-card-summary">Close an LVGL object that represents a closable container or dialog.</span>
</a>
<a class="api-card" href="../lvgl-get-context/">
<span class="api-card-title">lvgl.getContext</span>
<span class="api-card-summary">Return the Lua context table associated with the current LVGL script.</span>
</a>
<a class="api-card" href="../lvgl-get-scroll-pos/">
<span class="api-card-title">lvgl.getScrollPos</span>
<span class="api-card-summary">Return the current scroll position of an LVGL object.</span>
</a>
<a class="api-card" href="../lvgl-is-app-mode/">
<span class="api-card-title">lvgl.isAppMode</span>
<span class="api-card-summary">Return whether the current script is running in app mode.</span>
</a>
<a class="api-card" href="../lvgl-is-full-screen/">
<span class="api-card-title">lvgl.isFullScreen</span>
<span class="api-card-summary">Return whether the current script is running in fullscreen mode.</span>
</a>
<a class="api-card" href="../lvgl-exit-full-screen/">
<span class="api-card-title">lvgl.exitFullScreen</span>
<span class="api-card-summary">Exit LVGL fullscreen mode for the current script.</span>
</a>
</div>

## Drawing Primitives

<div class="api-grid">
<a class="api-card" href="../lvgl-label/">
<span class="api-card-title">lvgl.label</span>
<span class="api-card-summary">Create an LVGL label object.</span>
</a>
<a class="api-card" href="../lvgl-rectangle/">
<span class="api-card-title">lvgl.rectangle</span>
<span class="api-card-summary">Create an LVGL rectangle object.</span>
</a>
<a class="api-card" href="../lvgl-hline/">
<span class="api-card-title">lvgl.hline</span>
<span class="api-card-summary">Create an LVGL horizontal line object.</span>
</a>
<a class="api-card" href="../lvgl-vline/">
<span class="api-card-title">lvgl.vline</span>
<span class="api-card-summary">Create an LVGL vertical line object.</span>
</a>
<a class="api-card" href="../lvgl-line/">
<span class="api-card-title">lvgl.line</span>
<span class="api-card-summary">Create an LVGL line object.</span>
</a>
<a class="api-card" href="../lvgl-triangle/">
<span class="api-card-title">lvgl.triangle</span>
<span class="api-card-summary">Create an LVGL triangle object.</span>
</a>
<a class="api-card" href="../lvgl-circle/">
<span class="api-card-title">lvgl.circle</span>
<span class="api-card-summary">Create an LVGL circle object.</span>
</a>
<a class="api-card" href="../lvgl-arc/">
<span class="api-card-title">lvgl.arc</span>
<span class="api-card-summary">Create an LVGL arc object.</span>
</a>
<a class="api-card" href="../lvgl-image/">
<span class="api-card-title">lvgl.image</span>
<span class="api-card-summary">Create an LVGL image object.</span>
</a>
<a class="api-card" href="../lvgl-qrcode/">
<span class="api-card-title">lvgl.qrcode</span>
<span class="api-card-summary">Create an LVGL QR code object.</span>
</a>
</div>

## Containers

<div class="api-grid">
<a class="api-card" href="../lvgl-box/">
<span class="api-card-title">lvgl.box</span>
<span class="api-card-summary">Create an LVGL box container.</span>
</a>
<a class="api-card" href="../lvgl-page/">
<span class="api-card-title">lvgl.page</span>
<span class="api-card-summary">Create an LVGL page container.</span>
</a>
<a class="api-card" href="../lvgl-dialog/">
<span class="api-card-title">lvgl.dialog</span>
<span class="api-card-summary">Create an LVGL dialog container.</span>
</a>
</div>

## Interactive Controls

<div class="api-grid">
<a class="api-card" href="../lvgl-button/">
<span class="api-card-title">lvgl.button</span>
<span class="api-card-summary">Create an LVGL text button control.</span>
</a>
<a class="api-card" href="../lvgl-momentary-button/">
<span class="api-card-title">lvgl.momentaryButton</span>
<span class="api-card-summary">Create an LVGL momentary button control.</span>
</a>
<a class="api-card" href="../lvgl-toggle/">
<span class="api-card-title">lvgl.toggle</span>
<span class="api-card-summary">Create an LVGL toggle control.</span>
</a>
<a class="api-card" href="../lvgl-text-edit/">
<span class="api-card-title">lvgl.textEdit</span>
<span class="api-card-summary">Create an LVGL text edit control.</span>
</a>
<a class="api-card" href="../lvgl-number-edit/">
<span class="api-card-title">lvgl.numberEdit</span>
<span class="api-card-summary">Create an LVGL number edit control.</span>
</a>
<a class="api-card" href="../lvgl-slider/">
<span class="api-card-title">lvgl.slider</span>
<span class="api-card-summary">Create an LVGL slider control.</span>
</a>
<a class="api-card" href="../lvgl-vertical-slider/">
<span class="api-card-title">lvgl.verticalSlider</span>
<span class="api-card-summary">Create an LVGL vertical slider control.</span>
</a>
</div>

## Pickers

<div class="api-grid">
<a class="api-card" href="../lvgl-choice/">
<span class="api-card-title">lvgl.choice</span>
<span class="api-card-summary">Create an LVGL choice control.</span>
</a>
<a class="api-card" href="../lvgl-font/">
<span class="api-card-title">lvgl.font</span>
<span class="api-card-summary">Create an LVGL font picker control.</span>
</a>
<a class="api-card" href="../lvgl-align/">
<span class="api-card-title">lvgl.align</span>
<span class="api-card-summary">Create an LVGL alignment picker control.</span>
</a>
<a class="api-card" href="../lvgl-color/">
<span class="api-card-title">lvgl.color</span>
<span class="api-card-summary">Create an LVGL color picker control.</span>
</a>
<a class="api-card" href="../lvgl-timer/">
<span class="api-card-title">lvgl.timer</span>
<span class="api-card-summary">Create an LVGL timer picker control.</span>
</a>
<a class="api-card" href="../lvgl-switch/">
<span class="api-card-title">lvgl.switch</span>
<span class="api-card-summary">Create an LVGL switch picker control.</span>
</a>
<a class="api-card" href="../lvgl-source/">
<span class="api-card-title">lvgl.source</span>
<span class="api-card-summary">Create an LVGL source picker control.</span>
</a>
<a class="api-card" href="../lvgl-file/">
<span class="api-card-title">lvgl.file</span>
<span class="api-card-summary">Create an LVGL file picker control.</span>
</a>
<a class="api-card" href="../lvgl-setting/">
<span class="api-card-title">lvgl.setting</span>
<span class="api-card-summary">Create an LVGL setting control.</span>
</a>
</div>

## Dialogs

<div class="api-grid">
<a class="api-card" href="../lvgl-confirm/">
<span class="api-card-title">lvgl.confirm</span>
<span class="api-card-summary">Show a confirmation dialog using the LVGL UI layer.</span>
</a>
<a class="api-card" href="../lvgl-message/">
<span class="api-card-title">lvgl.message</span>
<span class="api-card-summary">Show a message dialog using the LVGL UI layer.</span>
</a>
<a class="api-card" href="../lvgl-menu/">
<span class="api-card-title">lvgl.menu</span>
<span class="api-card-summary">Show an LVGL menu popup.</span>
</a>
</div>

The detailed constructor pages document the supported parameter table keys for each object type.
