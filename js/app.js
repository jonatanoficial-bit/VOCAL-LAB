(() => {
  const build = { version: 'VVL-1.0.0-F01', builtAt: '2026-07-21T17:23:26-03:00' };
  const dateTarget = document.querySelector('#buildDate');
  if (dateTarget) dateTarget.textContent = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'America/Sao_Paulo' }).format(new Date(build.builtAt));
  const sidebar = document.querySelector('#sidebar');
  document.querySelector('#menuButton')?.addEventListener('click', () => sidebar.classList.toggle('open'));
  const toast = document.querySelector('#toast');
  document.querySelectorAll('.locked, .disabled').forEach((item) => item.addEventListener('click', (event) => {
    event.preventDefault(); toast.textContent = 'Este módulo será liberado nas próximas fases.'; toast.classList.add('visible'); setTimeout(() => toast.classList.remove('visible'), 3200);
  }));
  if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
})();
