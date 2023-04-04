import React from 'react';
import Product from './Product';

function ProductList({ products }) {
  return (
    <section>
      <h2>Featured Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProductList;