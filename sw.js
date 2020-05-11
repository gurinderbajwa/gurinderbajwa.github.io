self.addEventListener("add", () => {
  self.registration.sendNotification("test", {});
});
