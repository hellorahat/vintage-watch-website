import React from "react";
import { useCart } from "../utility/CartContext";

const Cart = () => {
  const { cart, removeCart } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={item.image}
                alt={item.model}
                className="cart-item-image"
              />
              <div>
                <h5>{item.brand}</h5>
                <h6>{item.model}</h6>
                <p>${item.price}</p>
                <button onClick={() => removeCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
