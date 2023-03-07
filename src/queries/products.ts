export const products = /* GraphQL */ `
  query Products($filter: ProductFilterInput) {
    allProducts(filter: $filter) {
      edges {
        node {
          nacelleEntryId
          content {
            handle
            title
            description
          }
        }
      }
    }
  }
`;
