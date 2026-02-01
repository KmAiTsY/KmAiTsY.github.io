const CACHE_NAME = 'newage-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/game.swf',
  './ruffle/ruffle.js' // якщо він локальний
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});