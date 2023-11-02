import { Recipe } from "@/src/types/recipe.type";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION ?? "",
});

export async function getRecipes(): Promise<Recipe[]> {
  return client.fetch(
    groq`*[_type=="recipe"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "primaryImage": primaryImage.asset->url,
            description,
            time,
            price,
            "ingredients": *[_type=="ingredient" && _id in ^.ingredients[]._ref]{
              "recipe_ingredient_id": _id,
              name,
            },
            difficulty
          }`,
    // _updatedAt,
    // instructions,
    // "secondaryImage": {
    //     "url": secondaryImage.asset->url,
    //     "alt": secondaryImage.alt
    // },
  );

  // console.log(recipes[2]);
  // return recipes;
}

// TODO
export async function getSingleRecipe() {}
export async function getIngredients() {}
