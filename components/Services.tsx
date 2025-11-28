import React from 'react';
import { Megaphone, TrendingUp, PenTool, Layout, Search, Users } from 'lucide-react';
import { ServiceItem } from '../types';

const servicesList: ServiceItem[] = [
  {
    title: "Campagne Pubblicitarie",
    description: "Creazione e gestione di campagne ADS su Meta (Facebook/Instagram) e Google per massimizzare il ROI.",
    icon: Megaphone
  },
  {
    title: "Social Media Management",
    description: "Gestione professionale dei profili social, piano editoriale e community management per coinvolgere il tuo pubblico.",
    icon: Users
  },
  {
    title: "Brand Strategy",
    description: "Definizione dell'identità visiva e verbale del brand per posizionarsi efficacemente nel mercato.",
    icon: PenTool
  },
  {
    title: "SEO & SEM",
    description: "Ottimizzazione per i motori di ricerca e marketing sui motori di ricerca per aumentare la visibilità organica e pagata.",
    icon: Search
  },
  {
    title: "Content Marketing",
    description: "Creazione di contenuti di valore (copywriting, visual, video) per attrarre e fidelizzare i clienti.",
    icon: Layout
  },
  {
    title: "Analisi & Reportistica",
    description: "Monitoraggio costante dei KPI e report dettagliati per ottimizzare le performance in tempo reale.",
    icon: TrendingUp
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-900/50 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">I Nostri Servizi</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Offriamo un ventaglio completo di servizi professionali dedicati alla conduzione di campagne di marketing e strategie pubblicitarie integrate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl hover:bg-slate-800 hover:border-brand-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};