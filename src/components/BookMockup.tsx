import React from 'react';
import { BookOpen, Sparkles, Check, Clock } from 'lucide-react';

interface BookMockupProps {
  title: string;
  subtitle?: string;
  badge?: string;
  variant?: 'main' | 'bonus' | 'stack';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const BookMockup: React.FC<BookMockupProps> = ({
  title,
  subtitle = 'GUIDE NUMÉRIQUE - PDF',
  badge,
  variant = 'main',
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-36 h-48 text-xs',
    md: 'w-48 h-64 text-sm',
    lg: 'w-64 h-84 text-base',
  }[size];

  if (variant === 'stack') {
    return (
      <div className={`relative flex items-center justify-center p-6 ${className}`}>
        {/* Subtle glow behind */}
        <div className="absolute inset-0 bg-emerald-900/10 rounded-full blur-3xl" />

        {/* Stack of books */}
        <div className="relative flex items-end justify-center -space-x-12 perspective-1000">
          {/* Bonus 1 background book */}
          <div className="w-32 h-44 sm:w-40 sm:h-56 bg-stone-900 rounded-r-lg shadow-xl border-l-4 border-amber-600/60 transform -rotate-12 translate-y-3 opacity-90 transition-transform hover:-translate-y-1">
            <div className="p-3 text-white flex flex-col justify-between h-full bg-gradient-to-br from-stone-800 to-stone-950">
              <span className="text-[9px] uppercase tracking-wider text-amber-300 font-semibold">28 Jours</span>
              <p className="text-xs font-serif font-bold text-stone-200">Menus Clé-en-main</p>
              <span className="text-[8px] text-stone-400">PDF Haute Définition</span>
            </div>
          </div>

          {/* Bonus 2 background book */}
          <div className="w-32 h-44 sm:w-40 sm:h-56 bg-emerald-950 rounded-r-lg shadow-xl border-l-4 border-emerald-500/60 transform rotate-12 translate-y-3 opacity-90 transition-transform hover:-translate-y-1">
            <div className="p-3 text-white flex flex-col justify-between h-full bg-gradient-to-br from-emerald-900 to-emerald-950">
              <span className="text-[9px] uppercase tracking-wider text-emerald-300 font-semibold">Batch Cooking</span>
              <p className="text-xs font-serif font-bold text-emerald-100">Préparez en 1h30</p>
              <span className="text-[8px] text-emerald-400">48 Pages</span>
            </div>
          </div>

          {/* Main Book centered and in front */}
          <div className="relative z-10 w-44 h-60 sm:w-56 sm:h-76 bg-[#162a1c] text-[#f7f5ee] rounded-r-xl shadow-2xl border-l-8 border-[#2e593a] transform hover:scale-105 transition-all duration-300">
            {/* Book spine lighting */}
            <div className="absolute top-0 bottom-0 left-0 w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent" />
            <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-l from-black/30 to-transparent" />

            <div className="h-full p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#1b3423] via-[#162a1c] to-[#0f1f14]">
              {/* Top metadata */}
              <div>
                <div className="flex items-center justify-between border-b border-white/15 pb-2">
                  <span className="text-[9px] sm:text-[10px] tracking-widest text-[#a8d38d] uppercase font-medium">
                    Bien dans l'assiette
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-stone-300 uppercase tracking-wider">
                    250 Recettes
                  </span>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-[10px] sm:text-xs text-[#cadfc2] italic font-serif">Guide Numérique</span>
                  <h3 className="text-base sm:text-xl font-serif font-bold text-[#faf8f0] leading-tight tracking-tight mt-1">
                    « Qu'est-ce qu'on mange ce soir ? »
                  </h3>
                  <div className="w-12 h-0.5 bg-[#8fc74e] mx-auto my-2" />
                  <p className="text-[10px] sm:text-xs text-stone-300">
                    Cuisine saine & anti-inflammatoire
                  </p>
                </div>
              </div>

              {/* Decorative culinary visual badge */}
              <div className="my-auto py-2 flex justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#8fc74e]/40 flex items-center justify-center bg-[#23422d]/60 backdrop-blur-xs">
                  <div className="text-center">
                    <span className="block text-lg sm:text-xl font-serif font-bold text-[#faf8f0]">250</span>
                    <span className="block text-[8px] uppercase tracking-wider text-[#a8d38d]">Recettes</span>
                  </div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[8px] sm:text-[9px] text-stone-300">
                <span>Édition Officielle</span>
                <span className="text-[#a8d38d] font-semibold">Format PDF HD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative ${sizeClasses} rounded-r-xl shadow-xl border-l-6 border-[#2d5236] transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      {/* Book lighting & spine */}
      <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-black/50 via-white/10 to-transparent z-10" />
      <div className="absolute top-0 bottom-0 right-0 w-1.5 bg-gradient-to-l from-black/25 to-transparent z-10" />

      <div className="h-full w-full p-4 flex flex-col justify-between rounded-r-lg bg-gradient-to-b from-[#1c3724] to-[#122216] text-[#faf8f0] relative overflow-hidden">
        {/* Subtle background ornament */}
        <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#8fc74e]/10 blur-xl pointer-events-none" />

        <div>
          {badge && (
            <div className="mb-2">
              <span className="inline-block text-[9px] font-semibold tracking-wider text-[#a8d38d] uppercase">
                {badge}
              </span>
            </div>
          )}
          <span className="text-[9px] tracking-wider text-stone-400 uppercase block">{subtitle}</span>
          <h4 className="font-serif font-bold text-[#faf8f0] text-sm sm:text-base leading-snug mt-1">
            {title}
          </h4>
        </div>

        <div className="py-2 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border border-[#8fc74e]/30 flex items-center justify-center bg-[#23422d]/40">
            <BookOpen className="w-5 h-5 text-[#a8d38d]" />
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-stone-300">
          <span>Bien dans l'Assiette</span>
          <span className="text-[#8fc74e] font-medium">PDF Prêt</span>
        </div>
      </div>
    </div>
  );
};
