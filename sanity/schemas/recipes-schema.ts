const recipe = {
  name: "recipe",
  type: "document",
  title: "Recipes",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) =>
        Rule.required()
          .max(30)
          .error("Title is required and can not be longer than 30 characters!"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "time",
      title: "Time",
      type: "object",
      fields: [
        {
          name: "count",
          title: "Count",
          type: "number",
          // validation: (Rule: any) => Rule.required().min(0),
        },
        {
          name: "unit",
          title: "Unit",
          type: "string",
          options: {
            list: ["seconds", "minutes", "hours", "days"],
          },
          // validation: (Rule: any) => Rule.required(),
        },
      ],
      // validation: (Rule: any) => Rule.required(),
    },
    {
      name: "descriptionHP",
      title: "Description Home Page",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: any) =>
        Rule.required().error("Please give some basic description!"),
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: any) =>
        Rule.required().error("Please give some basic description!"),
    },
    {
      name: "primaryImage",
      title: "Primary Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule: any) =>
        Rule.required().error("Primary picture is mandatory!"),
    },
    {
      name: "ingredients",
      title: "Ingredients",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Ingredient Name",
              type: "string",
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "string",
            },
            {
              name: "unit",
              title: "Unit",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule: any) =>
        Rule.required().error("Recipe must have some ingredients!"),
    },
    {
      name: "instructions",
      Title: "Instructions",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule: any) =>
        Rule.required().error(
          "Please give instructions how to prepare this dish!",
        ),
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
      // validation: (Rule: any) =>
      // Rule.required().error("Please select difficulty!"),
    },
  ],
};

export default recipe;
