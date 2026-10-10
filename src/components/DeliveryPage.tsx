import React, { useState } from 'react';
import {
  Clock,
  Mail,
  CheckCircle2,
  Sparkles,
  BookOpen,
  ShieldCheck,
  ChefHat,
  Copy,
  Check,
  ChevronDown,
  ArrowRight,
  Edit2,
  Send,
} from 'lucide-react';
import { guidesData, teaserRecipes } from '../data/translations';
import { TeaserRecipe } from '../types';
import { CountdownTimer } from './CountdownTimer';
import { BookMockup } from './BookMockup';
import { RecipeTeaserModal } from './RecipeTeaserModal';

interface DeliveryPageProps {
  onGoToSales: () => void;
}

export const DeliveryPage: React.FC<DeliveryPageProps> = ({
  onGoToSales,
}) => {
  const [selectedRecipe, setSelectedRecipe] = useState<TeaserRecipe | null>(null);
  const [customerEmail, setCustomerEmail] = useState('caiquevieiramoreira05@gmail.com');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [tempEmail, setTempEmail] = useState('caiquevieiramoreira05@gmail.com');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedOrder, setCopiedOrder] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleCopyOrder = () => {
    navigator.clipboard?.writeText('BDA-88492');
    setCopiedOrder(true);
    showToast('Numéro de commande copié !');
    setTimeout(() => setCopiedOrder(false), 2000);
  };

  const handleSaveEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempEmail && tempEmail.includes('@')) {
      setCustomerEmail(tempEmail);
      setIsEditingEmail(false);
      showToast('Adresse e-mail de livraison mise à jour avec succès !');
    }
  };

  const handleSendTestPing = () => {
    showToast(`Notification de confirmation envoyée à ${customerEmail} !`);
  };

  const faqs = [
    {
      q: 'Pourquoi la livraison prend-elle jusqu\'à 48 heures ?',
      a: 'Pour garantir la plus haute qualité visuelle et une sécurisation optimale, chaque pack numérique du guide « Bien dans l\'Assiette » et de ses 4 compléments fait l\'objet d\'une compilation individuelle avec licence personnalisée à votre nom. Vous recevez ainsi des fichiers ultra nets et optimisés pour smartphone, tablette et impression.'
    },
    {
      q: 'Que faire si je ne reçois pas l\'e-mail sous 48h ?',
      a: 'Pensez à vérifier d\'abord votre dossier "Spam", "Promotions" ou "Courrier indésirable". Si vous ne trouvez rien, notre service client réexpédiera votre lien d\'accès en un clic via supportbiedanslassiete@gmail.com.'
    },
    {
      q: 'L\'accès est-il garanti à vie ? Puis-je télécharger les guides ?',
      a: 'Oui, absolument ! Une fois reçu par e-mail, le fichier PDF haute définition vous appartient à vie. Vous pouvez le conserver sans limitation de durée sur tous vos appareils ou imprimer les pages de votre choix.'
    },
    {
      q: 'Comment fonctionne la garantie de 15 jours ?',
      a: 'Votre garantie de 15 jours ne commence qu\'à la réception du guide par e-mail. Vous bénéficiez ainsi de 15 jours entiers pour tester les recettes chez vous en toute liberté. Si le guide ne répond pas à vos attentes, un simple e-mail suffit pour être intégralement remboursé.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f2] text-[#192b1d]">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-[#162a1c] text-[#f7f5ee] rounded-xl shadow-2xl border border-[#305c3b] animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-5 h-5 text-[#8fc74e] shrink-0" />
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Delivery Hero Section */}
      <section className="bg-gradient-to-b from-[#162a1c] via-[#1a3322] to-[#122216] text-[#f7f5ee] pt-10 pb-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle background ambient texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 space-y-8">
          {/* Top Order Confirmation Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 text-xs text-stone-300">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#8fc74e]/20 text-[#8fc74e]">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <span className="font-medium text-white">
                Commande Confirmée
              </span>
              <span className="text-stone-500">·</span>
              <span className="font-mono text-stone-300">#BDA-88492</span>
              <button
                onClick={handleCopyOrder}
                className="text-stone-400 hover:text-white transition-colors"
                title="Copier le numéro de commande"
              >
                {copiedOrder ? <Check className="w-3.5 h-3.5 text-[#8fc74e]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-stone-400">
                Total réglé : <strong className="text-white">14,90 €</strong>
              </span>
              <span className="text-stone-500">·</span>
              <span className="text-emerald-300 font-medium">
                Accès à vie
              </span>
            </div>
          </div>

          {/* Core Notice Banner: Almost Ready + 48h Email Delivery */}
          <div className="bg-[#213f2a]/80 backdrop-blur-sm border-2 border-[#8fc74e]/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8fc74e]/20 border border-[#8fc74e]/40 text-[#a8d38d] text-xs font-semibold uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-[#8fc74e]" />
                  <span>Avis Important de Livraison</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#faf8f0] leading-tight">
                  Votre guide est presque prêt ! 🥑
                </h1>

                <p className="text-base sm:text-lg text-[#d8ebd0] font-medium leading-relaxed">
                  Sous <strong className="text-white underline decoration-[#8fc74e] underline-offset-4">48 heures maximum</strong>, l'ensemble de votre guide numérique ainsi que ses 4 compléments exclusifs seront livrés directement à l'adresse e-mail indiquée lors de votre commande.
                </p>
              </div>

              {/* Registered Email card */}
              <div className="w-full lg:w-auto shrink-0 bg-[#162a1c] p-4 sm:p-5 rounded-xl border border-white/10 text-xs space-y-2">
                <div className="flex items-center justify-between gap-4 text-stone-300">
                  <span className="font-semibold text-stone-200 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-[#8fc74e]" />
                    E-mail enregistré :
                  </span>
                  {!isEditingEmail && (
                    <button
                      onClick={() => setIsEditingEmail(true)}
                      className="text-[#8fc74e] hover:underline flex items-center gap-1 font-medium"
                    >
                      <Edit2 className="w-3 h-3" />
                      Modifier
                    </button>
                  )}
                </div>

                {isEditingEmail ? (
                  <form onSubmit={handleSaveEmail} className="space-y-2">
                    <input
                      type="email"
                      value={tempEmail}
                      onChange={(e) => setTempEmail(e.target.value)}
                      className="w-full px-3 py-1.5 rounded bg-white text-stone-900 border border-stone-300 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#8fc74e]"
                      required
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="px-3 py-1 bg-[#8fc74e] text-[#142618] rounded font-semibold text-xs hover:bg-[#a1d663]"
                      >
                        Enregistrer
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditingEmail(false)}
                        className="px-2 py-1 text-stone-400 hover:text-white text-xs"
                      >
                        Annuler
                      </button>
                    </div>
                  </form>
                ) : (
                  <p className="font-mono text-white text-sm break-all font-semibold bg-[#0e1c12] px-3 py-1.5 rounded border border-white/5">
                    {customerEmail}
                  </p>
                )}

                <p className="text-[11px] text-stone-400">
                  Assurez-vous que l'adresse ci-dessus est bien exacte.
                </p>

                <button
                  onClick={handleSendTestPing}
                  className="w-full mt-1 pt-2 border-t border-white/10 text-stone-300 hover:text-[#8fc74e] transition-colors flex items-center justify-center gap-1.5 text-[11px]"
                >
                  <Send className="w-3 h-3" />
                  <span>M'envoyer une confirmation test</span>
                </button>
              </div>
            </div>
          </div>

          {/* The Confirmation & Delivery Message Requested by User */}
          <div className="bg-[#faf8f2] text-[#192b1d] rounded-2xl p-6 sm:p-10 shadow-2xl border border-stone-200 space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-emerald-800 font-bold border-b border-stone-200 pb-3">
              <Sparkles className="w-4 h-4 text-[#689934]" />
              <span>Confirmation de Commande & Accès</span>
            </div>

            <div className="space-y-4 text-stone-800 text-sm sm:text-base leading-relaxed">
              <h2 className="font-serif text-xl sm:text-2xl text-[#142618] font-bold leading-snug">
                Merci, votre commande est bien confirmée !
              </h2>

              <p className="text-base sm:text-lg font-medium text-[#1e3b26]">
                Bienvenue dans Bien dans l'Assiette. Nous sommes vraiment heureux de vous compter parmi nous.
              </p>

              <p>
                Votre accès au guide de 250 recettes et à ses 4 compléments est en cours de préparation. Vous le recevrez par e-mail sous 48 heures, à l'adresse indiquée lors de votre commande.
              </p>

              <div className="bg-[#eff5eb] p-5 sm:p-6 rounded-xl border border-emerald-200/80 text-emerald-950 space-y-3 my-4">
                <p className="font-bold text-emerald-900 text-sm sm:text-base">
                  En attendant :
                </p>
                <ul className="space-y-2.5 text-stone-800 text-xs sm:text-sm">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-700 font-bold text-base leading-none">•</span>
                    <span>Pensez à vérifier vos courriers indésirables, au cas où notre e-mail s'y glisserait.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-700 font-bold text-base leading-none">•</span>
                    <span>
                      Une question ? Écrivez-nous à{' '}
                      <a
                        href="mailto:supportbiedanslassiete@gmail.com"
                        className="font-semibold text-emerald-800 underline decoration-emerald-500 hover:text-emerald-950"
                      >
                        supportbiedanslassiete@gmail.com
                      </a>
                      , nous vous répondons avec plaisir.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-700 font-bold text-base leading-none">•</span>
                    <span>Votre garantie de 15 jours ne commence qu'à la réception du guide.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 space-y-1">
                <p className="font-medium text-[#142618]">
                  À très vite, et bon appétit d'avance !
                </p>
                <p className="font-serif italic font-bold text-emerald-800 text-base">
                  L'équipe Bien dans l'Assiette
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <ChefHat className="w-4 h-4 text-emerald-800" />
                <span className="font-semibold text-stone-800">
                  L'équipe Bien dans l'Assiette
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Garantie 15 jours dès réception</span>
              </div>
            </div>
          </div>

          {/* Countdown & Status Tracker */}
          <CountdownTimer />
        </div>
      </section>

      {/* Sneak Peek: Taste 3 recipes while waiting! */}
      <section id="degustation" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#568128]">
            Extrait Gratuit
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142618]">
            3 recettes pour patienter avec gourmandise
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Cliquez sur l'une des fiches ci-dessous pour découvrir la liste des ingrédients et les étapes de préparation :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teaserRecipes.map((recipe) => {
            return (
              <div
                key={recipe.id}
                onClick={() => setSelectedRecipe(recipe)}
                className="group cursor-pointer bg-white rounded-2xl p-5 shadow-xs border border-stone-200 hover:border-emerald-500 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-3">
                    <span className="font-semibold text-emerald-800 uppercase tracking-wider text-[10px]">
                      {recipe.categoryFr}
                    </span>
                    <span className="flex items-center gap-1 text-stone-500">
                      <Clock className="w-3.5 h-3.5" />
                      {recipe.prepTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#142618] group-hover:text-emerald-800 transition-colors leading-snug">
                    {recipe.titleFr}
                  </h3>

                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                    {recipe.descriptionFr}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
                  <span>Voir les étapes</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Package Contents Breakdown: 5 Digital Guides */}
      <section id="contenu" className="py-16 px-4 sm:px-6 bg-[#f4f2e9] border-y border-stone-200">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#568128]">
              Contenu Intégral de Votre Commande
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142618]">
              L'ensemble des guides en cours de préparation
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Sous 48h, vous recevrez les liens de téléchargement sécurisés en PDF haute définition pour chacun de ces 5 manuels :
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {guidesData.map((guide) => {
              const isMain = guide.id === 'main';

              return (
                <div
                  key={guide.id}
                  className={`bg-white rounded-2xl p-6 shadow-xs border ${
                    isMain ? 'lg:col-span-2 border-emerald-600/60 ring-2 ring-emerald-600/10' : 'border-stone-200'
                  } flex flex-col md:flex-row items-center gap-6`}
                >
                  {/* Book Mockup graphic */}
                  <div className="shrink-0 flex justify-center">
                    <BookMockup
                      title={guide.titleFr}
                      badge={guide.badgeFr}
                      variant={isMain ? 'stack' : 'bonus'}
                      size={isMain ? 'lg' : 'sm'}
                    />
                  </div>

                  {/* Details */}
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        {guide.badgeFr}
                      </span>
                      <span className="text-xs text-stone-500 font-mono">
                        {guide.pages} pages au format PDF
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-[#142618]">
                      {guide.titleFr}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {guide.descriptionFr}
                    </p>

                    <div className="pt-2 border-t border-stone-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                      {guide.featuresFr.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3 Golden Tips While Waiting */}
      <section className="py-16 px-4 sm:px-6 max-w-5xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#568128]">
            Préparation Express
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142618]">
            3 conseils pour bien démarrer avant l'arrivée de vos guides
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-base">
              1
            </div>
            <h3 className="font-serif font-bold text-base text-[#142618]">
              Ajoutez notre adresse à vos contacts
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Ajoutez <strong className="text-emerald-900 font-semibold">supportbiedanslassiete@gmail.com</strong> à votre carnet d'adresses pour éviter que le lien de téléchargement ne soit filtré par les spams.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-base">
              2
            </div>
            <h3 className="font-serif font-bold text-base text-[#142618]">
              Jetez un œil à vos basiques
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Huile d'olive vierge extra, curcuma, graines de chia et ail : quelques essentiels du placard vous permettront de tester dès la réception de vos fichiers.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center font-bold text-base">
              3
            </div>
            <h3 className="font-serif font-bold text-base text-[#142618]">
              Dites adieu au stress du dîner
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Fini le casse-tête de 19h30. Grâce au batch cooking et aux plannings hebdomadaires, vos dîners seront réglés en moins de 15 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 px-4 sm:px-6 bg-[#f4f2e9] border-t border-stone-200">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#568128]">
              Questions Fréquentes
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#142618]">
              Tout savoir sur la réception de votre commande
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-semibold text-sm sm:text-base text-[#142618] hover:text-emerald-800"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${
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

      {/* Support and Contact Strip */}
      <section id="suporte" className="py-12 px-4 sm:px-6 bg-[#162a1c] text-[#f7f5ee]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif font-bold text-xl text-[#faf8f0]">
              Une question ou besoin d'aide ?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300">
              Notre équipe vous répond sous 2 heures ouvrées par e-mail.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:supportbiedanslassiete@gmail.com"
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-colors border border-white/10"
            >
              <Mail className="w-4 h-4 text-[#8fc74e]" />
              <span>supportbiedanslassiete@gmail.com</span>
            </a>

            <button
              onClick={onGoToSales}
              className="px-4 py-2.5 bg-[#8fc74e] hover:bg-[#a1d663] text-[#142618] rounded-xl text-xs font-bold flex items-center gap-2 transition-colors"
            >
              <span>Revoir la Page de Vente</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Recipe Modal */}
      {selectedRecipe && (
        <RecipeTeaserModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
};
