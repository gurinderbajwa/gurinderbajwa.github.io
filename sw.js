
self.addEventListener('install', function (event) {
 self.skipWaiting();
});
self.addEventListener("push", event => {
  if (event.data) {
    var payload = event.data.json();
    var title = payload.title;
    var options = {
      body: payload.body,
      icon: payload.icon,
      image: payload.image,
      data: {
        url: payload.url
      }
    };

    event.waitUntil(self.registration.showNotification(title, options));
  }
});
