import { StorefrontClient } from '@nacelle/storefront-sdk';
import { ProductsDocument } from './generated/graphql-operations.js';
import './style.css';

const client = new StorefrontClient({
  storefrontEndpoint: import.meta.env.VITE_NACELLE_STOREFRONT_ENDPOINT,
});

const app = document.querySelector<HTMLDivElement>('#app')!;
const title = document.createElement('h1');
title.innerText = 'Nacelle Storefront SDK 2.x Demo';
const results = document.createElement('pre');
app.append(title, results);

async function main() {
  const { data } = await client.query({ query: ProductsDocument });

  if (data) {
    results.innerText = JSON.stringify(data, null, 2);
  }
}

main();
