'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js_12.part.js": "c635075e37b2b6a3f1f210040fb94aca",
"main.dart.js_10.part.js": "d8543539a452a77314a833b9f58ce58a",
"main.dart.js_30.part.js": "469d85b280980a4d431b8eabbdff6b73",
"main.dart.js_39.part.js": "f6519b01b081b9ba8c4d45c2bda1652b",
"main.dart.js_26.part.js": "b2da1c8299b88c7762c1217682e96b71",
"main.dart.js_9.part.js": "83aa3db7879efeba9da1044755a0b7f8",
"main.dart.js_23.part.js": "2d46060da4455a85a3883eb0ba865888",
"main.dart.js_7.part.js": "509afa8b54ecf6e59c8af5a68c15b597",
"main.dart.js_34.part.js": "1eeb1f47a63d390615e04d7a20b7744d",
"main.dart.js_3.part.js": "a730a6d790679997c4d4f8d4f64da848",
"main.dart.js_21.part.js": "e64129063534b82f1822a92b87eaa411",
"assets/AssetManifest.json": "427cfdab246299301979631e69341e4c",
"assets/AssetManifest.bin": "42e21d23e0b280c42b591e12410670ed",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/fonts/MaterialIcons-Regular.otf": "ba39ec1cbe86f454813994d19351dccf",
"assets/AssetManifest.bin.json": "cb1a064ed8bbe60f1c052548bd2c173a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "92e103af390610da73bd22acfccbe102",
"assets/js/picker_directory.js": "f98b934df8dc712d8ec8ba3e849af256",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "90580190a5349ea2d3a73ccca4c41e4a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"main.dart.js_19.part.js": "96d079e5c8c7a5447f91e91ebc967e47",
"main.dart.js_32.part.js": "275c890daca7e6385bb913b021a6dc79",
"manifest.json": "a4e37601eb1ff7d671bdc474e2d678f9",
"main.dart.js_1.part.js": "ab8fe906cc91bed93440bf350ff47ce5",
"main.dart.js_15.part.js": "6d3b011d23e4859ce38220ae36379da5",
"version.json": "90e0ea526d6a4c4cd5d60f91f506169a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"main.dart.js_27.part.js": "3d015ce1c4821d4d99b5ecdf8bb4ec96",
"main.dart.js_25.part.js": "89510132ddb96a97778fa2d95c0f16fb",
"main.dart.js_35.part.js": "5101504b97377417a75f128960f6d63f",
"index.html": "37692e7454d87dbf148d95e6bdf0a48d",
"/": "37692e7454d87dbf148d95e6bdf0a48d",
"main.dart.js_8.part.js": "d93dd448a1f32546aa8d318009d5cad6",
"main.dart.js_14.part.js": "2dfb96af910526a09546d336691ac4b0",
"main.dart.js_2.part.js": "1de547bba4043b68395c6b6e942c4ffc",
"flutter_bootstrap.js": "d6edfc660489a745c5f2d2790057bb1a",
"main.dart.wasm": "74dcbfab6d59aad0f41f93d0976b337f",
"main.dart.js_36.part.js": "c92bd7efda87b71001d6261c035ccc89",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.mjs": "0335ca68e95ad53ddf14313bb40be1e9",
"main.dart.js_20.part.js": "0516d97829a40250f2b08d678e9e8233",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_11.part.js": "f073fcddf1c2e6bd01d45b46a597ac8d",
"main.dart.js_38.part.js": "67d0bbb3c5e028a076e2ead24aafc83b",
"main.dart.js_4.part.js": "116dfa7d25e199eba3fbb96064d1df9c",
"main.dart.js_13.part.js": "52588f5a529602c2178c9e1784208779",
"main.dart.js_31.part.js": "0a74ab6977be8ca3018560cad4fd0ad2",
"main.dart.js_18.part.js": "5ea658eee7d45816a376ed6d924cb239",
"main.dart.js_37.part.js": "71e86596f907c919865401810c3aa3a4",
"main.dart.js_29.part.js": "43f6c2c1ebf4cd3dd756674d6d99dc11",
"main.dart.js_6.part.js": "85b91b94bf9a67113042978d602e5b13",
"main.dart.js": "f128b6a916f038d132f52d2efbef50ef",
"main.dart.js_16.part.js": "2489f839f4194e92b0af36030f2fda04",
"main.dart.js_28.part.js": "c63b579f4101f199734fac5a6e314e11"};
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
