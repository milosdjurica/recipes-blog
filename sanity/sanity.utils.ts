import { Last8Type, PickRecipeType, Recipe } from "@/src/types/recipe.type";
import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION ?? "",
});

// ! Doesnt return all, so give type getAllRecipesResponse with Omit<Recipe> or Pick<Recipe>
export async function getRecipes(): Promise<PickRecipeType[]> {
  return client.fetch(
    groq`*[_type=="recipe"]{
      _id,
      _createdAt,
      title,
      "primaryImage": primaryImage.asset->url,
    }`,
  );
}

export async function getLast8(): Promise<Last8Type[]> {
  return client.fetch(
    groq`*[_type=="recipe"] | order(_createdAt desc)[0..7]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "primaryImage": primaryImage.asset->url,
      descriptionHP,
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
      "ingredients": ingredients[]{
        name,
        quantity,
        unit
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
export async function getIngredients(): Promise<string[]> {
  return client.fetch(groq`*[_type=="recipe"].ingredients[*].name | unique()`);
}

// ! Get recipes with ingredient
// export async function getRecipesWithIngredient(
//   ingredientName: string,
// ): Promise<Recipe[]> {
//   return client.fetch(
//     groq`*[_type=="recipe" && *[_type=="ingredient" && name == $ingredientName]._id in ingredients[]._ref]{
//       _id,
//       _createdAt,
//       title,
//       "slug": slug.current,
//       "primaryImage": primaryImage.asset->url,
//       description,
//       time,
//       ingredients,
//       difficulty,
//     }`,
//     { ingredientName },
//   );
// }
