import AllRecipesComponent from "@/src/components/AllRecipesComponent";
import { revalidatePath } from "next/cache";
import { cormorant } from "./layout";

export default async function Home() {
  revalidatePath("/");

  return (
    <main>
      <div className="flex flex-col items-center py-10">
        <h1 className="mb-20 text-center text-5xl font-bold">
          The Culinary Fair
        </h1>

        {/* // TODO Sorting picker COMPONENT so everything stays on server side
            // TODO  and then save it to the zustand state */}

        {/* <Separator  /> */}
        <h2 className={`${cormorant.className}  text-4xl`}>Latest posts</h2>
        {/* <Separator /> */}
        <AllRecipesComponent />
        {/* <AllRecipesComponent /> */}
      </div>
    </main>
  );
}
