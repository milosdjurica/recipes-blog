import { getRecipes } from "@/sanity/sanity.utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { revalidatePath } from "next/cache";
import { cormorant } from "../layout";

export default async function RecipesPage() {
  revalidatePath("/recipes");

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
      <div className="mx-auto flex flex-col items-center space-y-20 bg-gray-100 py-10">
        <h1 className={`${cormorant.className} text-6xl font-semibold`}>
          Recipes
        </h1>
        <p className="w-[90%] md:w-2/3 lg:w-1/2">
          Recipes are the heart and soul of The Culinary Fair - So, whether
          you&#39;re a seasoned home chef or just starting your culinary
          journey, The Culinary Fair&#39;s recipes is your one-stop destination
          for culinary inspo. Let our recipes guide you through cooking
          exquisite meals that excite your desire and impress your family and
          friends.
        </p>
      </div>
      {/* // TODO ADD NEXT PAGE BUTTON */}
      <div className="mx-auto flex flex-wrap items-center justify-around">
        {recipes.map((recipe) => (
          <Link
            href={`/recipes/${recipe._id}`}
            key={recipe._id}
            className="space-y-3 p-4"
          >
            <div className="relative h-[350px] w-[350px] ">
              <Image
                src={recipe.primaryImage}
                alt="opa"
                fill
                className="object-cover"
              />
            </div>
            <h3>{recipe.title}</h3>
            <h6>{changeDate(recipe._createdAt)}</h6>
          </Link>
        ))}
      </div>
    </div>
  );
}
