import React, { useState } from 'react';
import {
  LayoutDashboard,
  Layers,
  Image as ImageIcon,
  Palette,
  FileText,
  Boxes,
  MapPin,
  MessageSquareQuote,
  Inbox,
  LogOut,
  ExternalLink,
  RotateCcw,
  Check,
  Plus,
  Trash2,
  ArrowUp,
  ArrowDown,
  Eye,
  EyeOff,
  Upload,
  Save,
  Phone,
  MessageCircle,
  HelpCircle,
  Building2,
  Calendar,
  Sparkles,
  Users,
  CheckCircle2
} from 'lucide-react';
import { useAdminData, compressImageFile, HomepageSectionConfig } from '../context/AdminDataContext';
import { ServiceItem, BlogPost, Testimonial, MoroccanCity } from '../types';

interface AdminDashboardPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({ onNavigate }) => {
  const {
    logoutAdmin,
    brandConfig,
    updateBrandConfig,
    heroConfig,
    updateHeroConfig,
    aboutConfig,
    updateAboutConfig,
    homepageSections,
    toggleSection,
    moveSectionUp,
    moveSectionDown,
    addCustomSection,
    deleteCustomSection,
    updateCustomSection,
    services,
    updateService,
    addService,
    deleteService,
    packages,
    updatePackage,
    testimonials,
    addTestimonial,
    deleteTestimonial,
    blogPosts,
    addBlogPost,
    deleteBlogPost,
    cities,
    updateCity,
    addCity,
    leads,
    updateLeadStatus,
    deleteLead,
    resetToDefaults
  } = useAdminData();

  const [activeTab, setActiveTab] = useState<string>('brand');
  const [saveStatus, setSaveStatus] = useState<string>('Modifications enregistrées');
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const notifySaved = (msg = 'Modifications enregistrées en direct !') => {
    setSaveStatus(msg);
    setTimeout(() => {
      setSaveStatus('Modifications enregistrées');
    }, 2500);
  };

  // State for new custom section modal/form
  const [newSectionForm, setNewSectionForm] = useState({
    name: 'Nouvelle Section Promotionnelle',
    title: 'Offre Spéciale Déménagement Casablanca',
    eyebrow: 'Offre Limitée',
    subtitle: 'Bénéficiez de fournitures d’emballage offertes pour tout déménagement réservé cette semaine.',
    content: 'Notre équipe vous livre gratuitement 20 cartons renforcés ainsi que le ruban adhésif pour votre préparation.',
    image: '',
    ctaText: 'En savoir plus',
    ctaLink: '/devis-gratuit',
    bgColor: 'white' as 'white' | 'slate' | 'navy'
  });

  // State for new testimonial form
  const [newTestimonialForm, setNewTestimonialForm] = useState({
    name: '',
    city: 'Casablanca',
    serviceType: 'Déménagement Appartement',
    date: 'Mars 2026',
    comment: '',
    rating: 5
  });

  // State for new blog article
  const [newBlogForm, setNewBlogForm] = useState({
    title: '',
    category: 'Conseils & Tarifs',
    readTime: '5 min de lecture',
    excerpt: '',
    author: 'Équipe iTrip Déménagement',
    h1Title: 'Introduction au sujet',
    p1: 'Le déménagement est une étape importante...'
  });

