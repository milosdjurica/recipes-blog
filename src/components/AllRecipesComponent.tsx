import React from "react";
import Link from "next/link";
import Image from "next/image";

import { getRecipes } from "@/sanity/sanity.utils";
import { Button } from "./ui/button";
import { IngredientsDialog } from "./IngredientsDialog";

export default async function AllRecipesComponent() {
  const recipes = await getRecipes();

  return (
    // TODO  maybe change to grid
    <div className="flex flex-wrap items-center justify-center gap-10 p-10">
      {recipes.map((recipe) => (
        <div
          key={recipe._id}
          className="w-[350px] space-y-2 rounded-lg bg-secondary p-5
          shadow-md shadow-primary transition ease-in hover:scale-105"
        >
          <h3 className="text-2xl font-semibold">{recipe.title}</h3>
          <IngredientsDialog
            slug={recipe._id}
            description={recipe.description}
            ingredients={recipe.ingredients}
          />
          {/* // TODO maybe onClick image show whole image like dialog? */}
          <Image
            src={recipe.primaryImage}
            alt={recipe.title}
            width={200}
            height={150}
            // ! Check how to fix this with hotspot
            className="max-h-[200px] w-full rounded-md object-cover"
          />
          <div className="flex items-center justify-between">
            {/* // TODO add progress component to display how hard it is 
                // TODO and give color from green to yellow to red */}
            <h6 className=""> {recipe.difficulty}</h6>
            <h5>
              {recipe.time?.count} {recipe.time?.unit}
            </h5>
            <h6>
              {recipe.price?.count} {recipe.price?.unit}
            </h6>
          </div>
          <Button variant="default">
            {/* // ! maybe recipe.slug but it will have conflict if 2 recipes have same name */}
            <Link href={`recipes/${recipe._id}`}>See recipe</Link>
          </Button>
        </div>
      ))}
    </div>
  );
}
