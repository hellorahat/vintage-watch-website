import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      // Handle payment confirmation here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <br />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default CheckoutForm;
