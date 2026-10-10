import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle2, Mail } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  // 47 heures, 52 minutes, 18 secondes
  const [secondsRemaining, setSecondsRemaining] = useState(47 * 3600 + 52 * 60 + 18);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  // Date prévisionnelle sous 48h
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 48);
  const formattedDate = targetDate.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="bg-[#183120] text-[#f7f5ee] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#2b5437]">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#a8d38d] font-semibold">
            <Clock className="w-4 h-4 text-[#8fc74e]" />
            <span>Délai Maximum Estimé de Livraison</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#faf8f0] mt-1">
            Sous 48 heures dans votre boîte e-mail
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 capitalize">
            Livraison au plus tard le : <span className="text-white font-medium">{formattedDate}</span>
          </p>
        </div>

        {/* Tabular numbers countdown display */}
        <div className="flex items-center gap-2 sm:gap-3 bg-[#0f2115] px-4 py-3 rounded-xl border border-white/10 shrink-0">
          <div className="text-center min-w-[52px]">
            <span className="block text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#8fc74e]">
              {String(hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase text-stone-400 tracking-wider">
              Heures
            </span>
          </div>
          <span className="text-xl font-bold text-stone-500 pb-3">:</span>
          <div className="text-center min-w-[52px]">
            <span className="block text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#8fc74e]">
              {String(minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase text-stone-400 tracking-wider">
              Min
            </span>
          </div>
          <span className="text-xl font-bold text-stone-500 pb-3">:</span>
          <div className="text-center min-w-[52px]">
            <span className="block text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#8fc74e]">
              {String(seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase text-stone-400 tracking-wider">
              Sec
            </span>
          </div>
        </div>
      </div>

      {/* Progress timeline */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-stone-300 font-medium">
            Statut de Préparation des Fichiers
          </span>
          <span className="text-[#a8d38d] font-semibold font-mono tabular-nums">
            85% terminé
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#0d1d12] rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#5a9c29] to-[#8fc74e] h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ width: '85%' }}
          />
        </div>

        {/* Step stages */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="flex items-start gap-3 bg-[#1e3c27]/60 p-3 rounded-lg border border-white/5">
            <CheckCircle2 className="w-5 h-5 text-[#8fc74e] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-white">
                1. Commande Confirmée
              </p>
              <p className="text-[11px] text-stone-300">
                Paiement sécurisé validé
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#1e3c27]/90 p-3 rounded-lg border border-[#8fc74e]/30">
            <div className="w-5 h-5 rounded-full border-2 border-[#8fc74e] border-t-transparent animate-spin shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-[#8fc74e]">
                2. Presque Prêt !
              </p>
              <p className="text-[11px] text-stone-200">
                Dernières vérifications du pack PDF
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-[#162e1d]/40 p-3 rounded-lg border border-white/5">
            <Mail className="w-5 h-5 text-stone-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-stone-300">
                3. Envoi par E-mail
              </p>
              <p className="text-[11px] text-stone-400">
                Sous 48h dans votre boîte de réception
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
