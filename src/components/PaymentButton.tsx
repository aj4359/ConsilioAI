import React from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useAuthStore } from '../store/useAuthStore';

// In Vite, environment variables are accessed via import.meta.env
const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'sb'; // 'sb' is PayPal's sandbox client ID

interface PaymentButtonProps {
  planPrice: string;
  planName: string;
}

export function PaymentButton({ planPrice, planName }: PaymentButtonProps) {
  const setPremium = useAuthStore((state) => state.setPremium);

  const handleApprove = async (data: any, actions: any) => {
    try {
      const details = await actions.order.capture();
      setPremium(true);
      // Here you would typically call your backend to:
      // 1. Verify the payment
      // 2. Activate the subscription
      // 3. Store payment details
      console.log('Transaction completed by ' + details.payer.name.given_name);
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <div className="w-full">
      <PayPalScriptProvider options={{ 
        "client-id": PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture"
      }}>
        <div className="bg-white rounded-lg p-4">
          <PayPalButtons
            style={{ 
              layout: "vertical",
              color: "blue",
              shape: "pill",
              label: "subscribe"
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: planPrice,
                    currency_code: "USD"
                  },
                  description: `Consilio-AI ${planName} Subscription`
                }]
              });
            }}
            onApprove={handleApprove}
          />
        </div>
      </PayPalScriptProvider>
    </div>
  );
}