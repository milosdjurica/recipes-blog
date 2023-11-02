import React from "react";
import { getRecipes } from "../../sanity/sanity.utils";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default async function AllRecipesComponent() {
  const recipes = await getRecipes();

  return (
    // TODO STYLE THIS COMPONENT PROPERLY !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    <div className="flex flex-wrap items-center justify-between gap-10">
      {/* // TODO  maybe change to grid if cant line up correctly */}
      {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> */}

      {/* // TODO tabs component to show all things that i need??? */}
      {recipes.map((recipe) => (
        <Link
          // ! Maybe will be errors if have 2 recipes with same name, so maybe put recipe._id here
          // ! or combine with _createdAt or something
          href={`/recipes/${recipe.slug}`}
          key={recipe._id}
          className="border-primary border p-2"
        >
          <h3 className="text-2xl font-bold">Title: {recipe.title}</h3>
          {/* // TODO add progress component from shadcn?? */}
          <p className=""> {recipe.difficulty}</p>
          {/* Desc:
          <PortableText value={recipe.description} /> */}
          <p>
            {recipe.time?.count}
            {recipe.time?.unit}
          </p>
          <p>
            {recipe.price?.count}
            {recipe.price?.unit}
          </p>
          <div>
            Ingredients:
            {recipe.ingredients.map((el) => (
              <h6 key={el.recipe_ingredient_id}>{el.name}</h6>
            ))}
          </div>
          <Image
            src={recipe.primaryImage}
            alt={recipe.title}
            width={200}
            height={150}
            className="border-primary border  object-contain"
          />
        </Link>
      ))}
    </div>
  );
}
