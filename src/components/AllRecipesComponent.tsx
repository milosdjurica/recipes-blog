import React from "react";

import { getRecipes } from "@/sanity/sanity.utils";
import RecipeCard from "./RecipeCard";

export default async function AllRecipesComponent() {
  const recipes = await getRecipes();

  return (
    // TODO  maybe change to grid
    <div className="flex flex-wrap items-center justify-center gap-6 text-center 2xl:grid 2xl:grid-cols-4 ">
      {recipes.map((recipe) => (
        <>
          {/* // ! Just get 8 latest created recipes */}
          <RecipeCard key={recipe._id} recipe={recipe} />
          <RecipeCard key={recipe._id} recipe={recipe} />
          <RecipeCard key={recipe._id} recipe={recipe} />
          <RecipeCard key={recipe._id} recipe={recipe} />
        </>
      ))}
    </div>
  );
}
