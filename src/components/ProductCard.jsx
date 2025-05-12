import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';

const ProductCard = ({ id, name, price, image, rating }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  const { currentUser } = useAuth();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 });
  };

  const handleWishlistClick = () => {
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, name, price, image });
    }
  };

  // Просте відображення рейтингу (можна замінити на зірочки)
  const renderRating = () => {
    if (!rating) return null;
    return <div className="product-rating">Rating: {rating.toFixed(1)}</div>;
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      {renderRating()}
      <p>${price.toFixed(2)}</p>
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