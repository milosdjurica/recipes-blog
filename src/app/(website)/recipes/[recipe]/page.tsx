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

  return (
    <div className="flex w-full flex-col items-center justify-center space-y-6 p-6">
      <h1 className="text-center text-5xl font-semibold text-primary">
        {recipe.title}
      </h1>
      <div className="relative flex h-[500px] w-full">
        <Image
          src={recipe.primaryImage}
          alt={recipe.title}
          fill
          priority
          className="rounded-lg border border-primary object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-around md:flex-row">
        <div>
          {/* // TODO put range GREEN YELLOW RED -> easy/medium/hard */}
          <h2>Difficulty: {recipe.difficulty}</h2>
        </div>
        <h2>
          Expected cost: {recipe.price?.count} {recipe.price?.unit}
        </h2>
        <div>
          {/* // TODO add time icon */}
          <h2>
            Average time: {recipe.time?.count} {recipe.time?.unit}
          </h2>
        </div>
      </div>

      <div className="space-y-4 text-lg">
        <h2 className="text-2xl underline decoration-primary">Description</h2>
        <PortableText value={recipe.description} />
      </div>
      <h2 className="text-2xl underline decoration-primary">Ingredients</h2>
      <ol className="list-inside list-disc">
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient.recipe_ingredient_id}>{ingredient.name}</li>
        ))}
      </ol>

      {recipe.secondaryImage && (
        <Image
          src={recipe.secondaryImage.url}
          alt={recipe.secondaryImage.alt}
          width={300}
          height={300}
        />
      )}

      <div className="space-y-4 text-lg">
        <h2 className="text-2xl underline decoration-primary">Instructions</h2>
        <PortableText value={recipe.instructions} />
      </div>
    </div>
  );
}
