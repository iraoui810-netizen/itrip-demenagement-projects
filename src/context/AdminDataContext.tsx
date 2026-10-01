import React, { createContext, useContext, useState, useEffect } from 'react';
import { ServiceItem, MovingPackage, MoroccanCity, BlogPost, Testimonial } from '../types';
import { BUSINESS_CONFIG } from '../constants/config';
import { SERVICES_DATA } from '../constants/services';
import { PACKAGES_DATA } from '../constants/packages';
import { CITIES_DATA } from '../constants/cities';
import { TESTIMONIALS_DATA } from '../constants/testimonials';
import { BLOG_POSTS } from '../constants/blog';

export interface HomepageSectionConfig {
  id: string;
  name: string;
  enabled: boolean;
  order: number;
  isCustom?: boolean;
  customData?: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    content: string;
    image?: string;
    ctaText?: string;
    ctaLink?: string;
    bgColor?: 'white' | 'slate' | 'navy';
  };
}

export interface BrandConfig {
  businessName: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: string;
  workingHours: string;
  logoType: 'text' | 'image';
  customLogoUrl: string;
  primaryColor: string;
}

export interface HeroConfig {
  eyebrow: string;
  titlePart1: string;
  titlePart2: string;
  subtitle: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  heroImage: string;
  trustBadge1: string;
  trustBadge2: string;
  trustBadge3: string;
  trustBadge4: string;
}

export interface AboutConfig {
  teamImage: string;
  eyebrow: string;
  title: string;
  description: string;
  qualityBadgeTitle: string;
  qualityBadgeText: string;
  benefits: { number: string; title: string; desc: string }[];
}

export interface QuoteLead {
  id: string;
  date: string;
  clientName: string;
  phone: string;
  email: string;
  departureCity: string;
  destinationCity: string;
  serviceType: string;
  packageTier: string;
  moveDate: string;
  details: string;
  status: 'nouveau' | 'contacte' | 'devis-envoye' | 'termine';
}

const DEFAULT_SECTIONS: HomepageSectionConfig[] = [
  { id: 'hero', name: 'Bannière Principale (Hero)', enabled: true, order: 1 },
  { id: 'quick-quote', name: 'Sélecteur de Devis Rapide', enabled: true, order: 2 },
  { id: 'services', name: 'Grille de Nos Services', enabled: true, order: 3 },
  { id: 'why-itrip', name: 'Pourquoi Choisir iTrip (Équipe & Atouts)', enabled: true, order: 4 },
  { id: 'how-it-works', name: 'Étapes du Déménagement (1-2-3-4)', enabled: true, order: 5 },
  { id: 'packages', name: 'Formules de Déménagement (Essentiel, Confort, Premium)', enabled: true, order: 6 },
  { id: 'service-areas', name: 'Villes & Réseau National au Maroc', enabled: true, order: 7 },
  { id: 'testimonials', name: 'Avis & Témoignages Clients', enabled: true, order: 8 },
  { id: 'blog', name: 'Conseils & Articles du Blog', enabled: true, order: 9 },
  { id: 'final-cta', name: 'Bannière d’Appel à l’Action Finale', enabled: true, order: 10 },
];

const DEFAULT_BRAND_CONFIG: BrandConfig = {
  businessName: BUSINESS_CONFIG.BUSINESS_NAME,
  tagline: BUSINESS_CONFIG.TAGLINE,
  phone: BUSINESS_CONFIG.PHONE_NUMBER,
  phoneRaw: BUSINESS_CONFIG.PHONE_NUMBER_RAW,
  whatsapp: BUSINESS_CONFIG.WHATSAPP_NUMBER,
  whatsappRaw: BUSINESS_CONFIG.WHATSAPP_NUMBER_RAW,
  email: BUSINESS_CONFIG.EMAIL,
  address: BUSINESS_CONFIG.ADDRESS_DISPLAY,
  workingHours: BUSINESS_CONFIG.WORKING_HOURS,
  logoType: 'text',
  customLogoUrl: '',
  primaryColor: '#F97316'
};

