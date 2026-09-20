/* Burnham Park Baguio — Service Worker
 * Strategy:
 *  - Navigation requests: network first, fall back to cache, then to /offline/
 *  - Same-origin static assets (images, svg, manifest): cache first
 * Note: never cache Google or other third-party resources.
 */
const VERSION = 'burnham-park-v1';
const SHELL_CACHE = `${VERSION}-shell`;
const ASSET_CACHE = `${VERSION}-assets`;
const OFFLINE_URL = '/offline/';

const PRECACHE_URLS = ['/', '/manifest.webmanifest', '/offline/', '/favicon.svg'];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(SHELL_CACHE)
			.then((cache) => cache.addAll(PRECACHE_URLS.map((url) => new Request(url, { cache: 'reload' }))))
			.catch(() => undefined)
	);
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys
						.filter((key) => key.startsWith('burnham-park-') && key !== SHELL_CACHE && key !== ASSET_CACHE)
						.map((key) => caches.delete(key))
				)
			)
			.then(() => self.clients.claim())
	);
});

function isNavigation(request) {
	return request.mode === 'navigate' || (request.method === 'GET' && (request.headers.get('accept') || '').includes('text/html'));
}

async function cacheFirst(request) {
	const cache = await caches.open(ASSET_CACHE);
	const hit = await cache.match(request);
	if (hit) return hit;
	try {
		const response = await fetch(request);
		if (response && response.ok && response.type === 'basic') {
			cache.put(request, response.clone());
		}
		return response;
	} catch (err) {
		return hit || Response.error();
	}
}

async function networkFirst(request) {
	const cache = await caches.open(SHELL_CACHE);
	try {
		const response = await fetch(request);
		if (response && response.ok) {
			cache.put(request, response.clone());
		}
		return response;
	} catch (err) {
		const hit = await cache.match(request);
		if (hit) return hit;
		const offline = await cache.match(OFFLINE_URL);
		if (offline) return offline;
		throw err;
	}
}

self.addEventListener('fetch', (event) => {
	const { request } = event;
	if (request.method !== 'GET') return;

	const url = new URL(request.url);
	// Only handle same-origin requests — Google Maps embeds and reviews are loaded live.
	if (url.origin !== self.location.origin) return;
	if (url.pathname.startsWith('/admin') || url.pathname.startsWith('/api')) return;

	if (isNavigation(request)) {
		event.respondWith(networkFirst(request));
		return;
	}

	if (['image', 'style', 'font'].includes(request.destination) || /\.(jpe?g|png|svg|webp|ico|css|woff2?)$/i.test(url.pathname)) {
		event.respondWith(cacheFirst(request));
	}
});

self.addEventListener('message', (event) => {
	if (event.data && event.data.type === 'SKIP_WAITING') {
		self.skipWaiting();
	}
});
