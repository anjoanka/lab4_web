import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ id, name, price, image }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  const { currentUser } = useAuth();

  const handleAddToCart = () => {
    // Просто додаємо один товар при кожному кліку
    addToCart({ id, name, price, image, quantity: 1 });
  };

  const handleWishlistClick = () => {
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, price, image });
    }
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <div className="product-actions">
        <button 
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        {currentUser && (
          <button
            className={`wishlist-btn ${isInWishlist(id) ? 'active' : ''}`}
            onClick={handleWishlistClick}
          >
            {isInWishlist(id) ? '❤️' : '♡'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;