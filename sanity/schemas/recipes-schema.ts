const recipe = {
  name: "recipe",
  type: "document",
  title: "Recipes",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "primaryImage",
      title: "Primary Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [{ type: "reference", to: [{ type: "ingredient" }] }],
    },
    {
      name: "instructions",
      Title: "Instructions",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "secondaryImage",
      title: "Secondary Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "difficulty",
      title: "Difficulty",
      type: "string",
      options: {
        list: ["Easy", "Medium", "Hard"],
      },
    },
  ],
};

export default recipe;
