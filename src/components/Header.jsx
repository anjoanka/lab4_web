import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext'; // Додаємо імпорт
import { useAuth } from '../context/AuthContext';
import MenuIcon from './MenuIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext); // Додаємо wishlist
  const { currentUser, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/"><h1>Sportify</h1></Link>
        </div>
        <ul id="menuList" style={{ maxHeight: isMenuOpen ? '300px' : '0px', transition: 'max-height 0.5s ease' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/promotions">Promotions</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            {currentUser ? (
              <>
                <Link to="/profile">Profile</Link>
                <button onClick={logout}>Logout</button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
          <li>
            <Link className='cart-icon' to="/cart">🛒 Cart ({cartItems.length})</Link>
          </li>
          <li>
            {currentUser && <Link to="/wishlist">❤️ Wishlist ({wishlist.length})</Link>}
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <MenuIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;