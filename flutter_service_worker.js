'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "282ffc033f7b718798e40a3fb0acf9d0",
".git/config": "1225b90b795f3341d0460add9e0b5ec5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bf6dc08cec14ff029c3e8c20331a9455",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cba30d0a30ec001ffcf46aee20298ee9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c5929f75b063ff30bf3625eb569217f",
".git/logs/refs/heads/main": "176a941cd68444ad89d5eb3ef726ab48",
".git/logs/refs/remotes/orgin/main": "02924372a72656bd9d7ed619aeb15902",
".git/objects/00/6049ba3f1dee4ab81530d6dee090a8545c895e": "c923242520fec826750db58b4d2c42d6",
".git/objects/02/dd0ba5ea58320bbc1dfa7ce8cb4eadf7c341e1": "191b8b67d246445c08ab38c038fd5c29",
".git/objects/08/c3d0e3eeeb30009f71bf752a07c06bb38958aa": "51fe64fed867ecc34e45ef3c9c1e817a",
".git/objects/0f/358052941570766cc0a4a3919e43f9314ed234": "03943c7e2235983d198f54f685a5c3d6",
".git/objects/18/f7d877535b091e6f6e6fe1d4a3feda30d3973d": "21aa572bed215603b7210d1a2c9b71e5",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/529b8a3881450bf14b9e40dc101cc984ffb955": "19b720a314041029e328df9c830c20a1",
".git/objects/1d/ef06f3d19c7a5300782652d47dd3b1b596ad31": "ab56b23fdc713f4f0967d7cdc2bfcf2d",
".git/objects/20/3db40b5000458bd25ada42e756b4c59cedcc6c": "074299f95c8727230b5e7771e67f9011",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/21/9adce6bc5dfb45ecae2602c72b498fdfd66a18": "4b4e6e5a7f934b84d7cac39ed620daa8",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/29/ea2472763c02643235ec7fb5ba860fd12ecc6a": "d090446c87c3398582a369009d7297f2",
".git/objects/2b/d4c3b9715efb035a3baee5703a63693d746601": "9a638ed144de51c3b1a8342d2e5f6049",
".git/objects/2d/4e0de53e132881112df877dd2b6a424f2e0cd6": "51a9150111c63541e918b89deb781158",
".git/objects/35/2469eab8106b0e706547f29e6d6b03e00cd835": "84c379b66d620086e2d1df9bef3a3fa8",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/48bcddc1d81e56ebee573a2c7889d215a45099": "75180c64b66ef389e18368de4d860b38",
".git/objects/38/4a1881b81fe70912eb1490e6bd8a533bd1fba1": "4941dd35a1fd9cfbe38e15b38d485090",
".git/objects/3c/2cf1dcb36ea3c283184dbb698ef7e5b6470afd": "882a885274692af0ef591635a6f05fb4",
".git/objects/43/fa3639b5d6f907fa293f25fff3d6c9b2ac3aed": "ff261b7c66b6ffd14cd1b4dfb2d5ea03",
".git/objects/45/1cf1ef5bcac9060c55c1633e7da8375e5b27ec": "1729681c358b8244a4981488c40c17cf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/52/3133327a2be3d19056ecd3b77bb30bf885b6f8": "d71e93ed453146172565ca72e9d3886d",
".git/objects/54/ba9be3fe934726ed7c304eb99b15388f21a58a": "5f84ebe666b79745905897cb455f5f39",
".git/objects/58/7eaa407b513f6714657678a11445fdbd764b7c": "328cd15b16281a532e7ef46f82bfa355",
".git/objects/5a/825f6151b340fd6014303ef09f4603f12a8462": "c4e0848235d8a05a5741d382f52edea3",
".git/objects/5c/a9539621aa81e5ab7740fdac08b049532a333a": "e0fb5f8e5c6ca80c77f2767529862a57",
".git/objects/5f/c5b3b4a66f06178cbc138e58820407a83042b3": "dc3281be4e55d299cabda96f5dea0d4c",
".git/objects/60/0bbe157d60c2701b3307997b0e5561b64ba731": "39a1e3f97f5085f85b7b9f654fb4dab6",
".git/objects/64/1c5f2d14472175bd08eccc65bbe8a961ad4ad4": "da407e5c4f3f69ffb14d5358fd2fa912",
".git/objects/6b/6114114f4e89a1f2d0e911ff090e541af1260c": "8d69de88f018d1ea3e9f80298fb86856",
".git/objects/6e/32d8e85e70872d5f6c6665bb6da29c54d89bef": "80ca490548aef7b3463efe19cfe11292",
".git/objects/76/c20bf4d6e14447a4b7fda3764c35bfc9192d4e": "eb6a36adf6c893b122a175ec9f7df296",
".git/objects/7a/ca8622c04b1d7e8d00e25b50897618e3dd9b5e": "0c0e28828939d2a3d8449a6e16effb4b",
".git/objects/82/15e0e675e1836b35e5af398453b219257c74d0": "aade07d76c472a6df9bc368a7244ba35",
".git/objects/85/b8f3ca032386dd755fd197b4bef9c73e97d646": "01342e11145149790e7328d730928dd8",
".git/objects/86/7d9ddd53a635dc65afc0639698395a08132dc2": "c4055c396d8e2536043d0d24e788eba4",
".git/objects/87/7def11150e810c34e2789cf8e2723305a6d518": "c3456e6829092128b85026d215becc60",
".git/objects/87/843ced5fb8ff920f54fbd7c8b5c81ccacf0aca": "808b01392272d34bd0096a94a821cd7d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/1884b50a149b3881560e6ec796442a12aaebb6": "4b797e861c20b4f8518d600c5d5a0b5a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/94/e0ea7df972876946a7f3545471cb71c23dbd08": "176e1eb81987d065c4bb91f7fb8b523b",
".git/objects/95/2fa4f61d0db91eb554bf5db1f143497cf08eee": "d345b98f6f59b2963104963a4917e106",
".git/objects/9b/7c32e0e1527b3ae9e9ad37fc2d027a9d850d1c": "fb3d8474aa4ffbf42f740c39663b6ba8",
".git/objects/9d/e08681992a798438e4709180a43aa96bdf0fb4": "b1f53d40a1c8b58f22e1b4a6732a117b",
".git/objects/9e/0161fcf10d330579426944f4a7b1320843d3ca": "c2758f0202ee100daf1495869c6a446a",
".git/objects/ab/f3ab200ec9f215c83baa324fe53fbc0d596b90": "ba0b4554972ea52555349e3a37566794",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b4/6a31a6411793682b6b298aba264e49552e7ce4": "b04d4f07460fcccc7a22306cf28764f7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/8cdf2edc58dd2a9ad2b00d066e9c55a6f90ffb": "dc66e474d20ee37457eaf6023dee63d9",
".git/objects/c4/040029c6c519f2ca9361a53265169d1e5e1a16": "4e51264a269ef23df90fc583be5015ab",
".git/objects/c6/035c1bc04de1b6a18e51e1755b02a98fc262cb": "2eb393268079b03648447aba8c1d749c",
".git/objects/c6/519a99d2ca9d967f713cce42e531fb60e0ada9": "a7839dd1a79505f88c3db191b8ae5d19",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/6fffabf024d8eaf78b34c8f3e379ec571cac03": "06877be85e7d485c264e0844d1390d06",
".git/objects/de/b1a45f3ebd973743c804a4a5f74bdd18eaae6f": "eeba9cdcd21b46078616fab03e719cea",
".git/objects/df/a1ac13a79c630c16214ffcf81e82eef6ad1a2c": "cb3e135b60f6007a813eddd7b64c4c16",
".git/objects/e0/b9af8cfed48fdebf5cde0aa25180684a640507": "db23af87b5eb4d1b4237207bdc60e7bf",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e9/437999a2907d7c2d4ed9bd1eba6313b561c340": "8ff6c8ce37eb9a974204d4d9bb5fe9fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/c28411f14a70f1f60627e2d8324f1b275c0708": "7be8e495b4153a22cf228c33844a05c3",
".git/objects/ed/cceb45e99dd3d4ec820b807244008090649fea": "9ef94d340d6fcb1d102becfcb14c2fe2",
".git/objects/ff/1e6d80e28503a3050cd49bce47d063c29c6111": "994deb157ab8e17bc187a07b6c723139",
".git/objects/ff/e37985ddef86951bd8589ef3897ab6ee6d3ed1": "8c118ff05f135f3bb9a225f6d9948db8",
".git/refs/heads/main": "e5179bf7f1df9a9391134538ee8c035f",
".git/refs/remotes/orgin/main": "e5179bf7f1df9a9391134538ee8c035f",
".vs/slnx.sqlite": "bb6405152e82a163966aae091b2bc0b8",
".vs/VSWorkspaceState.json": "c5d8964c7f5288c0be2b2463a8eccc7a",
".vs/web/FileContentIndex/799ebaab-3eb3-4587-be3e-ebdbfe84da3b.vsidx": "2d4d521f5954bbb17300b6eee78c583c",
".vs/web/FileContentIndex/read.lock": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.bin": "b103c5efe4a95dacda3f4d33745bb1d0",
"assets/AssetManifest.json": "f7e13a39bd38102a01324ac67b1f33a7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/images/logo.png": "837c4288713dbe56af119bf799ccedee",
"assets/NOTICES": "61963aa33541dbdf092d7660f0802d95",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/canvaskit.wasm": "3effaeb644f5f4daaf7850adc9aabe41",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "86624da3c23c9a4133c5bce5dd545f2a",
"canvaskit/skwasm.js": "831c0eebc8462d12790b0fadf3ab6a8a",
"canvaskit/skwasm.wasm": "6118609bab1fb8a6095ece94742e4053",
"canvaskit/skwasm.worker.js": "7ec8c65402d6cd2a341a5d66aa3d021f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0a3bf942a3e2ba4dfc46fb9a9ec94ead",
"/": "0a3bf942a3e2ba4dfc46fb9a9ec94ead",
"main.dart.js": "16b0422ba05587c22b2947fcf87a3004",
"manifest.json": "5ffded85640b1c768106e64f9b6d5ec6",
"version.json": "3be553fa6d30b3ae8269819f3545b2ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
