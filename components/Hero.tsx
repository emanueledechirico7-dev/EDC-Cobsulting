import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight mb-8">
          Strategie di Marketing <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
            Che Lasciano il Segno
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
          Dalla pianificazione strategica alla gestione delle campagne pubblicitarie. 
          Aiutiamo il tuo business a crescere nell'era digitale con soluzioni su misura.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, '#contact')}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full text-white font-bold text-lg hover:shadow-lg hover:shadow-brand-primary/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Inizia Ora
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#services"
            onClick={(e) => handleScroll(e, '#services')}
            className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 rounded-full text-white font-semibold text-lg transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            Scopri i Servizi
          </a>
        </div>

        {/* Quick Stats/Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-slate-800/50 pt-10">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-1">Digital</h3>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Advertising</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-1">Social</h3>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Management</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-white mb-1">Brand</h3>
            <p className="text-sm text-slate-500 uppercase tracking-widest">Identity</p>
          </div>
        </div>
      </div>
    </section>
  );
};