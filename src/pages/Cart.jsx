import React from "react";
import { useCart } from "../utility/CartContext";
import { useMediaQuery } from "react-responsive";
import "./Cart.css";
import CheckoutForm from "../components/CheckoutForm.jsx";
import PaymentRequestButton from "../components/PaymentRequestButton";
import { retrieveSource } from "../utility/retrieveSource.jsx";

function Cart() {
  return <DesktopLayout />;
}

function DesktopLayout() {
  const { cart, removeCart } = useCart();
  //Error handling
  const totalPrice = cart
    .reduce((acc, item) => {
      const price = parseFloat(item.price);
      return acc + (isNaN(price) ? 0 : price);
    }, 0)
    .toFixed(2);
  const totalPriceInCents = Math.round(totalPrice * 100);

  return (
    <div className="cart-container desktop">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img
                src={retrieveSource(item.image)}
                alt={item.model}
                className="cart-image"
              />
              <div className="cart-info">
                <h4>
                  {item.brand} {item.model}
                </h4>
                <p className="cart-price">${item.price}</p>
              </div>
              <button
                className="remove-button"
                onClick={() => removeCart(item)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <h3>Total: ${totalPrice}</h3>
        <br />
        <CheckoutForm />
        <br />
        <PaymentRequestButton amount={totalPriceInCents} />
      </div>
    </div>
  );
}

export default Cart;
