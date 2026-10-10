import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { DeliveryPage } from './components/DeliveryPage';
import { SalesPage } from './components/SalesPage';
import { Footer } from './components/Footer';
import { PageView } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('delivery');

  // Sync hash routing if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('vente') || hash.includes('sales') || hash.includes('vendas')) {
        setCurrentView('sales');
      } else if (hash.includes('livraison') || hash.includes('delivery') || hash.includes('entrega')) {
        setCurrentView('delivery');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSetView = (view: PageView) => {
    setCurrentView(view);
    window.location.hash = view === 'delivery' ? 'livraison' : 'vente';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f2] text-[#192b1d]">
      <Navbar
        currentView={currentView}
        setCurrentView={handleSetView}
      />

      <main className="flex-1">
        {currentView === 'delivery' ? (
          <DeliveryPage
            onGoToSales={() => handleSetView('sales')}
          />
        ) : (
          <SalesPage
            onGoToDelivery={() => handleSetView('delivery')}
          />
        )}
      </main>

      <Footer
        currentView={currentView}
        setCurrentView={handleSetView}
      />

      {/* Floating Bottom View Switcher Bar in French */}
      <aside aria-label="Navigation entre pages" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 bg-[#162a1c]/95 backdrop-blur-md text-[#f7f5ee] px-4 py-2 rounded-full shadow-2xl border border-white/15 flex items-center gap-3 text-xs">
        <span className="text-stone-400 font-medium hidden sm:inline">
          Affichage :
        </span>
        <div className="flex items-center gap-1 bg-[#0f2115] p-1 rounded-full border border-white/10">
          <button
            onClick={() => handleSetView('delivery')}
            className={`px-3 py-1 rounded-full transition-all font-semibold ${
              currentView === 'delivery'
                ? 'bg-[#8fc74e] text-[#142618] shadow-xs'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            📦 Page de Livraison (48h)
          </button>
          <button
            onClick={() => handleSetView('sales')}
            className={`px-3 py-1 rounded-full transition-all font-semibold ${
              currentView === 'sales'
                ? 'bg-[#8fc74e] text-[#142618] shadow-xs'
                : 'text-stone-300 hover:text-white'
            }`}
          >
            🛒 Page de Vente
          </button>
        </div>
      </aside>
    </div>
  );
}
