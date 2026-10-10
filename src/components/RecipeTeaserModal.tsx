import React, { useState } from 'react';
import { X, Clock, Users, Check, ChefHat, Heart } from 'lucide-react';
import { TeaserRecipe } from '../types';

interface RecipeTeaserModalProps {
  recipe: TeaserRecipe | null;
  onClose: () => void;
}

export const RecipeTeaserModal: React.FC<RecipeTeaserModalProps> = ({
  recipe,
  onClose,
}) => {
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  if (!recipe) return null;

  const title = recipe.titleFr;
  const category = recipe.categoryFr;
  const description = recipe.descriptionFr;
  const ingredients = recipe.ingredientsFr;
  const steps = recipe.stepsFr;
  const benefit = recipe.antiInflammatoryBenefitFr;

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="recipe-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#faf8f2] rounded-2xl shadow-2xl border border-stone-200 text-[#192b1d]">
        {/* Header bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#faf8f2]/95 backdrop-blur-md border-b border-stone-200">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
            <ChefHat className="w-4 h-4 text-emerald-700" />
            <span>{category}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer la recette"
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#6b9e38] font-bold">
              Extrait Exclusif du Guide
            </span>
            <h3 id="recipe-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#142618] mt-1 leading-snug">
              {title}
            </h3>
            <p className="text-sm text-stone-600 mt-2">{description}</p>
          </div>

          {/* Quick stats strip */}
          <div className="flex flex-wrap items-center gap-4 py-3 px-4 bg-[#eff5eb] rounded-xl border border-emerald-100 text-xs font-medium text-emerald-900">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-700" />
              <span>Préparation : {recipe.prepTime}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-700" />
              <span>Cuisson : {recipe.cookTime}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-emerald-700" />
              <span>{recipe.servings} portions</span>
            </div>
          </div>

          {/* Anti-inflammatory focus box */}
          <div className="p-4 bg-amber-50/80 rounded-xl border border-amber-200/70 text-xs text-amber-950">
            <div className="flex items-center gap-2 font-semibold text-amber-900 mb-1">
              <Heart className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Bienfait Anti-inflammatoire de la Recette :</span>
            </div>
            <p className="text-stone-700 leading-relaxed">{benefit}</p>
          </div>

          {/* Ingredients list */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#142618] mb-3">
              Ingrédients (cliquez pour cocher)
            </h4>
            <div className="space-y-2">
              {ingredients.map((ing, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleIngredient(idx)}
                  className={`w-full flex items-start gap-3 p-2.5 rounded-lg text-left text-xs transition-colors border ${
                    checkedIngredients[idx]
                      ? 'bg-emerald-50/60 border-emerald-300 text-stone-500 line-through'
                      : 'bg-white border-stone-200/80 text-stone-800 hover:border-emerald-300'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center shrink-0 border ${
                      checkedIngredients[idx]
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-stone-300 bg-white'
                    }`}
                  >
                    {checkedIngredients[idx] && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>{ing}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step-by-step instructions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#142618] mb-3">
              Étapes de Préparation
            </h4>
            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200/70">
                  <div className="w-6 h-6 rounded-full bg-[#1b3623] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sweet teaser footer */}
          <div className="p-4 bg-emerald-950 text-[#f7f5ee] rounded-xl text-center space-y-1">
            <p className="text-xs font-medium text-[#a8d38d]">
              Vous avez aimé cet extrait ? Plus de 249 recettes vous attendent dans le guide !
            </p>
            <p className="text-[11px] text-stone-300">
              Le PDF complet haute résolution arrive sous 48 heures dans votre boîte e-mail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
