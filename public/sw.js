importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the `precacheAndRoute` line.

self.addEventListener('push', () => {
    event.waitUntil(
      registration.showNotification("Hello!", {
        body: "This is a push notification!",
      })
    );
  });

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);