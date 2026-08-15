/* =============================================
   PWA SERVICE WORKER (โรงเรียนจิตรลดา - ตารางเวร)
   ============================================= */

const CACHE_NAME = 'chitralada-duty-cache-v36';
const ASSETS_TO_CACHE = [
  './',
  './index.html?v=v36',
  './style.css?v=v14',
  './script.js?v=v36',
  './supabase-config.js?v=v3',
  './calendar.png',
  './manifest.json',
  './Shift Swap.pdf',
  'https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700;800&display=swap',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
];

// Install Event: Cache Static Assets & Immediately Skip Waiting
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('✅ PWA Caching fresh assets v3...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Event: Clean up old caches & Claim Clients Immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('🧹 Clearing old PWA cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network-First Strategy
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request, { cache: 'no-cache' })
      .then(response => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});