const DEFAULT_HERO_CONFIG: HeroConfig = {
  eyebrow: 'Votre déménagement en toute sérénité',
  titlePart1: 'Votre déménagement,',
  titlePart2: 'notre expertise.',
  subtitle: 'iTrip Déménagement vous accompagne pour vos déménagements à Casablanca et partout au Maroc, avec une équipe professionnelle, des véhicules adaptés et un service pensé pour votre tranquillité.',
  ctaPrimaryText: 'Obtenir mon devis gratuit',
  ctaSecondaryText: 'Parler sur WhatsApp',
  heroImage: '/src/assets/images/hero_moving_truck_1790793862875.jpg',
  trustBadge1: 'Devis gratuit',
  trustBadge2: 'Équipe professionnelle',
  trustBadge3: 'Protection de vos meubles',
  trustBadge4: 'Casablanca & tout le Maroc'
};

const DEFAULT_ABOUT_CONFIG: AboutConfig = {
  teamImage: '/src/assets/images/team_packing_furniture_1790793875976.jpg',
  eyebrow: 'Pourquoi choisir iTrip ?',
  title: 'Un déménagement organisé, sécurisé et sans stress.',
  description: 'Nous combinons rigueur logistique, manutentionnaires respectueux et matériel de pointe pour que chaque étape de votre changement de domicile se déroule dans un calme absolu.',
  qualityBadgeTitle: 'Engagement Qualité',
  qualityBadgeText: 'Protection méthodique de vos boiseries, miroirs et canapés sous couvertures capitonnées.',
  benefits: [
    { number: '01.', title: 'Équipe professionnelle', desc: 'Déménageurs formés aux gestes de portage et au respect scrupuleux de votre intérieur.' },
    { number: '02.', title: 'Protection de vos biens', desc: 'Housses épaisses, cornières de protection et film étirable pour zéro rayure.' },
    { number: '03.', title: 'Camions adaptés', desc: 'Flotte récente de fourgons capitonnés avec sangles d’arrimage et hayons.' },
    { number: '04.', title: 'Ponctualité garantie', desc: 'Respect strict de l’heure de rendez-vous convenue dès le premier contact.' },
    { number: '05.', title: 'Devis clair et gratuit', desc: 'Estimation détaillée sans frais cachés ni mauvaise surprise au déchargement.' },
    { number: '06.', title: 'Intervention partout au Maroc', desc: 'Casablanca, Rabat, Marrakech, Tanger et l’ensemble des villes du Royaume.' }
  ]
};

const INITIAL_LEADS: QuoteLead[] = [
  {
    id: 'lead-1',
    date: '30/09/2026 10:15',
    clientName: 'Yassine Berrada',
    phone: '06 61 24 55 90',
    email: 'yassine.berrada@gmail.com',
    departureCity: 'Casablanca (Gauthier)',
    destinationCity: 'Bouskoura (Ville Verte)',
    serviceType: 'Déménagement particulier',
    packageTier: 'confort',
    moveDate: '15/10/2026',
    details: 'Appartement 140m², 3ème étage avec ascenseur. Grand dressing à démonter et canapé 4 places.',
    status: 'nouveau'
  },
  {
    id: 'lead-2',
    date: '29/09/2026 16:40',
    clientName: 'Société Atlas Finance',
    phone: '05 22 34 80 12',
    email: 'contact@atlas-finance.ma',
    departureCity: 'Casablanca (Marina)',
    destinationCity: 'Rabat (Hay Riad)',
    serviceType: 'Déménagement entreprise',
    packageTier: 'premium',
    moveDate: '24/10/2026',
    details: 'Transfert de 22 postes informatiques, bureaux et armoires archives sur le week-end.',
    status: 'contacte'
  }
];

// Helper to compress image file using canvas before storing in localStorage
export async function compressImageFile(file: File, maxWidth = 1200, quality = 0.8): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        } else {
          resolve(event.target?.result as string);
        }
      };
      img.onerror = () => resolve(event.target?.result as string);
      img.src = event.target?.result as string;
    };
    reader.onerror = () => resolve('');
    reader.readAsDataURL(file);
  });
}

