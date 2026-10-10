import React from 'react';
import { PageView } from '../types';

interface FooterProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentView,
  setCurrentView,
}) => {
  return (
    <footer className="bg-[#122216] text-stone-400 text-xs py-12 px-4 sm:px-6 border-t border-[#1e3825]">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        {/* Brand */}
        <div className="space-y-1">
          <p className="font-serif font-bold text-white text-base tracking-wider uppercase">
            Bien dans l'Assiette
          </p>
          <p className="text-[11px] text-stone-400">
            Produit numérique téléchargeable immédiatement au format PDF HD.
          </p>
        </div>

        {/* View and quick links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-stone-300">
          <button
            onClick={() => setCurrentView('delivery')}
            className={`hover:text-white transition-colors ${
              currentView === 'delivery' ? 'text-[#8fc74e] font-semibold underline' : ''
            }`}
          >
            Page de Livraison (Avis 48h)
          </button>
          <span>·</span>
          <button
            onClick={() => setCurrentView('sales')}
            className={`hover:text-white transition-colors ${
              currentView === 'sales' ? 'text-[#8fc74e] font-semibold underline' : ''
            }`}
          >
            Page de Vente
          </button>
          <span>·</span>
          <a href="mailto:supportbiedanslassiete@gmail.com" className="hover:text-white transition-colors">
            Support Client
          </a>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-stone-400">
          <span className="hover:text-stone-300 cursor-pointer">
            Conditions Générales de Vente (CGV)
          </span>
          <span>·</span>
          <span className="hover:text-stone-300 cursor-pointer">
            Politique de Confidentialité
          </span>
          <span>·</span>
          <span className="hover:text-stone-300 cursor-pointer">
            Mentions Légales
          </span>
        </div>

        {/* Health disclaimer as in screenshot */}
        <div className="p-4 rounded-xl bg-black/20 border border-white/5 text-[10px] leading-relaxed text-stone-400 max-w-2xl mx-auto">
          <p className="font-semibold text-stone-300 mb-1">
            Avertissement de responsabilité & bien-être :
          </p>
          <p>
            Ce recueil de recettes est un ouvrage pratique d'accompagnement culinaire et d'art de vivre. Il ne prétend en aucun cas diagnostiquer, traiter, guérir ou prévenir une quelconque pathologie médicale. Les conseils partagés s'inscrivent dans une démarche de cuisine maison équilibrée. Pour tout problème de santé ou régime thérapeutique particulier, veuillez consulter l'avis de votre médecin traitant ou d'un diététicien qualifié.
          </p>
        </div>

        <p className="text-[10px] text-stone-400">
          © {new Date().getFullYear()} Bien dans l'Assiette. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};
