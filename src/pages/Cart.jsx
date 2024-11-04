import React from 'react';
import { useCart } from '../utility/CartContext'; 
import { useMediaQuery } from 'react-responsive';
import './Cart.css'; 

function Cart() {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const { cart, removeCart } = useCart(); 

    return (
        <>
            {isMobile ? (
                <MobileLayout cart={cart} removeCart={removeCart} />
            ) : (
                <DesktopLayout cart={cart} removeCart={removeCart} />
            )}
        </>
    );
}

function MobileLayout({ cart, removeCart }) {
    // Error Handling for mobile
    const totalPrice = cart.reduce((acc, item) => {
        const price = parseFloat(item.price); //check if price = number.
        return acc + (isNaN(price) ? 0 : price);
    }, 0).toFixed(2);

    return (
        <div className="cart-container mobile">
            <h1>Mobile Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.model} className="cart-image" />
                            <div className="cart-info">
                                <h4>{item.brand} {item.model}</h4>
                                <p className="cart-price">${item.price}</p>
                            </div>
                            <button className="remove-button" onClick={() => removeCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-summary">
                <h3>Total: ${totalPrice}</h3>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    );
}

function DesktopLayout({ cart, removeCart }) {
    //Error handling
    const totalPrice = cart.reduce((acc, item) => {
        const price = parseFloat(item.price); 
        return acc + (isNaN(price) ? 0 : price);
    }, 0).toFixed(2);

    return (
        <div className="cart-container desktop">
            <h1>Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="cart-list">
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.model} className="cart-image" />
                            <div className="cart-info">
                                <h4>{item.brand} {item.model}</h4>
                                <p className="cart-price">${item.price}</p>
                            </div>
                            <button className="remove-button" onClick={() => removeCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-summary">
                <h3>Total: ${totalPrice}</h3>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
