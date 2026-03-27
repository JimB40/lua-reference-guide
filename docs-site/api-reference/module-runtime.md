# runtime

`72` APIs in this module.

[Back to API Reference](index.md) | [Open API review dashboard](review.md)

<div class="api-grid">
<a class="api-card" href="../runtime-grey/">
<span class="api-card-title">GREY</span>
<span class="api-card-summary">Returns gray value which can be used in LCD functions</span>
</a>
<a class="api-card" href="../runtime-access-telemetry-push/">
<span class="api-card-title">accessTelemetryPush</span>
<span class="api-card-summary">This functions allows for sending SPORT / ACCESS telemetry data toward the receiver,
and more generally, to anything connected SPORT bus on the receiver or transmitter.</span>
</a>
<a class="api-card" href="../runtime-apply-rgbled-colors/">
<span class="api-card-title">applyRGBLedColors</span>
<span class="api-card-summary">Apply RGB led colors previously defined by setRGBLedColor</span>
</a>
<a class="api-card" href="../runtime-chdir/">
<span class="api-card-title">chdir</span>
<span class="api-card-summary">Change the working directory</span>
</a>
<a class="api-card" href="../runtime-crossfire-telemetry-pop/">
<span class="api-card-title">crossfireTelemetryPop</span>
<span class="api-card-summary">Pops a received Crossfire Telemetry packet from the queue.</span>
</a>
<a class="api-card" href="../runtime-crossfire-telemetry-push/">
<span class="api-card-title">crossfireTelemetryPush</span>
<span class="api-card-summary">This functions allows for sending telemetry data toward the TBS Crossfire link.</span>
</a>
<a class="api-card" href="../runtime-default-channel/">
<span class="api-card-title">defaultChannel</span>
<span class="api-card-summary">Get channel assigned to stick. See Default Channel Order in General Settings</span>
</a>
<a class="api-card" href="../runtime-default-stick/">
<span class="api-card-title">defaultStick</span>
<span class="api-card-summary">Get stick that is assigned to a channel. See Default Channel Order in General Settings.</span>
</a>
<a class="api-card" href="../runtime-del/">
<span class="api-card-title">del</span>
<span class="api-card-summary">Returns FRESULT (e.g. 0=OK, 4=File not found, 5=Path not found, 6=Path invalid)</span>
</a>
<a class="api-card" href="../runtime-dir/">
<span class="api-card-title">dir</span>
<span class="api-card-summary">Return an iterator listing all the files and directories name in a directory</span>
</a>
<a class="api-card" href="../runtime-flush-audio/">
<span class="api-card-title">flushAudio</span>
<span class="api-card-summary">flushes audio queue</span>
</a>
<a class="api-card" href="../runtime-fstat/">
<span class="api-card-title">fstat</span>
<span class="api-card-summary">Checks the existence of file or directory.
 If not exist, return nil.
 If exist, return the object information.</span>
