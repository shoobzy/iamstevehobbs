const created = 'Wed Feb 13 2019 19:36:38 GMT+0000 (Greenwich Mean Time)';
const caches = ['/assets/index.html','/assets/src.e31bb0bc.js','/assets/src.e31bb0bc.map','/assets/src.e31bb0bc.css','/assets/LaBergerie.cec98d3c.js','/assets/LaBergerie.cec98d3c.map','/offline.html'];
const cacheName = 'iamstevehobbs-5611e1b7';
const offlineUrl = '/offline.html';

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(cacheName).then(function(cache) {
    cache.addAll(caches).then(() => self.skipWaiting());
  }));
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(fetch(event.request.url).catch(function() {
      caches.match(offlineUrl);
    }));
  } else {
    event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
  }
});
