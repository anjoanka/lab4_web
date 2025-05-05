import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    removeFromWishlist(product.id); // Видаляємо з вішліста після додавання в кошик
  };

  return (
    <>
      <Header />
      <div className="wishlist-page">
        <h2>Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <p className="empty-message">Your wishlist is empty</p>
        ) : (
          <div className="wishlist-items">
            {wishlist.map(item => (
              <div key={item.id} className="wishlist-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="item-actions">
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Wishlist;