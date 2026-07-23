# VALE Voice Lab — Sistema profissional

## Propósito

Interpretar medições vocais em vez de exibir apenas notas. O sistema combina múltiplos indicadores e devolve hipóteses probabilísticas, explicações, plano de estudo e exercícios adaptados.

## Fluxo de diagnóstico

1. Preparação e segurança.
2. Medição do ambiente.
3. Vogais A, E, I, O e U.
4. Região grave confortável.
5. Região aguda confortável.
6. Tessitura por 20 segundos.
7. Sustentação.
8. Repetição de cinco referências adaptativas.
9. Glissando para observar transições.
10. Resultado interpretado.

O áudio não é gravado. Buffers temporários de frequência e intensidade são descartados ao recarregar a página.

## Pesos de classificação

| Indicador | Peso |
|---|---:|
| Extensão | 25% |
| Tessitura | 30% |
| Precisão | 15% |
| Conforto | 10% |
| Estabilidade | 10% |
| Sustentação | 5% |
| Transições observadas | 5% |

Extensão e tessitura diferenciam mais diretamente as famílias vocais. Precisão, estabilidade e sustentação afetam a confiança da leitura, mas não transformam uma voz em outra categoria.

## Limites responsáveis

- A aplicação não mede diretamente espessura de pregas vocais, projeção acústica em sala, maturidade ou percepção completa de timbre.
- Termos como lírico, spinto e dramático são hipóteses exploratórias no navegador.
- Mudanças abruptas durante glissando podem indicar passaggio ou quebra, mas não identificam definitivamente peito, mix, cabeça ou falsete.
- Dor, rouquidão persistente ou fadiga exigem interrupção do treino e avaliação profissional.

## Professor virtual

O banco possui 342 combinações: 19 categorias multiplicadas por 18 padrões. Cada item contém nome, objetivo, dificuldade, tempo, faixa, notas, sequência e andamento. A reprodução usa síntese sonora no navegador, anima o teclado e compara a frequência cantada com a nota esperada.

## Evolução

Resultados numéricos podem ser salvos em IndexedDB por perfil. A integração Firebase é opcional e segue as regras documentadas em `FIREBASE_TUTORIAL.txt`. O PDF registra a hipótese atual, probabilidades, métricas, plano e objetivos.
