import { products } from '../data/products.js';

export async function getProducts() {
  await new Promise((resolve) => window.setTimeout(resolve, 250));
  return products;
}
