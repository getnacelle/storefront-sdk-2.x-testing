// @ts-check

/** @type {import("@graphql-codegen/cli").CodegenConfig} */
const config = {
  schema: process.env.VITE_NACELLE_STOREFRONT_ENDPOINT,
  documents: ['src/queries/*.ts'], // files that contain queries prefixed by /* GraphQL */
  emitLegacyCommonJSImports: false,
  generates: {
    './src/generated/graphql-operations.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
  },
};

module.exports = config;