interface AdminDataContextType {
  isAdminAuthenticated: boolean;
  loginAdmin: (username: string, pass: string) => boolean;
  logoutAdmin: () => void;

  brandConfig: BrandConfig;
  updateBrandConfig: (config: Partial<BrandConfig>) => void;

  heroConfig: HeroConfig;
  updateHeroConfig: (config: Partial<HeroConfig>) => void;

  aboutConfig: AboutConfig;
  updateAboutConfig: (config: Partial<AboutConfig>) => void;

  homepageSections: HomepageSectionConfig[];
  toggleSection: (sectionId: string) => void;
  moveSectionUp: (sectionId: string) => void;
  moveSectionDown: (sectionId: string) => void;
  addCustomSection: (section: Omit<HomepageSectionConfig, 'id' | 'order' | 'isCustom'>) => void;
  deleteCustomSection: (sectionId: string) => void;
  updateCustomSection: (sectionId: string, customData: HomepageSectionConfig['customData']) => void;

  services: ServiceItem[];
  updateService: (updated: ServiceItem) => void;
  addService: (newService: ServiceItem) => void;
  deleteService: (serviceId: string) => void;

  packages: MovingPackage[];
  updatePackage: (updated: MovingPackage) => void;

  testimonials: Testimonial[];
  addTestimonial: (t: Testimonial) => void;
  deleteTestimonial: (id: string) => void;

  blogPosts: BlogPost[];
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (post: BlogPost) => void;
  deleteBlogPost: (id: string) => void;

  cities: MoroccanCity[];
  updateCity: (city: MoroccanCity) => void;
  addCity: (city: MoroccanCity) => void;

  leads: QuoteLead[];
  addLead: (lead: Omit<QuoteLead, 'id' | 'date' | 'status'>) => void;
  updateLeadStatus: (leadId: string, status: QuoteLead['status']) => void;
  deleteLead: (leadId: string) => void;

  resetToDefaults: () => void;
}

const AdminDataContext = createContext<AdminDataContextType | undefined>(undefined);

const STORAGE_KEY = 'itrip_admin_cms_v2';
const AUTH_KEY = 'itrip_admin_auth';

