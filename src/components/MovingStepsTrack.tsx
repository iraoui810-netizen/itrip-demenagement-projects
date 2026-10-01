import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Hand
} from 'lucide-react';

interface MovingStepsTrackProps {
  onNavigate?: (page: string, params?: any) => void;
}

interface StepItem {
  id: number;
  label: string;
  sublabel: string;
  tagline: string;
  description: string;
  benefits: string[];
}

export const MovingStepsTrack: React.FC<MovingStepsTrackProps> = ({ onNavigate }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isDriving, setIsDriving] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const steps: StepItem[] = [
    {
      id: 0,
      label: 'Emballage',
      sublabel: 'Protection & Cartons',
      tagline: 'Préparation minutieuse de vos affaires',
      description:
        'Nos déménageurs emballent l’ensemble de vos effets avec des cartons renforcés, du papier bulle antistatique, des housses matelas et des couvertures molletonnées.',
      benefits: ['Cartons livres & vaisselle fournis', 'Protection dédiée pour objets fragiles', 'Étiquetage par pièce']
    },
    {
      id: 1,
      label: 'Chargement',
      sublabel: 'Manutention & Portage',
      tagline: 'Portage et arrimage sécurisé',
      description:
        'Chargement méthodique par nos professionnels. Utilisation de diables, sangles de levage et calage précis pour optimiser l’espace et éliminer tout risque de choc.',
      benefits: ['Déménageurs formés aux gestes et postures', 'Sangles de calage professionnelles', 'Monte-meuble disponible si accès difficile']
    },
    {
      id: 2,
      label: 'Transport',
      sublabel: 'Acheminement sécurisé',
      tagline: 'Trajet maîtrisé à Casablanca et partout au Maroc',
      description:
        'Votre mobilier voyage à bord de nos camions capitonnés et récents. Les trajets sont optimisés pour respecter rigoureusement les délais prévus.',
      benefits: ['Flotte de véhicules capitonnés', 'Assurance marchandise incluse', 'Suivi du convoi en direct']
    },
    {
      id: 3,
      label: 'Déchargement',
      sublabel: 'Arrivée à destination',
      tagline: 'Dépose soignée à votre nouvelle adresse',
      description:
        'Arrivée ponctuelle sur votre nouveau lieu de vie ou locaux professionnels. Les meubles et cartons sont déchargés et répartis immédiatement dans chaque pièce souhaitée.',
      benefits: ['Respect scrupuleux des sols et murs', 'Répartition directe dans les bonnes pièces', 'Manutention rapide et propre']
    },
    {
      id: 4,
      label: 'Remontage',
      sublabel: 'Assemblage du mobilier',
      tagline: 'Réinstallation immédiate de vos meubles',
      description:
        'Nos techniciens remontent vos dressings, lits coffres, tables et bureaux avec leur visserie d’origine pour vous permettre d’emménager sans stress.',
      benefits: ['Remontage précis et stable', 'Outils professionnels adaptés', 'Mise en place selon vos directives']
    },
    {
      id: 5,
      label: 'Déballage',
      sublabel: 'Mise en place & Propreté',
      tagline: 'Votre nouvel espace prêt à vivre',
      description:
        'Déballage soigné de votre vaisselle et de vos objets du quotidien, vérification conjointe de l’état des biens et récupération de tous les cartons vides.',
      benefits: ['Contrôle d’intégrité contradictoire', 'Évacuation des déchets et cartons', 'Prise en main immédiate de votre logement']
    }
  ];

  // Auto-advance the truck every 4 seconds if playing
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      handleStepChange((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  // Center active step in mobile scroll view
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll > 0) {
        const targetScroll = (activeStep / (steps.length - 1)) * maxScroll;
        container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }
  }, [activeStep]);

  const handleStepChange = (updater: number | ((prev: number) => number)) => {
    setIsDriving(true);
    if (typeof updater === 'function') {
      setActiveStep(updater);
    } else {
      setActiveStep(updater);
    }
    const timeout = setTimeout(() => {
      setIsDriving(false);
    }, 700);
    return () => clearTimeout(timeout);
  };

  const handlePrev = () => {
    handleStepChange((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    handleStepChange((prev) => (prev + 1) % steps.length);
  };

  // Positions on the track (in percent)
  const stepPositions = [12, 27, 42, 57, 72, 88];
  const truckPositionPercent = stepPositions[activeStep];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-white via-slate-50/70 to-white overflow-hidden border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Matching User's Image */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>Processus certifié sans stress</span>
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-[40px] font-extrabold text-[#2C3E50] tracking-tight">
            Des étapes de déménagements maitrisées
          </h2>
          <p className="text-xs sm:text-base text-slate-500 mt-2 max-w-2xl mx-auto">
            Découvrez comment notre équipe orchestre chaque étape de votre mobilité pour une transition parfaitement fluide et sécurisée.
          </p>
        </div>

        {/* Mobile Navigation bar (Only visible on small screens to easily switch steps) */}
        <div className="flex md:hidden items-center justify-between bg-white px-4 py-2.5 rounded-2xl border border-slate-200 shadow-sm mb-6">
          <button
            onClick={handlePrev}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            aria-label="Étape précédente"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">
              Étape {activeStep + 1} / {steps.length}
            </span>
            <span className="text-sm font-extrabold text-slate-900">
              {steps[activeStep].label}
            </span>
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            aria-label="Étape suivante"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Helper swipe hint on mobile */}
        <div className="flex md:hidden items-center justify-center gap-1.5 text-[11px] text-slate-400 mb-2">
          <Hand className="h-3.5 w-3.5" />
          <span>Faites glisser horizontalement pour voir tout le trajet</span>
        </div>

        {/* =========================================================================
            THE ANIMATED MOVING TRACK CONTAINER (RESPONSIVE & SCROLLABLE ON MOBILE)
            ========================================================================= */}
        <div
          ref={scrollContainerRef}
          className="relative overflow-x-auto no-scrollbar pt-20 pb-8 select-none"
        >
          {/* Inner Track Wrapper with guaranteed minimum width so elements never collapse on mobile */}
          <div className="relative min-w-[740px] md:min-w-0 w-full px-4">
            {/* Left Decorative Trees (from user image) */}
            <div className="absolute left-2 bottom-[54px] z-10 pointer-events-none flex items-end gap-1">
              {/* Tree 1 (Small purple) */}
              <svg width="28" height="66" viewBox="0 0 34 78" fill="none" className="shrink-0 drop-shadow-sm">
                <path
                  d="M17 2C9 18 2 34 2 54C2 66 9 70 17 70C25 70 32 66 32 54C32 34 25 18 17 2Z"
                  fill="#6366F1"
                />
                <line x1="17" y1="70" x2="17" y2="78" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              {/* Tree 2 (Medium violet) */}
              <svg width="34" height="82" viewBox="0 0 40 96" fill="none" className="shrink-0 drop-shadow-sm -ml-2">
                <path
                  d="M20 2C10 22 2 42 2 68C2 82 10 86 20 86C30 86 38 82 38 68C38 42 30 22 20 2Z"
                  fill="#4F46E5"
                />
                <line x1="20" y1="86" x2="20" y2="96" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
              </svg>
              {/* Tree 3 (Tall royal blue) */}
              <svg width="40" height="102" viewBox="0 0 48 120" fill="none" className="shrink-0 drop-shadow-md -ml-2">
                <path
                  d="M24 2C12 28 3 54 3 86C3 104 12 110 24 110C36 110 45 104 45 86C45 54 36 28 24 2Z"
                  fill="#4338CA"
                />
                <line x1="24" y1="110" x2="24" y2="120" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Dashed Road Line */}
            <div className="absolute top-[32px] left-0 right-0 h-0.5 border-t-2 border-dashed border-slate-300 z-0" />

            {/* Moving Yellow/White Truck (ALWAYS VISIBLE on Mobile & Desktop!) */}
            <div
              className={`absolute top-[-68px] z-30 transition-all duration-700 ease-out ${
                isDriving ? 'scale-105 -rotate-1' : 'scale-100 rotate-0'
              }`}
              style={{
                left: `${truckPositionPercent}%`,
                transform: 'translateX(-50%)'
              }}
            >
              {/* Detailed Yellow Truck SVG Matching the Image */}
              <div className="relative group cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
                {/* Speech Bubble above truck indicating status */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900 text-white text-[10px] font-bold py-0.5 px-2 rounded-full shadow-md pointer-events-none flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  <span>Étape {activeStep + 1} : {steps[activeStep].label}</span>
                </div>

                <svg width="118" height="80" viewBox="0 0 128 88" fill="none" className="drop-shadow-lg">
                  {/* Yellow Cargo Box */}
                  <rect x="6" y="8" width="76" height="56" rx="3" fill="#EAB308" stroke="#CA8A04" strokeWidth="1.5" />
                  {/* Subtle Box Panels */}
                  <line x1="30" y1="8" x2="30" y2="64" stroke="#CA8A04" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
                  <line x1="56" y1="8" x2="56" y2="64" stroke="#CA8A04" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
                  <rect x="10" y="24" width="20" height="24" rx="2" fill="#CA8A04" opacity="0.2" />

                  {/* Truck Cabin (White / Silver) */}
                  <path
                    d="M82 24H102C106 24 112 30 115 36L121 46C123 49 124 52 124 56V64H82V24Z"
                    fill="#F8FAFC"
                    stroke="#CBD5E1"
                    strokeWidth="1.5"
                  />
                  {/* Front Bumper & Grill */}
                  <rect x="118" y="52" width="7" height="12" rx="1.5" fill="#475569" />
                  <line x1="120" y1="55" x2="124" y2="55" stroke="#94A3B8" strokeWidth="1" />
                  <line x1="120" y1="58" x2="124" y2="58" stroke="#94A3B8" strokeWidth="1" />
                  <line x1="120" y1="61" x2="124" y2="61" stroke="#94A3B8" strokeWidth="1" />

                  {/* Headlight */}
                  <circle cx="122" cy="48" r="2.5" fill="#FEF08A" stroke="#FBBF24" strokeWidth="0.8" />

                  {/* Cabin Windshield / Window */}
                  <path
                    d="M92 28H101C104 28 108 33 110 37L114 44H92V28Z"
                    fill="#38BDF8"
                    opacity="0.8"
                    stroke="#0284C7"
                    strokeWidth="1"
                  />

                  {/* Side Mirror */}
                  <rect x="90" y="34" width="3" height="7" rx="1" fill="#334155" />

                  {/* Door Handle */}
                  <rect x="88" y="47" width="5" height="1.5" rx="0.75" fill="#94A3B8" />

                  {/* Chassis / Lower Frame */}
                  <rect x="10" y="64" width="108" height="6" fill="#1E293B" rx="1" />

                  {/* Left Wheel Wheel-well */}
                  <circle cx="28" cy="68" r="14" fill="#0F172A" />
                  {/* Left Wheel (Tire) */}
                  <circle cx="28" cy="68" r="12" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                  {/* Left Wheel Rim */}
                  <circle cx="28" cy="68" r="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
                  <circle cx="28" cy="68" r="2.5" fill="#475569" />

                  {/* Right Wheel Wheel-well */}
                  <circle cx="98" cy="68" r="14" fill="#0F172A" />
                  {/* Right Wheel (Tire) */}
                  <circle cx="98" cy="68" r="12" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
                  {/* Right Wheel Rim */}
                  <circle cx="98" cy="68" r="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
                  <circle cx="98" cy="68" r="2.5" fill="#475569" />
                </svg>
              </div>
            </div>

            {/* 6 Step Milestone Circles */}
            <div className="grid grid-cols-6 gap-2 relative z-20">
              {steps.map((step) => {
                const isActive = activeStep === step.id;
                const isPassed = activeStep >= step.id;

                return (
                  <div
                    key={step.id}
                    onClick={() => handleStepChange(step.id)}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    {/* Golden Milestone Circle with Icon */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-[#D4B200] text-white ring-4 ring-[#D4B200]/30 scale-110 shadow-lg'
                          : isPassed
                          ? 'bg-[#D4B200] text-white hover:scale-105'
                          : 'bg-[#D4B200] text-white/95 hover:bg-[#B89B00] hover:scale-105'
                      }`}
                    >
                      {step.id === 0 && (
                        /* Emballage: 3D box icon */
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                          <path d="m3.3 7 8.7 5 8.7-5" />
                          <path d="M12 22V12" />
                        </svg>
                      )}

                      {step.id === 1 && (
                        /* Chargement: Hand truck / diable avec cartons */
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="6" cy="19" r="2" />
                          <path d="M9 19h10a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9" />
                          <path d="M6 17V4a1 1 0 0 0-1-1H3" />
                          <rect x="9" y="8" width="7" height="6" rx="1" />
                        </svg>
                      )}

                      {step.id === 2 && (
                        /* Transport: Truck icon */
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="1" y="3" width="15" height="13" rx="1" />
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                          <circle cx="5.5" cy="18.5" r="2.5" />
                          <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                      )}

                      {step.id === 3 && (
                        /* Déchargement: Truck + Workers arriving */
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                          <circle cx="7" cy="18" r="2" />
                          <path d="M15 8h4l3 3v6a1 1 0 0 1-1 1h-2" />
                          <circle cx="17" cy="18" r="2" />
                          <path d="M8 8h3" />
                          <path d="M8 12h4" />
                        </svg>
                      )}

                      {step.id === 4 && (
                        /* Remontage: Two hands assembling / furniture */
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="m14 6 7 7-4 4-7-7" />
                          <path d="m3 21 6-6" />
                          <path d="m9 9 3 3" />
                          <rect x="2" y="2" width="6" height="6" rx="1" />
                        </svg>
                      )}

                      {step.id === 5 && (
                        /* Déballage: Unpacking / Open Box */
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="16.5 9.4 7.55 4.24" />
                          <polyline points="3.29 7 12 12.63 20.71 7" />
                          <line x1="12" y1="22.76" x2="12" y2="12.63" />
                          <path d="m7.5 4.27 9 5.15" />
                          <polyline points="3.29 7 3.29 17 12 22 20.71 17 20.71 7" />
                        </svg>
                      )}
                    </div>

                    {/* Step Label (Below circle, exactly like image) */}
                    <div className="mt-3 text-center">
                      <span
                        className={`text-xs sm:text-sm font-bold block transition-colors ${
                          isActive
                            ? 'text-slate-900 font-extrabold scale-105'
                            : 'text-slate-600 group-hover:text-slate-900'
                        }`}
                      >
                        {step.label}
                      </span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        Étape {step.id + 1}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            DETAILED ACTIVE STEP SPOTLIGHT CARD
            ========================================================================= */}
        <div className="mt-6 bg-white rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-8 max-w-4xl mx-auto transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4B200] text-white font-extrabold text-xs">
                  {steps[activeStep].id + 1}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4B200]">
                  {steps[activeStep].sublabel}
                </span>
              </div>

              <h3 className="text-lg sm:text-2xl font-extrabold text-[#0B3B60]">
                {steps[activeStep].label} : {steps[activeStep].tagline}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* 3 Key Benefits */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {steps[activeStep].benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Controls & CTA */}
            <div className="flex flex-col sm:flex-row md:flex-col items-center justify-center gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 md:border-l border-slate-100 md:pl-6">
              {/* Play/Pause & Reset */}
              <div className="flex items-center gap-2 w-full justify-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="py-1.5 px-3 rounded-lg border border-slate-200 hover:bg-slate-100 text-xs text-slate-700 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  title={isPlaying ? 'Mettre en pause le camion' : 'Reprendre le déplacement'}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-3.5 w-3.5 text-slate-600" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Animer</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleStepChange(0)}
                  className="py-1.5 px-2.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-xs text-slate-500 transition-colors cursor-pointer"
                  title="Revenir à l'étape 1"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Action Button to Quote */}
              <button
                onClick={() => onNavigate && onNavigate('quote')}
                className="w-full py-3 px-5 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <span>Planifier mon déménagement</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <span className="text-[11px] text-slate-400 text-center">
                Devis immédiat · Gratuit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
