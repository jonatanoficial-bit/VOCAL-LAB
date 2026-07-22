# VALE VOICE LAB — Fases 07 a 10

Build **VVL-1.0.0-F10** · 22/07/2026 · 12:10 BRT

Build local avançada com sustentação, vibrato, ataque vocal, observação de transições, perfil individual e sincronização Firebase opcional.

## Estrutura

- `index.html` — tela inicial.
- `css/` — design responsivo.
- `js/` — captura local, análises, histórico individual e Firebase opcional.
- `assets/` — ícones e futuros recursos visuais.
- `docs/` — auditorias da fase.
- `BUILD.json` — identificação e destino da build.
- `FIREBASE_TUTORIAL.txt` — configuração segura do Firebase gratuito.

A captura solicita permissão somente após uma ação explícita, processa o sinal localmente e não salva nem envia áudio. Por padrão, os resumos ficam apenas no navegador e separados por perfil. O Firebase é opt-in e sincroniza somente resultados numéricos quando configurado.
