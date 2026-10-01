import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Heart, Lock } from 'lucide-react';
import { useAdminData } from '../context/AdminDataContext';

interface FooterProps {
  onNavigate: (page: string, params?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { brandConfig, cities } = useAdminData();
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${brandConfig.whatsappRaw}?text=${encodeURIComponent(
    'Bonjour iTrip Déménagement, je souhaite obtenir un devis gratuit pour mon projet de déménagement.'
  )}`;

  const handleCityClick = (citySlug: string) => {
    onNavigate('city-detail', { citySlug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B3B60] text-slate-200 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-700/60">
          {/* Column 1: Brand & Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              {brandConfig.logoType === 'image' && brandConfig.customLogoUrl ? (
                <img
                  src={brandConfig.customLogoUrl}
                  alt={brandConfig.businessName}
                  className="h-10 max-w-[180px] object-contain bg-white/10 p-1 rounded-lg"
                />
              ) : (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0B3B60] shadow-sm">
                    <span className="font-extrabold text-lg tracking-tighter text-[#0B3B60]">iT</span>
                    <span className="h-2 w-2 rounded-full bg-orange-500 -ml-0.5 -mt-2"></span>
                  </div>
                  <div className="leading-tight">
                    <span className="block text-xl font-bold tracking-tight text-white">
                      {brandConfig.businessName}
                    </span>
                    <span className="block text-xs text-slate-300">{brandConfig.tagline}</span>
                  </div>
                </>
              )}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Entreprise spécialisée dans le déménagement de particuliers, le transfert de bureaux et le transport sécurisé de mobilier à Casablanca et dans toutes les villes du Maroc. Équipes formées, matériel de protection professionnel et devis transparent.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                <ShieldCheck className="h-3.5 w-3.5 text-orange-400" />
                <span>Devis 100% gratuit</span>
              </span>
              <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                <MapPin className="h-3.5 w-3.5 text-sky-400" />
                <span>Maroc entier</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Nos services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  À propos d’iTrip
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('quote')}
                  className="hover:text-orange-400 transition-colors text-left font-semibold text-orange-300"
                >
                  Demander un devis
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('blog')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Conseils & Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Nos prestations</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Déménagement particulier
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Déménagement entreprise
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Transport de meubles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Emballage & cartons
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Démontage & remontage
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Garde-meubles sécurisé
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact & Agence</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{brandConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-orange-400 shrink-0" />
                <a
                  href={`tel:${brandConfig.phoneRaw}`}
                  className="hover:text-orange-400 transition-colors"
                >
                  {brandConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-medium"
                >
                  {brandConfig.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${brandConfig.email}`}
                  className="hover:text-sky-300 transition-colors"
                >
                  {brandConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-slate-400">
                <Clock className="h-4 w-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{brandConfig.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Moroccan Cities Grid (SEO Internal Links) */}
        <div className="py-8 border-b border-slate-700/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Principales villes desservies au Maroc
            </h4>
            <span className="text-xs text-slate-400">Liaisons directes & groupages réguliers</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => handleCityClick(city.slug)}
                className="text-xs py-1.5 px-3 rounded-lg bg-slate-800/60 hover:bg-orange-500/20 hover:text-orange-300 text-slate-300 border border-slate-700/60 transition-colors"
              >
                Déménagement {city.name}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {brandConfig.businessName} — Tous droits réservés.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setActiveLegalModal('mentions')}
              className="hover:text-slate-200 underline-offset-4 hover:underline"
            >
              Mentions légales
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-slate-200 underline-offset-4 hover:underline"
            >
              Politique de confidentialité
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveLegalModal('cgv')}
              className="hover:text-slate-200 underline-offset-4 hover:underline"
            >
              Conditions générales
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => handleNavClick('admin')}
              className="hover:text-orange-400 flex items-center gap-1 text-slate-400"
              title="Accès Panneau d'Administration"
            >
              <Lock className="h-3 w-3" />
              <span>Espace Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 sm:p-8 text-slate-800 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <h3 className="text-xl font-bold text-[#0B3B60]">
                {activeLegalModal === 'mentions' && 'Mentions Légales'}
                {activeLegalModal === 'privacy' && 'Politique de Confidentialité'}
                {activeLegalModal === 'cgv' && 'Conditions Générales de Vente & Prestations'}
              </h3>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
              {activeLegalModal === 'mentions' && (
                <>
                  <p>
                    <strong>Éditeur du site :</strong> {brandConfig.businessName}, société spécialisée dans les services de déménagement, transport de mobilier et logistique au Maroc.
                  </p>
                  <p>
                    <strong>Siège d’exploitation :</strong> {brandConfig.address}.
                  </p>
                  <p>
                    <strong>Hébergement :</strong> Serveurs sécurisés Cloud à haute disponibilité avec certificat SSL 256 bits.
                  </p>
                  <p>
                    <strong>Propriété intellectuelle :</strong> L’ensemble des éléments graphiques, marques, logos et contenus textuels sont la propriété exclusive d’{brandConfig.businessName}.
                  </p>
                </>
              )}

              {activeLegalModal === 'privacy' && (
                <>
                  <p>
                    Conformément aux dispositions relatives à la protection des données à caractère personnel au Maroc (Loi 09-08), {brandConfig.businessName} s’engage à protéger la vie privée des utilisateurs de sa plateforme.
                  </p>
                  <p>
                    <strong>Données collectées :</strong> Les informations transmises via nos formulaires de devis (nom, téléphone, adresses de départ et destination, inventaire indicatif) sont uniquement utilisées pour l’établissement de votre devis personnalisé et l’organisation opérationnelle de votre déménagement.
                  </p>
                  <p>
                    <strong>Non-cession :</strong> Vos coordonnées ne sont en aucun cas vendues, cédées ou louées à des tiers publicitaires.
                  </p>
                  <p>
                    <strong>Droit d’accès :</strong> Vous pouvez demander la modification ou suppression de vos données à tout moment en écrivant à {brandConfig.email}.
                  </p>
                </>
              )}

              {activeLegalModal === 'cgv' && (
                <>
                  <p>
                    <strong>1. Établissement du devis :</strong> Tout devis est gratuit et sans engagement. Il précise la nature des prestations retenues, les adresses, le volume estimé et les options de conditionnement.
                  </p>
                  <p>
                    <strong>2. Réservation & Accès :</strong> Le client s’engage à fournir des informations fidèles sur les accès (étages, présence ou non d’un ascenseur aux normes, distance de portage).
                  </p>
                  <p>
                    <strong>3. Objets précieux & Bijoux :</strong> Les fonds monétaires, bijoux et documents administratifs confidentiels doivent être conservés par le client lors du déménagement.
                  </p>
                  <p>
                    <strong>4. Assurance & Responsabilité :</strong> Nos équipes assurent une manutention professionnelle et soignée. Les biens fragiles confiés à nos soins sous emballage agréé font l’objet d’un inventaire préalable.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="py-2 px-5 rounded-xl bg-[#0B3B60] text-white text-sm font-semibold hover:bg-[#082944]"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

