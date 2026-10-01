import React, { useState } from 'react';
import {
  Building,
  Home,
  Building2,
  Briefcase,
  Factory,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageCircle,
  MapPin,
  AlertCircle,
  Clock,
  Sparkles,
  User
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useAdminData } from '../context/AdminDataContext';

interface QuotePageProps {
  onNavigate: (page: string, params?: any) => void;
  initialService?: string;
  initialPackage?: string;
}

export const QuotePage: React.FC<QuotePageProps> = ({
  onNavigate,
  initialService,
  initialPackage
}) => {
  const { addLead, brandConfig } = useAdminData();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Map any incoming service parameter to one of the 5 exact housing types
  const getInitialHousing = (): string => {
    if (initialService === 'Maison') return 'Maison';
    if (initialService === 'Bureaux' || initialService === 'entreprise') return 'Bureaux';
    if (initialService === 'Villa') return 'Villa';
    if (initialService === 'Société' || initialService === 'societe') return 'Société';
    return 'Appartement';
  };

  const [formData, setFormData] = useState({
    typeLogement: getInitialHousing(),
    depart: '',
    arrivee: '',
    nom: '',
    telephone: ''
  });

  const housingTypes = [
    { id: 'Appartement', label: 'Appartement', icon: Building },
    { id: 'Maison', label: 'Maison', icon: Home },
    { id: 'Bureaux', label: 'Bureaux', icon: Briefcase },
    { id: 'Villa', label: 'Villa', icon: Building2 },
    { id: 'Société', label: 'Société', icon: Factory },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.depart.trim()) {
      setErrorMessage('Veuillez indiquer le lieu de départ (ville ou adresse).');
      return;
    }
    if (!formData.arrivee.trim()) {
      setErrorMessage('Veuillez indiquer le lieu d’arrivée (ville ou adresse).');
      return;
    }
    if (!formData.nom.trim()) {
      setErrorMessage('Veuillez indiquer votre nom.');
      return;
    }
    if (!formData.telephone.trim() || formData.telephone.length < 8) {
      setErrorMessage('Veuillez saisir votre numéro de téléphone.');
      return;
    }

    setIsSubmitting(true);

    // Save lead into Admin CRM
    addLead({
      clientName: formData.nom.trim(),
      phone: formData.telephone.trim(),
      email: 'Non précisé',
      departureCity: formData.depart.trim(),
      destinationCity: formData.arrivee.trim(),
      serviceType: `Déménagement ${formData.typeLogement}`,
      packageTier: initialPackage || 'Formule Express',
      moveDate: 'À convenir',
      details: `Type de logement: ${formData.typeLogement}. Départ: ${formData.depart.trim()} | Arrivée: ${formData.arrivee.trim()}`
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 350);
  };

  const whatsappDirectUrl = `https://wa.me/${brandConfig.whatsappRaw}?text=${encodeURIComponent(
    `Bonjour iTrip Déménagement, je souhaite un devis pour un déménagement [${formData.typeLogement}] de "${formData.depart}" vers "${formData.arrivee}" au nom de ${formData.nom}.`
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Accueil', onClick: () => onNavigate('home') },
            { label: 'Demande de devis' }
          ]}
        />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="h-3.5 w-3.5 text-orange-600" />
            <span>Devis gratuit en 30 secondes</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B3B60]">
            Votre devis de déménagement
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Renseignez simplement vos adresses et vos coordonnées pour recevoir votre devis sous 24h.
          </p>
        </div>

        {isSubmitted ? (
          /* =========================================================================
             CONFIRMATION RAPIDE
             ========================================================================= */
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xl text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Demande bien reçue
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3B60] mt-1">
                Merci {formData.nom} !
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                Notre conseiller étudie votre déménagement de <strong>{formData.depart}</strong> vers <strong>{formData.arrivee}</strong> ({formData.typeLogement}) et vous contactera rapidement au <strong>{formData.telephone}</strong>.
              </p>
            </div>

            {/* Recap Box */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-200 pb-1.5 font-bold text-slate-900">
                <span>Type de bien :</span>
                <span className="text-orange-600 font-extrabold">{formData.typeLogement}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Départ :</span>
                <span className="font-semibold text-right max-w-[200px] truncate">{formData.depart}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Arrivée :</span>
                <span className="font-semibold text-right max-w-[200px] truncate">{formData.arrivee}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Contact :</span>
                <span className="font-semibold">{formData.nom} ({formData.telephone})</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Discuter directement sur WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onNavigate('home');
                }}
                className="w-full sm:w-auto py-3 px-6 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors"
              >
                Retour à l'accueil
              </button>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Devis 100% gratuit et sans engagement</span>
            </div>
          </div>
        ) : (
          /* =========================================================================
             FORMULAIRE ULTRA SIMPLE (Départ, Arrivée, Nom, Téléphone)
             ========================================================================= */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-10 space-y-6"
          >
            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2 font-medium">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 1. TYPE DE LOGEMENT (5 choix) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-orange-600 mb-2">
                Type de logement
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {housingTypes.map((item) => {
                  const Icon = item.icon;
                  const isSelected = formData.typeLogement === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, typeLogement: item.id })}
                      className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                        isSelected
                          ? 'border-orange-500 bg-orange-50/80 text-orange-950 ring-2 ring-orange-400/20 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div
                        className={`p-2 rounded-xl ${
                          isSelected ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-bold text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. DÉPART (Text area libre) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-orange-500" />
                <span>Lieu de départ *</span>
              </label>
              <textarea
                rows={2}
                required
                placeholder="Indiquez la ville et l'adresse de départ (Ex: Casablanca, Maârif...)"
                value={formData.depart}
                onChange={(e) => {
                  setFormData({ ...formData, depart: e.target.value });
                  setErrorMessage('');
                }}
                className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none bg-slate-50/50"
              />
            </div>

            {/* 3. ARRIVÉE / ARRIVATION (Text area libre) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-emerald-600" />
                <span>Lieu d'arrivée *</span>
              </label>
              <textarea
                rows={2}
                required
                placeholder="Indiquez la ville et l'adresse d'arrivée (Ex: Rabat, Agdal ou Tanger...)"
                value={formData.arrivee}
                onChange={(e) => {
                  setFormData({ ...formData, arrivee: e.target.value });
                  setErrorMessage('');
                }}
                className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none bg-slate-50/50"
              />
            </div>

            {/* 4. NOM & TÉLÉPHONE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-slate-500" />
                  <span>Votre Nom complet *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Yassine Bennani"
                  value={formData.nom}
                  onChange={(e) => {
                    setFormData({ ...formData, nom: e.target.value });
                    setErrorMessage('');
                  }}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none bg-slate-50/50 font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5 text-orange-500" />
                  <span>Téléphone (WhatsApp) *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Ex: 06 61 00 00 00"
                  value={formData.telephone}
                  onChange={(e) => {
                    setFormData({ ...formData, telephone: e.target.value });
                    setErrorMessage('');
                  }}
                  className="w-full text-xs sm:text-sm p-3 rounded-xl border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none bg-slate-50/50 font-semibold text-orange-600"
                />
              </div>
            </div>

            {/* BOUTON D'ENVOI */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer"
              >
                <span>{isSubmitting ? 'Envoi en cours...' : 'Obtenir mon devis gratuit'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Sans engagement</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-orange-500" />
                  <span>Réponse sous 24h</span>
                </span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
