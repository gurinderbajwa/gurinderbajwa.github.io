self.addEventListener("push", (e) => {
  var options = {
    body: "Yay it works.",
    icon: "img/icon.png",
    badge: "img/badge.png",
  };

  e.waitUntil(self.registration.showNotification("test", options));
});
