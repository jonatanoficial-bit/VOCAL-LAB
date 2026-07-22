globalThis.VocalAnalysis = (() => {
  const noteNames = ['C', 'C♯', 'D', 'D♯', 'E', 'F', 'F♯', 'G', 'G♯', 'A', 'A♯', 'B'];
  const clamp = (number, min, max) => Math.max(min, Math.min(max, number));
  const detectFrequency = (buffer, sampleRate, minHz = 70, maxHz = 1050) => {
    let energy = 0; for (const value of buffer) energy += value * value;
    if (Math.sqrt(energy / buffer.length) < 0.008) return null;
    const minLag = Math.floor(sampleRate / maxHz), maxLag = Math.min(Math.floor(sampleRate / minHz), buffer.length - 2);
    let bestLag = 0, bestCorrelation = 0; const correlations = [];
    for (let lag = minLag; lag <= maxLag; lag++) {
      let dot = 0, left = 0, right = 0;
      for (let index = 0; index < buffer.length - lag; index++) { const a = buffer[index], b = buffer[index + lag]; dot += a * b; left += a * a; right += b * b; }
      const correlation = dot / Math.sqrt(left * right || 1); correlations.push(correlation);
      if (correlation > bestCorrelation) { bestCorrelation = correlation; bestLag = lag; }
    }
    if (bestCorrelation < 0.55 || !bestLag) return null;
    const peakIndex = bestLag - minLag, before = correlations[peakIndex - 1] ?? bestCorrelation, after = correlations[peakIndex + 1] ?? bestCorrelation;
    const correction = clamp(.5 * (before - after) / (before - 2 * bestCorrelation + after || 1), -.5, .5);
    return { hz: sampleRate / (bestLag + correction), confidence: bestCorrelation };
  };
  const toNote = (hz, reference = 440) => {
    const exactMidi = 69 + 12 * Math.log2(hz / reference), midi = Math.round(exactMidi), cents = (exactMidi - midi) * 100;
    return { midi, name: `${noteNames[((midi % 12) + 12) % 12]}${Math.floor(midi / 12) - 1}`, cents, hz };
  };
  const quantile = (values, percentile) => { const sorted = [...values].sort((a, b) => a - b); const index = (sorted.length - 1) * percentile; const low = Math.floor(index), high = Math.ceil(index); return sorted[low] + (sorted[high] - sorted[low]) * (index - low); };
  return { detectFrequency, toNote, quantile };
})();
