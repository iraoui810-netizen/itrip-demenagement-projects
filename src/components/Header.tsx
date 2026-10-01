import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowRight, ShieldCheck, Lock, Edit3, LogOut } from 'lucide-react';
import { useAdminData } from '../context/AdminDataContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, params?: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { brandConfig, isAdminAuthenticated, logoutAdmin } = useAdminData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'services', label: 'Nos services' },
    { id: 'about', label: 'À propos' },
    { id: 'cities', label: 'Villes du Maroc' },
    { id: 'blog', label: 'Conseils & Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${brandConfig.whatsappRaw}?text=${encodeURIComponent(
    'Bonjour iTrip Déménagement, je souhaite obtenir un devis gratuit pour mon projet de déménagement.'
  )}`;

  return (
    <>
      {/* Omnipresent Admin Bar when authenticated */}
      {isAdminAuthenticated && (
        <div className="bg-slate-900 text-white px-4 py-2 text-xs flex items-center justify-between border-b border-orange-500/40 sticky top-0 z-50 shadow-md">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-orange-400">Mode Administrateur iTrip :</span>
            <span className="hidden sm:inline text-slate-300">Vos modifications sont enregistrées en direct.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('admin')}
              className="py-1 px-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Edit3 className="h-3.5 w-3.5" />
              <span>Ouvrir le Panneau Admin</span>
            </button>

            <button
              onClick={logoutAdmin}
              className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              title="Quitter le mode admin"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Quitter</span>
            </button>
          </div>
        </div>
      )}

      <header
        className={`sticky ${isAdminAuthenticated ? 'top-[37px]' : 'top-0'} z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Wordmark or Custom Logo Image */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
              aria-label="iTrip Déménagement Accueil"
            >
              {brandConfig.logoType === 'image' && brandConfig.customLogoUrl ? (
                <img
                  src={brandConfig.customLogoUrl}
                  alt={brandConfig.businessName}
                  className="h-10 max-w-[200px] object-contain"
                />
              ) : (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B3B60] text-white shadow-sm group-hover:bg-[#082944] transition-colors">
                    <span className="font-extrabold text-lg tracking-tighter text-white">iT</span>
                    <span className="h-2 w-2 rounded-full bg-orange-500 -ml-0.5 -mt-2"></span>
                  </div>
                  <div className="leading-tight">
                    <span className="block text-lg font-bold tracking-tight text-[#0B3B60]">
                      {brandConfig.businessName.split(' ')[0] || 'iTrip'}{' '}
                      <span className="text-orange-500 font-extrabold">
                        {brandConfig.businessName.split(' ').slice(1).join(' ') || 'Déménagement'}
                      </span>
                    </span>
                    <span className="block text-[11px] text-slate-500 font-medium">{brandConfig.tagline}</span>
                  </div>
                </>
              )}
            </button>

            {/* Zone 2: Navigation Links (Clean text links, single-line) */}
            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-sm font-medium transition-colors whitespace-nowrap py-1 relative ${
                      isActive
                        ? 'text-orange-600 font-semibold'
                        : 'text-slate-700 hover:text-[#0B3B60]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Phone, WhatsApp, Primary CTA Button, Admin Quick Access) */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Phone quick call (desktop) */}
              <a
                href={`tel:${brandConfig.phoneRaw}`}
                className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-orange-600 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200"
                title="Appeler un conseiller iTrip"
              >
                <Phone className="h-3.5 w-3.5 text-orange-500" />
                <span>{brandConfig.phone}</span>
              </a>

              {/* WhatsApp direct link (tablet & desktop) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors py-2 px-3 rounded-lg border border-emerald-200/80"
                title="Discuter sur WhatsApp"
              >
                <MessageCircle className="h-3.5 w-3.5 text-emerald-600" />
                <span className="hidden md:inline">WhatsApp</span>
              </a>

              {/* Primary conversion CTA */}
              <button
                onClick={() => handleNavClick('quote')}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-xs sm:text-sm font-semibold py-2 sm:py-2.5 px-3.5 sm:px-5 rounded-xl shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap active:scale-[0.98]"
              >
                <span>Devis gratuit</span>
                <ArrowRight className="h-3.5 w-3.5 hidden sm:inline" />
              </button>

              {/* Admin Badge/Link */}
              <button
                onClick={() => handleNavClick('admin')}
                className={`p-2 rounded-lg transition-colors text-xs flex items-center gap-1 ${
                  isAdminAuthenticated
                    ? 'bg-slate-900 text-orange-400 font-bold border border-slate-700'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
                title="Accès Panneau d'Administration"
              >
                <Lock className="h-4 w-4" />
                {isAdminAuthenticated && <span className="hidden md:inline text-[10px]">Admin</span>}
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-left text-sm font-medium ${
                      isActive
                        ? 'bg-orange-50 text-orange-600 font-semibold'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href={`tel:${brandConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 text-slate-800 font-medium text-xs hover:bg-slate-50"
              >
                <Phone className="h-4 w-4 text-orange-500" />
                <span>Appeler le {brandConfig.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium text-xs hover:bg-emerald-100"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>Contacter sur WhatsApp</span>
              </a>

              <button
                onClick={() => handleNavClick('quote')}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange-500 text-white font-semibold text-sm shadow hover:bg-orange-600"
              >
                <span>Obtenir mon devis gratuit</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 pt-3">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Devis sans engagement sous 24h</span>
              </div>
              <button
                onClick={() => handleNavClick('admin')}
                className="text-slate-400 hover:text-slate-700 flex items-center gap-1 font-semibold"
              >
                <Lock className="h-3 w-3" />
                <span>Espace Admin</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
