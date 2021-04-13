const anuraggharat = "anuraggharat-v1";
const assets = [
  "/",
  "./index.html",
  "./about.html",
  "./blog.html",
  "./contact.html",
  "./projects.html",
  "./style.css",
  "./app.js",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(anuraggharat).then((cache) => {
      cache.addAll(assets);
    })
  );
});
self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});