import React from 'react';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle2,
  MessageCircle,
  Phone,
  Bookmark
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BUSINESS_CONFIG } from '../constants/config';
import { useAdminData } from '../context/AdminDataContext';

interface BlogPostPageProps {
  onNavigate: (page: string, params?: any) => void;
  postSlug: string;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onNavigate, postSlug }) => {
  const { blogPosts } = useAdminData();
  const post = blogPosts.find((p) => p.slug === postSlug) || blogPosts[0] || {
    id: 'b-default',
    slug: postSlug,
    title: 'Article de déménagement',
    category: 'Conseils',
    date: 'Aujourd’hui',
    readTime: '5 min',
    author: 'iTrip',
    excerpt: '',
    tableOfContents: [],
    content: []
  };
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${post.title} - À lire sur iTrip Déménagement: https://itripdemenagement.com/blog/${post.slug}`
  )}`;

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Accueil', onClick: () => onNavigate('home') },
            { label: 'Blog', onClick: () => onNavigate('blog') },
            { label: post.title }
          ]}
        />
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Back Link */}
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-orange-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Retour à tous les conseils</span>
        </button>

        {/* Article Header */}
        <header className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-bold text-orange-600">{post.category}</span>
            <span>·</span>
            <span>{post.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </span>
            <span>·</span>
            <span>Rédigé par {post.author}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B3B60] leading-tight text-balance">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal pt-1 border-t border-slate-100">
            {post.excerpt}
          </p>
        </header>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Article Content */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-8">
            {/* Table of Contents */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B3B60] block mb-2">
                Sommaire de l’article
              </span>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {post.tableOfContents.map((toc, idx) => (
                  <li key={idx} className="flex items-start gap-2 hover:text-orange-600 cursor-pointer">
                    <span className="text-orange-500 font-bold">{idx + 1}.</span>
                    <span>{toc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
              {post.content.map((sec, idx) => (
                <section key={idx} className="space-y-3">
                  <h2 className="text-lg sm:text-xl font-bold text-[#0B3B60]">
                    {idx + 1}. {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* Expert Tip Callout */}
            <div className="p-5 rounded-xl bg-orange-50/70 border border-orange-200 text-xs sm:text-sm text-slate-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-orange-700">
                <CheckCircle2 className="h-5 w-5" />
                <span>Le conseil d'iTrip Déménagement</span>
              </div>
              <p className="leading-relaxed">
                N’hésitez pas à solliciter un devis gratuit pour comparer les coûts. Un déménagement bien préparé avec du matériel professionnel coûte souvent moins cher en énergie et en réparation de meubles abîmés qu'une solution improvisée !
              </p>
            </div>

            {/* Share & Social */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">Cet article vous a été utile ?</span>
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Partager sur WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Sidebar CTA & Contact */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0B3B60] text-white p-6 rounded-2xl shadow-sm space-y-4">
              <span className="text-xs uppercase font-bold text-orange-400">Projet en vue ?</span>
              <h3 className="text-lg font-bold leading-snug">
                Obtenez un devis gratuit pour votre déménagement
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Estimez le cubage et le coût de votre transfert à Casablanca ou entre villes en quelques clics.
              </p>
              <button
                onClick={() => onNavigate('quote')}
                className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow transition-colors flex items-center justify-center gap-2"
              >
                <span>Demander mon devis</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
              <h4 className="font-bold text-[#0B3B60] text-sm">Une question urgente ?</h4>
              <p>Nos coordinateurs sont à votre disposition par téléphone :</p>
              <a
                href={`tel:${BUSINESS_CONFIG.PHONE_NUMBER_RAW}`}
                className="flex items-center gap-2 font-bold text-slate-900 hover:text-orange-600"
              >
                <Phone className="h-4 w-4 text-orange-500" />
                <span>{BUSINESS_CONFIG.PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-[#0B3B60] mb-6">Articles similaires</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <article
                key={rel.id}
                onClick={() => {
                  onNavigate('blog-post', { postSlug: rel.slug });
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-orange-600 block mb-1">{rel.category}</span>
                  <h4 className="text-sm font-bold text-slate-900 hover:text-orange-600 transition-colors leading-snug mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-orange-600 mt-3">
                  <span>Lire</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};
