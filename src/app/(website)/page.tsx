import AllRecipesComponent from "@/components/AllRecipesComponent";
import { revalidatePath } from "next/cache";

export default async function Home() {
  revalidatePath("/");

  return (
    <main>
      <div className="flex flex-col items-center space-y-20">
        <h1 className="text-primary text-5xl font-bold">
          Great Balkan recipes
        </h1>
        <AllRecipesComponent />
      </div>
    </main>
  );
}
