import { revalidatePath } from "next/cache";
import { getRecipes } from "../../../sanity/sanity.utils";
import Image from "next/image";

export default async function Home() {
  revalidatePath("/");

  const recipes = await getRecipes();

  return (
    <div>
      <h1 className="p-4 pt-2">Recipes site</h1>
      <div className="flex justify-evenly">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="">
            <p>Title: {recipe.title}</p>
            <p>Slug: {recipe.slug}</p>
            <p>Difficulty: {recipe.difficulty}</p>
            <p>
              Created at: {new Date(recipe._createdAt).toLocaleDateString()}
            </p>
            <p>{recipe._id}</p>
            {/* <p>Description {recipe.description}</p> */}
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
          </div>
        ))}
      </div>
    </div>
  );
}
