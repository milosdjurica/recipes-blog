import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";

import { RecipeIngredient } from "../types/recipe.type";

type IngredientsDialogProps = {
  description: PortableTextBlock[];
  ingredients: RecipeIngredient[];
  slug: string;
};

export function IngredientsDialog({
  description,
  ingredients,
  slug,
}: IngredientsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0">
          See ingredients
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="space-y-4">
          <DialogTitle>List of ingredients</DialogTitle>
          <DialogDescription>
            <PortableText value={description} />
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            {ingredients.map((ingredient) => (
              <p key={ingredient.recipe_ingredient_id}>{ingredient.name}</p>
            ))}
            {ingredients.map((ingredient) => (
              <p key={ingredient.recipe_ingredient_id}>{ingredient.name}</p>
            ))}
            {ingredients.map((ingredient) => (
              <p key={ingredient.recipe_ingredient_id}>{ingredient.name}</p>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">
            <Link href={`recipes/${slug}`}>See recipe</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
