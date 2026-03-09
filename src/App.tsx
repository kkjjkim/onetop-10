
import './App.css';

import { Hero } from './components/Hero';
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
  return (
    <div className="app-container">
      <Hero />
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
