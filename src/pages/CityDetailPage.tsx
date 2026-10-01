import React, { useState } from 'react';
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Truck,
  Building2,
  Home,
  ShieldCheck,
  ChevronDown,
  Navigation
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useAdminData } from '../context/AdminDataContext';

interface CityDetailPageProps {
  onNavigate: (page: string, params?: any) => void;
  citySlug: string;
}

export const CityDetailPage: React.FC<CityDetailPageProps> = ({ onNavigate, citySlug }) => {
  const { cities, brandConfig } = useAdminData();
  const city = cities.find((c) => c.slug === citySlug) || cities[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappUrl = `https://wa.me/${brandConfig.whatsappRaw}?text=${encodeURIComponent(
    `Bonjour iTrip Déménagement, je cherche un devis pour un déménagement à ${city.name}.`
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Accueil', onClick: () => onNavigate('home') },
            { label: 'Villes du Maroc', onClick: () => onNavigate('home') },
            { label: `Déménagement à ${city.name}` }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-[#0B3B60] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="h-3.5 w-3.5" />
              <span>Région {city.region}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Déménagement à {city.name} : {city.heroTagline}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {city.description}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('quote', { initialService: 'particulier' })}
                className="py-3 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow transition-colors"
              >
                Obtenir mon devis gratuit pour {city.name}
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp {city.name}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Localized Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Districts & Neighborhoods Covered */}
        <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
              Couverture territoriale
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B3B60]">
              Quartiers et zones d'intervention à {city.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Nos camions et déménageurs interviennent quotidiennement dans l'ensemble des arrondissements et communes avoisinantes.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {city.districts.map((district, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-800"
              >
                <MapPin className="h-3.5 w-3.5 text-orange-500 shrink-0" />
                <span>{district}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Local Moving Specificities & Tips */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Moving Tips */}
          <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                Conseils du terrain
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#0B3B60]">
                Spécificités & conseils pour déménager à {city.name}
              </h2>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {city.movingTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-orange-50/60 border border-orange-200/60">
                  <CheckCircle2 className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Common Routes */}
          <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                Liaisons inter-villes
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-[#0B3B60]">
                Itinéraires fréquents depuis ou vers {city.name}
              </h2>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {city.commonRoutes.map((route, idx) => (
                <li key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-sky-600 shrink-0" />
                    <span className="font-semibold text-slate-900">{route}</span>
                  </div>
                  <button
                    onClick={() => onNavigate('quote')}
                    className="text-xs font-bold text-orange-600 hover:text-orange-700"
                  >
                    Devis trajet →
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Localized FAQ */}
        <section className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
              Foire aux questions locale
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B3B60]">
              Questions fréquentes : déménagement à {city.name}
            </h2>
          </div>

          <div className="space-y-3">
            {city.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-800 hover:bg-slate-50"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Other Cities Switcher */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
          <h3 className="text-sm font-bold text-[#0B3B60]">
            Découvrez nos services dans d'autres villes du Maroc :
          </h3>
          <div className="flex flex-wrap gap-2">
            {cities.filter((c) => c.slug !== city.slug).map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  onNavigate('city-detail', { citySlug: c.slug });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-1.5 px-3 rounded-lg text-xs bg-slate-100 hover:bg-orange-50 hover:text-orange-700 text-slate-700 font-medium transition-colors"
              >
                {c.name}
              </button>
            ))}
          </div>
        </section>

        {/* Final City CTA */}
        <section className="bg-[#0B3B60] text-white p-8 sm:p-12 rounded-2xl text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Planifiez votre déménagement à {city.name} dès maintenant
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Profitez de notre expertise locale et de nos camions capitonnés pour déménager sans stress. Devis détaillé remis gratuitement sous 24h.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('quote')}
              className="w-full sm:w-auto py-3 px-8 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow transition-colors"
            >
              Demander mon devis à {city.name}
            </button>
            <a
              href={`tel:${brandConfig.phoneRaw}`}
              className="w-full sm:w-auto py-3 px-6 rounded-xl border border-slate-400 hover:bg-white/10 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span>{brandConfig.phone}</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
