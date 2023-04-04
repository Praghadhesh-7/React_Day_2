import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import ProductList from './components/ProductList';
function App() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: '/path/https://tse2.mm.bing.net/th?id=OIP.s9SFi5JBz9msehIzxoexzAHaHa&pid=Api&P=0/product-1.jpg',
      // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      name: 'Product 2',
      image: '/path/to/product-2.jpg',
      // description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      name: 'Product 3',
      image: '/path/to/product-3.jpg',
      // description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  return (
    <div>
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  );
}


export default App;