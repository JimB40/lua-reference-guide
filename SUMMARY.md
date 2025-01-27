# Table of contents

* [EdgeTX 2.9 Lua Reference Guide](README.md)
* [Introduction](introduction/README.md)
  * [Acknowledgments](introduction/acknowledgments.md)
  * [Getting Started](introduction/getting\_started.md)
* [Script Type Overview](part\_i\_-\_script\_type\_overview/README.md)
  * [Custom (Mixer) Scripts](part\_i\_-\_script\_type\_overview/mix.md)
  * [Telemetry Scripts](part\_i\_-\_script\_type\_overview/telemetry.md)
  * [One-Time Scripts](part\_i\_-\_script\_type\_overview/one-time\_scripts.md)
  * [Function Scripts](part\_i\_-\_script\_type\_overview/function\_scripts.md)
  * [Widget Scripts](part\_i\_-\_script\_type\_overview/widget\_scripts.md)
* [EdgeTX Lua API Programming Guide](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/README.md)
  * [Lua Basics](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/lua-basics.md)
  * [Loading Code Modules Dynamically](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/loading-code-modules-dynamically.md)
  * [Saving Memory](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/saving-memory.md)
  * [Using Key and Touch Events](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/using-key-and-touch-events.md)
  * [Drawing Flags and Colors](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/drawing-flags-and-colors.md)
  * [Data Exchange with the EdgeTX Model Setup](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/data-exchange-with-the-edgetx-model-setup.md)
  * [Included Lua Libraries](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/included\_lua\_libraries/README.md)
    * [io Library](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/included\_lua\_libraries/io-library/README.md)
      * [io.open()](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/included\_lua\_libraries/io-library/io.open.md)
      * [io.close()](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/included\_lua\_libraries/io-library/io.close.md)
      * [io.read()](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/included\_lua\_libraries/io-library/io.read.md)
      * [io.write()](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/included\_lua\_libraries/io-library/io.write.md)
      * [io.seek()](part\_ii\_-\_opentx\_lua\_api\_programming\_guide/included\_lua\_libraries/io-library/io.seek.md)
