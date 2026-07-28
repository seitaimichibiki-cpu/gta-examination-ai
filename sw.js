const CACHE_NAME = 'gta-ai-cache-v2';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './help.html',
  './icon-192.png',
  './icon-512.png'
];

// インストール時：新しいキャッシュを作成
self.addEventListener('install', event => {
  self.skipWaiting(); // 即座に新しいSWを有効化
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// 有効化時：古いキャッシュを削除
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => self.clients.claim()) // 即座に全タブを制御
  );
});

// フェッチ時：ネットワーク優先、失敗時のみキャッシュを使用
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // ネットワーク成功時：キャッシュも更新する
        if (response.ok) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // ネットワーク失敗時（オフライン等）：キャッシュから返す
        return caches.match(event.request);
      })
  );
});
