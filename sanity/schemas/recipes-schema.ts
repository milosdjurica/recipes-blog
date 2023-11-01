const recipe = {
  name: "recipe",
  type: "document",
  title: "Recipes",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      required: true,
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "ingredients",
      type: "array",
      of: [{ type: "ingredient" }],
    },
    {
      name: "process",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "primaryImage",
      type: "image",
      title: "Primary Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "secondaryImage",
      type: "image",
      title: "Secondary Image",
      options: {
        hotspot: true,
      },
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
      type: "string",
      title: "Difficulty",
      options: {
        list: ["Easy", "Medium", "Hard"],
      },
    },
  ],
};
