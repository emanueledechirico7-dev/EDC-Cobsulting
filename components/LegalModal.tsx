import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab: 'privacy' | 'cookie';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, initialTab }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'cookie'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-brand-dark border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50">
          <h2 className="text-xl font-bold text-white">Informazioni Legali</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-900/30">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-4 text-sm font-semibold transition-colors relative ${
              activeTab === 'privacy' 
                ? 'text-brand-primary bg-slate-800/50' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
            }`}
          >
            Privacy Policy
            {activeTab === 'privacy' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary"></span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('cookie')}
            className={`flex-1 py-4 text-sm font-semibold transition-colors relative ${
              activeTab === 'cookie' 
                ? 'text-brand-primary bg-slate-800/50' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
            }`}
          >
            Cookie Policy
            {activeTab === 'cookie' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary"></span>
            )}
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 md:p-10 text-slate-300 text-sm leading-relaxed space-y-6">
          {activeTab === 'privacy' ? (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Informativa sulla Privacy</h3>
              <p>
                La presente Informativa sulla Privacy descrive come Emanuele De Chirico ("noi", "ci" o "nostro") raccoglie, utilizza e condivide le informazioni personali quando visiti o fai un acquisto dal nostro sito.
              </p>
              
              <h4 className="text-lg font-semibold text-white mt-6">Titolare del Trattamento</h4>
              <p>
                Il Titolare del trattamento dei dati è <strong>Emanuele De Chirico</strong>,<br/>
                Sede: Via Oslavia 36, Torino<br/>
                P.IVA: 13346050019<br/>
                Email: emanueledechirico7@gmail.com
              </p>

              <h4 className="text-lg font-semibold text-white mt-6">Dati raccolti</h4>
              <p>
                Quando visiti il Sito, raccogliamo automaticamente alcune informazioni sul tuo dispositivo, incluse informazioni sul tuo browser web, indirizzo IP, fuso orario e alcuni dei cookie installati sul tuo dispositivo. Inoltre, mentre navighi sul Sito, raccogliamo informazioni sulle singole pagine web o prodotti che visualizzi.
              </p>
              <p>
                Se utilizzi il modulo di contatto, raccogliamo i dati che inserisci volontariamente (Nome, Email, Messaggio) al solo scopo di rispondere alla tua richiesta.
              </p>

              <h4 className="text-lg font-semibold text-white mt-6">Finalità del trattamento</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Per comunicare con te in risposta alle tue richieste.</li>
                <li>Per fornire i servizi o le informazioni richieste.</li>
                <li>Per migliorare e ottimizzare il nostro Sito (ad esempio, generando analisi su come i nostri clienti navigano e interagiscono con il Sito).</li>
              </ul>

              <h4 className="text-lg font-semibold text-white mt-6">Conservazione dei dati</h4>
              <p>
                I tuoi dati personali saranno conservati solo per il tempo necessario a fornire i servizi richiesti o per adempiere agli obblighi legali.
              </p>

              <h4 className="text-lg font-semibold text-white mt-6">Diritti dell'utente</h4>
              <p>
                Hai il diritto di accedere alle informazioni personali che deteniamo su di te e di chiedere che le tue informazioni personali siano corrette, aggiornate o cancellate. Se desideri esercitare questo diritto, ti preghiamo di contattarci attraverso le informazioni di contatto sopra indicate.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Cookie Policy</h3>
              <p>
                Questo sito web utilizza i cookie per migliorare l'esperienza dell'utente. I cookie sono piccoli file di testo che vengono salvati sul tuo computer o dispositivo mobile quando visiti un sito web.
              </p>

              <h4 className="text-lg font-semibold text-white mt-6">Tipologie di Cookie utilizzati</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Cookie Tecnici:</strong> Sono necessari per il corretto funzionamento del sito e non possono essere disattivati nei nostri sistemi. Di solito vengono impostati solo in risposta alle azioni da te effettuate che costituiscono una richiesta di servizi, come l'impostazione delle preferenze di privacy, l'accesso o la compilazione di moduli.
                </li>
                <li>
                  <strong>Cookie Analitici:</strong> Ci permettono di contare le visite e le fonti di traffico in modo da poter misurare e migliorare le prestazioni del nostro sito. Tutte le informazioni raccolte dai cookie sono aggregate e quindi anonime.
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-white mt-6">Gestione dei Cookie</h4>
              <p>
                Puoi controllare e/o cancellare i cookie come preferisci. Puoi cancellare tutti i cookie già presenti nel computer e impostare la maggior parte dei browser in modo da bloccarne l'installazione. Se scegli questa opzione, dovrai però modificare manualmente alcune preferenze ogni volta che visiti il sito ed è possibile che alcuni servizi o determinate funzioni non siano disponibili.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
};