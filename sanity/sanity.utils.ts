import { Recipe } from "@/types/recipe.type";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION ?? "",
});

export async function getRecipes(): Promise<Recipe[]> {
  // TODO -> transform ingredients to list of names instead of list of those ids!!!!
  // TODO -> or maybe  transform with another api call if cant do in 1 query
  // TODO -> and then transform data and return it like that
  const recipes: Recipe[] = await client.fetch(
    groq`*[_type=="recipe"]{
            _id,
            _createdAt,
            _updatedAt,
            title,
            "slug": slug.current,
            "primaryImage": primaryImage.asset->url,
            "secondaryImage": {
                "url": secondaryImage.asset->url,
                "alt": secondaryImage.alt
            },
            description,
            ingredients,
            instructions,
            difficulty
        }`,
  );

  console.log(recipes[0].ingredients);
  return recipes;
}

// TODO
export async function getSingleRecipe() {}
export async function getIngredients() {}
