const created = 'Tue Jan 29 2019 19:59:45 GMT+0000 (Greenwich Mean Time)';
const caches = ['/assets/index.html','/assets/__/manifest.webmanifest','/assets/icons-192.8a6f6de5.png','/assets/icons-512.447d5a65.png','/assets/src.e31bb0bc.js','/assets/src.e31bb0bc.map','/assets/src.e31bb0bc.css','/assets/la-bergerie.b1f00406.webp','/assets/three-streams.20d838b5.webp','/assets/ecommerce-landing-page.adf53967.webp','/assets/product-detail-concept.f9af520c.webp','/assets/bethany.fa2d9224.webp','/assets/seetheworld.c27f10b9.webp','/assets/henry.cd32e8fb.webp','/assets/no-14.92ec1491.webp','/assets/moonshine.ef669753.webp','/assets/open-24-hours.6cf59183.webp','/assets/solstice.65463f30.webp','/assets/milkyway.0d8fa83f.webp','/assets/LaBergerie.cec98d3c.js','/assets/LaBergerie.cec98d3c.map','/assets/exterior.68c7ba24.webp','/assets/logo-main.af3bb286.webp','/assets/logo-main.85b59e84.png','/assets/ecommerce-concept.422798e8.webp','/assets/ecommerce-concept-full.05f93042.png','/assets/product-detail-full.9ae128b7.png','/assets/bethany-poster.28bad148.webp','/assets/bethany-poster-full.065b1a7b.png','/assets/henry-poster.fa745f65.webp','/assets/henry-poster-full.561b371e.png','/assets/moonshine.ca43a9be.webp','/assets/moonshine-full.354812d5.png','/assets/diner.673c66bd.webp','/offline.html'];
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
