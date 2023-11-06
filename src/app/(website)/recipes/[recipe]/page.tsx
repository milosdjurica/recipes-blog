import React from "react";
import { getSingleRecipe } from "@/sanity/sanity.utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { cormorant } from "../../layout";

type Props = {
  params: { recipe: string };
};

// TODO CREATE THIS PAGE !!!!!!!!!!!!!!!!!!!!!!
export default async function RecipePage({ params }: Props) {
  const id = params.recipe;
  const recipe = await getSingleRecipe(id);

  return (
    <div className="mx-auto flex  w-full flex-col items-center justify-center space-y-10 p-6 md:w-2/3">
      <h1
        className={`${cormorant.className} text-center text-5xl font-semibold`}
      >
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
      <div
        className={`${cormorant.className} flex w-full flex-col items-center justify-evenly md:flex-row`}
      >
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
        <PortableText value={recipe.description} />
      </div>
      <div className="border border-black  px-6 py-4">
        <h2 className="text-2xl underline decoration-primary">Ingredients</h2>
        <ol className="list-inside list-disc">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.recipe_ingredient_id}>{ingredient.name}</li>
          ))}
        </ol>
      </div>
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
