import React, { useEffect, useState } from 'react';
import { useStripe, PaymentRequestButtonElement } from '@stripe/react-stripe-js';

const PaymentRequestButton = () => {
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
          amount: 5000, // Update with the total amount in cents
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
    }
  }, [stripe]);

  const handlePayment = async () => {
    if (!paymentRequest) return;

    paymentRequest.on('paymentmethod', async (event) => {
      // Handle the payment method
      // e.g., create a payment intent on the backend and confirm the payment
    });
  };

  return canMakePayment ? (
    <PaymentRequestButtonElement options={{ paymentRequest }} onClick={handlePayment} />
  ) : null;
};

export default PaymentRequestButton;
