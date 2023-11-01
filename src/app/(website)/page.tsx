import { revalidatePath } from "next/cache";
import { getRecipes } from "../../../sanity/sanity.utils";

export default async function Home() {
  revalidatePath("/");

  const recipes = await getRecipes();

  return (
    <div>
      <h1 className="p-4 pt-2">Recipes site</h1>
      {recipes.map((recipe) => (
        <div key={recipe._id}>
          <p>{recipe.title}</p>
          <p>{recipe.slug}</p>
        </div>
      ))}
    </div>
  );
}
