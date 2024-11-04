import React, { useEffect, useState } from "react";
import {
  useStripe,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

const PaymentRequestButton = ({ amount }) => {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canMakePayment, setCanMakePayment] = useState(false);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: "US",
        currency: "usd",
        total: {
          label: "Total",
          amount: amount,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then((result) => {
        if (result) {
          setCanMakePayment(true);
          setPaymentRequest(pr);
        }
      });

      pr.on("paymentmethod", async (event) => {
        const response = await fetch("/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ paymentMethodId: event.paymentMethod.id }),
        });

        const paymentResult = await response.json();
        if (paymentResult.error) {
          event.complete("fail");
        } else {
          event.complete("success");
          alert("Payment successful!");
        }
      });
    }
  }, [stripe, amount]);

  return canMakePayment ? (
    <PaymentRequestButtonElement options={{ paymentRequest }} />
  ) : null;
};

export default PaymentRequestButton;
