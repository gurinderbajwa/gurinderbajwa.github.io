
self.addEventListener('install', function (event) {
 self.skipWaiting();
});
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url + "?notification_id=" + event.notification.data.id)
  );
})
self.addEventListener("push", event => {
  if (event.data) {
    var payload = event.data.json();
    var title = payload.title;
    var options = {
      body: payload.body,
      icon: payload.icon,
      image: payload.image,
      data: {
       url: "https://www.lpu.in",
       id=1001
     }
    };

    event.waitUntil(self.registration.showNotification(title, options));
  }
});
