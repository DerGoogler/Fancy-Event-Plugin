const restartAlert = () => {
  ons.notification.confirm({
    message: "You need to reopen the app. Do you want do this right now?",
    title: "Relaunch",
    buttonLabels: ["Yes", "No"],
    modifier: native.checkPlatformForBorderStyle,
    animation: "default",
    primaryButtonIndex: 1,
    cancelable: true,
    callback: (index) => {
      switch (index) {
        case 0:
          if (native.userAgentEqualAndroid(true)) {
            window.Android.close();
          } else if (native.userAgentEqualWindows(true)) {
            window.Windows.close();
          } else {
            return;
          }
          break;

        default:
          break;
      }
    },
  });
};

app.addSettings("fep", [
  {
    title: "Fancy Event Plugin",
    content: [
      {
        key: "enableFireworks",
        type: "switch",
        text: "Enable Fireworks",
        callback: (keepDefaultFuntion) => {
          restartAlert();
          keepDefaultFuntion();
        },
      },
      {
        key: "enableSnowflakes",
        type: "switch",
        text: "Enable Snowflakes",
        callback: (keepDefaultFuntion) => {
          restartAlert();
          keepDefaultFuntion();
        },
      },
      {
        key: "enableHighContrastCard",
        type: "switch",
        text: "Enable high contrast cards",
        callback: (keepDefaultFuntion) => {
          restartAlert();
          keepDefaultFuntion();
        },
      },
    ],
  },
]);
