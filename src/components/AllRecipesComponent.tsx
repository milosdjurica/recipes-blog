import React from "react";

import { getRecipes } from "@/sanity/sanity.utils";
import RecipeCard from "./RecipeCard";

export default async function AllRecipesComponent() {
  const recipes = await getRecipes();

  return (
    // TODO  maybe change to grid
    <div className="flex flex-wrap items-center justify-center gap-6 p-2 text-center md:p-4">
      {recipes.map((recipe) => (
        <>
          <RecipeCard key={recipe._id} recipe={recipe} />
          <RecipeCard key={recipe._id} recipe={recipe} />
          <RecipeCard key={recipe._id} recipe={recipe} />
          <RecipeCard key={recipe._id} recipe={recipe} />
        </>
      ))}
    </div>
  );
}
