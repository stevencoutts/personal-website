const CACHE_NAME = 'personal-website-v1';
const urlsToCache = [
    '/',
    'css/styles.css',
    'images/CCIE_Enterprise_med.png',
    'images/CCIE_Enterprise_med-dark.png',
    'images/pgp-desktop-logo.avif',
    'images/bluesky-icon.webp',
    'images/linkedin-icon.jpg',
    'images/github-icon.png'
];

// Install service worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activate service worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event handler
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Return cached version or fetch new
                return response || fetch(event.request);
            })
    );
}); 