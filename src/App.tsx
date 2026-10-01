import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { QuotePage } from './pages/QuotePage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CityDetailPage } from './pages/CityDetailPage';
import { CitiesDirectoryPage } from './pages/CitiesDirectoryPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { AdminDataProvider, useAdminData } from './context/AdminDataContext';

function AppContent() {
  const { isAdminAuthenticated } = useAdminData();
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [pageParams, setPageParams] = useState<any>({});

  // Parse path on initial load & popstate
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;

      if (path === '/' || path === '') {
        setCurrentPage('home');
      } else if (path === '/admin') {
        setCurrentPage('admin');
      } else if (path === '/services') {
        setCurrentPage('services');
      } else if (path === '/a-propos') {
        setCurrentPage('about');
      } else if (path === '/villes') {
        setCurrentPage('cities');
      } else if (path === '/devis-gratuit') {
        setCurrentPage('quote');
      } else if (path === '/contact') {
        setCurrentPage('contact');
      } else if (path === '/blog') {
        setCurrentPage('blog');
      } else if (path.startsWith('/blog/')) {
        const slug = path.replace('/blog/', '');
        setCurrentPage('blog-post');
        setPageParams({ postSlug: slug });
      } else if (path.startsWith('/demenagement-')) {
        const slug = path.replace('/', '');
        setCurrentPage('city-detail');
        setPageParams({ citySlug: slug });
      } else {
        setCurrentPage('home');
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const navigateTo = (page: string, params: any = {}) => {
    setCurrentPage(page);
    setPageParams(params);

    // Map internal page to clean URL
    let path = '/';
    if (page === 'admin') path = '/admin';
    else if (page === 'services') path = '/services';
    else if (page === 'about') path = '/a-propos';
    else if (page === 'cities') path = '/villes';
    else if (page === 'quote') path = '/devis-gratuit';
    else if (page === 'contact') path = '/contact';
    else if (page === 'blog') path = '/blog';
    else if (page === 'blog-post' && params.postSlug) path = `/blog/${params.postSlug}`;
    else if (page === 'city-detail' && params.citySlug) path = `/${params.citySlug}`;

    try {
      if (window.location.pathname !== path) {
        window.history.pushState({}, '', path);
      }
    } catch (e) {
      // In restricted iframe environments
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If viewing admin route
  if (currentPage === 'admin') {
    if (isAdminAuthenticated) {
      return <AdminDashboardPage onNavigate={navigateTo} />;
    }
    return <AdminLoginPage onNavigate={navigateTo} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Global Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            selectedServiceId={pageParams.serviceId}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'cities' && <CitiesDirectoryPage onNavigate={navigateTo} />}
        {currentPage === 'city-detail' && (
          <CityDetailPage
            onNavigate={navigateTo}
            citySlug={pageParams.citySlug || 'demenagement-casablanca'}
          />
        )}
        {currentPage === 'quote' && (
          <QuotePage
            onNavigate={navigateTo}
            initialService={pageParams.initialService}
            initialPackage={pageParams.initialPackage}
          />
        )}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
        {currentPage === 'blog' && <BlogPage onNavigate={navigateTo} />}
        {currentPage === 'blog-post' && (
          <BlogPostPage
            onNavigate={navigateTo}
            postSlug={pageParams.postSlug || 'combien-coute-un-demenagement-casablanca'}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Persistent Floating WhatsApp Widget */}
      <WhatsAppFloatingButton />
    </div>
  );
}

export function App() {
  return (
    <AdminDataProvider>
      <AppContent />
    </AdminDataProvider>
  );
}

export default App;
