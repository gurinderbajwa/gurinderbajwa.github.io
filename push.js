var push = require("web-push");

let validKeys = {
  publicKey:
    "BGczJY4f9Xlq5Sd5En_NZZMKR3xhAGvvHV1AZBw219fSHgqaKi7D8OWLAQZNPYiPEdydVvTSW4LFocxo-f4bAuU",
  privateKey: "Td90_7juzTolf8g2DumrT8ELhChwegr_ku6_pkIvWUM",
};

push.setVapidDetails(
  "mailto:test@test.com",
  validKeys.publicKey,
  validKeys.privateKey
);

let sub = {};

push.sendNotification(sub, "test");
