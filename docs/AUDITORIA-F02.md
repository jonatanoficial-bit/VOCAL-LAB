# Auditoria de captura — Fase 02

**Build:** VVL-1.0.0-F02  
**Data:** 21/07/2026 · 17:40 BRT (America/Sao_Paulo)

## Escopo validado

| Item | Estado | Observação |
|---|---|---|
| Permissão explícita | Aprovado | `getUserMedia` só é chamado após ação do usuário |
| Processamento local | Aprovado | Não há gravação, upload ou persistência de áudio |
| Entrada selecionável | Aprovado | Enumera dispositivos de áudio disponíveis |
| Medidor de sinal | Aprovado | RMS em dBFS via `AnalyserNode` |
| Calibração de ruído | Aprovado | Média local de 3 segundos, sem armazenar amostras |
| Navegador/HTTPS | Aprovado | Exibe aviso quando APIs ou contexto seguro não estão disponíveis |

## Limites desta fase

- A supressão de ruído e o ganho automático são solicitados como desativados, mas cada navegador/dispositivo pode aplicar processamento próprio.
- Não há detecção de altura, nota ou classificação vocal nesta etapa.
- A precisão de medição depende do microfone, distância e ambiente.

## Critério para a Fase 03

Adicionar detecção de frequência fundamental em tempo real, com limiar de confiança e rejeição de sinal sem voz.
