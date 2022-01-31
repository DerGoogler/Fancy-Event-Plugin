var hardDevice = app.getDefaultHardDevice();
var pluginName = "fep";

// Add custom settings to the SettingsActivity
app.require(hardDevice, "fep/core/settings.js");

// Just sample shortcuts
app.require(hardDevice, "fep.core/shortcuts.js");

// Loads the fireworks if enabled
if (app.getPluginPref(pluginName, "enableFireworks") === "true") {
  app.require(hardDevice, "fep/core/effects/fireworks.js");
}

// Loads the snowflakes if enabled
if (app.getPluginPref(pluginName, "enableSnowflakes") === "true") {
  app.require(hardDevice, "fep/core/effects/snowflakes.js");
}

if (app.getPluginPref(pluginName, "enableHighContrastCard") === "true") {
  app.loadCSS(hardDevice, "fep/core/core.css");
}
