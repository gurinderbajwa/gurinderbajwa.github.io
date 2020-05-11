self.addEventListener("push", (e) => {
  var options = {
    body: "Yay it works.",
    icon: "images/icon.png",
    badge: "images/badge.png",
  };

  e.waitUntil(self.registration.showNotification("test", options));
});
