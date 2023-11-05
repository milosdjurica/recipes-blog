import { getRecipes } from "@/sanity/sanity.utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="my-20 space-y-40 text-center">
      <div className="mx-auto mt-20 flex flex-col items-center space-y-20  md:w-2/3">
        <h1 className="text-5xl font-semibold">Recipes</h1>
        <p>
          Recipes are the heart and soul of The Culinary Fair - So, whether
          you&#39;re a seasoned home chef or just starting your culinary
          journey, The Culinary Fair&#39;s recipes is your one-stop destination
          for culinary inspo. Let our recipes guide you through cooking
          exquisite meals that excite your desire and impress your family and
          friends.
        </p>
      </div>
      <div className="mx-auto flex flex-wrap items-center justify-around">
        {recipes.map((recipe) => (
          <Link href={recipe._id} key={recipe._id} className="space-y-5 p-4">
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
          </Link>
        ))}
        {recipes.map((recipe) => (
          <div key={recipe._id} className="space-y-5 p-4">
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
