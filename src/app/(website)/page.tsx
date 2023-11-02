import AllRecipesComponent from "@/components/AllRecipesComponent";
import { revalidatePath } from "next/cache";

export default async function Home() {
  revalidatePath("/");

  return (
    <main>
      <div className="flex flex-col items-center space-y-20 py-10">
        <h1 className="text-5xl font-bold text-primary">
          Great Balkan recipes
        </h1>
        {/* // TODO Sorting picker COMPONENT so everything stays on server side
            // TODO  and then save it to the zustand state */}
        <AllRecipesComponent />
        {/* <AllRecipesComponent /> */}
      </div>
    </main>
  );
}
