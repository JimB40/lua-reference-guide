# Display LCD

Drawing, layout, color, and display helpers for LCD rendering.

## Bitmap

<div class="api-grid">
<a class="api-card" href="../bitmap-get-size/">
<span class="api-card-title">Bitmap.getSize</span>
<span class="api-card-summary">Return width, height of a bitmap object</span>
</a>
<a class="api-card" href="../bitmap-open/">
<span class="api-card-title">Bitmap.open</span>
<span class="api-card-summary">Load a bitmap in memory for later display and reuse.</span>
</a>
<a class="api-card" href="../bitmap-resize/">
<span class="api-card-title">Bitmap.resize</span>
<span class="api-card-summary">Return a resized bitmap object.</span>
</a>
<a class="api-card" href="../bitmap-to-mask/">
<span class="api-card-title">Bitmap.toMask</span>
<span class="api-card-summary">Return an 8-bit bitmap mask for patterned drawing.</span>
</a>
<a class="api-card" href="../lcd-draw-bitmap/">
<span class="api-card-title">lcd.drawBitmap</span>
<span class="api-card-summary">Display a previously opened bitmap at coordinates and optionally scale it.</span>
</a>
<a class="api-card" href="../lcd-draw-bitmap-pattern/">
<span class="api-card-title">lcd.drawBitmapPattern</span>
<span class="api-card-summary">Display a bitmap pattern at a point.</span>
</a>
<a class="api-card" href="../lcd-draw-bitmap-pattern-pie/">
<span class="api-card-title">lcd.drawBitmapPatternPie</span>
<span class="api-card-summary">Display a bitmap pattern over a pie slice.</span>
</a>
<a class="api-card" href="../lcd-draw-pixmap/">
<span class="api-card-title">lcd.drawPixmap</span>
<span class="api-card-summary">Draw a bitmap from a path on the SD card.</span>
</a>
</div>

## Drawing

<div class="api-grid">
<a class="api-card" href="../lcd-clear/">
<span class="api-card-title">lcd.clear</span>
<span class="api-card-summary">Clear the LCD screen.</span>
</a>
<a class="api-card" href="../lcd-draw-annulus/">
<span class="api-card-title">lcd.drawAnnulus</span>
<span class="api-card-summary">Draw an annulus segment.</span>
</a>
<a class="api-card" href="../lcd-draw-arc/">
<span class="api-card-title">lcd.drawArc</span>
<span class="api-card-summary">Draw an arc.</span>
</a>
<a class="api-card" href="../lcd-draw-circle/">
<span class="api-card-title">lcd.drawCircle</span>
<span class="api-card-summary">Draw a circle.</span>
</a>
<a class="api-card" href="../lcd-draw-filled-circle/">
<span class="api-card-title">lcd.drawFilledCircle</span>
<span class="api-card-summary">Draw a filled circle.</span>
</a>
<a class="api-card" href="../lcd-draw-filled-rectangle/">
<span class="api-card-title">lcd.drawFilledRectangle</span>
<span class="api-card-summary">Draw a filled rectangle.</span>
</a>
<a class="api-card" href="../lcd-draw-filled-triangle/">
<span class="api-card-title">lcd.drawFilledTriangle</span>
<span class="api-card-summary">Draw a filled triangle.</span>
</a>
<a class="api-card" href="../lcd-draw-gauge/">
<span class="api-card-title">lcd.drawGauge</span>
<span class="api-card-summary">Draw a simple filled gauge.</span>
</a>
<a class="api-card" href="../lcd-draw-hud-rectangle/">
<span class="api-card-title">lcd.drawHudRectangle</span>
<span class="api-card-summary">Draw a rectangle in perspective.</span>
</a>
<a class="api-card" href="../lcd-draw-line/">
<span class="api-card-title">lcd.drawLine</span>
<span class="api-card-summary">Draw a straight line.</span>
</a>
<a class="api-card" href="../lcd-draw-line-with-clipping/">
<span class="api-card-title">lcd.drawLineWithClipping</span>
<span class="api-card-summary">Draw a line inside clipping bounds.</span>
</a>
<a class="api-card" href="../lcd-draw-pie/">
<span class="api-card-title">lcd.drawPie</span>
<span class="api-card-summary">Draw a pie slice.</span>
</a>
<a class="api-card" href="../lcd-draw-point/">
<span class="api-card-title">lcd.drawPoint</span>
<span class="api-card-summary">Draw a single pixel.</span>
</a>
<a class="api-card" href="../lcd-draw-rectangle/">
<span class="api-card-title">lcd.drawRectangle</span>
<span class="api-card-summary">Draw a rectangle outline.</span>
</a>
<a class="api-card" href="../lcd-draw-triangle/">
<span class="api-card-title">lcd.drawTriangle</span>
<span class="api-card-summary">Draw a triangle outline.</span>
</a>
<a class="api-card" href="../lcd-invert-rect/">
<span class="api-card-title">lcd.invertRect</span>
<span class="api-card-summary">Invert a rectangle region.</span>
</a>
<a class="api-card" href="../lcd-refresh/">
<span class="api-card-title">lcd.refresh</span>
<span class="api-card-summary">Refresh the LCD screen.</span>
</a>
</div>

