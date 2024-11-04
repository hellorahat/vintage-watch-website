import React from 'react';
import { useCart } from '../utility/CartContext'; // Import useCart
import { useMediaQuery } from 'react-responsive';
import './Cart.css'; // Assuming you will create this CSS file

function Cart() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { cart, removeCart } = useCart(); // Get cart items and remove function

    return (
        <div className="cart-container">
            {isMobile ? (
                <MobileLayout cart={cart} removeCart={removeCart} />
            ) : (
                <DesktopLayout cart={cart} removeCart={removeCart} />
            )}
        </div>
    );
}

function MobileLayout({ cart, removeCart }) {
    return (
        <div className="mobile-cart">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.model} className="item-image" />
                                <div className="item-details">
                                    <h4>{item.brand} {item.model}</h4>
                                    <p>${item.price}</p>
                                    <button onClick={() => removeCart(item)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="checkout-section">
                        <h3>Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</h3>
                        <button className="checkout-button">Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}

function DesktopLayout({ cart, removeCart }) {
    return (
        <div className="desktop-cart">
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.model} className="item-image" />
                                <div className="item-details">
                                    <h4>{item.brand} {item.model}</h4>
                                    <p>${item.price}</p>
                                    <button onClick={() => removeCart(item)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="checkout-section">
                        <h3>Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</h3>
                        <button className="checkout-button">Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