export const AdminDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [brandConfig, setBrandConfig] = useState<BrandConfig>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_brand`);
      return saved ? JSON.parse(saved) : DEFAULT_BRAND_CONFIG;
    } catch {
      return DEFAULT_BRAND_CONFIG;
    }
  });

  const [heroConfig, setHeroConfig] = useState<HeroConfig>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_hero`);
      return saved ? JSON.parse(saved) : DEFAULT_HERO_CONFIG;
    } catch {
      return DEFAULT_HERO_CONFIG;
    }
  });

  const [aboutConfig, setAboutConfig] = useState<AboutConfig>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_about`);
      return saved ? JSON.parse(saved) : DEFAULT_ABOUT_CONFIG;
    } catch {
      return DEFAULT_ABOUT_CONFIG;
    }
  });

  const [homepageSections, setHomepageSections] = useState<HomepageSectionConfig[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_sections`);
      return saved ? JSON.parse(saved) : DEFAULT_SECTIONS;
    } catch {
      return DEFAULT_SECTIONS;
    }
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_services`);
      return saved ? JSON.parse(saved) : SERVICES_DATA;
    } catch {
      return SERVICES_DATA;
    }
  });

  const [packages, setPackages] = useState<MovingPackage[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_packages`);
      return saved ? JSON.parse(saved) : PACKAGES_DATA;
    } catch {
      return PACKAGES_DATA;
    }
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_testimonials`);
      return saved ? JSON.parse(saved) : TESTIMONIALS_DATA;
    } catch {
      return TESTIMONIALS_DATA;
    }
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_blog`);
      return saved ? JSON.parse(saved) : BLOG_POSTS;
    } catch {
      return BLOG_POSTS;
    }
  });

  const [cities, setCities] = useState<MoroccanCity[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_cities`);
      return saved ? JSON.parse(saved) : CITIES_DATA;
    } catch {
      return CITIES_DATA;
    }
  });

  const [leads, setLeads] = useState<QuoteLead[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_leads`);
      return saved ? JSON.parse(saved) : INITIAL_LEADS;
    } catch {
      return INITIAL_LEADS;
    }
  });

  // Sync state to localStorage safely
  useEffect(() => {
    try {
      localStorage.setItem(`${STORAGE_KEY}_brand`, JSON.stringify(brandConfig));
      localStorage.setItem(`${STORAGE_KEY}_hero`, JSON.stringify(heroConfig));
      localStorage.setItem(`${STORAGE_KEY}_about`, JSON.stringify(aboutConfig));
      localStorage.setItem(`${STORAGE_KEY}_sections`, JSON.stringify(homepageSections));
      localStorage.setItem(`${STORAGE_KEY}_services`, JSON.stringify(services));
      localStorage.setItem(`${STORAGE_KEY}_packages`, JSON.stringify(packages));
      localStorage.setItem(`${STORAGE_KEY}_testimonials`, JSON.stringify(testimonials));
      localStorage.setItem(`${STORAGE_KEY}_blog`, JSON.stringify(blogPosts));
      localStorage.setItem(`${STORAGE_KEY}_cities`, JSON.stringify(cities));
      localStorage.setItem(`${STORAGE_KEY}_leads`, JSON.stringify(leads));
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  }, [brandConfig, heroConfig, aboutConfig, homepageSections, services, packages, testimonials, blogPosts, cities, leads]);

  // Auth methods
  const loginAdmin = (username: string, pass: string): boolean => {
    const cleanUser = username.trim().toUpperCase();
    const cleanPass = pass.trim().toUpperCase();

    if (cleanUser === 'ADMIN' && cleanPass === 'ADMIN') {
      setIsAdminAuthenticated(true);
      try {
        localStorage.setItem(AUTH_KEY, 'true');
      } catch {}
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    try {
      localStorage.removeItem(AUTH_KEY);
    } catch {}
  };

  // Updaters
  const updateBrandConfig = (config: Partial<BrandConfig>) => {
    setBrandConfig((prev) => {
      const updated = { ...prev, ...config };
      // Keep phoneRaw / whatsappRaw in sync
      if (config.phone) {
        updated.phoneRaw = config.phone.replace(/[^\d+]/g, '');
      }
      if (config.whatsapp) {
        updated.whatsappRaw = config.whatsapp.replace(/[^\d]/g, '');
      }
      return updated;
    });
  };

  const updateHeroConfig = (config: Partial<HeroConfig>) => {
    setHeroConfig((prev) => ({ ...prev, ...config }));
  };

  const updateAboutConfig = (config: Partial<AboutConfig>) => {
    setAboutConfig((prev) => ({ ...prev, ...config }));
  };

  const toggleSection = (sectionId: string) => {
    setHomepageSections((prev) =>
      prev.map((s) => (s.id === sectionId ? { ...s, enabled: !s.enabled } : s))
    );
  };

  const moveSectionUp = (sectionId: string) => {
    setHomepageSections((prev) => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const index = sorted.findIndex((s) => s.id === sectionId);
      if (index <= 0) return prev;
      const current = sorted[index];
      const prevItem = sorted[index - 1];
      const tempOrder = current.order;
      current.order = prevItem.order;
      prevItem.order = tempOrder;
      return [...sorted];
    });
  };

  const moveSectionDown = (sectionId: string) => {
    setHomepageSections((prev) => {
      const sorted = [...prev].sort((a, b) => a.order - b.order);
      const index = sorted.findIndex((s) => s.id === sectionId);
      if (index === -1 || index >= sorted.length - 1) return prev;
      const current = sorted[index];
      const nextItem = sorted[index + 1];
      const tempOrder = current.order;
      current.order = nextItem.order;
      nextItem.order = tempOrder;
      return [...sorted];
    });
  };

  const addCustomSection = (section: Omit<HomepageSectionConfig, 'id' | 'order' | 'isCustom'>) => {
    const newId = `custom-sec-${Date.now()}`;
    const maxOrder = Math.max(...homepageSections.map((s) => s.order), 0);
    const newSection: HomepageSectionConfig = {
      ...section,
      id: newId,
      order: maxOrder + 1,
      isCustom: true
    };
    setHomepageSections((prev) => [...prev, newSection]);
  };

  const deleteCustomSection = (sectionId: string) => {
    setHomepageSections((prev) => prev.filter((s) => s.id !== sectionId));
  };

  const updateCustomSection = (sectionId: string, customData: HomepageSectionConfig['customData']) => {
    setHomepageSections((prev) =>
      prev.map((s) => (s.id === sectionId ? { ...s, customData } : s))
    );
  };

  const updateService = (updated: ServiceItem) => {
    setServices((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  };

  const addService = (newService: ServiceItem) => {
    setServices((prev) => [...prev, newService]);
  };

  const deleteService = (serviceId: string) => {
    setServices((prev) => prev.filter((s) => s.id !== serviceId));
  };

  const updatePackage = (updated: MovingPackage) => {
    setPackages((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const addTestimonial = (t: Testimonial) => {
    setTestimonials((prev) => [t, ...prev]);
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  const addBlogPost = (post: BlogPost) => {
    setBlogPosts((prev) => [post, ...prev]);
  };

  const updateBlogPost = (post: BlogPost) => {
    setBlogPosts((prev) => prev.map((p) => (p.id === post.id ? post : p)));
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts((prev) => prev.filter((p) => p.id !== id));
  };

  const updateCity = (city: MoroccanCity) => {
    setCities((prev) => prev.map((c) => (c.id === city.id ? city : c)));
  };

  const addCity = (city: MoroccanCity) => {
    setCities((prev) => [...prev, city]);
  };

  const addLead = (leadData: Omit<QuoteLead, 'id' | 'date' | 'status'>) => {
    const now = new Date();
    const formattedDate = `${now.toLocaleDateString('fr-FR')} ${now.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    })}`;

    const newLead: QuoteLead = {
      ...leadData,
      id: `lead-${Date.now()}`,
      date: formattedDate,
      status: 'nouveau'
    };

    setLeads((prev) => [newLead, ...prev]);
  };

  const updateLeadStatus = (leadId: string, status: QuoteLead['status']) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status } : l))
    );
  };

  const deleteLead = (leadId: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== leadId));
  };

  const resetToDefaults = () => {
    if (window.confirm('Voulez-vous vraiment restaurer le contenu par défaut du site ? Toutes les modifications seront réinitialisées.')) {
      setBrandConfig(DEFAULT_BRAND_CONFIG);
      setHeroConfig(DEFAULT_HERO_CONFIG);
      setAboutConfig(DEFAULT_ABOUT_CONFIG);
      setHomepageSections(DEFAULT_SECTIONS);
      setServices(SERVICES_DATA);
      setPackages(PACKAGES_DATA);
      setTestimonials(TESTIMONIALS_DATA);
      setBlogPosts(BLOG_POSTS);
      setCities(CITIES_DATA);
      setLeads(INITIAL_LEADS);
      try {
        localStorage.clear();
        localStorage.setItem(AUTH_KEY, 'true');
      } catch {}
    }
  };

  return (
    <AdminDataContext.Provider
      value={{
        isAdminAuthenticated,
        loginAdmin,
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
        updateBlogPost,
        deleteBlogPost,
        cities,
        updateCity,
        addCity,
        leads,
        addLead,
        updateLeadStatus,
        deleteLead,
        resetToDefaults
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
};

export const useAdminData = () => {
  const context = useContext(AdminDataContext);
  if (!context) {
    throw new Error('useAdminData must be used within an AdminDataProvider');
  }
  return context;
};
