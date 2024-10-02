import { useState, useEffect } from 'react';

export const useCatFact = () => {
  const [catFact, setCatFact] = useState('');
  const [loading, setLoading] = useState(true);

  // Funktio, joka hakee kissa faktan API:sta
  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setCatFact(data.fact);
    } catch (error) {
      console.error('Virhe! kissa faktaa ei löydy ): :', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return { catFact, loading, fetchCatFact };
};