</a>
<a class="api-card" href="../runtime-get-available-memory/">
<span class="api-card-title">getAvailableMemory</span>
<span class="api-card-summary">Get available memory remaining in the Heap for Lua.</span>
</a>
<a class="api-card" href="../runtime-get-date-time/">
<span class="api-card-title">getDateTime</span>
<span class="api-card-summary">Return current system date and time that is kept by the RTC unit</span>
</a>
<a class="api-card" href="../runtime-get-field-info/">
<span class="api-card-title">getFieldInfo</span>
<span class="api-card-summary">Return detailed information about field (source)</span>
</a>
<a class="api-card" href="../runtime-get-flight-mode/">
<span class="api-card-title">getFlightMode</span>
<span class="api-card-summary">Return flight mode data.</span>
</a>
<a class="api-card" href="../runtime-get-general-settings/">
<span class="api-card-title">getGeneralSettings</span>
<span class="api-card-summary">Returns (some of) the general radio settings</span>
</a>
<a class="api-card" href="../runtime-get-global-timer/">
<span class="api-card-title">getGlobalTimer</span>
<span class="api-card-summary">Returns radio timers</span>
</a>
<a class="api-card" href="../runtime-get-logical-switch-value/">
<span class="api-card-title">getLogicalSwitchValue</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-get-output-value/">
<span class="api-card-title">getOutputValue</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-get-ras/">
<span class="api-card-title">getRAS</span>
<span class="api-card-summary">Return the RAS value or nil if no valid hardware found</span>
</a>
<a class="api-card" href="../runtime-get-rssi/">
<span class="api-card-title">getRSSI</span>
<span class="api-card-summary">Get RSSI value as well as low and critical RSSI alarm levels (in dB)</span>
</a>
<a class="api-card" href="../runtime-get-rot-enc-mode/">
<span class="api-card-title">getRotEncMode</span>
<span class="api-card-summary">Return rotary encoder mode</span>
</a>
<a class="api-card" href="../runtime-get-rot-enc-speed/">
<span class="api-card-title">getRotEncSpeed</span>
<span class="api-card-summary">Return rotary encoder current speed</span>
</a>
<a class="api-card" href="../runtime-get-rtc-time/">
<span class="api-card-title">getRtcTime</span>
<span class="api-card-summary">Return current RTC system date as unix timstamp (in seconds since 1. Jan 1970)</span>
</a>
<a class="api-card" href="../runtime-get-shm-var/">
<span class="api-card-title">getShmVar</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-get-source-index/">
<span class="api-card-title">getSourceIndex</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-get-source-name/">
<span class="api-card-title">getSourceName</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-get-source-value/">
<span class="api-card-title">getSourceValue</span>
<span class="api-card-summary">Returns the value of a source. Superseeds getValue.</span>
</a>
<a class="api-card" href="../runtime-get-stick-mode/">
<span class="api-card-title">getStickMode</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-get-switch-index/">
<span class="api-card-title">getSwitchIndex</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-get-switch-info/">
<span class="api-card-title">getSwitchInfo</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-get-switch-name/">
<span class="api-card-title">getSwitchName</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-get-switch-value/">
<span class="api-card-title">getSwitchValue</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-get-time/">
<span class="api-card-title">getTime</span>
<span class="api-card-summary">Return the time since the radio was started in multiple of 10ms</span>
</a>
<a class="api-card" href="../runtime-get-trainer-status/">
<span class="api-card-title">getTrainerStatus</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-get-tx-gps/">
<span class="api-card-title">getTxGPS</span>
<span class="api-card-summary">Return the internal GPS position or nil if no valid hardware found</span>
</a>
<a class="api-card" href="../runtime-get-usage/">
<span class="api-card-title">getUsage</span>
<span class="api-card-summary">Get percent of already used Lua instructions in current script execution cycle.</span>
</a>
<a class="api-card" href="../runtime-get-value/">
<span class="api-card-title">getValue</span>
<span class="api-card-summary">Returns the value of a source.</span>
</a>
<a class="api-card" href="../runtime-get-version/">
<span class="api-card-title">getVersion</span>
<span class="api-card-summary">Return OpenTX version</span>
</a>
<a class="api-card" href="../runtime-ghost-telemetry-pop/">
<span class="api-card-title">ghostTelemetryPop</span>
<span class="api-card-summary">Pops a received Ghost Telemetry packet from the queue.</span>
</a>
<a class="api-card" href="../runtime-ghost-telemetry-push/">
<span class="api-card-title">ghostTelemetryPush</span>
<span class="api-card-summary">This functions allows for sending telemetry data toward the Ghost link.</span>
</a>
<a class="api-card" href="../runtime-kill-events/">
<span class="api-card-title">killEvents</span>
<span class="api-card-summary">Stops key state machine. See [Key Events](../key_events.md) for the detailed description.</span>
</a>
<a class="api-card" href="../runtime-load-script/">
<span class="api-card-title">loadScript</span>
<span class="api-card-summary">Load a Lua script file. This is similar to Lua's own [loadfile()](https://www.lua.org/manual/5.2/manual.html#pdf-loadfile)
API method, but it uses OpenTx's optional pre-compilation feature to save memory and time during load.</span>
</a>
<a class="api-card" href="../runtime-mkdir/">
<span class="api-card-title">mkdir</span>
<span class="api-card-summary">Create a directory</span>
</a>
<a class="api-card" href="../runtime-multi-buffer/">
<span class="api-card-title">multiBuffer</span>
<span class="api-card-summary">This function reads/writes the Multi protocol buffer to interact with a protocol.</span>
<span class="api-card-badge">unknown_param_type</span>
</a>
<a class="api-card" href="../runtime-play-duration/">
<span class="api-card-title">playDuration</span>
<span class="api-card-summary">Play a time value (text to speech)</span>
</a>
<a class="api-card" href="../runtime-play-file/">
<span class="api-card-title">playFile</span>
<span class="api-card-summary">Play a file from the SD card</span>
</a>
<a class="api-card" href="../runtime-play-haptic/">
<span class="api-card-title">playHaptic</span>
<span class="api-card-summary">Generate haptic feedback</span>
</a>
<a class="api-card" href="../runtime-play-number/">
<span class="api-card-title">playNumber</span>
<span class="api-card-summary">Play a numerical value (text to speech)</span>
</a>
<a class="api-card" href="../runtime-play-tone/">
<span class="api-card-title">playTone</span>
<span class="api-card-summary">Play a tone</span>
</a>
<a class="api-card" href="../runtime-popup-confirmation/">
<span class="api-card-title">popupConfirmation</span>
<span class="api-card-summary">Raises a pop-up on screen that asks for confirmation</span>
</a>
<a class="api-card" href="../runtime-popup-input/">
<span class="api-card-title">popupInput</span>
<span class="api-card-summary">Raises a pop-up on screen that allows uses input</span>
</a>
<a class="api-card" href="../runtime-popup-warning/">
<span class="api-card-title">popupWarning</span>
<span class="api-card-summary">Raises a pop-up on screen that shows a warning</span>
</a>
<a class="api-card" href="../runtime-rename/">
<span class="api-card-title">rename</span>
<span class="api-card-summary">Rename a file or directory
  If the file or directory is being moved to a new parent directory, then the new parent
  directory must already exist.</span>
