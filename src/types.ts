export type Language = 'pt' | 'fr';

export type PageView = 'delivery' | 'sales';

export interface GuideBonus {
  id: string;
  title: string;
  titleFr: string;
  badge: string;
  badgeFr: string;
  description: string;
  descriptionFr: string;
  features: string[];
  featuresFr: string[];
  pages: number;
  coverAccent: string;
}

export interface TeaserRecipe {
  id: string;
  title: string;
  titleFr: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  category: string;
  categoryFr: string;
  description: string;
  descriptionFr: string;
  ingredients: string[];
  ingredientsFr: string[];
  steps: string[];
  stepsFr: string[];
  antiInflammatoryBenefit: string;
  antiInflammatoryBenefitFr: string;
}
