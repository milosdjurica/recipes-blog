import { PortableTextBlock } from "sanity";

export type Last8Type = Pick<
  Recipe,
  "_id" | "_createdAt" | "title" | "slug" | "primaryImage" | "descriptionHP"
>;

export type PickRecipeType = Pick<
  Recipe,
  "_id" | "_createdAt" | "title" | "primaryImage"
>;

export type Recipe = {
  // TODO maybe id uuid type?
  _id: string;
  _createdAt: Date;
  _updatedAt: Date;
  title: string;
  slug: string;
  time?: RecipeTime;
  ingredients: RecipeIngredient[];
  primaryImage: string;
  secondaryImage?: {
    url: string;
    alt: string;
  };
  difficulty: "Easy" | "Medium" | "Hard";
  descriptionHP: PortableTextBlock[];
  description: PortableTextBlock[];
  instructions: PortableTextBlock[];
};

export type RecipeIngredient = {
  name: string;
  quantity: string;
  unit: string;
};

export type RecipeTime = {
  count: number;
  unit: "Seconds" | "Minutes" | "Hours" | "Days";
};
