import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useAuthStore } from '../store/useAuthStore';

const PAYPAL_CLIENT_ID = 'your_paypal_client_id'; // Replace with your PayPal client ID

export function PayPalButton() {
  const setPremium = useAuthStore((state) => state.setPremium);

  const handleApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      setPremium(true);
      // Here you would typically call your backend to record the subscription
      console.log('Transaction completed by ' + details.payer.name.given_name);
    });
  };

  return (
    <PayPalScriptProvider options={{ 
      "client-id": PAYPAL_CLIENT_ID,
      currency: "USD"
    }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: "9.99",
                currency_code: "USD"
              },
              description: "Consilio-AI Premium Monthly Subscription"
            }]
          });
        }}
        onApprove={handleApprove}
        style={{ layout: "vertical" }}
      />
    </PayPalScriptProvider>
  );
}