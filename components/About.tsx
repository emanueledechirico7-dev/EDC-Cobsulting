import React from 'react';
import { Target, Lightbulb, Trophy } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-dark scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-brand-primary rounded-tl-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-brand-accent rounded-br-3xl"></div>
              <img 
                src="https://picsum.photos/600/600?grayscale" 
                alt="Emanuele De Chirico Workspace" 
                className="w-full h-auto rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Chi Sono
            </h2>
            <h3 className="text-xl text-brand-primary font-semibold mb-6">
              Emanuele De Chirico
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Sono un professionista del marketing digitale con sede a Torino, specializzato nella creazione di strategie pubblicitarie che convertono. 
              Opero come Ditta Individuale con passione e dedizione, aiutando piccole e medie imprese a trovare la propria voce nel rumore digitale.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Target className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Focus sui Risultati</h4>
                  <p className="text-slate-500 text-sm">Ogni strategia è orientata a obiettivi misurabili e concreti.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Creatività & Dati</h4>
                  <p className="text-slate-500 text-sm">Unisco l'estro creativo all'analisi rigorosa dei dati.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-slate-800 rounded-lg">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Professionalità</h4>
                  <p className="text-slate-500 text-sm">Massima trasparenza e serietà professionale (P.IVA 13346050019).</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};