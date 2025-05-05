import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ShoppingCart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px' }}>
                {item.name} × {item.quantity} = ${item.price * item.quantity}
                <button
                  onClick={() => removeFromCart(item.name)}
                  style={{
                    marginLeft: '10px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '5px',
                    borderRadius: '3px',
                    cursor: 'pointer',
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button
            onClick={clearCart}
            style={{
              marginTop: '10px',
              backgroundColor: '#b28d63',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
