
self.addEventListener('install', function (event) {
 self.skipWaiting();
});
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    fetch('https://localhost:44363/api/ExternalClient/SendNotification?u='+event.notification.data.id,{
     mode: 'no-cors'
    });
    clients.openWindow(event.notification.data.url)
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
       url: payload.url,
       id: payload.id
     }
    };

    event.waitUntil(self.registration.showNotification(title, options));
  }
});
