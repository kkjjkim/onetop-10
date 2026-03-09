
import React, { useState, useEffect } from 'react';
import './App.css';

import { HeroA } from './components/HeroA';
import { HeroB } from './components/HeroB';
import { Empathy } from './components/Empathy';
import { TurningPoint } from './components/TurningPoint';
import { Warning } from './components/Warning';
import { Story } from './components/Story';
import { Differentiators } from './components/Differentiators';
import { FreeConsultation } from './components/FreeConsultation';
import { Recommended } from './components/Recommended';
import { Process } from './components/Process';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  const [heroVariant, setHeroVariant] = useState<'A' | 'B' | null>(null);

  useEffect(() => {
    // 1. Check URL parameters first (e.g., ?v=a or ?v=b)
    const urlParams = new URLSearchParams(window.location.search);
    const urlVariant = urlParams.get('v');

    if (urlVariant === 'a' || urlVariant === 'A') {
      setHeroVariant('A');
      localStorage.setItem('hero_ab_variant', 'A');
      return;
    } else if (urlVariant === 'b' || urlVariant === 'B') {
      setHeroVariant('B');
      localStorage.setItem('hero_ab_variant', 'B');
      return;
    }

    // 2. If no URL parameter, fall back to saved preference or default to A
    const savedVariant = localStorage.getItem('hero_ab_variant') as 'A' | 'B' | null;
    if (savedVariant) {
      setHeroVariant(savedVariant);
    } else {
      setHeroVariant('A'); // Default to A if visiting without parameter
    }
  }, []);

  return (
    <div className="app-container">
      {heroVariant === 'A' && <HeroA />}
      {heroVariant === 'B' && <HeroB />}
      <Empathy />
      <TurningPoint />
      <Warning />
      <Story />
      <Differentiators />
      <FreeConsultation />
      <Recommended />
      <Process />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
