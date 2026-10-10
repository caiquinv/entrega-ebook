import React from 'react';
import { PageView } from '../types';

interface NavbarProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#162a1c] text-[#f7f5ee] border-b border-[#25462f] shadow-md backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setCurrentView('delivery')}
          className="text-base sm:text-lg font-serif font-bold tracking-tight text-[#faf8f0] hover:text-[#a8d38d] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>BIEN DANS L'ASSIETTE</span>
        </button>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-stone-300">
          <button
            onClick={() => setCurrentView('delivery')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              currentView === 'delivery'
                ? 'text-[#8fc74e] font-semibold border-b-2 border-[#8fc74e] pb-0.5'
                : 'text-stone-300'
            }`}
          >
            Page de Livraison
          </button>
          <button
            onClick={() => setCurrentView('sales')}
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-white ${
              currentView === 'sales'
                ? 'text-[#8fc74e] font-semibold border-b-2 border-[#8fc74e] pb-0.5'
                : 'text-stone-300'
            }`}
          >
            Page de Vente
          </button>
          <a
            href="#contenu"
            onClick={(e) => {
              if (currentView !== 'delivery') {
                e.preventDefault();
                setCurrentView('delivery');
                setTimeout(() => document.getElementById('contenu')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-stone-300"
          >
            Contenu du Pack
          </a>
          <a
            href="#degustation"
            onClick={(e) => {
              if (currentView !== 'delivery') {
                e.preventDefault();
                setCurrentView('delivery');
                setTimeout(() => document.getElementById('degustacao')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-stone-300"
          >
            Recettes Découverte
          </a>
          <a
            href="#suporte"
            onClick={(e) => {
              if (currentView !== 'delivery') {
                e.preventDefault();
                setCurrentView('delivery');
                setTimeout(() => document.getElementById('suporte')?.scrollIntoView({ behavior: 'smooth' }), 100);
              }
            }}
            className="hover:text-white transition-colors whitespace-nowrap shrink-0 text-stone-300"
          >
            Assistance
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setCurrentView(currentView === 'delivery' ? 'sales' : 'delivery')}
            className="px-3 sm:px-4 py-1.5 text-xs font-semibold text-[#142618] bg-[#8fc74e] rounded-lg hover:bg-[#a1d663] transition-colors whitespace-nowrap shrink-0 shadow-xs"
          >
            {currentView === 'delivery' ? 'Voir Page de Vente' : 'Voir Page de Livraison'}
          </button>
        </div>
      </div>
    </header>
  );
};
