import { useState, useEffect } from 'react';

export interface IndicadoresData {
  uf: number;
  dolar: number;
}

export function useIndicadores(): IndicadoresData {
  const [data, setData] = useState<IndicadoresData>({ uf: 37950, dolar: 945 }); // Clean regional 2026 baseline fallbacks

  useEffect(() => {
    const cached = localStorage.getItem('indicadores');
    const cachedTime = localStorage.getItem('indicadores_time');

    // Cache valid for 4 hours to avoid rate limits
    if (cached && cachedTime && Date.now() - Number(cachedTime) < 14400000) {
      try {
        setData(JSON.parse(cached));
        return;
      } catch (e) {
        // Fallback to fetch on parsing error
      }
    }

    fetch('https://mindicador.cl/api')
      .then(res => {
        if (!res.ok) throw new Error('API unstable or unavailable');
        return res.json();
      })
      .then(d => {
        if (d.uf?.valor && d.dolar?.valor) {
          const indicadores = { uf: d.uf.valor, dolar: d.dolar.valor };
          localStorage.setItem('indicadores', JSON.stringify(indicadores));
          localStorage.setItem('indicadores_time', String(Date.now()));
          setData(indicadores);
        }
      })
      .catch((err) => {
        console.warn('mindicador.cl api fallback triggered:', err.message);
      });
  }, []);

  return data;
}
