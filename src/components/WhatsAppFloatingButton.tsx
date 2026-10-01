import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../constants/config';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.WHATSAPP_NUMBER_RAW}?text=${encodeURIComponent(
    BUSINESS_CONFIG.DEFAULT_WHATSAPP_MESSAGE
  )}`;

  return (
    <aside aria-label="Support WhatsApp" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 rounded-2xl bg-white p-4 shadow-xl border border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-semibold text-slate-800">Conseiller iTrip</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              aria-label="Fermer l'infobulle"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Besoin d’un tarif rapide ou d’un conseil pour votre déménagement au Maroc ? Échangez directement avec un conseiller par message ou envoyez vos photos.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-sm transition-all"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Ouvrir WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main WhatsApp CTA Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden sm:inline-flex items-center gap-2 py-2 px-3.5 rounded-full bg-white text-slate-800 text-xs font-semibold shadow-lg border border-slate-200/80 hover:bg-slate-50 transition-all hover:scale-105"
          aria-expanded={isOpen}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>Devis sur WhatsApp</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300"
          aria-label="Contacter iTrip Déménagement sur WhatsApp"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </div>
    </aside>
  );
};
