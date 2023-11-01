import { PortableTextBlock } from "sanity";

export type Recipe = {
  // TODO maybe id uuid type?
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  title: string;
  slug: string;
  ingredients: RecipeIngredient[];
  primaryImage: string;
  secondaryImage?: {
    url: string;
    alt: string;
  };
  difficulty: "Easy" | "Medium" | "Hard";
  description: PortableTextBlock[];
  instructions: PortableTextBlock[];
};

export type RecipeIngredient = {
  recipe_ingredient_id: string;
  name: string;
};
