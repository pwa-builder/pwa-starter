// Add custom service worker logic, such as a push notification serivce, or json request cache.

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
