import React from 'react';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Parliamo del tuo Progetto
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Hai bisogno di una consulenza o vuoi lanciare una nuova campagna pubblicitaria? 
              Contattami per una strategia su misura.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Email</p>
                  <a href="mailto:emanueledechirico7@gmail.com" className="text-xl text-white font-medium hover:text-brand-primary transition-colors">
                    emanueledechirico7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Telefono</p>
                  <a href="tel:+393896354734" className="text-xl text-white font-medium hover:text-brand-primary transition-colors">
                    +39 389 635 4734
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Sede Operativa</p>
                  <p className="text-xl text-white font-medium">
                    Via Oslavia 36, Torino
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Dati Fiscali</p>
                  <p className="text-xl text-white font-medium">
                    P.IVA 13346050019
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  placeholder="Mario Rossi"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  placeholder="mario@esempio.it"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Messaggio</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all"
                  placeholder="Descrivi brevemente il tuo progetto..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-brand-primary to-brand-accent text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-brand-primary/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Invia Richiesta
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};