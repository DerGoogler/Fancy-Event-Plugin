native.registerShortcut("n o t i", () => {
  ons.notification.prompt("Notification").then(function (input) {
    const f = JSON.parse(input);
    try {
      native.electron.notification(f.title, f.message);
    } catch (error) {
      ons.notification.alert(error);
    }
  });
});
