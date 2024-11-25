"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayPalButton = PayPalButton;
var react_1 = require("react");
var react_paypal_js_1 = require("@paypal/react-paypal-js");
var useAuthStore_1 = require("../store/useAuthStore");
var PAYPAL_CLIENT_ID = 'your_paypal_client_id'; // Replace with your PayPal client ID
function PayPalButton() {
    var setPremium = (0, useAuthStore_1.useAuthStore)(function (state) { return state.setPremium; });
    var handleApprove = function (data, actions) {
        return actions.order.capture().then(function (details) {
            setPremium(true);
            // Here you would typically call your backend to record the subscription
            console.log('Transaction completed by ' + details.payer.name.given_name);
        });
    };
    return (<react_paypal_js_1.PayPalScriptProvider options={{
            "client-id": PAYPAL_CLIENT_ID,
            currency: "USD"
        }}>
      <react_paypal_js_1.PayPalButtons createOrder={function (data, actions) {
            return actions.order.create({
                purchase_units: [{
                        amount: {
                            value: "9.99",
                            currency_code: "USD"
                        },
                        description: "Consilio-AI Premium Monthly Subscription"
                    }]
            });
        }} onApprove={handleApprove} style={{ layout: "vertical" }}/>
    </react_paypal_js_1.PayPalScriptProvider>);
}
