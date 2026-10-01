const CACHE_NAME = 'murugesh-maligai-v12';

const STATIC_ASSETS = [
  './',
  './index.html',
  './shop.html',
  './styles.css',
  './products.js',
  './manifest.json',
  './images/favicon.png',
  './images/icon-192.png',
  './images/icon-512.png',
  './images/apple-touch-icon.png',
  './images/hero_bg.jpg'
];

// Install Event - Cache Core Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Network First with Cache Fallback for dynamic freshness
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  // Skip Google Sheets live sync CSV requests from caching so price changes are always real-time
  if (event.request.url.includes('docs.google.com') || event.request.url.includes('sheets.google.com')) {
    return;
  }

  // During local development (Live Server), always fetch directly from network to prevent stale caching
  if (event.request.url.includes('127.0.0.1') || event.request.url.includes('localhost')) {
    event.respondWith(fetch(event.request));
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('./index.html');
          }
        });
      })
  );
});
