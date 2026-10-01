import React, { useState } from 'react';
import { Search, ChevronRight, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useAdminData } from '../context/AdminDataContext';

interface BlogPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const { blogPosts } = useAdminData();
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Tous', 'Conseils & Tarifs', 'Organisation', 'Protection & Sécurité', 'National & Trajets'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCat = selectedCategory === 'Tous' || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Accueil', onClick: () => onNavigate('home') },
            { label: 'Conseils & Blog' }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="bg-[#0B3B60] text-white py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            Guides & Astuces de déménagement
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Conseils pour réussir votre déménagement
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Découvrez nos articles pratiques pour bien préparer vos cartons, estimer vos coûts, protéger vos meubles et réussir votre installation au Maroc.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search & Category Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-3.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Featured Article (When no search active) */}
        {!searchQuery && selectedCategory === 'Tous' && featuredPost && (
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-3">
              Article à la une
            </span>
            <div
              onClick={() => onNavigate('blog-post', { postSlug: featuredPost.slug })}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 group"
            >
              <div className="lg:col-span-5 bg-slate-900 relative min-h-[260px]">
                <img
                  src="/src/assets/images/hero_moving_truck_1790793862875.jpg"
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="text-orange-600 font-bold">{featuredPost.category}</span>
                    <span>·</span>
                    <span>{featuredPost.date}</span>
                    <span>·</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B3B60] group-hover:text-orange-600 transition-colors leading-snug">
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-3">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-orange-600">
                  <span>Lire l’article complet</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#0B3B60]">
              {selectedCategory === 'Tous' ? 'Dernières publications' : `Catégorie : ${selectedCategory}`}
            </h2>
            <span className="text-xs text-slate-500">{filteredPosts.length} article(s) trouvé(s)</span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white p-12 text-center rounded-2xl border border-slate-200">
              <BookOpen className="h-10 w-10 text-slate-400 mx-auto mb-3" />
              <p className="text-sm font-semibold text-slate-800">Aucun article ne correspond à votre recherche.</p>
              <button
                onClick={() => {
                  setSelectedCategory('Tous');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-bold text-orange-600 hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => onNavigate('blog-post', { postSlug: post.slug })}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                      <span className="text-orange-600 font-bold">{post.category}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-[#0B3B60] group-hover:text-orange-600 transition-colors leading-snug mb-2.5">
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-orange-600 mt-2">
                    <span className="text-[11px] text-slate-400 font-normal">{post.date}</span>
                    <span className="flex items-center gap-1">
                      <span>Lire la suite</span>
                      <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
