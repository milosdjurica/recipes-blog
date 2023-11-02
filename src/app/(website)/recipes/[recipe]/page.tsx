import React from "react";
import { getSingleRecipe } from "@/sanity/sanity.utils";

// TODO CREATE THIS PAGE !!!!!!!!!!!!!!!!!!!!!!
export default async function RecipePage() {
  const recipe = await getSingleRecipe();

  return (
    <div>
      <h2>Recipe here</h2>
    </div>
  );
}
