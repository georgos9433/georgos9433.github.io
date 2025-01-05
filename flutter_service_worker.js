'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "234802eb7629736bc557fd9beac6a6b6",
"assets/AssetManifest.bin.json": "25e28a7f5bd7def1cd42646b3e04dd81",
"assets/AssetManifest.json": "67d143b8d70396b8f7548300301938c2",
"assets/assets/canottaVert.png": "813c221729a6e6236de24f1186707d2c",
"assets/assets/cappello.png": "3f5a879f161e239c688899657261d5e7",
"assets/assets/creativity.png": "a9098df68e6cdf78c9d462f647a180f7",
"assets/assets/empty.png": "deaf1d2a524a15a894bca5272117a9a0",
"assets/assets/enthusiasm.png": "e4bf63ed445ac8d33f1a70577178137c",
"assets/assets/giletVert.png": "4b579d10736e1f7baa5d114a5f745159",
"assets/assets/giromanicaVert.png": "42c74c8386b9fac63be8dc5d40d0780d",
"assets/assets/gonnaStretta.png": "967de5fed1d25c85cc2924622987577e",
"assets/assets/gonnaSvasata.png": "d607a50297f23d5b585f5f0e3f8976a5",
"assets/assets/knit.png": "f7d2ae0364306a7969b90c6f0dc78188",
"assets/assets/knitting.png": "f9c8c5448f3318eb17571e436f378152",
"assets/assets/logo_foreground.png": "e50b1c540322987f4ba73eadef49d031",
"assets/assets/logo_negozio.png": "75ff02be9842ef50e45884951cee0f72",
"assets/assets/maglia.png": "89dd7ebb40a8090b571e519b23deee67",
"assets/assets/measurement.png": "60b5243c567a074f5b48c3685a05524d",
"assets/assets/notFound.png": "f745b4f0fd5dffe9225992eefe212ab0",
"assets/assets/pantaloneStretto.png": "8b08692f364b62f1da3da26bc2ed6da5",
"assets/assets/punti/ajour.png": "96812f8cb2712cdc250cd1737cfccb2f",
"assets/assets/punti/costa_inglese.png": "5350d1e40f2ed0f864b41e9ca21af018",
"assets/assets/punti/grana_di_riso.png": "403ab080068c79a7f38a9bf7aa34a6d6",
"assets/assets/punti/grana_di_riso_doppia.png": "101126aeb46db3936dfe87b6c51ecbb8",
"assets/assets/punti/grana_di_riso_lunga.png": "a73dc9ce3c2d624f29bc5a8711797e3c",
"assets/assets/punti/legaccio.png": "b0ee5eb4912c040ed9b5aa8a5ec80a16",
"assets/assets/punti/notFound.png": "f745b4f0fd5dffe9225992eefe212ab0",
"assets/assets/punti/rasato.png": "65ac97cd9f031c1f8d64af1fcab82574",
"assets/assets/punti/rete.png": "4516d6547056afe97f8b84d692ebcbfc",
"assets/assets/punti/traforo.png": "09a4a7d9eaf7c489c772585e6a48e485",
"assets/assets/punti/trecce.png": "c1c9d92ef1db6d206ef77dbd33bbc7f4",
"assets/assets/Raglan.png": "167a69af99377d5bf5f939d8aa474641",
"assets/assets/raglanVert.png": "d31dfe2521b5cda8d8611f19c6b1e21d",
"assets/assets/taglia.png": "70df15f92b66abfe6ccbfd34c8d25b4a",
"assets/FontManifest.json": "7b3b848aed509ecd684cc2f89aaf4e31",
"assets/fonts/CustomIcons.ttf": "cffecb3260200e277e8e67a83d065a1a",
"assets/fonts/MaterialIcons-Regular.otf": "49795ca2cffbd92fd977f79fbfb58c1d",
"assets/NOTICES": "e5f4b4d0c7681902d86317aab391d339",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "8e0a7cc0b0b483d6dc490ce146e9cdef",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "c39721cd84c2772b371f4fe4796a135d",
"icons/Icon-192.png": "dbff4be45883e49b002f2a1a1e9d09ee",
"icons/Icon-512.png": "f710430db9099df87c80d0f940cb63d2",
"icons/Icon-maskable-192.png": "dbff4be45883e49b002f2a1a1e9d09ee",
"icons/Icon-maskable-512.png": "f710430db9099df87c80d0f940cb63d2",
"index.html": "f202168e3c4af6849ff37c9dc704f532",
"/": "f202168e3c4af6849ff37c9dc704f532",
"main.dart.js": "f53f73a865be5f8d591f0ce6a759d2b4",
"manifest.json": "75c5ad6a7bc1e5d9d1e4a979bfdc76cc",
"version.json": "0a7052afdb64fbab9e646842a5cfe5b6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
