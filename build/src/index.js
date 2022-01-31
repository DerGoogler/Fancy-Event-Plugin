import fireworks from "./core/effects/fireworks";
import snowflakes from "./core/effects/snowflakes";
import { notificationShortcut } from "./core/shortcuts";
// To convert into jss => https://sudos.tools/css-to-jss
import styles from "./styles/core";

const fep = new HWPlugin("fep");

notificationShortcut();

// Loads the fireworks if enabled
if (fep.getPluginPref("enableFireworks") === "true") {
  fireworks.init();
}

// Loads the snowflakes if enabled
if (fep.getPluginPref("enableSnowflakes") === "true") {
  snowflakes.init();
}

if (fep.getPluginPref("enableHighContrastCard") === "true") {
  fep.loadCSS(styles);
}

fep.addSettings([
  {
    title: "Fancy Event Plugin",
    content: [
      {
        key: "enableFireworks",
        type: "switch",
        text: "Enable Fireworks",
      },
      {
        key: "enableSnowflakes",
        type: "switch",
        text: "Enable Snowflakes",
      },
      {
        key: "enableHighContrastCard",
        type: "switch",
        text: "Enable high contrast cards",
      },
    ],
  },
]);

fep.setPluginPackage({
  pluginAuthor: "Der_Googler",
  pluginVersion: "2.3",
  pluginLanguage: "JavaScript",
});

console.log(fep.getPluginPackage("pluginAuthor"));
console.log(fep.getPluginPackage("pluginVersion"));
console.log(fep.getPluginPackage("pluginLanguage"));
