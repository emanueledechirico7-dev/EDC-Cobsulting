import React from 'react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenCookie: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenCookie }) => {
  return (
    <footer className="bg-brand-dark border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h4 className="text-xl font-bold text-white mb-2">De Chirico Emanuele</h4>
          <p className="text-slate-500 text-sm">
            Marketing & Advertising Strategy
          </p>
        </div>
        
        <div className="text-slate-500 text-sm text-center md:text-right">
          <p className="mb-2">© {new Date().getFullYear()} Tutti i diritti riservati.</p>
          <p className="mb-4">P.IVA 13346050019 | Via Oslavia 36, Torino</p>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-xs font-medium">
            <button onClick={onOpenPrivacy} className="hover:text-brand-primary transition-colors underline decoration-slate-700 underline-offset-4">
              Privacy Policy
            </button>
            <button onClick={onOpenCookie} className="hover:text-brand-primary transition-colors underline decoration-slate-700 underline-offset-4">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};