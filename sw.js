
self.addEventListener('install', function (event) {
 self.skipWaiting();
});

self.addEventListener("push", (e) => {  
var options = {
  "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
  "icon": "img/icon.png",
  "image": "https://stimg.cardekho.com/images/carexteriorimages/360x240/Mahindra/Mahindra-Alturas-G4/1547728970602/047.jpg",
  "badge": "https://stimg.cardekho.com/images/carexteriorimages/360x240/Mahindra/Mahindra-Alturas-G4/1547728970602/047.jpg"
};

  e.waitUntil(self.registration.showNotification("test", options));
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
