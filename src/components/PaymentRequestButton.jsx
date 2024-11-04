import React, { useEffect, useState } from 'react';
import { useStripe, PaymentRequestButtonElement } from '@stripe/react-stripe-js';

const PaymentRequestButton = ({ amount }) => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canMakePayment, setCanMakePayment] = useState(false);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: 'US', // Update to your country
        currency: 'usd', // Update to your currency
        total: {
          label: 'Total',
          amount: amount, // Use the passed amount
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then(result => {
        if (result) {
          setCanMakePayment(true);
          setPaymentRequest(pr);
        }
      });

      pr.on('paymentmethod', async (event) => {
        // Handle the payment method
        // e.g., create a payment intent on the backend and confirm the payment
        const response = await fetch('/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ paymentMethodId: event.paymentMethod.id }),
        });

        const paymentResult = await response.json();
        if (paymentResult.error) {
          event.complete('fail');
          // Handle error
        } else {
          event.complete('success');
          // Payment successful logic
          alert('Payment successful!');
        }
      });
    }
  }, [stripe, amount]); // Add amount to the dependency array

  return canMakePayment ? (
    <PaymentRequestButtonElement options={{ paymentRequest }} />
  ) : null;
};

export default PaymentRequestButton;
