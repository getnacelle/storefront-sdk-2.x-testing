# Nacelle Storefront SDK 2.x demo

This [Vite](https://vitejs.dev) project demonstrates [`@nacelle/storefront-sdk@2.x`](https://docs.nacelle.com/docs/storefront-sdk-major-version-2) combined with [GraphQL Codegen](https://the-guild.dev/graphql/codegen)'s [TypeScript Operations](https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-operations) and [`TypedDocumentNode`](https://the-guild.dev/graphql/codegen/plugins/typescript/typed-document-node) plugins.

## Getting started

1. `npm i` to install dependencies
2. Create a `.env` file containing:

```
VITE_NACELLE_STOREFRONT_ENDPOINT='<your-nacelle-storefront-endpoint>'
```

3. `npm run dev`
4. Add new fields to the `Products` query in `src/queries/products.ts`, or add some new queries in `src/queries`
5. Enjoy typesafe responses from the Storefront SDK 2.x's `query` method 😻
