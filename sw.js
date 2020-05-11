self.addEventListener("push", (e) => {
  var options = {
  "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
  "icon": "img/icon.png",
  "imageUrl": "https://stimg.cardekho.com/images/carexteriorimages/360x240/Mahindra/Mahindra-Alturas-G4/1547728970602/047.jpg",
  "vibrate": [200, 100, 200, 100, 200, 100, 400],
  "tag": "request",
  "actions": [
    { "icon": "https://stimg.cardekho.com/images/carexteriorimages/360x240/Mahindra/Mahindra-Alturas-G4/1547728970602/047.jpg" }
  ]
};

  e.waitUntil(self.registration.showNotification("test", options));
});
