import React from "react";
import { getSingleRecipe } from "@/sanity/sanity.utils";

type Props = {
  params: { recipe: string };
};

// TODO CREATE THIS PAGE !!!!!!!!!!!!!!!!!!!!!!
export default async function RecipePage({ params }: Props) {
  const id = params.recipe;
  const recipe = await getSingleRecipe(id);

  return (
    <div>
      <h2>{recipe.title}</h2>
    </div>
  );
}
