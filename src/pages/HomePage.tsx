import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Home,
  Building,
  Building2,
  Briefcase,
  Factory,
  Truck,
  PackageCheck,
  Wrench,
  Clock,
  MapPin,
  ChevronRight,
  Boxes,
  Compass,
  Sparkles,
  Phone
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { MovingStepsTrack } from '../components/MovingStepsTrack';
import { useAdminData } from '../context/AdminDataContext';

interface HomePageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const {
    brandConfig,
    heroConfig,
    aboutConfig,
    homepageSections,
    services,
    packages,
    cities,
    testimonials,
    blogPosts
  } = useAdminData();

  const [selectedHousing, setSelectedHousing] = useState<string>('Appartement');

  const housingChoices = [
    { id: 'Appartement', title: 'Appartement', desc: 'Studio, 2P, 3P, duplex', icon: Building },
    { id: 'Maison', title: 'Maison', desc: 'Maison de ville, riad', icon: Home },
    { id: 'Bureaux', title: 'Bureaux', desc: 'Locaux pro, cabinets, agences', icon: Briefcase },
    { id: 'Villa', title: 'Villa', desc: 'Grande propriété, jardin', icon: Building2 },
    { id: 'Société', title: 'Société', desc: 'Entrepôts, transferts industriels', icon: Factory },
  ];

  const handleQuickQuoteSubmit = () => {
    onNavigate('quote', { initialService: selectedHousing });
  };

  const whatsappUrl = `https://wa.me/${brandConfig.whatsappRaw}?text=${encodeURIComponent(
    'Bonjour iTrip Déménagement, je souhaite obtenir un devis gratuit pour mon projet de déménagement.'
  )}`;

  // Sort enabled sections by order
  const activeSections = [...homepageSections]
    .filter((s) => s.enabled)
    .sort((a, b) => a.order - b.order);

  // Render individual section by ID
  const renderSection = (sectionId: string, customSectionConfig?: any) => {
    switch (sectionId) {
      /* =========================================================================
          SECTION 1 — HERO
          ========================================================================= */
      case 'hero':
        return (
          <section key="hero" className="relative overflow-hidden bg-slate-900 text-white min-h-[580px] lg:min-h-[640px] flex items-center">
            {/* Background Image with High Contrast Overlay Scrim */}
            <div className="absolute inset-0 z-0">
              <img
                src={heroConfig.heroImage}
                alt="Équipe professionnelle de déménageurs iTrip à Casablanca avec camion moderne"
                className="w-full h-full object-cover object-center opacity-40 scale-105 transition-transform duration-1000 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B3B60]/95 via-[#0B3B60]/85 to-slate-900/80" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
              <div className="max-w-2xl lg:max-w-3xl space-y-6">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs sm:text-sm font-semibold">
                  <Sparkles className="h-3.5 w-3.5 text-orange-400" />
                  <span>{heroConfig.eyebrow}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                  {heroConfig.titlePart1} <br />
                  <span className="text-orange-400">{heroConfig.titlePart2}</span>
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
                  {heroConfig.subtitle}
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <button
                    onClick={() => onNavigate('quote')}
                    className="flex items-center justify-center gap-2 py-3.5 px-7 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-orange-500/30 transition-all duration-200 active:scale-[0.98]"
                  >
                    <span>{heroConfig.ctaPrimaryText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base shadow-md transition-all duration-200"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{heroConfig.ctaSecondaryText}</span>
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>{heroConfig.trustBadge1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>{heroConfig.trustBadge2}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>{heroConfig.trustBadge3}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-400 shrink-0" />
                    <span>{heroConfig.trustBadge4}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      /* =========================================================================
          SECTION 2 — QUICK QUOTE SELECTOR (TYPE DE LOGEMENT)
          ========================================================================= */
      case 'quick-quote':
        return (
          <section key="quick-quote" className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                    Estimation Express en ligne
                  </span>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B3B60]">
                    Quel est votre type de logement ?
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md">
                  Sélectionnez votre type de bien pour obtenir votre estimation sur-mesure en 1 minute.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {housingChoices.map((item) => {
                  const isSelected = selectedHousing === item.id;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedHousing(item.id)}
                      className={`text-center p-4 rounded-2xl border transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'border-orange-500 bg-orange-50/80 text-orange-950 ring-2 ring-orange-400/20 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-xl ${
                          isSelected ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">{item.title}</h3>
                        <p className="text-[11px] text-slate-500 hidden sm:block mt-0.5">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Devis gratuit immédiat · Aucun engagement requis</span>
                </div>
                <button
                  onClick={handleQuickQuoteSubmit}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-8 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <span>Continuer ma demande ({selectedHousing})</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        );

      /* =========================================================================
          SECTION 3 — SERVICES
          ========================================================================= */
      case 'services':
        return (
          <section key="services" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Nos solutions sur-mesure"
                title="Nos services de déménagement"
                subtitle="Une solution adaptée à chaque projet, pour particuliers et professionnels à Casablanca et partout au Maroc."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                        {service.id === 'particulier' && <Home className="h-6 w-6" />}
                        {service.id === 'entreprise' && <Building2 className="h-6 w-6" />}
                        {service.id === 'transport-meubles' && <Truck className="h-6 w-6" />}
                        {service.id === 'emballage' && <PackageCheck className="h-6 w-6" />}
                        {service.id === 'demontage-remontage' && <Wrench className="h-6 w-6" />}
                        {service.id === 'garde-meubles' && <ShieldCheck className="h-6 w-6" />}
                        {service.id === 'national' && <Compass className="h-6 w-6" />}
                        {service.id === 'international' && <Boxes className="h-6 w-6" />}
                      </div>

                      <h3 className="text-base font-bold text-[#0B3B60] mb-2 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => onNavigate('services', { serviceId: service.id })}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                      >
                        <span>En savoir plus</span>
                        <ChevronRight className="h-3.5 w-3.5" />
                      </button>
                      <button
                        onClick={() => onNavigate('quote', { initialService: service.id })}
                        className="text-xs font-medium text-slate-500 hover:text-[#0B3B60]"
                      >
                        Devis rapide
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 py-3 px-6 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm shadow-sm transition-colors"
                >
                  <span>Voir le détail de toutes nos prestations</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        );

      /* =========================================================================
          SECTION 4 — WHY ITRIP
          ========================================================================= */
      case 'why-itrip':
        return (
          <section key="why-itrip" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Professional Moving Team Image */}
                <div className="lg:col-span-5 relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                    <img
                      src={aboutConfig.teamImage}
                      alt="Équipe iTrip Déménagement protégeant le mobilier"
                      className="w-full h-full object-cover aspect-[4/3]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#0B3B60] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-slate-700">
                    <p className="text-xs uppercase tracking-wider text-orange-400 font-semibold">
                      {aboutConfig.qualityBadgeTitle}
                    </p>
                    <p className="text-sm font-medium mt-1 leading-snug">
                      {aboutConfig.qualityBadgeText}
                    </p>
                  </div>
                </div>

                {/* Right: Benefits */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-orange-600 block mb-2">
                      {aboutConfig.eyebrow}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0B3B60] text-balance">
                      {aboutConfig.title}
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {aboutConfig.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {aboutConfig.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                        <span className="text-xs font-bold text-orange-600">{b.number}</span>
                        <h3 className="text-sm font-bold text-slate-900 mt-1">{b.title}</h3>
                        <p className="text-xs text-slate-600 mt-1">{b.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate('about')}
                      className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#0B3B60] hover:bg-[#082944] text-white font-semibold text-sm transition-colors"
                    >
                      <span>Découvrir iTrip</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      /* =========================================================================
          SECTION 5 — DES ÉTAPES DE DÉMÉNAGEMENT MAÎTRISÉES (CAMION ANIMÉ)
          ========================================================================= */
      case 'how-it-works':
        return <MovingStepsTrack key="how-it-works" onNavigate={onNavigate} />;

      /* =========================================================================
          SECTION 6 — PACKAGES
          ========================================================================= */
      case 'packages':
        return (
          <section key="packages" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Formules de déménagement"
                title="Des formules adaptées à votre niveau d'implication"
                subtitle="Choisissez l'équilibre parfait entre économies et accompagnement complet. Pas de faux tarifs : un devis sur-mesure calculé selon vos besoins réels."
              />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-200 relative ${
                      pkg.popular
                        ? 'bg-slate-900 text-white shadow-xl ring-2 ring-orange-500 scale-100 lg:-translate-y-2'
                        : 'bg-slate-50 border border-slate-200/90 text-slate-900 hover:shadow-md'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 py-1 px-4 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider shadow">
                        Formule la plus demandée
                      </div>
                    )}

                    <div>
                      <div className="border-b pb-5 mb-5 border-slate-200/60">
                        <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                          pkg.popular ? 'text-orange-400' : 'text-orange-600'
                        }`}>
                          {pkg.name}
                        </span>
                        <h3 className={`text-xl font-extrabold ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>
                          {pkg.tagline}
                        </h3>
                        <p className={`text-xs mt-2 leading-relaxed ${
                          pkg.popular ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {pkg.description}
                        </p>
                      </div>

                      <div className="mb-4">
                        <span className={`text-[11px] font-semibold uppercase tracking-wider block mb-2 ${
                          pkg.popular ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          Idéal pour :
                        </span>
                        <p className={`text-xs font-medium ${pkg.popular ? 'text-slate-200' : 'text-slate-800'}`}>
                          {pkg.recommendedFor}
                        </p>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <CheckCircle2
                              className={`h-4 w-4 shrink-0 mt-0.5 ${
                                pkg.popular ? 'text-orange-400' : 'text-orange-600'
                              }`}
                            />
                            <span className={pkg.popular ? 'text-slate-200' : 'text-slate-700'}>
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <button
                        onClick={() => onNavigate('quote', { initialPackage: pkg.id })}
                        className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                          pkg.popular
                            ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25'
                            : 'bg-white hover:bg-slate-100 text-slate-800 border border-slate-300'
                        }`}
                      >
                        <span>Demander un devis {pkg.name}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      /* =========================================================================
          SECTION 7 — SERVICE AREAS (CITIES)
          ========================================================================= */
      case 'service-areas':
        return (
          <section key="service-areas" className="py-20 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Réseau national"
                title="Nous déménageons partout au Maroc"
                subtitle="Basés à Casablanca, nous intervenons dans toutes les préfectures et provinces du Royaume pour des déménagements locaux et inter-régions."
              />

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 mb-8">
                {cities.map((city) => (
                  <button
                    key={city.id}
                    onClick={() => onNavigate('city-detail', { citySlug: city.slug })}
                    className="bg-white p-4 rounded-xl border border-slate-200 hover:border-orange-500 hover:shadow-md transition-all text-left group"
                  >
                    <div className="flex items-center gap-1.5 text-xs text-orange-600 font-semibold mb-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{city.region.split('-')[0]}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {city.name}
                    </h3>
                    <span className="text-[11px] text-slate-500 block mt-1">Voir nos services →</span>
                  </button>
                ))}
              </div>

              {/* SEO Text Block */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 text-sm text-slate-600 leading-relaxed">
                <h3 className="text-base font-bold text-[#0B3B60] mb-2">
                  Liaisons régulières et déménagement national au Maroc
                </h3>
                <p>
                  Que vous déménagiez depuis Casablanca vers Rabat, Tanger, Marrakech, Fès, Meknès ou Agadir, iTrip Déménagement met en œuvre des moyens matériels certifiés pour garantir l’acheminement ponctuel de vos meubles. Nos chauffeurs réguliers connaissent parfaitement les corridors autoroutiers (A1, A2, A3, A7) ainsi que les accès aux centres-villes historiques et nouveaux quartiers résidentiels. Vous déménagez dans une autre commune non listée ci-dessus ? Nos équipes couvrent l’ensemble des 12 régions marocaines.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-medium">
                    Vous déménagez dans une autre ville du Royaume ? Contactez-nous pour une étude personnalisée.
                  </span>
                  <button
                    onClick={() => onNavigate('quote')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700"
                  >
                    <span>Demander un devis inter-villes</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        );

      /* =========================================================================
          SECTION 8 — TESTIMONIALS
          ========================================================================= */
      case 'testimonials':
        return (
          <section key="testimonials" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="Témoignages & Avis clients"
                title="Ce que nos clients disent"
                subtitle="Aperçu des retours d’expérience de particuliers et entreprises ayant confié leur mobilier à nos équipes."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((t) => (
                  <div
                    key={t.id}
                    className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center gap-1 text-amber-500 mb-3">
                        {[...Array(t.rating)].map((_, i) => (
                          <span key={i} className="text-sm">★</span>
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                        « {t.comment} »
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/60">
                      <div className="font-bold text-xs text-slate-900">{t.name}</div>
                      <div className="text-[11px] text-slate-500">{t.city}</div>
                      <div className="text-[11px] text-orange-600 font-medium mt-0.5">{t.serviceType}</div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-center text-xs text-slate-500 max-w-xl mx-auto">
                Retours d’expérience récents recueillis à la fin de nos prestations à Casablanca, Rabat et Marrakech.
              </p>
            </div>
          </section>
        );

      /* =========================================================================
          SECTION 9 — BLOG
          ========================================================================= */
      case 'blog':
        return (
          <section key="blog" className="py-20 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                <div>
                  <span className="text-xs md:text-sm font-semibold tracking-wider uppercase text-orange-600 block mb-2">
                    Conseils d'experts
                  </span>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#0B3B60]">
                    Conseils pour réussir votre déménagement
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('blog')}
                  className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700"
                >
                  <span>Tous nos articles et guides</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogPosts.slice(0, 4).map((post) => (
                  <article
                    key={post.id}
                    onClick={() => onNavigate('blog-post', { postSlug: post.slug })}
                    className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                  >
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-2">
                        <span className="text-orange-600 font-semibold">{post.category}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug mb-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-orange-600 mt-2">
                      <span>Lire l’article</span>
                      <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );

      /* =========================================================================
          SECTION 10 — FINAL HOMEPAGE CTA
          ========================================================================= */
      case 'final-cta':
        return (
          <section key="final-cta" className="py-20 bg-[#0B3B60] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
              <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                Devis 100% gratuit & sans engagement
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-balance">
                Prêt à déménager ?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Obtenez votre devis gratuit et préparez votre déménagement en toute sérénité. Nos conseillers vous accompagnent pour une estimation précise sous 24h.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onNavigate('quote')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-base shadow-lg shadow-orange-500/30 transition-all active:scale-[0.98]"
                >
                  <span>Obtenir mon devis gratuit</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl border border-slate-400/50 hover:bg-white/10 text-white font-semibold text-base transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>Nous contacter</span>
                </button>
              </div>

              <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
                <span>✓ Aucun acompte requis pour le devis</span>
                <span>✓ Protection soignée du mobilier</span>
                <span>✓ Intervention dans tout le Maroc</span>
              </div>
            </div>
          </section>
        );

      /* =========================================================================
          CUSTOM DYNAMIC USER SECTION (Added via Admin CMS)
          ========================================================================= */
      default:
        if (customSectionConfig?.isCustom && customSectionConfig?.customData) {
          const c = customSectionConfig.customData;
          const bgClasses =
            c.bgColor === 'navy'
              ? 'bg-[#0B3B60] text-white'
              : c.bgColor === 'slate'
              ? 'bg-slate-100 text-slate-900'
              : 'bg-white text-slate-900';

          return (
            <section key={sectionId} className={`py-16 sm:py-20 ${bgClasses}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-4">
                  {c.eyebrow && (
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-500 block">
                      {c.eyebrow}
                    </span>
                  )}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                    {c.title}
                  </h2>
                  {c.subtitle && (
                    <p className="text-sm sm:text-base opacity-90 leading-relaxed font-medium">
                      {c.subtitle}
                    </p>
                  )}
                  {c.content && (
                    <p className="text-xs sm:text-sm opacity-80 leading-relaxed pt-2">
                      {c.content}
                    </p>
                  )}
                  {c.ctaText && (
                    <div className="pt-4">
                      <button
                        onClick={() => onNavigate('quote')}
                        className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                      >
                        <span>{c.ctaText}</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        }
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {activeSections.map((sec) => renderSection(sec.id, sec))}
    </div>
  );
};
