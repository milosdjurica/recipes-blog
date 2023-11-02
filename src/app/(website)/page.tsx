import { revalidatePath } from "next/cache";
import { getRecipes } from "../../../sanity/sanity.utils";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

export default async function Home() {
  revalidatePath("/");

  const recipes = await getRecipes();

  return (
    <div>
      <h1 className="p-4 pt-2">Find great Balkan recipes</h1>
      <div className="flex justify-evenly">
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
            <div>
              Ingredients:
              {recipe.ingredients.map((el) => (
                // <p>Opa</p>
                <p key={el.recipe_ingredient_id}>{el.name}</p>
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
