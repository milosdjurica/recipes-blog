const ingredient = {
  name: "ingredient",
  type: "document",
  title: "Ingredient",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required().max(30),
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: "unit",
      title: "Unit",
      type: "string",
      validation: (Rule: any) => Rule.required().min(0),
    },
  ],
};

export default ingredient;
