/* Hello, Virtually — service worker (PWA + Web Push) */
const CACHE = "hv-v1";

self.addEventListener("install", (e) => { self.skipWaiting(); });
self.addEventListener("activate", (e) => { e.waitUntil(self.clients.claim()); });

/* Navegación: red primero, caché como respaldo (para que las actualizaciones lleguen siempre) */
self.addEventListener("fetch", (e) => {
  if (e.request.mode !== "navigate") return;
  e.respondWith(
    fetch(e.request, { cache: "no-store" })
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request).then((m) => m || caches.match("/portal.html")))
  );
});

/* Push: llega un lead nuevo */
self.addEventListener("push", (e) => {
  let data = {};
  try { data = e.data ? e.data.json() : {}; } catch (err) { data = { title: "Hello, Virtually", body: e.data ? e.data.text() : "" }; }
  const title = data.title || "New lead";
  const opts = {
    body: data.body || "",
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    tag: data.tag || "hv-lead",
    data: { url: data.url || "/portal.html" }
  };
  e.waitUntil(self.registration.showNotification(title, opts));
});

/* Tocar la notificación abre (o enfoca) el portal */
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || "/portal.html";
  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
      for (const c of list) {
        if (c.url.includes("portal") && "focus" in c) return c.focus();
      }
      return self.clients.openWindow(url);
    })
  );
});
