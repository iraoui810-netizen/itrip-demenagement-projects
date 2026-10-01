import React, { useState, useEffect } from 'react';
import {
  Home,
  Building2,
  Truck,
  PackageCheck,
  Wrench,
  ShieldCheck,
  Compass,
  Globe,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_CONFIG } from '../constants/config';
import { useAdminData } from '../context/AdminDataContext';

interface ServicesPageProps {
  onNavigate: (page: string, params?: any) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  selectedServiceId = 'particulier'
}) => {
  const { services, brandConfig } = useAdminData();
  const [activeTab, setActiveTab] = useState<string>(selectedServiceId || 'particulier');

  useEffect(() => {
    if (selectedServiceId) {
      setActiveTab(selectedServiceId);
      const element = document.getElementById(selectedServiceId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedServiceId]);

  const activeService = services.find((s) => s.id === activeTab) || services[0] || {
    id: 'particulier',
    slug: 'demenagement-particulier',
    title: 'Déménagement particulier',
    shortDescription: '',
    fullDescription: '',
    iconName: 'Home',
    benefits: [],
    steps: [],
    idealFor: '',
    image: ''
  };

  const getIcon = (id: string) => {
    switch (id) {
      case 'particulier':
        return <Home className="h-5 w-5" />;
      case 'entreprise':
        return <Building2 className="h-5 w-5" />;
      case 'transport-meubles':
        return <Truck className="h-5 w-5" />;
      case 'emballage':
        return <PackageCheck className="h-5 w-5" />;
      case 'demontage-remontage':
        return <Wrench className="h-5 w-5" />;
      case 'garde-meubles':
        return <ShieldCheck className="h-5 w-5" />;
      case 'national':
        return <Compass className="h-5 w-5" />;
      case 'international':
        return <Globe className="h-5 w-5" />;
      default:
        return <Truck className="h-5 w-5" />;
    }
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.WHATSAPP_NUMBER_RAW}?text=${encodeURIComponent(
    `Bonjour iTrip, je souhaite un devis pour la prestation : ${activeService.title}`
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Accueil', onClick: () => onNavigate('home') },
            { label: 'Nos services' }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-[#0B3B60] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Prestations complètes pour particuliers & pros
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Nos services de déménagement
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            De la manutention d'un simple canapé au transfert complet d'une entreprise ou d'une villa à travers le Maroc, iTrip Déménagement déploie le personnel et l'équipement adéquats.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('quote', { initialService: activeTab })}
              className="py-3 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow transition-all"
            >
              Demander un devis personnalisé
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow transition-all flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Conseil WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Tabs / Selector */}
      <section className="sticky top-[60px] z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
            {services.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => {
                    setActiveTab(service.id);
                    const el = document.getElementById(service.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`flex items-center gap-2 py-2 px-3.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {getIcon(service.id)}
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Spotlight */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Header / Image */}
            <div className="lg:col-span-5 bg-slate-900 relative min-h-[300px]">
              <img
                src={activeService.image || '/src/assets/images/team_packing_furniture_1790793875976.jpg'}
                alt={activeService.title}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase font-bold text-orange-400">Prestation phare</span>
                <h2 className="text-2xl font-bold mt-1">{activeService.title}</h2>
                <p className="text-xs text-slate-200 mt-2">{activeService.idealFor}</p>
              </div>
            </div>

            {/* Description & Benefits */}
            <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Détail de la prestation
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B3B60] mb-3">
                  {activeService.title} à Casablanca & partout au Maroc
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeService.fullDescription}
                </p>

                {/* Key Benefits */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Avantages inclus avec iTrip :
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/70">
                        <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process Steps */}
                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Comment se déroule l’intervention :
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B3B60] text-white font-bold text-[10px]">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  Besoin d’un tarif pour cette prestation ? Devis transmis en moins de 24h.
                </div>
                <button
                  onClick={() => onNavigate('quote', { initialService: activeService.id })}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow transition-colors"
                >
                  <span>Demander mon devis</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services In-Depth List (SEO Friendly Architecture) */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3B60]">
            Toutes nos solutions de mobilité et logistique
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Consultez les caractéristiques de chaque service iTrip pour organiser votre déménagement dans les meilleures conditions.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm scroll-mt-28"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600">
                      {getIcon(service.id)}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
                        Service 0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-[#0B3B60]">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-800 block mb-2">Points forts de l'offre :</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                      {service.benefits.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:w-64 shrink-0 bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase text-slate-500 block mb-1">
                      Public concerné
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {service.idealFor}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate('quote', { initialService: service.id })}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0B3B60] hover:bg-[#082944] text-white text-xs font-semibold text-center transition-colors shadow-sm"
                  >
                    Obtenir un devis gratuit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Cross-link & CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Vous hésitez entre plusieurs formules de déménagement ?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Nos conseillers sont disponibles pour analyser votre inventaire et vous orienter vers la formule la plus avantageuse pour vous.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('quote')}
              className="w-full sm:w-auto py-3 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow transition-colors"
            >
              Remplir le formulaire en ligne
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.PHONE_NUMBER_RAW}`}
              className="w-full sm:w-auto py-3 px-6 rounded-xl border border-slate-600 hover:bg-white/10 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span>Appeler le {BUSINESS_CONFIG.PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
