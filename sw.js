self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});
self.addEventListener('fetch', (e) => {
  // 네트워크 요청 통과 (복잡한 오프라인 로직 생략)
});