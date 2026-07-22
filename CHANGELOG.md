# Changelog — VALE VOICE LAB

## VVL-1.0.0-F06 — 22/07/2026 · 10:41 BRT

### Fase 03 — Frequência fundamental
- Detector local de frequência por autocorrelação normalizada, limitado a 70–1050 Hz.
- Rejeição de sinal fraco e nível de confiança para reduzir leituras sem voz.

### Fase 04 — Afinação
- Conversão de frequência para nota musical, MIDI e desvio em cents.
- Referência A4 selecionável: 432, 440 ou 442 Hz.

### Fase 05 — Extensão vocal
- Mapeamento temporário da nota mais grave e mais aguda durante sirenes controladas.
- Aceita somente amostras que superam os critérios de confiança e ruído ambiente.

### Fase 06 — Tessitura estimada
- Sessão de conforto com intervalo calculado pelos percentis 20–80 de amostras estáveis.
- Avisos claros de amostras insuficientes e de limites de interpretação.

### Próxima fase
- Testes de sustentação, estabilidade de intensidade e controle respiratório.

## VVL-1.0.0-F02 — 21/07/2026 · 17:40 BRT

### Adicionado
- Estação de captura de áudio com permissão explícita do microfone.
- Seleção de dispositivo de entrada, nível de sinal em tempo real e leitura em dBFS.
- Calibração local de ruído ambiente e indicador de qualidade de sinal.
- Mensagens para incompatibilidade, permissões e microfone indisponível.
- Proteções de privacidade: nenhum áudio é gravado, enviado ou persistido.

### Próxima fase
- Detecção de frequência fundamental e nível de confiança para notas musicais.

## VVL-1.0.0-F01 — 21/07/2026 · 17:23 BRT

### Adicionado
- Estrutura inicial para GitHub Pages, sem dependências externas.
- Interface premium responsiva: navegação, hero, painel de build e roadmap.
- Identidade visual escura com azul, prata e ciano.
- Manifest PWA e Service Worker base (sem cache de ativos nesta fase).
- Metadados da build e estado operacional visíveis no painel.

### Próxima fase
- Captura de microfone, permissões, calibração e fluxo de áudio.
