self.addEventListener("push", (e) => {
  var options = {
  
  "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
  "icon": "img/icon.png",
  "vibrate": [200, 100, 200, 100, 200, 100, 400],
  "tag": "request",
  "actions": [
    { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
    { "action": "no", "title": "No", "icon": "images/no.png" }
  ]
};

  e.waitUntil(self.registration.showNotification("test", options));
});
