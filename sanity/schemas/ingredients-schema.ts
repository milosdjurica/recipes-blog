const ingredient = {
  name: "ingredient",
  type: "document",
  title: "Ingredient",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      required: true,
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
    },
    {
      name: "unit",
      title: "Unit",
      type: "string",
    },
  ],
};

export default ingredient;
