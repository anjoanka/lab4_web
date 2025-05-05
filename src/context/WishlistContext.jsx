import { createContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [wishlist, setWishlist] = useState([]);

  // Завантаження wishlist при вході
  useEffect(() => {
    if (currentUser?.uid) {
      const savedWishlist = localStorage.getItem(`wishlist_${currentUser.uid}`);
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    } else {
      setWishlist([]); // Якщо вийшли, wishlist пустий
    }
  }, [currentUser]);

  // Збереження wishlist при змінах
  useEffect(() => {
    if (currentUser?.uid && wishlist.length !== 0) {
      localStorage.setItem(`wishlist_${currentUser.uid}`, JSON.stringify(wishlist));
    }
  }, [wishlist, currentUser]);

  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};