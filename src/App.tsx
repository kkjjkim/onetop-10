
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
    // Check if variant is already saved in localStorage
    const savedVariant = localStorage.getItem('hero_ab_variant') as 'A' | 'B' | null;

    if (savedVariant) {
      setHeroVariant(savedVariant);
    } else {
      // Randomly assign 'A' or 'B' (50% chance)
      const newVariant = Math.random() < 0.5 ? 'A' : 'B';
      localStorage.setItem('hero_ab_variant', newVariant);
      setHeroVariant(newVariant);
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