## Text And Layout

<div class="api-grid">
<a class="api-card" href="../lcd-draw-channel/">
<span class="api-card-title">lcd.drawChannel</span>
<span class="api-card-summary">Display a telemetry value at coordinates.</span>
</a>
<a class="api-card" href="../lcd-draw-combobox/">
<span class="api-card-title">lcd.drawCombobox</span>
<span class="api-card-summary">Draw a combo box.</span>
</a>
<a class="api-card" href="../lcd-draw-number/">
<span class="api-card-title">lcd.drawNumber</span>
<span class="api-card-summary">Display a number.</span>
</a>
<a class="api-card" href="../lcd-draw-screen-title/">
<span class="api-card-title">lcd.drawScreenTitle</span>
<span class="api-card-summary">Draw a title bar.</span>
</a>
<a class="api-card" href="../lcd-draw-source/">
<span class="api-card-title">lcd.drawSource</span>
<span class="api-card-summary">Display the source name at coordinates.</span>
</a>
<a class="api-card" href="../lcd-draw-switch/">
<span class="api-card-title">lcd.drawSwitch</span>
<span class="api-card-summary">Draw a text representation of a switch.</span>
</a>
<a class="api-card" href="../lcd-draw-text/">
<span class="api-card-title">lcd.drawText</span>
<span class="api-card-summary">Draw text beginning at coordinates.</span>
</a>
<a class="api-card" href="../lcd-draw-text-lines/">
<span class="api-card-title">lcd.drawTextLines</span>
<span class="api-card-summary">Draw text in a rectangle with line breaks.</span>
</a>
<a class="api-card" href="../lcd-draw-timer/">
<span class="api-card-title">lcd.drawTimer</span>
<span class="api-card-summary">Display a time-formatted value.</span>
</a>
<a class="api-card" href="../lcd-exit-full-screen/">
<span class="api-card-title">lcd.exitFullScreen</span>
<span class="api-card-summary">Exit full screen widget mode.</span>
</a>
<a class="api-card" href="../lcd-get-last-left-pos/">
<span class="api-card-title">lcd.getLastLeftPos</span>
<span class="api-card-summary">Return the leftmost x position from prior output.</span>
</a>
<a class="api-card" href="../lcd-get-last-pos/">
<span class="api-card-title">lcd.getLastPos</span>
<span class="api-card-summary">Return the rightmost x position from prior output.</span>
</a>
<a class="api-card" href="../lcd-get-last-right-pos/">
<span class="api-card-title">lcd.getLastRightPos</span>
<span class="api-card-summary">Return the rightmost draw position from prior text or number output.</span>
</a>
<a class="api-card" href="../lcd-size-text/">
<span class="api-card-title">lcd.sizeText</span>
<span class="api-card-summary">Measure a text string drawn with flags.</span>
</a>
</div>

## Color And Flags

<div class="api-grid">
<a class="api-card" href="../runtime-grey/">
<span class="api-card-title">GREY</span>
<span class="api-card-summary">Return a gray value for LCD functions.</span>
</a>
<a class="api-card" href="../lcd-rgb/">
<span class="api-card-title">lcd.RGB</span>
<span class="api-card-summary">Return a drawing flag with RGB color code.</span>
</a>
<a class="api-card" href="../lcd-get-color/">
<span class="api-card-title">lcd.getColor</span>
<span class="api-card-summary">Get the color value from flags.</span>
</a>
<a class="api-card" href="../lcd-set-color/">
<span class="api-card-title">lcd.setColor</span>
<span class="api-card-summary">Change an indexed color such as theme colors or CUSTOM_COLOR.</span>
</a>
<a class="api-card" href="../lcd-reset-backlight-timeout/">
<span class="api-card-title">lcd.resetBacklightTimeout</span>
<span class="api-card-summary">Reset the backlight timeout.</span>
</a>
</div>

## Popups

<div class="api-grid">
<a class="api-card" href="../runtime-popup-confirmation/">
<span class="api-card-title">popupConfirmation</span>
<span class="api-card-summary">Raise a confirmation popup.</span>
</a>
<a class="api-card" href="../runtime-popup-input/">
<span class="api-card-title">popupInput</span>
<span class="api-card-summary">Raise an input popup.</span>
</a>
<a class="api-card" href="../runtime-popup-warning/">
<span class="api-card-title">popupWarning</span>
<span class="api-card-summary">Raise a warning popup.</span>
</a>
</div>
