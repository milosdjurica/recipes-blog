import React from "react";

import { getLast8 } from "@/sanity/sanity.utils";
import RecipeCard from "./RecipeCard";

export default async function AllRecipesComponent() {
  const recipes = await getLast8();

  return (
    // TODO  maybe change to grid
    <div className="flex flex-wrap items-center justify-center gap-6 text-center 2xl:grid 2xl:grid-cols-4 ">
      {recipes.map((recipe) => (
        <>
          <RecipeCard key={recipe._id} recipe={recipe} />
        </>
      ))}
    </div>
  );
}