</a>
<a class="api-card" href="../runtime-reset-global-timer/">
<span class="api-card-title">resetGlobalTimer</span>
<span class="api-card-summary">Resets the radio global timer to 0.</span>
</a>
<a class="api-card" href="../runtime-serial-get-power/">
<span class="api-card-title">serialGetPower</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-serial-read/">
<span class="api-card-title">serialRead</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-serial-set-power/">
<span class="api-card-title">serialSetPower</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-serial-write/">
<span class="api-card-title">serialWrite</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-set-cfsled-color/">
<span class="api-card-title">setCFSLedColor</span>
<span class="api-card-summary">Overrides the LED color for a custom function switch</span>
</a>
<a class="api-card" href="../runtime-set-imu-x/">
<span class="api-card-title">setIMU_X</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-set-imu-y/">
<span class="api-card-title">setIMU_Y</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-set-rgbled-color/">
<span class="api-card-title">setRGBLedColor</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-set-serial-baudrate/">
<span class="api-card-title">setSerialBaudrate</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-set-shm-var/">
<span class="api-card-title">setShmVar</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-set-sticky-switch/">
<span class="api-card-title">setStickySwitch</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-set-telemetry-value/">
<span class="api-card-title">setTelemetryValue</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-sources/">
<span class="api-card-title">sources</span>
<span class="api-card-summary">Needs summary review</span>
</a>
<a class="api-card" href="../runtime-sport-telemetry-pop/">
<span class="api-card-title">sportTelemetryPop</span>
<span class="api-card-summary">Pops a received SPORT packet from the queue. Please note that only packets using a data ID within 0x5000 to 0x50FF
(frame ID == 0x10), as well as packets with a frame ID equal 0x32 (regardless of the data ID) will be passed to
the LUA telemetry receive queue.</span>
</a>
<a class="api-card" href="../runtime-sport-telemetry-push/">
<span class="api-card-title">sportTelemetryPush</span>
<span class="api-card-summary">This functions allows for sending SPORT telemetry data toward the receiver,
and more generally, to anything connected SPORT bus on the receiver or transmitter.</span>
</a>
<a class="api-card" href="../runtime-switches/">
<span class="api-card-title">switches</span>
<span class="api-card-summary">Needs summary review</span>
</a>
</div>
