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
"main.dart.js_9.part.js": "715bdb5fbb120ddb38147b3ffebf0eb9",
"main.dart.mjs": "12072a6fbd92491bcca818d80982f259",
"index.html": "de8df8c00fdfb0bb3fb960b05008a15b",
"/": "de8df8c00fdfb0bb3fb960b05008a15b",
"main.dart.js_12.part.js": "8fe08206dc1b9b4bc354dd311d0f1164",
"main.dart.js_6.part.js": "56558a57eaa42e9937c5a601b05b91f3",
"assets/NOTICES": "b071b7f2c11032e07d21d6bd1a070399",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "42e21d23e0b280c42b591e12410670ed",
"assets/js/picker_directory.js": "f98b934df8dc712d8ec8ba3e849af256",
"assets/fonts/MaterialIcons-Regular.otf": "aac0d3e680c3985b73db94ced06c11a2",
"assets/FontManifest.json": "ec8a82ec184cf6cd45fbf68291b1fe6b",
"assets/AssetManifest.bin.json": "cb1a064ed8bbe60f1c052548bd2c173a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "36006a2aee699bab11e4562e9bd81963",
"assets/AssetManifest.json": "427cfdab246299301979631e69341e4c",
"main.dart.js_21.part.js": "db51c67e18b5e2614536af97e11b006b",
"main.dart.js_20.part.js": "445a2debe9bd023df8ef41315b59fce9",
"version.json": "90e0ea526d6a4c4cd5d60f91f506169a",
"main.dart.js_14.part.js": "15374b8eb3c0e9b6addcfb143eb90d8c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "af5901a08ce56a978ee0d66d842513ba",
"main.dart.js_2.part.js": "666ba107e971782a482f240988c19b04",
"main.dart.js_24.part.js": "6dedc87a207caa1376c61b0e115df1ca",
"main.dart.js_25.part.js": "df0704e706df814bf397252acd40fc52",
"main.dart.js_17.part.js": "003ac11c4b52ed6cfa15ce5117d7c036",
"main.dart.js_23.part.js": "47cc434525a45e140579796461927b0d",
"main.dart.js_4.part.js": "58973e77cc429870ed66b2b49a07dd78",
"main.dart.js_3.part.js": "019ace3db7762e3cd51728844e075d18",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js_28.part.js": "636f6943e46fa2c12d77569fea8015fe",
"manifest.json": "a4e37601eb1ff7d671bdc474e2d678f9",
"main.dart.js_13.part.js": "d35745d3ae5840e87124225ed6040673",
"main.dart.js_8.part.js": "fd55a5e3dc667b1d45e9726657dbec3c",
"main.dart.js_22.part.js": "e65818443669270425bb75dfba8c8952",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js_16.part.js": "fbb08b60ef451d8d38f3c42ba58bfc71",
"main.dart.js_11.part.js": "2381c860bc75e4120d31b6f38e366c3b",
"main.dart.js_7.part.js": "f7d7e6066753c082172d780a2e8cd1a9",
"main.dart.js_27.part.js": "051e63da479ed251951f8d4b29b89129",
"main.dart.wasm": "a43df555c3951b5a94f15120b25ccae8",
"main.dart.js_26.part.js": "e3a08f2c21390587fe1ed88e378a411f",
"main.dart.js_10.part.js": "8ad27ffe9b15efd27cae1b117186d5a5",
"main.dart.js_1.part.js": "e592a8fb296285a705a5d4e523b260bc",
"flutter_bootstrap.js": "c927d2b61eb63121e9c52fbec45061ee",
"main.dart.js_15.part.js": "e03e0d037a9a1167b0a8bb0cc27a1fe1"};
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
