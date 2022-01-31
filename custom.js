var hardDevice = native.getPref("electron.hardDevice");
var d = document;

// Add custom settings to the SettingsActivity
native.require(hardDevice, "inject/core/settings.js");

// Loads the fireworks if enabled
if (native.getPref("plugin.fep.enableFireworks") === "true") {
  native.require(hardDevice, "inject/core/effects/fireworks.js");
}

// Loads the snowflakes if enabled
if (native.getPref("plugin.fep.enableSnowflakes") === "true") {
  native.require(hardDevice, "inject/core/effects/snowflakes.js");
}

if (native.getPref("plugin.fep.enableHighContrastCard") === "true") {
  native.loadCSS(hardDevice, "inject/core/core.css");
}
