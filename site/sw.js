'use strict';

// Keeps the finder working offline, e.g. in a chapel with no signal.
// Every request is answered from the cache when possible and refreshed in the
// background, so new data shows up on the next visit.

const CACHE = 'hymn-finder-v1';
const FILES = [
  './',
  'manifest.webmanifest',
  'icon.svg',
  'icon-192.png',
  'crosswalk.json',
  'languages/en/hymns.json',
  'languages/es/himnos.json',
  'languages/fr/cantiques.json',
  'languages/pt/hinos.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
  event.respondWith(caches.open(CACHE).then(async (cache) => {
    const cached = await cache.match(request, { ignoreSearch: true });
    const fresh = fetch(request).then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    });
    if (cached) {
      event.waitUntil(fresh.catch(() => {}));
      return cached;
    }
    return fresh;
  }));
});
