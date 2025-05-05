import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <>
    <Header />
    <section id="cart" className="cart">
      <h1 className="cart-title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li className="cart-item" key={index}>
                {/* Якщо є зображення, тоді можна вставити */}
                {/* <img src={item.image} alt={item.name} /> */}
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  {/* Кнопка видалення */}
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <button className="checkout-btn" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </section>
    <Footer />
  </>
  );
};

export default Cart;
