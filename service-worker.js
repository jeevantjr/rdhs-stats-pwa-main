const CACHE_NAME = 'health-stats-demo-cache-v22'; // Update this version after every significant change
const DEBUG = false; // Set to true for development logging

const urlsToCache = [
  '/health-stats-demo/',
  '/health-stats-demo/index.html',
  '/health-stats-demo/manifest.json',

  // Images
  '/health-stats-demo/images/icon-192.png',
  '/health-stats-demo/images/icon-512-from-building.png',
  '/health-stats-demo/images/login-bg.jpg',

  // CardDetails
  '/health-stats-demo/CardDetails/index.html',
  '/health-stats-demo/CardDetails/MOHCadreDetails.html',
  '/health-stats-demo/CardDetails/HospitalCadreDetails.html',
  '/health-stats-demo/CardDetails/MOHCadreDetails.pdf',
  '/health-stats-demo/CardDetails/HospitalCadreDetails.pdf',
  '/health-stats-demo/CardDetails/rdhs.pdf',

  // Statistics
  '/health-stats-demo/statistics/index.html',
  '/health-stats-demo/statistics/communicable-diseases.html',
  '/health-stats-demo/statistics/health-personnel.html',
  '/health-stats-demo/statistics/hospitals-by-ds.html',
  '/health-stats-demo/statistics/maternal-deaths.html',
  '/health-stats-demo/statistics/registered-births.html',
  '/health-stats-demo/statistics/unprotected-births.html',
   '/health-stats-demo/statistics/statistics/Bed.html',
  '/health-stats-demo/statistics/statistics/Inward.html',
  '/health-stats-demo/statistics/statistics/Outdoor.html',
   '/health-stats-demo/statistics/statistics/Dengue.html',

  // Clinic Details
  '/health-stats-demo/institutions/index.html',
  '/health-stats-demo/institutions/institutionschedule.html',
  '/health-stats-demo/institutions/specialclinicsdetails.html',

  // Health Education
  '/health-stats-demo/healtheducation/index.html',
  '/health-stats-demo/healtheducation/FeedYourBaby.html',
  '/health-stats-demo/healtheducation/Leptospirosistamil.html',
   '/health-stats-demo/healtheducation/Leptospirosissinhala.html',

  // Monthly statistics (adjust if these are outside your scope)
  '/health-stats-demo/MonthlyStatistics/index.html',
  '/health-stats-demo/MonthlyStatistics/dengue2.html',
 '/health-stats-demo/MonthlyStatistics/Anaemia.html',
  '/health-stats-demo/MonthlyStatistics/Leprosy.html', 
   '/health-stats-demo/MonthlyStatistics/ChildDeaths.html',
  '/health-stats-demo/MonthlyStatistics/Underweight.html',
 '/health-stats-demo/MonthlyStatistics/TeenagePregnant.html',

  //Notice Board
  '/health-stats-demo/NoticeBoard.html',
  
  // Offline fallback page
  '/health-stats-demo/offline.html',
];

// Install event with resilient caching
self.addEventListener('install', (event) => {
  if (DEBUG) console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of urlsToCache) {
        try {
          await cache.add(url);
          if (DEBUG) console.log('[Service Worker] Cached:', url);
        } catch (err) {
          console.warn('[Service Worker] Failed to cache:', url, err);
        }
      }
    })
  );
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  if (DEBUG) console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            if (DEBUG) console.log('[Service Worker] Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      )
    )
  );
  return self.clients.claim();
});

// Fetch event
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  if (event.request.mode === 'navigate') {
    // Network-first strategy for navigation
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const cloned = response.clone();
          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, cloned);
            })
          );
          return response;
        })
        .catch(() => {
          if (DEBUG) console.warn('[Service Worker] Offline fallback for navigation.');
          return caches.match('/health-stats-demo/offline.html');
        })
    );
  } else {
    // Cache-first strategy for static assets
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request)
          .then((networkResponse) => {
            const cloned = networkResponse.clone();
            event.waitUntil(
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, cloned);
              })
            );
            return networkResponse;
          })
          .catch(() => {
            if (DEBUG) console.warn('[Service Worker] Request failed and no cache found:', event.request.url);
            return caches.match('/health-stats-demo/offline.html');
          });
      })
    );
  }
});
