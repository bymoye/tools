'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"main.dart.js_9.part.js": "a12e830d2fa2ad95f68a55fe262cd226",
"main.dart.mjs": "a5e2ab795e7def5547529964217d0489",
"main.dart.js_34.part.js": "ed9f1d9e78efb174dc24aa7ae481eebb",
"index.html": "7609571ca85fb7fecda1645389c34f7a",
"/": "7609571ca85fb7fecda1645389c34f7a",
"main.dart.js_29.part.js": "f70f6310b18f76221ceb4519aef3f65c",
"main.dart.js_12.part.js": "c2b133aee556f507db02619b3b3d1ea3",
"main.dart.js_6.part.js": "0179864d93427cb00e9658da22f3c47a",
"main.dart.js_32.part.js": "10e87ae5ffcc3bfb7838f750a12fd048",
"assets/NOTICES": "b071b7f2c11032e07d21d6bd1a070399",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "42e21d23e0b280c42b591e12410670ed",
"assets/js/picker_directory.js": "f98b934df8dc712d8ec8ba3e849af256",
"assets/fonts/MaterialIcons-Regular.otf": "ee5011d74b85045887106b56a9cc0b42",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/AssetManifest.bin.json": "cb1a064ed8bbe60f1c052548bd2c173a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/AssetManifest.json": "427cfdab246299301979631e69341e4c",
"main.dart.js_21.part.js": "d190f6d1fcc5045c15ceaa8e9fb6762a",
"version.json": "90e0ea526d6a4c4cd5d60f91f506169a",
"main.dart.js_14.part.js": "68ba85d1e5a074c6214e2a54f681c7ed",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "2947f255474326df74c558d5c0140571",
"main.dart.js_2.part.js": "41ad9412db9baf88b60d2268cd0774dd",
"main.dart.js_24.part.js": "8e52397d3b429acc1844601d3af4436a",
"main.dart.js_25.part.js": "862829d3ffc238b45d83d6678e6cb8d8",
"main.dart.js_17.part.js": "f4242a11410d3abd87c4a34da8abc6e4",
"main.dart.js_23.part.js": "4e87bd3223efb5e4b01b8ec2bba0ed30",
"main.dart.js_4.part.js": "b3b6d99ba2eccc985b701af304097946",
"main.dart.js_3.part.js": "0bb511e1bd85a1ea023845de2acde473",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js_28.part.js": "87b17a7b2483129174fb574ee81343a4",
"manifest.json": "a4e37601eb1ff7d671bdc474e2d678f9",
"main.dart.js_13.part.js": "82749229b08238f0b9dc25ae1825e042",
"main.dart.js_8.part.js": "08914d70f16995da8abdfd866639d967",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_16.part.js": "1c0952ab9dc19e927fb32235a88f12e6",
"main.dart.js_11.part.js": "e8cffc696ebb764b440c0720479b2f3e",
"main.dart.js_7.part.js": "387f850638b89d6d0c31686e9c0e1034",
"main.dart.js_35.part.js": "c7c4533cec8badf07c6871054674efa8",
"main.dart.js_27.part.js": "11ae7391ac60fd588a104c9648afa5d2",
"main.dart.wasm": "e108d321ad791d91e809169d541e4ae0",
"main.dart.js_18.part.js": "cb16900e0aa78a29c22da5e720b89a2d",
"main.dart.js_26.part.js": "17f84e188f9bcb8634c1126e2465c7d1",
"main.dart.js_10.part.js": "ea4bed77c41bda6c274c05a5f139470c",
"main.dart.js_31.part.js": "936d526ceb45ef561179dfbdf35f550b",
"main.dart.js_19.part.js": "6ecdb8acf78fcdf0be415a74c42a86f0",
"main.dart.js_33.part.js": "dbf59a9daf39aad78481f87bc802d0fd",
"main.dart.js_1.part.js": "d08792be1132fda3fe517099531761bc",
"flutter_bootstrap.js": "271710c8a1117f694604c3bf0541dd66",
"main.dart.js_15.part.js": "6e755f87c62050bcdfcf3eb644a5b083"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
