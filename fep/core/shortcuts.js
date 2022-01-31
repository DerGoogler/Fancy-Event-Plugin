native.registerShortcut("n o t i", () => {
  ons.notification.prompt("Notification").then(function (input) {
    var message = input ? "Entered: " + input : "Entered nothing!";
    native.electron.notification("Own Notification", message);
  });
});
