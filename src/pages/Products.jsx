import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/productsService';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
  const [originalProducts, setOriginalProducts] = useState([]); // Зберігаємо оригінальний список
  const [displayedProducts, setDisplayedProducts] = useState([]); // Продукти для відображення (з сортуванням)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getAllProducts();
        setOriginalProducts(data);
        setDisplayedProducts(data); // Спочатку відображаємо без сортування
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  // Ефект для сортування при зміні опції сортування або оригінальних даних
  useEffect(() => {
    let sorted = [...originalProducts];
    
    if (sortOption === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating-desc') {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    
    setDisplayedProducts(sorted);
  }, [sortOption, originalProducts]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

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
          {displayedProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image} // Припускаючи, що image тепер це URL з Firebase
              rating={product.rating}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Products;