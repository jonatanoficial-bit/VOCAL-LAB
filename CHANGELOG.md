# Changelog — VALE VOICE LAB

## VVL-1.1.0-F18 — 23/07/2026 · 18:02 BRT

### Módulo 1 — Diagnóstico vocal
- Avaliação guiada em dez etapas com instruções, temporizadores, referências sonoras e piano animado.
- Classificação vocal probabilística com pesos: extensão 25%, tessitura 30%, precisão 15%, conforto 10%, estabilidade 10%, sustentação 5% e registro 5%.
- Vinte e seis perfis genéricos e detalhados entre soprano, mezzo, contralto, tenor, barítono e baixo.
- Resultado premium com probabilidades, mapa vocal, métricas e explicação compreensível.

### Módulo 2 — Professor virtual
- Banco determinístico de 342 vocalises em 19 categorias e 18 padrões musicais.
- Metadados completos: objetivo, dificuldade, duração, faixa, notas, tempo e sequência.
- Gerador sonoro, teclado animado, pontuação em cents e feedback pedagógico durante o exercício.
- Plano diário adaptado à classificação e aos indicadores mais frágeis.

### Módulo 3 — Evolução profissional
- Histórico individual com comparação visual entre sessões.
- Relatório PDF com probabilidades, métricas, recomendações, metas e advertências.
- Alternativa de impressão quando a biblioteca PDF online estiver indisponível.

### Segurança e limites
- Nenhum arquivo de áudio é gravado ou enviado.
- Classificação e passaggio são hipóteses; não constituem diagnóstico ou definição fach definitiva.

## VVL-1.0.0-F10 — 22/07/2026 · 12:10 BRT

### Fase 07 — Sustentação e intensidade
- Cronômetro de nota sustentada, dispersão de intensidade e indicador de estabilidade.

### Fase 08 — Vibrato
- Leitura exploratória de taxa, amplitude e regularidade durante nota sustentada.

### Fase 09 — Ataque vocal
- Medição de tempo até o primeiro sinal vocal e dispersão inicial de frequência.

### Fase 10 — Observação de transições
- Identificação de mudanças abruptas de frequência ou intensidade durante sirene lenta.
- Comunicação explícita: não classifica registros vocais nem diagnostica a voz.

### Perfil, salvamento e Firebase
- Perfil individual e resumos de sessões em IndexedDB local.
- Camada Firebase opcional com autenticação anônima e Firestore.
- Identidade SVG para navegação, favicon e instalação PWA.
- Tutorial detalhado para configuração segura do Firebase Spark.

### Próxima fase
- Análise espectral, harmônicos, brilho e energia.

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
