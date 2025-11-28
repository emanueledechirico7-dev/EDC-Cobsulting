import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';

const App: React.FC = () => {
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'cookie'>('privacy');

  const openPrivacy = () => {
    setLegalTab('privacy');
    setLegalOpen(true);
  };

  const openCookie = () => {
    setLegalTab('cookie');
    setLegalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-slate-100 font-sans selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer onOpenPrivacy={openPrivacy} onOpenCookie={openCookie} />
      <LegalModal 
        isOpen={legalOpen} 
        onClose={() => setLegalOpen(false)} 
        initialTab={legalTab} 
      />
    </div>
  );
};

export default App;