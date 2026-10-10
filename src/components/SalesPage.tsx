import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { BookMockup } from './BookMockup';

interface SalesPageProps {
  onGoToDelivery: () => void;
}

export const SalesPage: React.FC<SalesPageProps> = ({
  onGoToDelivery,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Comment vais-je recevoir mon guide après le règlement ?',
      a: 'Dès votre commande validée, vous recevez un e-mail de confirmation. Votre guide « Bien dans l\'Assiette » et ses 4 compléments au format numérique PDF haute définition sont expédiés sous 48 heures directement à l\'adresse e-mail renseignée.',
    },
    {
      q: 'Puis-je consulter les recettes sur mon téléphone ou ma tablette ?',
      a: 'Oui, absolument. Le guide a été pensé pour un usage quotidien en cuisine : il est parfaitement lisible sur smartphone (iOS et Android), sur tablette et sur ordinateur. Vous pouvez également imprimer vos fiches recettes favorites.',
    },
    {
      q: 'Les ingrédients sont-ils faciles à trouver dans un supermarché ordinaire ?',
      a: 'Oui, c\'est le principe fondamental de Bien dans l\'Assiette. Aucun ingrédient rare ou introuvable : tout s\'achète dans votre supermarché ou marché de quartier habituel.',
    },
    {
      q: 'Ce recueil convient-il aux débutants en cuisine ?',
      a: 'Parfaitement. Les étapes sont simples, courtes et numérotées. Vous n\'avez besoin d\'aucun matériel professionnel ni de compétences particulières.',
    },
    {
      q: 'Le paiement est-il sécurisé et s\'agit-il d\'un paiement unique ?',
      a: 'Le paiement est entièrement sécurisé par protocole chiffré. Il s\'agit d\'un paiement unique de 14,90 €, sans aucun abonnement ni frais cachés.',
    },
    {
      q: 'Combien de temps ai-je accès au contenu ?',
      a: 'Votre accès est à vie. Vous pouvez télécharger et conserver les fichiers sur tous vos appareils sans limitation de temps.',
    },
    {
      q: 'Les recettes conviennent-elles à toute la famille ?',
      a: 'Tout à fait. Ce sont des plats conviviaux, équilibrés et savoureux qui plaisent aux adultes comme aux enfants.',
    },
    {
      q: 'Comment fonctionne la garantie de 15 jours ?',
      a: 'Consultez et testez les 250 recettes chez vous en toute liberté. Un simple e-mail suffit pour être intégralement remboursé sans justification.',
    },
  ];

  return (
    <div className="bg-[#faf8f2] text-[#192b1d]">
      {/* Top Banner Alert to Switch to Delivery Page */}
      <div className="bg-[#213f2a] text-[#d6ecd0] text-xs py-2 px-4 text-center border-b border-emerald-900 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#8fc74e]" />
        <span>Vous avez déjà commandé ? Consultez votre</span>
        <button
          onClick={onGoToDelivery}
          className="text-white font-bold underline decoration-[#8fc74e] hover:text-[#8fc74e] transition-colors"
        >
          Page de Livraison (Avis 48h)
        </button>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#162a1c] via-[#1a3322] to-[#142618] text-[#f7f5ee] pt-12 pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="inline-block text-[11px] sm:text-xs font-semibold tracking-widest text-[#a8d38d] uppercase border-b border-[#a8d38d]/40 pb-1">
            GUIDE NUMÉRIQUE · 250 RECETTES · PDF HAUTE DÉFINITION
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#faf8f0] leading-tight tracking-tight max-w-3xl mx-auto">
            « Qu'est-ce qu'on mange ce soir ? » Vous aurez enfin la réponse.
          </h1>

          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            250 recettes simples, inspirées de l'alimentation anti-inflammatoire, avec 28 jours de menus et les listes de courses déjà prêtes.
          </p>

          {/* Book Mockup Stack */}
          <div className="py-4">
            <BookMockup
              title="Bien dans l'Assiette"
              subtitle="250 RECETTES"
              variant="stack"
              className="max-w-md mx-auto"
            />
          </div>

          {/* Primary CTA */}
          <div className="space-y-3 max-w-md mx-auto">
            <button
              onClick={onGoToDelivery}
              className="w-full py-4 px-6 rounded-xl bg-[#8fc74e] hover:bg-[#a1d663] text-[#142618] font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>JE VEUX MES 250 RECETTES - 14,90 €</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-[11px] text-stone-300">
              Paiement unique · Accès par e-mail sous 48h · Garantie 15 jours dès réception
            </p>
          </div>

          {/* Benefits pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-stone-300">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#8fc74e]" />
              <span>Ingrédients de supermarché</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#8fc74e]" />
              <span>La plupart prêtes en moins de 25 min</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#8fc74e]" />
              <span>Sur téléphone, tablette et ordinateur</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142618]">
            19h30. Tout le monde a faim. Et rien n'est décidé.
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Une charge mentale quotidienne qui fatigue et pousse aux mauvais choix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-700 font-bold">
              ?
            </div>
            <h3 className="font-serif font-bold text-base text-[#142618]">
              La même question
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Chaque soir la même fatigue devant le réfrigérateur, sans inspiration ni motivation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-700 font-bold">
              ↻
            </div>
            <h3 className="font-serif font-bold text-base text-[#142618]">
              Les mêmes plats
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              On finit par tourner en rond sur les 3 mêmes préparations rapides, sans plaisir.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center mx-auto text-stone-700 font-bold">
              !
            </div>
            <h3 className="font-serif font-bold text-base text-[#142618]">
              Trop compliqué
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Les recettes en ligne demandent 15 ingrédients introuvables et 1h de vaisselle.
            </p>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-16 px-4 sm:px-6 bg-[#f4f2e9] border-y border-stone-200">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#568128]">
              La Méthode
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142618]">
              La solution : décider avant d'avoir faim.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-3">
              <span className="w-7 h-7 rounded-full bg-[#1b3623] text-white text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-serif font-bold text-base text-[#142618]">
                Choisissez
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Parmi 250 idées classées par saison et moment de la journée.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-3">
              <span className="w-7 h-7 rounded-full bg-[#1b3623] text-white text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-serif font-bold text-base text-[#142618]">
                Vérifiez
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Ingrédients simples du quotidien, sans liste interminable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200 space-y-3">
              <span className="w-7 h-7 rounded-full bg-[#1b3623] text-white text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-serif font-bold text-base text-[#142618]">
                Cuisinez
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Suivez les étapes numérotées et dégustez en moins de 25 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 250 Recettes breakdown */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142618]">
            250 recettes pour toute la journée
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Réparties en 5 grandes catégories simples et équilibrées.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
          {[
            { num: '50', label: 'Petits-déjeuners', icon: '☀️' },
            { num: '50', label: 'Déjeuners', icon: '🥗' },
            { num: '50', label: 'Dîners', icon: '🍲' },
            { num: '50', label: 'Desserts', icon: '🫐' },
            { num: '50', label: 'Snacks & Boissons', icon: '🍵' },
          ].map((cat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <span className="text-2xl">{cat.icon}</span>
              <span className="block text-xl font-serif font-bold text-[#142618]">{cat.num}</span>
              <span className="block text-xs text-stone-600 font-medium">{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Offer Recap Box */}
      <section className="py-16 px-4 sm:px-6 bg-[#162a1c] text-[#f7f5ee]">
        <div className="max-w-2xl mx-auto bg-[#1b3423] p-8 sm:p-10 rounded-3xl border border-[#2e593a] text-center space-y-6 shadow-2xl">
          <span className="text-xs font-semibold tracking-wider text-[#a8d38d] uppercase">
            OFFRE COMPLÈTE
          </span>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#faf8f0]">
            Tout ce que vous recevez aujourd'hui
          </h2>

          <div className="text-left space-y-2.5 text-xs sm:text-sm text-stone-200 border-y border-white/10 py-5">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#8fc74e] shrink-0" />
              <span><strong>Guide Principal :</strong> Bien dans l'Assiette (250 recettes en PDF HD)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#8fc74e] shrink-0" />
              <span><strong>Bonus 1 :</strong> 28 Jours de menus clé-en-main + listes de courses</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#8fc74e] shrink-0" />
              <span><strong>Bonus 2 :</strong> Batch cooking express (repas de la semaine en 1h30)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#8fc74e] shrink-0" />
              <span><strong>Bonus 3 :</strong> Placard sain & 60 substitutions faciles</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#8fc74e] shrink-0" />
              <span><strong>Bonus 4 :</strong> 30 Sauces, vinaigrettes & dips maison</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#8fc74e] shrink-0" />
              <span><strong>Accès à vie</strong> livré par e-mail sous 48h au format PDF</span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-white">14,90 €</span>
            <p className="text-[11px] text-stone-300">
              Paiement unique · Aucun abonnement
            </p>
          </div>

          <button
            onClick={onGoToDelivery}
            className="w-full py-4 px-6 rounded-xl bg-[#8fc74e] hover:bg-[#a1d663] text-[#142618] font-bold text-base shadow-lg hover:shadow-xl transition-all"
          >
            ACCÉDER AU GUIDE MAINTENANT
          </button>
        </div>
      </section>

      {/* 15 Days Guarantee */}
      <section className="py-16 px-4 sm:px-6 max-w-2xl mx-auto text-center space-y-3">
        <div className="w-16 h-16 rounded-full border-2 border-[#1b3623] flex items-center justify-center mx-auto text-xs font-serif font-bold text-[#1b3623]">
          15 JOURS
        </div>
        <h3 className="text-xl font-serif font-bold text-[#142618]">
          Garantie 15 jours satisfait ou remboursé
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Consultez et testez les 250 recettes chez vous en toute liberté. Un simple e-mail suffit pour être intégralement remboursé sans justification.
        </p>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 bg-[#f4f2e9] border-t border-stone-200">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#568128]">
              ENCORE DES QUESTIONS ?
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142618]">
              Questions Fréquentes
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-semibold text-sm sm:text-base text-[#142618] hover:text-emerald-800"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
