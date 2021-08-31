module.exports = {
  client: {
    service: {
      name: 'server-api-schema',
      localSchemaFile: './schema.graphql',
    },
    includes: ['./components/**/*.{ts,tsx,js,jsx,graphql}'],
  },
};