* [EdgeTX Lua API Reference](part\_iii\_-\_opentx\_lua\_api\_reference/README.md)
  * [Constants](part\_iii\_-\_opentx\_lua\_api\_reference/constants/README.md)
    * [Key Event Constants](part\_iii\_-\_opentx\_lua\_api\_reference/constants/key\_events.md)
    * [Touch Event Constants](part\_iii\_-\_opentx\_lua\_api\_reference/constants/touch-event-constants.md)
    * [Flags and Pattern Constants](part\_iii\_-\_opentx\_lua\_api\_reference/constants/flags-and-pattern-constants.md)
    * [Color Constants](part\_iii\_-\_opentx\_lua\_api\_reference/constants/color-constants.md)
    * [Special Character Constants](part\_iii\_-\_opentx\_lua\_api\_reference/constants/special-character-constants.md)
    * [Screen Constants](part\_iii\_-\_opentx\_lua\_api\_reference/constants/screen-constants.md)
    * [Logical Switch Function Constants](part\_iii\_-\_opentx\_lua\_api\_reference/constants/logical-switch-function-constants.md)
    * [Special Function Constants](part\_iii\_-\_opentx\_lua\_api\_reference/constants/special-function-constants.md)
    * [Widget Options Constants](part\_iii\_-\_opentx\_lua\_api\_reference/constants/widget-options.md)
  * [General Functions](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/README.md)
    * [GREY()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/grey.md)
    * [accessTelemetryPush()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/accesstelemetrypush.md)
    * [chdir(directory)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/chdir.md)
    * [crossfireTelemetryPop()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/crossfiretelemetrypop.md)
    * [crossfireTelemetryPush()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/crossfiretelemetrypush.md)
    * [defaultChannel(stick)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/defaultchannel.md)
    * [defaultStick(channel)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/defaultstick.md)
    * [flushAudio()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/flushaudio.md)
    * [getAvailableMemory()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getavailablememory.md)
    * [getDateTime()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getdatetime.md)
    * [getFieldInfo(source)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getfieldinfo.md)
    * [getFlightMode(mode)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getflightmode.md)
    * [getGeneralSettings()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getgeneralsettings.md)
    * [getGlobalTimer()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getglobaltimer.md)
    * [getLogicalSwitchValue(id)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getlogicalswitchvalue-id.md)
    * [getOutputValue(outputIndex)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getoutputvalue-outputindex.md)
    * [getRAS()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getras.md)
    * [getRSSI()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getrssi.md)
    * [getRotEncMode()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getrotencmode.md)
    * [getRotEncSpeed()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getrotencspeed.md)
    * [getRtcTime()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getrtctime.md)
    * [getShmVar(id)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getshmvar-id.md)
    * [getSourceIndex(sourceName)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getsourceindex-sourcename.md)
    * [getSourceName(sourceIndex)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getsourcename-sourceindex.md)
    * [getSourceValue(source)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getsourcevalue-source.md)
    * [getSwitchIndex(positionName)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getswitchindex-positionname.md)
    * [getSwitchName(switchIndex)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getswitchname-switchindex.md)
    * [getSwitchValue(switchIndex)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getswitchvalue-switchindex.md)
    * [getTime()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/gettime.md)
    * [getTxGPS()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/gettxgps.md)
    * [getUsage()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getusage.md)
    * [getValue(source)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getvalue.md)
    * [getVersion()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/getversion.md)
    * [ghostTelemetryPop()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/ghosttelemetrypop.md)
    * [ghostTelemetryPush()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/ghosttelemetrypush.md)
    * [killEvents(key)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/killevents.md)
    * [loadScript(file \[, mode\], \[,env\])](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/loadscript.md)
    * [multiBuffer(address\[,value\])](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/multibuffer.md)
    * [playDuration(duration \[, hourFormat\])](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/playduration.md)
    * [playFile(name)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/playfile.md)
    * [playHaptic(duration, pause \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/playhaptic.md)
    * [playNumber(value, unit \[, attributes\])](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/playnumber.md)
    * [playTone(frequency, duration, pause \[, flags \[, freqIncr\]\])](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/playtone.md)
    * [popupConfirmation(title, message, event)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/popupconfirmation.md)
    * [popupInput(title, event, input, min, max)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/popupinput.md)
    * [popupWarning(title, event)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/popupwarning.md)
    * [resetGlobalTimer(\[type\])](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/resetglobaltimer.md)
    * [serialGetPower(port\_nr)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/serialgetpower-port\_nr.md)
    * [serialRead(\[num\])](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/serialread.md)
    * [serialSetPower(port\_nr, value)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/serialsetpower-port\_nr-value.md)
    * [serialWrite(str)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/serialwrite.md)
    * [setSerialBaudrate(baudrate)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/setserialbaudrate.md)
    * [setShmVar(id, value)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/setshmvar-id-value.md)
    * [setStickySwitch(id, value)](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/setstickyswitch-id-value.md)
    * [setTelemetryValue(id, subID, instance, value \[, unit \[, precision \[, name\]\]\])](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/settelemetryvalue.md)
    * [sources(\[first\[, last\]\])](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/sources-first-last.md)
    * [switches(\[first\[, last\]\])](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/switches-first-last.md)
    * [sportTelemetryPop()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/sporttelemetrypop.md)
    * [sportTelemetryPush()](part\_iii\_-\_opentx\_lua\_api\_reference/general-functions-less-than-greater-than-luadoc-begin-general/sporttelemetrypush.md)
  * [Model Functions](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/README.md)
    * [model.defaultInputs()](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/defaultinputs.md)
    * [model.deleteFlightModes()](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/deleteflightmodes.md)
    * [model.deleteInput(input, line)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/deleteinput.md)
    * [model.deleteInputs()](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/deleteinputs.md)
    * [model.deleteMix(channel, line)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/deletemix.md)
    * [model.deleteMixes()](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/deletemixes.md)
    * [model.getCurve(curve)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getcurve.md)
    * [model.getCustomFunction(function)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getcustomfunction.md)
    * [model.getFlightMode(index)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getflightmode.md)
    * [model.getGlobalVariable(index, flight\_mode)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getglobalvariable.md)
    * [model.getInfo()](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getinfo.md)
    * [model.getInput(input, line)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getinput.md)
    * [model.getInputsCount(input)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getinputscount.md)
    * [model.getLogicalSwitch(switch)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getlogicalswitch.md)
    * [model.getMix(channel, line)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getmix.md)
    * [model.getMixesCount(channel)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getmixescount.md)
    * [model.getModule(index)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getmodule.md)
    * [model.getOutput(index)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getoutput.md)
    * [model.getSensor(sensor)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/getsensor.md)
    * [model.getSwashRing()](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/model.getswashring.md)
    * [model.getTimer(timer)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/gettimer.md)
    * [model.insertInput(input, line, value)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/insertinput.md)
    * [model.insertMix(channel, line, value)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/insertmix.md)
    * [model.resetSensor(sensor)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/resetsensor.md)
    * [model.resetTimer(timer)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/resettimer.md)
    * [model.setCurve(curve, params)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/setcurve.md)
    * [model.setCustomFunction(function, value)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/setcustomfunction.md)
    * [model.setFlightMode(index, params)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/setflightmode.md)
    * [model.setGlobalVariable(index, flight\_mode, value)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/setglobalvariable.md)
    * [model.setInfo(value)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/setinfo.md)
    * [model.setLogicalSwitch(switch, value)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/setlogicalswitch.md)
    * [model.setModule(index, value)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/setmodule.md)
    * [model.setOutput(index, value)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/setoutput.md)
    * [model.setSwashRing(params)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/model.setswashring-params.md)
    * [model.setTimer(timer, value)](part\_iii\_-\_opentx\_lua\_api\_reference/model-functions-less-than-greater-than-luadoc-begin-model/settimer.md)
  * [Lcd Functions](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/README.md)
    * [Lcd Functions Overview](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/lcd\_functions-overview.md)
    * [lcd.RGB(r, g, b | rgb)](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/rgb.md)
    * [lcd.clear(\[color\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/clear.md)
    * [lcd.drawAnnulus(x, y, r1, r2, start, end \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawannulus.md)
    * [lcd.drawArc(x, y, r, start, end \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawarc.md)
    * [lcd.drawBitmap(bitmap, x, y \[, scale\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawbitmap.md)
    * [lcd.drawBitmapPattern(bitmap, x, y \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/lcd.drawbitmappattern-bitmap-x-y-flags.md)
    * [lcd.drawBitmapPatternPie(bitmap, x, y, startAngle, endAngle \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/lcd.drawbitmappatternpie-bitmap-x-y-startangle-endangle-flags.md)
    * [lcd.drawChannel(x, y, source, flags)](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawchannel.md)
    * [lcd.drawCircle(x, y, r \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawcircle.md)
    * [lcd.drawCombobox(x, y, w, list, idx \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawcombobox.md)
    * [lcd.drawFilledCircle(x, y, r \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawfilledcircle.md)
    * [lcd.drawFilledRectangle(x, y, w, h \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawfilledrectangle.md)
    * [lcd.drawFilledTriangle(x1, y1, x2, y2, x3, y3 \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawfilledtriangle.md)
    * [lcd.drawGauge(x, y, w, h, fill, maxfill \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawgauge.md)
    * [lcd.drawHudRectangle(pitch, roll, xmin, xmax, ymin, ymax \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawhudrectangle.md)
    * [lcd.drawLine(x1, y1, x2, y2, pattern, flags)](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawline.md)
    * [lcd.drawLineWithClipping(x1, y1, x2, y2, xmin, xmax, ymin, ymax, pattern \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawlinewithclipping.md)
    * [lcd.drawNumber(x, y, value \[, flags \[, inversColor\]\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawnumber.md)
    * [lcd.drawPie(x, y, r, start, end \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawpie.md)
    * [lcd.drawPixmap(x, y, name)](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawpixmap.md)
    * [lcd.drawPoint(x, y)](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawpoint.md)
    * [lcd.drawRectangle(x, y, w, h \[, flags \[, t\]\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawrectangle.md)
    * [lcd.drawScreenTitle(title, page, pages)](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawscreentitle.md)
    * [lcd.drawSource(x, y, source \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawsource.md)
    * [lcd.drawSwitch(x, y, switch, flags)](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawswitch.md)
    * [lcd.drawText(x, y, text \[, flags \[, inversColor\]\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawtext.md)
    * [lcd.drawTextLines(x, y, w, h, text \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/lcd.drawtextlines-x-y-w-h-text-flags.md)
    * [lcd.drawTimer(x, y, value \[, flags \[, inversColor\]\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawtimer.md)
    * [lcd.drawTriangle(x1, y1, x2, y2, x3, y3 \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/drawtriangle.md)
    * [lcd.exitFullScreen()](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/lcd.exitfullscreen.md)
    * [lcd.getColor(flags)](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/getcolor.md)
    * [lcd.getLastLeftPos()](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/getlastleftpos.md)
    * [lcd.getLastPos()](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/getlastpos.md)
    * [lcd.getLastRightPos()](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/getlastrightpos.md)
    * [lcd.invertRect(x, y, w, h \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/lcd.invertrect-x-y-w-h-flags.md)
    * [lcd.refresh()](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/refresh.md)
    * [lcd.resetBacklightTimeout()](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/resetbacklighttimeout.md)
    * [lcd.setColor(colorIndex, color)](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/setcolor.md)
    * [lcd.sizeText(text \[, flags\])](part\_iii\_-\_opentx\_lua\_api\_reference/lcd-functions-less-than-greater-than-luadoc-begin-lcd/sizetext.md)
  * [Bitmap Functions](part\_iii\_-\_opentx\_lua\_api\_reference/bitmap-functions-less-than-greater-than-luadoc-begin-bitmap/README.md)
    * [Bitmap.getSize(name)](part\_iii\_-\_opentx\_lua\_api\_reference/bitmap-functions-less-than-greater-than-luadoc-begin-bitmap/getsize.md)
    * [Bitmap.open(name)](part\_iii\_-\_opentx\_lua\_api\_reference/bitmap-functions-less-than-greater-than-luadoc-begin-bitmap/open.md)
    * [Bitmap.resize(bitmap, width, height)](part\_iii\_-\_opentx\_lua\_api\_reference/bitmap-functions-less-than-greater-than-luadoc-begin-bitmap/bitmap.resize-bitmap-width-height.md)
    * [Bitmap.toMask(bitmap)](part\_iii\_-\_opentx\_lua\_api\_reference/bitmap-functions-less-than-greater-than-luadoc-begin-bitmap/bitmap.tomask-bitmap.md)
  * [Filesystem](part\_iii\_-\_opentx\_lua\_api\_reference/filesystem/README.md)
    * [dir(directory)](part\_iii\_-\_opentx\_lua\_api\_reference/filesystem/dir-directory.md)
    * [fstat(path)](part\_iii\_-\_opentx\_lua\_api\_reference/filesystem/fstat-path.md)
    * [del(file or directory)](part\_iii\_-\_opentx\_lua\_api\_reference/filesystem/del-file-or-directory.md)
* [Advanced Topics](part\_iv\_-\_advanced\_topics/README.md)
  * [Lua data sharing across scripts](part\_iv\_-\_advanced\_topics/lua\_data\_sharing\_across\_scripts.md)
  * [Debugging techniques](part\_iv\_-\_advanced\_topics/debugging\_techniques.md)
  * [Speed/memory optimizaton tricks](part\_iv\_-\_advanced\_topics/optimization\_tricks.md)
* [Appendix](appendix/README.md)
  * [Fonts](appendix/fonts.md)
  * [Units](appendix/units.md)
