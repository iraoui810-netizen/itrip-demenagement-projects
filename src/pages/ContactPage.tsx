import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Upload,
  ShieldCheck
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_CONFIG } from '../constants/config';
import { GENERAL_FAQS } from '../constants/faqs';
import { CITIES_DATA } from '../constants/cities';
import { useAdminData } from '../context/AdminDataContext';

interface ContactPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { addLead } = useAdminData();
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>('f-1');

  const [form, setForm] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    villeDepart: 'Casablanca',
    villeArrivee: 'Casablanca',
    dateSouhaitee: '',
    typeLogement: 'Appartement',
    etageDepart: '0',
    etageArrivee: '0',
    ascenseur: 'oui',
    description: '',
    message: '',
    consent: true
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nom || !form.telephone || !form.email) {
      setErrorMessage('Veuillez renseigner vos coordonnées (Nom, Téléphone et Email).');
      return;
    }
    if (!form.consent) {
      setErrorMessage('Veuillez accepter la politique de confidentialité pour transmettre votre demande.');
      return;
    }

    addLead({
      clientName: `${form.prenom} ${form.nom}`.trim(),
      phone: form.telephone,
      email: form.email,
      departureCity: form.villeDepart,
      destinationCity: form.villeArrivee,
      serviceType: form.typeLogement,
      packageTier: 'Formule à définir',
      moveDate: form.dateSouhaitee || 'Non spécifiée',
      details: form.description || form.message || `Étage départ: ${form.etageDepart}, Étage arrivée: ${form.etageArrivee}, Ascenseur: ${form.ascenseur}`
    });

    setIsSuccess(true);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_CONFIG.WHATSAPP_NUMBER_RAW}?text=${encodeURIComponent(
    BUSINESS_CONFIG.DEFAULT_WHATSAPP_MESSAGE
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Accueil', onClick: () => onNavigate('home') },
            { label: 'Contact' }
          ]}
        />
      </div>

      {/* Header */}
      <section className="bg-[#0B3B60] text-white py-14 sm:py-18 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            À votre écoute 7j/7
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Parlons de votre déménagement
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Une question sur un trajet ? Besoin d'une visite technique à domicile ou d'un devis immédiat ? Nos coordinateurs vous répondent par téléphone, WhatsApp ou formulaire.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact & Info Cards */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm space-y-5">
              <h2 className="text-base font-bold text-[#0B3B60] pb-2 border-b border-slate-100">
                Coordonnées de l'agence
              </h2>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Téléphone direct</span>
                  <a
                    href={`tel:${BUSINESS_CONFIG.PHONE_NUMBER_RAW}`}
                    className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors"
                  >
                    {BUSINESS_CONFIG.PHONE_NUMBER}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Appel non surtaxé du lundi au samedi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-600 shrink-0">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">WhatsApp direct</span>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-700 hover:underline"
                  >
                    {BUSINESS_CONFIG.WHATSAPP_NUMBER}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Idéal pour envoyer vos vidéos et photos de meubles</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-sky-100 text-sky-600 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Adresse Email</span>
                  <a
                    href={`mailto:${BUSINESS_CONFIG.EMAIL}`}
                    className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors break-all"
                  >
                    {BUSINESS_CONFIG.EMAIL}
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Réponse garantie sous 24h ouvrées</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-100 text-purple-600 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Zone d'intervention</span>
                  <span className="text-sm font-bold text-slate-900">{BUSINESS_CONFIG.ADDRESS_DISPLAY}</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Casablanca, Rabat, Marrakech, Tanger et tout le Maroc</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600 shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 block">Horaires d'ouverture</span>
                  <span className="text-xs text-slate-800 font-medium block">{BUSINESS_CONFIG.WORKING_HOURS}</span>
                </div>
              </div>
            </div>

            {/* Reassurance banner */}
            <div className="bg-[#0B3B60] text-white p-6 rounded-2xl shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-orange-400 font-bold text-sm">
                <ShieldCheck className="h-5 w-5" />
                <span>Engagement sérénité iTrip</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Toutes nos estimations sont 100% gratuites et sans le moindre engagement. Nous nous engageons à ne pratiquer aucune majoration non convenue au moment de l'intervention.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Quote Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm">
              <h2 className="text-xl font-bold text-[#0B3B60] mb-1">
                Formulaire de demande d’intervention & devis
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Complétez les informations relatives à vos adresses pour obtenir une réponse rapide et ciblée.
              </p>

              {isSuccess ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-950">
                    Merci {form.prenom} {form.nom}, votre message a été transmis avec succès !
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Un conseiller logistique d'iTrip Déménagement prépare votre estimation et vous recontactera sous 24h ouvrées au <strong>{form.telephone}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setForm({
                        nom: '',
                        prenom: '',
                        telephone: '',
                        email: '',
                        villeDepart: 'Casablanca',
                        villeArrivee: 'Casablanca',
                        dateSouhaitee: '',
                        typeLogement: 'Appartement',
                        etageDepart: '0',
                        etageArrivee: '0',
                        ascenseur: 'oui',
                        description: '',
                        message: '',
                        consent: true
                      });
                    }}
                    className="py-2.5 px-5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs transition-colors"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Section 1: Identité */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Nom *</label>
                      <input
                        type="text"
                        name="nom"
                        value={form.nom}
                        onChange={handleChange}
                        placeholder="Votre nom de famille"
                        required
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Prénom</label>
                      <input
                        type="text"
                        name="prenom"
                        value={form.prenom}
                        onChange={handleChange}
                        placeholder="Votre prénom"
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Section 2: Contact */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Téléphone mobile *</label>
                      <input
                        type="tel"
                        name="telephone"
                        value={form.telephone}
                        onChange={handleChange}
                        placeholder="06 00 00 00 00"
                        required
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="votre.email@exemple.com"
                        required
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Section 3: Villes & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Ville de départ</label>
                      <select
                        name="villeDepart"
                        value={form.villeDepart}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-orange-500 focus:outline-none"
                      >
                        {CITIES_DATA.map((c) => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Ville d'arrivée</label>
                      <select
                        name="villeArrivee"
                        value={form.villeArrivee}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-orange-500 focus:outline-none"
                      >
                        {CITIES_DATA.map((c) => (
                          <option key={c.id} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Date souhaitée</label>
                      <input
                        type="date"
                        name="dateSouhaitee"
                        value={form.dateSouhaitee}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-orange-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Section 4: Logement & Accès */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Type de bien</label>
                      <select
                        name="typeLogement"
                        value={form.typeLogement}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-orange-500 focus:outline-none"
                      >
                        <option value="Appartement">Appartement</option>
                        <option value="Maison">Maison</option>
                        <option value="Bureaux">Bureaux</option>
                        <option value="Villa">Villa</option>
                        <option value="Société">Société</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Étage départ</label>
                      <input
                        type="text"
                        name="etageDepart"
                        value={form.etageDepart}
                        onChange={handleChange}
                        placeholder="Ex: RDC ou 2ème"
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Étage arrivée</label>
                      <input
                        type="text"
                        name="etageArrivee"
                        value={form.etageArrivee}
                        onChange={handleChange}
                        placeholder="Ex: 3ème ou Villa"
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Ascenseur</label>
                      <select
                        name="ascenseur"
                        value={form.ascenseur}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-300 py-2.5 px-3 text-sm focus:border-orange-500 focus:outline-none"
                      >
                        <option value="oui">Oui aux 2 adresses</option>
                        <option value="depart-seulement">Au départ uniquement</option>
                        <option value="arrivee-seulement">À l'arrivée uniquement</option>
                        <option value="non">Non (escalier seul)</option>
                      </select>
                    </div>
                  </div>

                  {/* Section 5: Description & Photos */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Description du mobilier & particularités
                    </label>
                    <textarea
                      name="description"
                      rows={2}
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Ex: Canapé 3 places, frigo américain, table 6 couverts, objets fragiles..."
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm focus:border-orange-500 focus:outline-none"
                    />
                  </div>

                  {/* Upload Simulator */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Photos ou vidéos du mobilier (Optionnel)
                    </label>
                    <div className="border border-dashed border-slate-300 rounded-xl p-3 text-center text-xs text-slate-500 flex items-center justify-center gap-2 hover:bg-slate-50 cursor-pointer">
                      <Upload className="h-4 w-4 text-slate-400" />
                      <span>Ajouter des photos pour accélérer l’estimation</span>
                    </div>
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={form.consent}
                        onChange={handleChange}
                        className="mt-0.5 rounded text-orange-500 focus:ring-orange-400"
                      />
                      <span>
                        En cochant cette case, j'accepte que mes données soient utilisées par iTrip Déménagement dans le strict cadre du traitement de ma demande de devis.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                    >
                      <Send className="h-4 w-4" />
                      <span>Demander mon devis gratuit</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section on Contact Page */}
        <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
              Foire aux questions
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B3B60]">
              Questions fréquentes sur nos déménagements
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {GENERAL_FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-800 hover:bg-slate-50"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
