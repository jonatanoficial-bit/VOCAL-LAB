// Fase 01: base segura para PWA. O cache estratégico será ativado na Fase 22.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
