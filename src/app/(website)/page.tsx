import { revalidatePath } from "next/cache";
import { getRecipes } from "../../../sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { ThemeButton } from "@/components/ThemeButton";

export default async function Home() {
  revalidatePath("/");

  const recipes = await getRecipes();

  return (
    <div>
      <h1 className="p-4 pt-2">Find great Balkan recipes</h1>
      <ThemeButton />
      <div className="flex justify-evenly">
        {/* // TODO double card to show all things that i need??? */}
        {recipes.map((recipe) => (
          <Link
            href={`/recipes/${recipe.slug}`}
            key={recipe._id}
            className="border border-red-500 p-2"
          >
            <p>Title: {recipe.title}</p>
            <p>Difficulty: {recipe.difficulty}</p>
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
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
