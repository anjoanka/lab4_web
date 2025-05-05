import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [cartItems, setCartItems] = useState([]);

  // Завантаження кошика при вході або оновленні сторінки
  useEffect(() => {
    if (currentUser?.uid) {
      const savedCart = localStorage.getItem(`cart_${currentUser.uid}`);
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } else {
      setCartItems([]); // Якщо вийшли, кошик пустий
    }
  }, [currentUser]); // Залежність від currentUser

  // Збереження кошика при змінах (з затримкою)
  useEffect(() => {
    if (currentUser?.uid && cartItems.length !== 0) {
      localStorage.setItem(`cart_${currentUser.uid}`, JSON.stringify(cartItems));
    }
  }, [cartItems, currentUser]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};