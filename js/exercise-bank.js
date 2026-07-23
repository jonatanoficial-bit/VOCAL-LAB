globalThis.ExerciseBank = (() => {
  const categories = [
    ['Respiração','Regular fluxo de ar sem elevar os ombros'],['Afinação','Centralizar a frequência e reduzir o erro em cents'],['Extensão','Explorar limites gradualmente sem pressão'],['Mix','Equilibrar coordenação entre regiões da voz'],['Belting','Desenvolver intensidade com controle e faixa segura'],['Head Voice','Estabilizar a coordenação de voz de cabeça'],['Falsete','Controlar emissão leve e fechamento progressivo'],['Passaggio','Suavizar transições entre regiões vocais'],['Dicção','Articular consoantes sem interromper a linha vocal'],['Ressonância','Buscar projeção eficiente sem apertar a garganta'],['Vibrato','Observar oscilação natural sem fabricação mecânica'],['Agilidade','Ganhar precisão em mudanças rápidas de nota'],['Coloratura','Treinar padrões ornamentados com leveza'],['Legato','Conectar vogais e notas com fluxo contínuo'],['Staccato','Produzir ataques curtos sem golpe glótico'],['Ataque','Iniciar a nota com coordenação de ar e som'],['Controle','Equilibrar intensidade, duração e estabilidade'],['Desaquecimento','Retornar gradualmente à fala confortável'],['Aquecimento','Preparar respiração, trato vocal e coordenação']
  ];
  const patterns = [
    ['Cinco notas',[0,2,4,5,7,5,4,2,0]],['Tríade maior',[0,4,7,4,0]],['Arpejo de oitava',[0,4,7,12,7,4,0]],['Escala ascendente',[0,2,4,5,7,9,11,12]],['Escala descendente',[12,11,9,7,5,4,2,0]],['Terças suaves',[0,2,4,2,4,5,7,5,4,2,0]],['Sirene curta',[0,3,7,10,12,10,7,3,0]],['Oitava ligada',[0,12,0]],['Cromático',[0,1,2,3,4,3,2,1,0]],['Pentatônica',[0,2,4,7,9,12,9,7,4,2,0]],['Arpejo menor',[0,3,7,12,7,3,0]],['Salto de quinta',[0,7,0,7,12,7,0]],['Messa di voce',[0,0,0,0,0,0]],['Staccato tríade',[0,4,7,4,0,4,7,4,0]],['Legato 1-3-5',[0,4,7,9,7,4,0]],['Agilidade 1-2-3',[0,2,4,2,0,2,4,5,7,5,4,2,0]],['Passaggio gradual',[0,2,4,6,8,10,12,10,8,6,4,2,0]],['Relaxamento descendente',[7,5,4,2,0,-2,-5]]
  ];
  const noteNames = ['C','C♯','D','D♯','E','F','F♯','G','G♯','A','A♯','B'];
  const note = (midi) => `${noteNames[((midi % 12) + 12) % 12]}${Math.floor(midi / 12) - 1}`;
  const difficulties = ['iniciante','iniciante','intermediário','intermediário','avançado','avançado'];
  const exercises = categories.flatMap(([category, objective], categoryIndex) => patterns.map(([pattern, sequence], patternIndex) => {
    const baseMidi = 48 + ((categoryIndex * 2 + patternIndex) % 10), transposed = sequence.map((offset) => baseMidi + offset), minimum = Math.min(...transposed), maximum = Math.max(...transposed);
    return { id:`vvl-${categoryIndex + 1}-${patternIndex + 1}`, category, name:`${category} · ${pattern}`, objective, difficulty:difficulties[(categoryIndex + patternIndex) % difficulties.length], duration:3 + ((categoryIndex + patternIndex) % 8), recommendedRange:`${note(minimum)}–${note(maximum)}`, notes:[...new Set(transposed.map(note))], sequence:[...sequence], baseMidi, tempo:60 + ((categoryIndex * 7 + patternIndex * 5) % 45), rangeZone:patternIndex % 3 === 0 ? 'grave' : patternIndex % 3 === 1 ? 'média' : 'aguda', midiGenerated:true };
  }));
  return { exercises, categories:categories.map(([name]) => name), note };
})();
