import React, { useState } from 'react';
import { MapPin, Search, ArrowRight, ShieldCheck, Phone, MessageCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useAdminData } from '../context/AdminDataContext';

interface CitiesDirectoryPageProps {
  onNavigate: (page: string, params?: any) => void;
}

export const CitiesDirectoryPage: React.FC<CitiesDirectoryPageProps> = ({ onNavigate }) => {
  const { cities } = useAdminData();
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('Tous');

  const regions = ['Tous', 'Casablanca-Settat', 'Rabat-Salé-Kénitra', 'Marrakech-Safi', 'Tanger-Tétouan-Al Hoceïma', 'Fès-Meknès', 'Souss-Massa'];

  const filteredCities = cities.filter((city) => {
    const matchesRegion = selectedRegion === 'Tous' || city.region.includes(selectedRegion);
    const matchesSearch =
      city.name.toLowerCase().includes(search.toLowerCase()) ||
      city.districts.some((d) => d.toLowerCase().includes(search.toLowerCase()));
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-100">
        <Breadcrumbs
          items={[
            { label: 'Accueil', onClick: () => onNavigate('home') },
            { label: 'Villes desservies au Maroc' }
          ]}
        />
      </div>

      {/* Hero */}
      <section className="bg-[#0B3B60] text-white py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
            Couverture Nationale
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Villes desservies par iTrip Déménagement au Maroc
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            De Casablanca, notre base opérationnelle, jusqu’à Tanger, Agadir, Marrakech, Fès et Rabat, nous assurons des déménagements de proximité et des liaisons inter-villes directes.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`py-2 px-3.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedRegion === reg
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher une ville ou un quartier..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:border-orange-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCities.map((city) => (
            <div
              key={city.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
                    {city.region}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" />
                    <span>Maroc</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0B3B60] group-hover:text-orange-600 transition-colors mb-2">
                  Déménagement à {city.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {city.description}
                </p>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1.5">
                    Quartiers desservis :
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {city.districts.slice(0, 4).map((d, i) => (
                      <span key={i} className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                        {d}
                      </span>
                    ))}
                    {city.districts.length > 4 && (
                      <span className="text-[11px] text-slate-400 py-0.5">+{city.districts.length - 4} autres</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('city-detail', { citySlug: city.slug })}
                  className="text-xs font-bold text-orange-600 hover:text-orange-700 inline-flex items-center gap-1"
                >
                  <span>Voir la page locale</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('quote', { initialService: 'national' })}
                  className="text-xs font-medium text-slate-500 hover:text-[#0B3B60]"
                >
                  Devis trajet
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
