import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  Truck,
  HeartHandshake,
  Clock,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useAdminData } from '../context/AdminDataContext';

interface AboutPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { aboutConfig, brandConfig } = useAdminData();
  const whatsappUrl = `https://wa.me/${brandConfig.whatsappRaw}?text=${encodeURIComponent(
    'Bonjour iTrip Déménagement, je souhaite échanger sur votre entreprise.'
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Accueil', onClick: () => onNavigate('home') },
            { label: 'À propos' }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-[#0B3B60] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            Qui sommes-nous ?
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto text-balance">
            Votre partenaire pour un déménagement en toute sérénité
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            iTrip Déménagement est né de la volonté d’apporter au secteur du déménagement au Maroc un niveau d’exigence, de soin et de transparence digne des meilleurs standards internationaux.
          </p>
        </div>
      </section>

      {/* Section: Notre Histoire & Notre Mission */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Genèse & Vision
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3B60]">
                  Notre histoire
                </h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Constatant les difficultés récurrentes rencontrées par les ménages et les professionnels lors de leurs déménagements au Maroc (retards, manutention précipitée, meubles abîmés, prix modifiés au dernier moment), les fondateurs d’iTrip Déménagement ont voulu poser un cadre rigoureux et structuré.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Depuis Casablanca, nous avons développé une approche centrée sur l’humain et la rigueur technique : chaque meuble est traité avec le même égard que s’il nous appartenait, et chaque client bénéficie d’un interlocuteur dédié du devis jusqu’au placement du dernier carton.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200/80 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Raison d'être
                </span>
                <h2 className="text-2xl font-bold text-[#0B3B60]">
                  Notre mission
                </h2>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Déménager marque souvent une étape charnière d’une vie ou d’une entreprise : achat d’un bien, agrandissement de la famille, mutation ou développement professionnel. Notre mission est de transformer cet événement potentiellement stressant en une transition fluide, prévisible et parfaitement sereine.
              </p>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-medium text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Respect des délais convenus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Protection haut de gamme</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Devis clair sans frais cachés</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Écoute & disponibilité 7j/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Nos Engagements */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
              Les piliers de notre service
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3B60]">
              Nos 4 engagements fondamentaux
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Des principes concrets qui guident chacune de nos interventions au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Sécurité intégrale</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Emballage antichoc systématique des objets fragiles, housses imperméables pour matelas et capitons intérieurs dans tous nos véhicules.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Ponctualité rigoureuse</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Planification des trajets et respect des créneaux horaires convenus pour ne pas perturber votre organisation personnelle ou professionnelle.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Transparence tarifaire</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Nos devis sont détaillés poste par poste. Le prix convenu est le prix payé, sans aucune mauvaise surprise le jour J.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Personnel qualifié</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Déménageurs courtois, formés aux techniques de levage ergonomiques et respectueux de la discrétion de votre cadre de vie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Notre Équipe & Matériel */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src={aboutConfig.teamImage}
                alt="Déménageurs iTrip préparant un meuble"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block">
                Notre savoir-faire opérationnel
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3B60]">
                Notre équipe et nos moyens matériels
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Une prestation de qualité dépend avant tout des hommes et des équipements mobilisés. Chez iTrip, nous investissons continuellement dans du matériel moderne :
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                  <span><strong>Camions capitonnés :</strong> fourgons récents équipés de rails d'arrimage pour absorber les vibrations routières.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                  <span><strong>Matériel de manutention :</strong> chariots de transfert, sangles ergonomiques et diables renforcés pour préserver les sols et les plinthes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                  <span><strong>Fournitures de protection certifiées :</strong> cartons double cannelure, papier bulle haute densité, housses de canapés et matelas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Notre Méthode de Travail */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
              Rigueur & Organisation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B3B60]">
              Notre méthode de travail éprouvée
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-orange-600 uppercase">Phase 1</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">Avant le déménagement</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Estimation rigoureuse des volumes par photos ou visite, validation des accès (étages, ascenseur), livraison éventuelle des cartons et planification de la date.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-orange-600 uppercase">Phase 2</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">Le jour de l’intervention</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Arrivée de l’équipe à l’heure convenue, protection des passages, emballage du mobilier lourd et fragile, chargement méthodique et sécurisé du camion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-orange-600 uppercase">Phase 3</span>
              <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">À destination</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Déchargement soigné, remontage des meubles démontés et placement de chaque carton dans la pièce correspondante selon vos consignes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-[#0B3B60] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Faites confiance à un professionnel du déménagement
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Contactez notre équipe dès aujourd’hui pour une évaluation personnalisée de votre projet de déménagement à Casablanca ou partout au Maroc.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('quote')}
              className="w-full sm:w-auto py-3 px-8 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow transition-colors"
            >
              Obtenir mon devis gratuit
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Échanger sur WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
