module.exports = {
  client: {
    includes: ["src/**/*.ts"],
    name: "sdk",
    service: {
      localSchemaFile: "schema.graphql",
      name: "saleor",
    },
  },
};
