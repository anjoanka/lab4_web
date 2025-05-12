import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext.jsx';
import { WishlistProvider } from './context/WishlistContext.jsx';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Products from './pages/Products';
import Promotions from './pages/Promotions';
import About from './pages/About';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup'; 
import Wishlist from './pages/WishList.jsx';
import './App.css';

const App = () => {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/products" element={<Products />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} /> {/* Додано */}
              <Route path="/signup" element={<Signup />} /> {/* Додано */}
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </Router>
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
};

export default App;