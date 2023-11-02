import React from "react";
import { getSingleRecipe } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { recipe: string };
};

// TODO CREATE THIS PAGE !!!!!!!!!!!!!!!!!!!!!!
export default async function RecipePage({ params }: Props) {
  const id = params.recipe;
  const recipe = await getSingleRecipe(id);
  console.log(recipe.primaryImage);
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-center text-5xl font-semibold text-primary">
        {recipe.title}
      </h1>
      <div className="relative mx-auto flex h-[400px] w-full overflow-hidden md:w-3/4 xl:w-1/2">
        <Image
          src={recipe.primaryImage}
          alt={recipe.title}
          fill
          priority
          className="rounded-lg  object-cover"
        />
      </div>

      <PortableText value={recipe.description} />
      <h3>Ingredients: </h3>
      <ol>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.recipe_ingredient_id}>{ingredient.name}</li>
        ))}
      </ol>
      <h4>Difficulty: {recipe.difficulty}</h4>
      <h4>
        Expected cost: {recipe.price?.count} {recipe.price?.unit}
      </h4>
      <h4>
        Average time: {recipe.time?.count} {recipe.time?.unit}
      </h4>
    </div>
  );
}
