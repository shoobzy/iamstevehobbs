// import service worker script
importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

// Network First
[
    "/$",  // Index
    "/*",  // Anything in the same host
    ".+/*" // Anything in any host
]
.forEach(mask => {
    workbox.routing.registerRoute(
        new RegExp(mask),
        new workbox.strategies.NetworkFirst( { cacheName: "dynamic" } )
    );
});
