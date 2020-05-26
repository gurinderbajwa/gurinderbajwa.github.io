
self.addEventListener('install', function (event) {
 self.skipWaiting();
});

self.addEventListener('push', function(event) {
  event.waitUntil(
    self.registration.pushManager.getSubscription().then(function(subscription) {
      fetch('https://localhost:44363/api/ExternalClient/Notification', {
        method: 'get'
      })
      .then(function(response) { return response.json(); })
      .then(function(data) {
        self.registration.showNotification(data.title, {
          body: data.body,
          icon: 'img/icon.png',
          image: data.image
        });
      })
      .catch(function(err) {
        console.log(err);
      });
    })
  );
});
