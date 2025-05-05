import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ id, name, price, image }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ id, name, price });
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button className="checkout-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>

  );
};

export default ProductCard;
