# Auditoria — Build profissional F18

**Build:** VVL-1.1.0-F18  
**Data:** 23/07/2026 · 18:02 BRT

## Cobertura

- Diagnóstico guiado: 10 etapas.
- Classificações genéricas e detalhadas: 26 hipóteses.
- Pesos de score: total de 100%.
- Banco de vocalises: 342 exercícios gerados de forma determinística.
- Categorias: 19.
- Padrões musicais: 18.
- Relatório: PDF por biblioteca online, com fallback de impressão.
- Persistência: IndexedDB por perfil; Firebase opcional.
- Privacidade: nenhuma gravação de áudio.

## Limitações conhecidas

- Testes de microfone exigem HTTPS ou localhost e precisam ser feitos pelo usuário no dispositivo final.
- A classificação não foi calibrada contra uma base clínica ou conservatorial de cantores rotulados.
- Probabilidades são relativas ao conjunto de candidatos, não probabilidades clínicas.
- Subtipos fach e identificação de registro necessitam validação de professor de canto.
