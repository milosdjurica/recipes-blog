import { Recipe } from "@/src/types/recipe.type";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION ?? "",
});

// ! Doesnt return all, so give type getAllRecipesResponse with Omit<Recipe> or Pick<Recipe>
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
      "ingredients": *[_type=="ingredient" && _id in ^.ingredients[]._ref]{
        "recipe_ingredient_id": _id,
        name,
        quantity,
        unit,
      },
      difficulty,
    }`,
  );
}

export async function getLast8(): Promise<Recipe[]> {
  return client.fetch(
    groq`*[_type=="recipe"] | order(_createdAt desc)[0..7]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "primaryImage": primaryImage.asset->url,
      descriptionHP,
      description,
      "ingredients": *[_type=="ingredient" && _id in ^.ingredients[]._ref]{
        "recipe_ingredient_id": _id,
        name,
        quantity,
        unit,
      },
      difficulty,
      }`,
  );
}

// TODO
// ! Doesnt return all, so give type getSingleRecipeResponse with Omit<Recipe>
export async function getSingleRecipe(id: string): Promise<Recipe> {
  return client.fetch(
    groq`*[_type=="recipe" && _id==$id][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "primaryImage": primaryImage.asset->url,
      description,
      time,
      "ingredients": *[_type=="ingredient" && _id in ^.ingredients[]._ref]{
        "recipe_ingredient_id": _id,
        name,
        quantity,
        unit,
      },
      difficulty,
        instructions,
        "secondaryImage": {
            "url": secondaryImage.asset->url,
            "alt": secondaryImage.alt
        },
    }`,
    { id },
  );
}

// TODO list all ingredients on page and then when select find recipe with those ingredients
export async function getIngredients() {}
