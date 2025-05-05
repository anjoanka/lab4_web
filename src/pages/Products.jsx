import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

import product1Image from '../assets/images/products/product1.png';
import product2Image from '../assets/images/products/product2.png';
import product3Image from '../assets/images/products/product3.png';
import product4Image from '../assets/images/products/product4.png';
import product5Image from '../assets/images/products/product5.png';
import product6Image from '../assets/images/products/product6.png';
import product7Image from '../assets/images/products/product7.png';
import product8Image from '../assets/images/products/product8.png';
import product9Image from '../assets/images/products/product9.png';
import product10Image from '../assets/images/products/product10.png';
import product11Image from '../assets/images/products/product11.png';
import product12Image from '../assets/images/products/product12.png';

const initialProducts = [
  { id: 1, image: product1Image, name: 'Running Top', price: 19, rating: 4.5 },
  { id: 2, image: product2Image, name: 'Training Shorts', price: 25, rating: 3.8 },
  { id: 3, image: product3Image, name: 'Yoga Pants', price: 15, rating: 4.2 },
  { id: 4, image: product4Image, name: 'Gym T-Shirt', price: 22, rating: 4.0 },
  { id: 5, image: product5Image, name: 'Sports Bra', price: 28, rating: 4.9 },
  { id: 6, image: product6Image, name: 'Running Shoes', price: 18, rating: 3.5 },
  { id: 7, image: product7Image, name: 'Fitness Gloves', price: 24, rating: 4.4 },
  { id: 8, image: product8Image, name: 'Workout Headband', price: 20, rating: 4.7 },
  { id: 9, image: product9Image, name: 'Training Socks', price: 21, rating: 4.1 },
  { id: 10, image: product10Image, name: 'Sports Bag', price: 17, rating: 4.3 },
  { id: 11, image: product11Image, name: 'Water Bottle', price: 26, rating: 3.9 },
  { id: 12, image: product12Image, name: 'Jump Rope', price: 23, rating: 4.6 },
];

const Products = () => {
  const [sortOption, setSortOption] = useState('');
  const [products, setProducts] = useState(initialProducts);

  const handleSortChange = (e) => {
    const option = e.target.value;
    setSortOption(option);

    let sorted = [...initialProducts];
    if (option === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (option === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (option === 'rating-desc') {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    setProducts(sorted);
  };

  return (
    <>
      <Header />
      <section id="products">
        <p className="products-title">All Products</p>

        <div className="filters" style={{ marginBottom: '20px', textAlign: 'right', padding: '0 20px' }}>
          <label htmlFor="sort">Sort by: </label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="">-- Select --</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>
        </div>

        <div className="products-cards">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;