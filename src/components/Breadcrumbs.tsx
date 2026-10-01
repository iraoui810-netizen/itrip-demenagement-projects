import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Fil d'Ariane" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
        <li className="flex items-center">
          <button
            onClick={() => items[0]?.onClick?.()}
            className="flex items-center gap-1 hover:text-slate-900 transition-colors"
          >
            <Home className="h-3.5 w-3.5 text-slate-400" />
            <span>Accueil</span>
          </button>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
              {isLast ? (
                <span className="font-medium text-slate-900 truncate max-w-xs sm:max-w-md" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={item.onClick}
                  className="hover:text-slate-900 transition-colors truncate max-w-[160px]"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
