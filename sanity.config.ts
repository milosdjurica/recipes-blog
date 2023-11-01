import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "",
  title: "Recipes blog sanity",
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION ?? "",
  basePath: "/studio",
  // !remove vision tool on production
  plugins: [deskTool(), visionTool()],
});

export default config;
