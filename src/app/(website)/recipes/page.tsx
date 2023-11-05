import { getRecipes } from "@/sanity/sanity.utils";
import React from "react";
import Image from "next/image";

export default async function RecipesPage() {
  const recipes = await getRecipes();

  function changeDate(date: Date) {
    const dateObject = new Date(date);
    const year = dateObject.getUTCFullYear();
    const month = dateObject.getMonth();
    const day = dateObject.getDate();

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="space-y-40 text-center">
      <div className="mx-auto mt-20 flex flex-col items-center space-y-20  md:w-2/3">
        <h1 className="text-5xl font-semibold">Recipes</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed
          distinctio dignissimos, consectetur eos voluptate magnam incidunt
          repellat adipisci officia magni porro doloribus praesentium maxime
          voluptatem! Tempore eius magni itaque.
        </p>
      </div>
      <div className="mx-auto flex flex-wrap items-center justify-around ">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="p-4">
            <div className="relative h-[400px] w-[300px]">
              <Image
                src={recipe.primaryImage}
                alt="opa"
                // width={300}
                // height={300}
                fill
              />
            </div>
            <h3>{recipe.title}</h3>
            <h6>{changeDate(recipe._createdAt)}</h6>
          </div>
        ))}
        {recipes.map((recipe) => (
          <div key={recipe._id} className="p-4">
            <div className="relative h-[400px] w-[300px]">
              <Image
                src={recipe.primaryImage}
                alt="opa"
                // width={300}
                // height={300}
                fill
              />
            </div>
            <h3>{recipe.title}</h3>
            <h6>{changeDate(recipe._createdAt)}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