  // Safe Logo Upload with automatic canvas compression
  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        const compressedBase64 = await compressImageFile(file, 600, 0.85);
        if (compressedBase64) {
          updateBrandConfig({
            logoType: 'image',
            customLogoUrl: compressedBase64
          });
          notifySaved('Nouveau logo enregistré avec succès !');
        }
      } catch (err) {
        alert('Erreur lors du traitement de l’image. Veuillez réessayer avec une image plus légère.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  // Safe Hero Image Upload with automatic canvas compression
  const handleHeroImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        const compressedBase64 = await compressImageFile(file, 1400, 0.8);
        if (compressedBase64) {
          updateHeroConfig({ heroImage: compressedBase64 });
          notifySaved('Nouvelle photo de Hero enregistrée !');
        }
      } catch (err) {
        alert('Erreur lors du traitement de la photo. Veuillez réessayer.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  // Safe Team Photo Upload
  const handleTeamImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        const compressedBase64 = await compressImageFile(file, 1000, 0.8);
        if (compressedBase64) {
          updateAboutConfig({ teamImage: compressedBase64 });
          notifySaved('Photo d’équipe mise à jour !');
        }
      } catch (err) {
        alert('Erreur lors du traitement.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleAddCustomSection = (e: React.FormEvent) => {
    e.preventDefault();
    addCustomSection({
      name: newSectionForm.name,
      enabled: true,
      customData: {
        eyebrow: newSectionForm.eyebrow,
        title: newSectionForm.title,
        subtitle: newSectionForm.subtitle,
        content: newSectionForm.content,
        image: newSectionForm.image,
        ctaText: newSectionForm.ctaText,
        ctaLink: newSectionForm.ctaLink,
        bgColor: newSectionForm.bgColor
      }
    });
    notifySaved('Section personnalisée ajoutée à la page d’accueil !');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Top Header Bar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white font-black text-sm">
                iT
              </div>
              <div>
                <span className="font-bold text-sm tracking-tight block">
                  iTrip <span className="text-orange-400">Admin CMS</span>
                </span>
                <span className="text-[10px] text-slate-400 block -mt-0.5">
                  Éditeur en temps réel (Sauvegarde automatique)
                </span>
              </div>
            </div>

            {/* Live Autosave Indicator */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[11px] text-emerald-400 font-medium">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              <span>{saveStatus}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-xs font-bold text-white transition-all shadow-md active:scale-95"
              >
                <Eye className="h-4 w-4" />
                <span>Voir le site en direct</span>
              </button>

              <button
                onClick={resetToDefaults}
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-rose-900/60 text-xs font-semibold text-rose-300 transition-colors"
                title="Restaurer le contenu par défaut"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span className="hidden lg:inline">Réinitialiser</span>
              </button>

              <button
                onClick={() => {
                  logoutAdmin();
                  onNavigate('home');
                }}
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Déconnexion</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Admin Grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Banner with Action Link to See Site */}
        <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h1 className="text-sm font-bold text-slate-900">
                Toutes vos modifications prennent effet instantanément.
              </h1>
              <p className="text-xs text-slate-500">
                Tapez vos nouveaux textes ou téléchargez des photos, puis cliquez sur « Voir le site en direct » pour admirer le résultat.
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center justify-center gap-2 py-2 px-5 rounded-xl bg-[#0B3B60] hover:bg-[#082944] text-white text-xs font-bold transition-all shadow-sm"
          >
            <span>Voir la page d'accueil</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Tabs */}
          <aside className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-3 shadow-sm space-y-1 sticky top-24">
            {[
              { id: 'brand', label: '1. Logo & Coordonnées', icon: Palette },
              { id: 'hero', label: '2. Hero & Photo Principale', icon: ImageIcon },
              { id: 'about', label: '3. Pourquoi iTrip & Équipe', icon: Users },
              { id: 'sections', label: '4. Gestion des Sections', icon: Layers },
              { id: 'services', label: '5. Services & Prestations', icon: Boxes },
              { id: 'packages', label: '6. Formules de Prix', icon: Sparkles },
              { id: 'leads', label: '7. Demandes Reçues', icon: Inbox, badge: `${leads.length}` },
              { id: 'testimonials', label: '8. Avis Clients', icon: MessageSquareQuote },
              { id: 'blog', label: '9. Articles de Blog', icon: FileText },
              { id: 'cities', label: '10. Villes du Maroc', icon: MapPin },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </div>
                  {tab.badge && Number(tab.badge) > 0 && (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-white text-orange-600' : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </aside>

          {/* Tab Content Panel */}
          <main className="lg:col-span-9 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {/* =========================================================================
                TAB 1: LOGO & IDENTITÉ
                ========================================================================= */}
            {activeTab === 'brand' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Logo & Coordonnées de l'entreprise</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Changez le logo (upload d’image ou mot-symbole) et vos coordonnées de contact.
                  </p>
                </div>

                {/* Logo Editor */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">Logo du site (Header & Footer)</h3>

                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* Current Logo Preview */}
                    <div className="p-4 bg-white rounded-xl border border-slate-300 shadow-sm flex items-center justify-center min-w-[220px] h-24">
                      {brandConfig.logoType === 'image' && brandConfig.customLogoUrl ? (
                        <img
                          src={brandConfig.customLogoUrl}
                          alt="Logo personnalisé"
                          className="max-h-16 max-w-full object-contain"
                        />
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B3B60] text-white">
                            <span className="font-extrabold text-lg">iT</span>
                          </div>
                          <div>
                            <span className="font-bold text-[#0B3B60]">
                              {brandConfig.businessName}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Logo Controls */}
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-4">
                        <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="logoType"
                            checked={brandConfig.logoType === 'text'}
                            onChange={() => {
                              updateBrandConfig({ logoType: 'text' });
                              notifySaved('Type de logo : Mot-symbole textuel');
                            }}
                            className="text-orange-500"
                          />
                          <span>Mot-symbole iTrip stylisé</span>
                        </label>

                        <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                          <input
                            type="radio"
                            name="logoType"
                            checked={brandConfig.logoType === 'image'}
                            onChange={() => {
                              updateBrandConfig({ logoType: 'image' });
                              notifySaved('Type de logo : Image');
                            }}
                            className="text-orange-500"
                          />
                          <span>Logo Image (Fichier ou URL)</span>
                        </label>
                      </div>

                      {/* File Upload for Logo */}
                      <div className="flex flex-wrap items-center gap-3">
                        <label className="cursor-pointer inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-sm transition-colors">
                          <Upload className="h-4 w-4" />
                          <span>{isUploading ? 'Traitement...' : 'Télécharger un nouveau logo (PNG, JPG)'}</span>
                          <input
                            type="file"
                            accept="image/*"
                            disabled={isUploading}
                            onChange={handleLogoUpload}
                            className="hidden"
                          />
                        </label>

                        {brandConfig.customLogoUrl && (
                          <button
                            onClick={() => {
                              updateBrandConfig({ customLogoUrl: '', logoType: 'text' });
                              notifySaved('Logo image retiré');
                            }}
                            className="text-xs text-rose-600 hover:underline font-semibold"
                          >
                            Supprimer l'image
                          </button>
                        )}
                      </div>

                      {/* Manual Image URL Input */}
                      <div>
                        <input
                          type="text"
                          placeholder="Ou collez directement une URL d'image de logo..."
                          value={brandConfig.customLogoUrl}
                          onChange={(e) => {
                            updateBrandConfig({
                              customLogoUrl: e.target.value,
                              logoType: e.target.value ? 'image' : 'text'
                            });
                            notifySaved();
                          }}
                          className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Information Fields */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">Coordonnées & Textes Officiels</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Nom de l'entreprise *</label>
                      <input
                        type="text"
                        value={brandConfig.businessName}
                        onChange={(e) => {
                          updateBrandConfig({ businessName: e.target.value });
                          notifySaved();
                        }}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 font-bold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Slogan officiel *</label>
                      <input
                        type="text"
                        value={brandConfig.tagline}
                        onChange={(e) => {
                          updateBrandConfig({ tagline: e.target.value });
                          notifySaved();
                        }}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Numéro de Téléphone *</label>
                      <input
                        type="text"
                        value={brandConfig.phone}
                        onChange={(e) => {
                          updateBrandConfig({ phone: e.target.value });
                          notifySaved();
                        }}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 font-semibold"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Numéro WhatsApp *</label>
                      <input
                        type="text"
                        value={brandConfig.whatsapp}
                        onChange={(e) => {
                          updateBrandConfig({ whatsapp: e.target.value });
                          notifySaved();
                        }}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 font-semibold text-emerald-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Adresse Email *</label>
                      <input
                        type="email"
                        value={brandConfig.email}
                        onChange={(e) => {
                          updateBrandConfig({ email: e.target.value });
                          notifySaved();
                        }}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Adresse physique & Ville *</label>
                      <input
                        type="text"
                        value={brandConfig.address}
                        onChange={(e) => {
                          updateBrandConfig({ address: e.target.value });
                          notifySaved();
                        }}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Horaires d'ouverture *</label>
                    <input
                      type="text"
                      value={brandConfig.workingHours}
                      onChange={(e) => {
                        updateBrandConfig({ workingHours: e.target.value });
                        notifySaved();
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                    />
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => onNavigate('home')}
                      className="py-2.5 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-sm flex items-center gap-2"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Vérifier sur le site public</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 2: HERO & IMAGES
                ========================================================================= */}
            {activeTab === 'hero' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Bannière Principale (Hero) & Image</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Téléchargez une nouvelle photo ou modifiez les titres d'accroche du Hero.
                  </p>
                </div>

                {/* Hero Image Editor */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">Photo d'arrière-plan du Hero</h3>

                  <div className="relative rounded-xl overflow-hidden aspect-[16/7] border border-slate-300 shadow-inner">
                    <img
                      src={heroConfig.heroImage}
                      alt="Hero preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-semibold">
                        Aperçu en direct de la photo de fond du Hero
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <label className="cursor-pointer inline-flex items-center gap-2 py-2.5 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-sm transition-colors">
                      <Upload className="h-4 w-4" />
                      <span>{isUploading ? 'Traitement...' : 'Télécharger une photo depuis mon ordinateur'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        disabled={isUploading}
                        onChange={handleHeroImageUpload}
                        className="hidden"
                      />
                    </label>

                    <input
                      type="text"
                      placeholder="Ou collez une URL d'image web..."
                      value={heroConfig.heroImage}
                      onChange={(e) => {
                        updateHeroConfig({ heroImage: e.target.value });
                        notifySaved();
                      }}
                      className="flex-1 text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                </div>

                {/* Hero Texts */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">Textes d’accroche</h3>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Sur-titre (Badge haut)</label>
                    <input
                      type="text"
                      value={heroConfig.eyebrow}
                      onChange={(e) => {
                        updateHeroConfig({ eyebrow: e.target.value });
                        notifySaved();
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Titre principal (Ligne 1)</label>
                      <input
                        type="text"
                        value={heroConfig.titlePart1}
                        onChange={(e) => {
                          updateHeroConfig({ titlePart1: e.target.value });
                          notifySaved();
                        }}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Titre accentué en orange (Ligne 2)</label>
                      <input
                        type="text"
                        value={heroConfig.titlePart2}
                        onChange={(e) => {
                          updateHeroConfig({ titlePart2: e.target.value });
                          notifySaved();
                        }}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 font-bold text-orange-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Paragraphe de présentation</label>
                    <textarea
                      rows={3}
                      value={heroConfig.subtitle}
                      onChange={(e) => {
                        updateHeroConfig({ subtitle: e.target.value });
                        notifySaved();
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 leading-relaxed"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Libellé Bouton Principal</label>
                      <input
                        type="text"
                        value={heroConfig.ctaPrimaryText}
                        onChange={(e) => {
                          updateHeroConfig({ ctaPrimaryText: e.target.value });
                          notifySaved();
                        }}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Libellé Bouton WhatsApp</label>
                      <input
                        type="text"
                        value={heroConfig.ctaSecondaryText}
                        onChange={(e) => {
                          updateHeroConfig({ ctaSecondaryText: e.target.value });
                          notifySaved();
                        }}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>

                  {/* 4 Trust Badges */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Les 4 indicateurs de confiance (sous les boutons)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <input
                        type="text"
                        value={heroConfig.trustBadge1}
                        onChange={(e) => {
                          updateHeroConfig({ trustBadge1: e.target.value });
                          notifySaved();
                        }}
                        className="text-xs p-2 rounded-lg border border-slate-300"
                      />
                      <input
                        type="text"
                        value={heroConfig.trustBadge2}
                        onChange={(e) => {
                          updateHeroConfig({ trustBadge2: e.target.value });
                          notifySaved();
                        }}
                        className="text-xs p-2 rounded-lg border border-slate-300"
                      />
                      <input
                        type="text"
                        value={heroConfig.trustBadge3}
                        onChange={(e) => {
                          updateHeroConfig({ trustBadge3: e.target.value });
                          notifySaved();
                        }}
                        className="text-xs p-2 rounded-lg border border-slate-300"
                      />
                      <input
                        type="text"
                        value={heroConfig.trustBadge4}
                        onChange={(e) => {
                          updateHeroConfig({ trustBadge4: e.target.value });
                          notifySaved();
                        }}
                        className="text-xs p-2 rounded-lg border border-slate-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 3: POURQUOI ITRIP & ÉQUIPE
                ========================================================================= */}
            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Section « Pourquoi choisir iTrip ? » & Photo d'équipe</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Personnalisez l’image d’équipe, le titre et les 6 atouts de réassurance.
                  </p>
                </div>

                {/* Team Photo */}
                <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">Photo de l’équipe de déménagement</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-slate-300">
                      <img
                        src={aboutConfig.teamImage}
                        alt="Aperçu équipe"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="cursor-pointer inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-sm transition-colors">
                        <Upload className="h-4 w-4" />
                        <span>Télécharger une nouvelle photo d'équipe</span>
                        <input
                          type="file"
                          accept="image/*"
                          disabled={isUploading}
                          onChange={handleTeamImageUpload}
                          className="hidden"
                        />
                      </label>

                      <input
                        type="text"
                        placeholder="Ou URL de la photo..."
                        value={aboutConfig.teamImage}
                        onChange={(e) => {
                          updateAboutConfig({ teamImage: e.target.value });
                          notifySaved();
                        }}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">Textes de la section</h3>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Sur-titre (Eyebrow)</label>
                    <input
                      type="text"
                      value={aboutConfig.eyebrow}
                      onChange={(e) => {
                        updateAboutConfig({ eyebrow: e.target.value });
                        notifySaved();
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Titre principal</label>
                    <input
                      type="text"
                      value={aboutConfig.title}
                      onChange={(e) => {
                        updateAboutConfig({ title: e.target.value });
                        notifySaved();
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300 font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Description</label>
                    <textarea
                      rows={3}
                      value={aboutConfig.description}
                      onChange={(e) => {
                        updateAboutConfig({ description: e.target.value });
                        notifySaved();
                      }}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-300"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 4: GESTION DES SECTIONS
                ========================================================================= */}
            {activeTab === 'sections' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Gestion des Sections de la Page d'Accueil</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Activez, désactivez ou réordonnez l'ordre d'affichage des sections sur la page d'accueil.
                  </p>
                </div>

                {/* Section List */}
                <div className="space-y-2.5">
                  {[...homepageSections]
                    .sort((a, b) => a.order - b.order)
                    .map((section, idx, arr) => (
                      <div
                        key={section.id}
                        className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                          section.enabled
                            ? 'bg-white border-slate-200'
                            : 'bg-slate-50 border-slate-200 opacity-60'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-slate-400 w-5">
                            {idx + 1}.
                          </span>
                          <div>
                            <span className="text-sm font-bold text-slate-900 block">
                              {section.name}
                            </span>
                            {section.isCustom && (
                              <span className="text-[10px] text-orange-600 font-semibold">
                                Section personnalisée
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              moveSectionUp(section.id);
                              notifySaved('Ordre mis à jour');
                            }}
                            disabled={idx === 0}
                            className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-30"
                            title="Monter"
                          >
                            <ArrowUp className="h-3.5 w-3.5 text-slate-600" />
                          </button>
                          <button
                            onClick={() => {
                              moveSectionDown(section.id);
                              notifySaved('Ordre mis à jour');
                            }}
                            disabled={idx === arr.length - 1}
                            className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-30"
                            title="Descendre"
                          >
                            <ArrowDown className="h-3.5 w-3.5 text-slate-600" />
                          </button>

                          <button
                            onClick={() => {
                              toggleSection(section.id);
                              notifySaved(section.enabled ? 'Section masquée' : 'Section affichée');
                            }}
                            className={`flex items-center gap-1.5 py-1 px-3 rounded-lg text-xs font-semibold ${
                              section.enabled
                                ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
                                : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                            }`}
                          >
                            {section.enabled ? (
                              <>
                                <Eye className="h-3.5 w-3.5" />
                                <span>Visible</span>
                              </>
                            ) : (
                              <>
                                <EyeOff className="h-3.5 w-3.5" />
                                <span>Masquée</span>
                              </>
                            )}
                          </button>

                          {section.isCustom && (
                            <button
                              onClick={() => {
                                deleteCustomSection(section.id);
                                notifySaved('Section supprimée');
                              }}
                              className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                              title="Supprimer la section"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Form: Add a new custom section */}
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Plus className="h-4 w-4 text-orange-500" />
                    <span>Ajouter une nouvelle section personnalisée</span>
                  </h3>

                  <form onSubmit={handleAddCustomSection} className="space-y-4 bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Nom de la section (admin)</label>
                        <input
                          type="text"
                          value={newSectionForm.name}
                          onChange={(e) => setNewSectionForm({ ...newSectionForm, name: e.target.value })}
                          required
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Sur-titre (Eyebrow)</label>
                        <input
                          type="text"
                          value={newSectionForm.eyebrow}
                          onChange={(e) => setNewSectionForm({ ...newSectionForm, eyebrow: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Titre principal (H2) *</label>
                        <input
                          type="text"
                          value={newSectionForm.title}
                          onChange={(e) => setNewSectionForm({ ...newSectionForm, title: e.target.value })}
                          required
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white font-bold"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Sous-titre explicatif</label>
                        <input
                          type="text"
                          value={newSectionForm.subtitle}
                          onChange={(e) => setNewSectionForm({ ...newSectionForm, subtitle: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Texte ou descriptif</label>
                      <textarea
                        rows={2}
                        value={newSectionForm.content}
                        onChange={(e) => setNewSectionForm({ ...newSectionForm, content: e.target.value })}
                        className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Texte du bouton CTA</label>
                        <input
                          type="text"
                          value={newSectionForm.ctaText}
                          onChange={(e) => setNewSectionForm({ ...newSectionForm, ctaText: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Lien du bouton</label>
                        <input
                          type="text"
                          value={newSectionForm.ctaLink}
                          onChange={(e) => setNewSectionForm({ ...newSectionForm, ctaLink: e.target.value })}
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Fond de section</label>
                        <select
                          value={newSectionForm.bgColor}
                          onChange={(e) => setNewSectionForm({ ...newSectionForm, bgColor: e.target.value as any })}
                          className="w-full text-xs p-2.5 rounded-lg border border-slate-300 bg-white"
                        >
                          <option value="white">Fond blanc</option>
                          <option value="slate">Fond gris clair (Slate)</option>
                          <option value="navy">Fond bleu nuit (Navy)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="py-2.5 px-5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-sm flex items-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Insérer la section sur la page d'accueil</span>
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 5: SERVICES
                ========================================================================= */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Prestations de Déménagement</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Modifiez le titre, le public cible, la description courte et l'image de chaque prestation.
                  </p>
                </div>

                <div className="space-y-4">
                  {services.map((service) => (
                    <div key={service.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-[#0B3B60]">{service.title}</span>
                        <span className="text-[11px] font-mono text-slate-500">{service.slug}</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Titre affiché</label>
                          <input
                            type="text"
                            value={service.title}
                            onChange={(e) => {
                              updateService({ ...service, title: e.target.value });
                              notifySaved();
                            }}
                            className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white font-bold"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Public cible (Idéal pour)</label>
                          <input
                            type="text"
                            value={service.idealFor}
                            onChange={(e) => {
                              updateService({ ...service, idealFor: e.target.value });
                              notifySaved();
                            }}
                            className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Description courte (cartes)</label>
                        <textarea
                          rows={2}
                          value={service.shortDescription}
                          onChange={(e) => {
                            updateService({ ...service, shortDescription: e.target.value });
                            notifySaved();
                          }}
                          className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 6: FORMULES DE PRIX
                ========================================================================= */}
            {activeTab === 'packages' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Formules de Déménagement</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Ajustez les garanties et détails des formules Essentiel, Confort et Premium.
                  </p>
                </div>

                <div className="space-y-4">
                  {packages.map((pkg) => (
                    <div key={pkg.id} className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-extrabold text-base text-[#0B3B60] uppercase">{pkg.name}</span>
                        <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={pkg.popular || false}
                            onChange={(e) => {
                              updatePackage({ ...pkg, popular: e.target.checked });
                              notifySaved();
                            }}
                            className="text-orange-500"
                          />
                          <span>Marquer comme « Formule la plus demandée »</span>
                        </label>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Accroche (Tagline)</label>
                          <input
                            type="text"
                            value={pkg.tagline}
                            onChange={(e) => {
                              updatePackage({ ...pkg, tagline: e.target.value });
                              notifySaved();
                            }}
                            className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-600 mb-1">Idéal pour</label>
                          <input
                            type="text"
                            value={pkg.recommendedFor}
                            onChange={(e) => {
                              updatePackage({ ...pkg, recommendedFor: e.target.value });
                              notifySaved();
                            }}
                            className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Description complète</label>
                        <textarea
                          rows={2}
                          value={pkg.description}
                          onChange={(e) => {
                            updatePackage({ ...pkg, description: e.target.value });
                            notifySaved();
                          }}
                          className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 7: DEMANDES DE DEVIS (LEADS INBOX)
                ========================================================================= */}
            {activeTab === 'leads' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Boîte de Réception des Devis (Leads)</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Toutes les demandes déposées sur le site apparaissent ici en temps réel.
                  </p>
                </div>

                <div className="space-y-3">
                  {leads.map((lead) => (
                    <div key={lead.id} className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-2">
                        <div>
                          <span className="font-bold text-sm text-[#0B3B60]">{lead.clientName}</span>
                          <span className="text-xs text-slate-500 ml-2">· {lead.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <select
                            value={lead.status}
                            onChange={(e) => {
                              updateLeadStatus(lead.id, e.target.value as any);
                              notifySaved('Statut du lead mis à jour');
                            }}
                            className="text-xs py-1 px-2.5 rounded-lg border border-slate-300 font-semibold"
                          >
                            <option value="nouveau">🔴 Nouveau</option>
                            <option value="contacte">🟡 Contacté</option>
                            <option value="devis-envoye">🔵 Devis envoyé</option>
                            <option value="termine">🟢 Terminé</option>
                          </select>
                          <button
                            onClick={() => {
                              deleteLead(lead.id);
                              notifySaved('Lead supprimé');
                            }}
                            className="p-1 text-slate-400 hover:text-rose-600"
                            title="Supprimer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div>
                          <span className="text-slate-500 block">Téléphone :</span>
                          <a href={`tel:${lead.phone}`} className="font-semibold text-orange-600 hover:underline">
                            {lead.phone}
                          </a>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Email :</span>
                          <span className="font-semibold text-slate-800">{lead.email}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Itinéraire :</span>
                          <span className="font-semibold text-slate-800">{lead.departureCity} → {lead.destinationCity}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 block">Formule choisie :</span>
                          <span className="font-bold text-slate-800 uppercase">{lead.packageTier}</span>
                        </div>
                      </div>

                      {lead.details && (
                        <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg">
                          « {lead.details} »
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 8: AVIS CLIENTS
                ========================================================================= */}
            {activeTab === 'testimonials' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Avis & Témoignages Clients</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Ajoutez de vrais avis clients reçus au fil de vos chantiers de déménagement.
                  </p>
                </div>

                {/* Testimonial List */}
                <div className="space-y-3">
                  {testimonials.map((t) => (
                    <div key={t.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-xs text-slate-900">{t.name}</span>
                          <span className="text-xs text-slate-500">· {t.city}</span>
                          <span className="text-amber-500 text-xs">{'★'.repeat(t.rating)}</span>
                        </div>
                        <p className="text-xs text-slate-700 italic mt-1">« {t.comment} »</p>
                        <span className="text-[10px] text-orange-600 font-semibold block mt-1">{t.serviceType} · {t.date}</span>
                      </div>
                      <button
                        onClick={() => {
                          deleteTestimonial(t.id);
                          notifySaved('Avis supprimé');
                        }}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Supprimer l'avis"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add Testimonial */}
                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-3">Ajouter un nouveau retour client</h3>
                  <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Nom / Initiales</label>
                        <input
                          type="text"
                          placeholder="Ex: Mehdi K."
                          value={newTestimonialForm.name}
                          onChange={(e) => setNewTestimonialForm({ ...newTestimonialForm, name: e.target.value })}
                          className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Ville / Quartier</label>
                        <input
                          type="text"
                          placeholder="Ex: Casablanca (Bourgogne)"
                          value={newTestimonialForm.city}
                          onChange={(e) => setNewTestimonialForm({ ...newTestimonialForm, city: e.target.value })}
                          className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Prestation</label>
                        <input
                          type="text"
                          placeholder="Ex: Déménagement Villa"
                          value={newTestimonialForm.serviceType}
                          onChange={(e) => setNewTestimonialForm({ ...newTestimonialForm, serviceType: e.target.value })}
                          className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Commentaire client</label>
                      <textarea
                        rows={2}
                        placeholder="Rédigez ici le témoignage du client..."
                        value={newTestimonialForm.comment}
                        onChange={(e) => setNewTestimonialForm({ ...newTestimonialForm, comment: e.target.value })}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>

                    <button
                      onClick={() => {
                        if (!newTestimonialForm.name || !newTestimonialForm.comment) {
                          alert('Veuillez renseigner au minimum le nom et le commentaire.');
                          return;
                        }
                        addTestimonial({
                          id: `t-${Date.now()}`,
                          name: newTestimonialForm.name,
                          city: newTestimonialForm.city,
                          serviceType: newTestimonialForm.serviceType,
                          date: newTestimonialForm.date,
                          comment: newTestimonialForm.comment,
                          rating: newTestimonialForm.rating
                        });
                        setNewTestimonialForm({
                          name: '',
                          city: 'Casablanca',
                          serviceType: 'Déménagement Appartement',
                          date: 'Mars 2026',
                          comment: '',
                          rating: 5
                        });
                        notifySaved('Nouvel avis client publié sur le site !');
                      }}
                      className="py-2 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-sm flex items-center gap-1.5"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Ajouter cet avis au site</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 9: BLOG & CONSEILS
                ========================================================================= */}
            {activeTab === 'blog' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Articles & Guides de Déménagement</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Rédigez de nouveaux articles et conseils pour dynamiser votre référencement naturel (SEO).
                  </p>
                </div>

                <div className="space-y-3">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] font-bold text-orange-600 uppercase">{post.category} · {post.readTime}</span>
                        <h4 className="text-sm font-bold text-[#0B3B60]">{post.title}</h4>
                        <p className="text-xs text-slate-500 line-clamp-1">{post.excerpt}</p>
                      </div>
                      <button
                        onClick={() => {
                          deleteBlogPost(post.id);
                          notifySaved('Article supprimé');
                        }}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Supprimer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add Article Form */}
                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-sm font-bold text-slate-900 mb-3">Publier un nouvel article</h3>
                  <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Titre de l'article (H1)</label>
                      <input
                        type="text"
                        placeholder="Ex: Comment emménager à Tanger depuis Casablanca ?"
                        value={newBlogForm.title}
                        onChange={(e) => setNewBlogForm({ ...newBlogForm, title: e.target.value })}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white font-bold"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Catégorie</label>
                        <select
                          value={newBlogForm.category}
                          onChange={(e) => setNewBlogForm({ ...newBlogForm, category: e.target.value })}
                          className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                        >
                          <option value="Conseils & Tarifs">Conseils & Tarifs</option>
                          <option value="Organisation">Organisation</option>
                          <option value="Protection & Sécurité">Protection & Sécurité</option>
                          <option value="National & Trajets">National & Trajets</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-600 mb-1">Temps de lecture estimé</label>
                        <input
                          type="text"
                          value={newBlogForm.readTime}
                          onChange={(e) => setNewBlogForm({ ...newBlogForm, readTime: e.target.value })}
                          className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Extrait d'introduction</label>
                      <textarea
                        rows={2}
                        placeholder="Bref résumé accrocheur..."
                        value={newBlogForm.excerpt}
                        onChange={(e) => setNewBlogForm({ ...newBlogForm, excerpt: e.target.value })}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 mb-1">Contenu principal du premier chapitre</label>
                      <textarea
                        rows={3}
                        value={newBlogForm.p1}
                        onChange={(e) => setNewBlogForm({ ...newBlogForm, p1: e.target.value })}
                        className="w-full text-xs p-2 rounded-lg border border-slate-300 bg-white"
                      />
                    </div>

                    <button
                      onClick={() => {
                        if (!newBlogForm.title || !newBlogForm.excerpt) {
                          alert('Veuillez renseigner au moins le titre et l’extrait.');
                          return;
                        }
                        const slug = newBlogForm.title
                          .toLowerCase()
                          .replace(/[^\w\s-]/g, '')
                          .replace(/\s+/g, '-');

                        addBlogPost({
                          id: `b-${Date.now()}`,
                          slug: slug || `article-${Date.now()}`,
                          title: newBlogForm.title,
                          category: newBlogForm.category,
                          date: 'Aujourd’hui',
                          readTime: newBlogForm.readTime,
                          excerpt: newBlogForm.excerpt,
                          author: newBlogForm.author,
                          tableOfContents: ['1. ' + newBlogForm.h1Title],
                          content: [
                            {
                              heading: newBlogForm.h1Title,
                              paragraphs: [newBlogForm.p1]
                            }
                          ]
                        });

                        setNewBlogForm({
                          title: '',
                          category: 'Conseils & Tarifs',
                          readTime: '5 min de lecture',
                          excerpt: '',
                          author: 'Équipe iTrip Déménagement',
                          h1Title: 'Introduction au sujet',
                          p1: 'Le déménagement est une étape importante...'
                        });
                        notifySaved('Nouvel article de blog publié sur le site !');
                      }}
                      className="py-2 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-sm flex items-center gap-1.5"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Publier cet article</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* =========================================================================
                TAB 10: VILLES & SEO LOCAL
                ========================================================================= */}
            {activeTab === 'cities' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Villes Desservies au Maroc (SEO Local)</h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Gérez les 12 landing pages de villes marocaines et ajustez les quartiers desservis.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cities.map((city) => (
                    <div key={city.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-xs text-[#0B3B60] block">{city.name}</span>
                        <span className="text-[10px] text-slate-500">{city.region} · {city.districts.length} quartiers</span>
                      </div>
                      <button
                        onClick={() => onNavigate('city-detail', { citySlug: city.slug })}
                        className="text-xs text-orange-600 hover:underline font-semibold"
                      >
                        Voir page →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
