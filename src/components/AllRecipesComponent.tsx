import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

import { getRecipes } from "../../sanity/sanity.utils";
import { Button } from "./ui/button";

export default async function AllRecipesComponent() {
  const recipes = await getRecipes();

  return (
    // TODO  maybe change to flex
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {recipes.map((recipe) => (
        <Link
          key={recipe._id}
          // ! maybe will have conflict if 2 recipes have same name
          href={`/recipes/${recipe.slug}`}
          className="w-[350px] space-y-2 rounded-lg bg-secondary p-5
          shadow-md shadow-primary transition ease-in hover:scale-105"
        >
          <h3 className="text-2xl font-semibold">{recipe.title}</h3>
          {/* // TODO on See ingredients open popup or something to show all ingredients */}
          {/* // TODO scroll area/popover/hover card/dialog/sheet with description and click to see recipe?   */}
          <Button variant="link" className="p-0">
            See ingredients
          </Button>
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
        </Link>
      ))}
    </div>
  );
}

// <div className="h-[400px] w-[400px] space-y-4 rounded-lg bg-secondary p-2">
// <h3 className="text-xl font-semibold">{recipe.title}</h3>
// <p className=""> {recipe.difficulty}</p>
// <Button variant="link" className="p-0">
//   See ingredients
// </Button>
// <div className="">
//   <Image
//     src={recipe.primaryImage}
//     alt={recipe.title}
//     width={200}
//     height={150}
//     className="max-h-[200px] w-full border border-primary object-cover"
//   />
// </div>
