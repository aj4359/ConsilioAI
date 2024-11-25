"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModal = PaymentModal;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var stripe_js_1 = require("@stripe/stripe-js");
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var stripePromise = (0, stripe_js_1.loadStripe)('your_publishable_key'); // Replace with your Stripe key
function CheckoutForm(_a) {
    var _this = this;
    var onClose = _a.onClose;
    var stripe = (0, react_stripe_js_1.useStripe)();
    var elements = (0, react_stripe_js_1.useElements)();
    var handleSubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var _a, error, paymentMethod;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    event.preventDefault();
                    if (!stripe || !elements)
                        return [2 /*return*/];
                    return [4 /*yield*/, stripe.createPaymentMethod({
                            type: 'card',
                            card: elements.getElement(react_stripe_js_1.CardElement),
                        })];
                case 1:
                    _a = _b.sent(), error = _a.error, paymentMethod = _a.paymentMethod;
                    if (error) {
                        console.log('[error]', error);
                    }
                    else {
                        console.log('[PaymentMethod]', paymentMethod);
                        // Here you would typically send the paymentMethod.id to your server
                        // to complete the payment
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (<form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-slate-50 p-4 rounded-lg">
        <react_stripe_js_1.CardElement options={{
            style: {
                base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                },
                invalid: {
                    color: '#9e2146',
                },
            },
        }}/>
      </div>
      
      <button type="submit" disabled={!stripe} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
        Pay $9.99/month
      </button>
    </form>);
}
function PaymentModal(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    return (<framer_motion_1.AnimatePresence>
      {isOpen && (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <framer_motion_1.motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white rounded-2xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Upgrade to Premium</h2>
              <button onClick={onClose} className="text-slate-500 hover:text-slate-700">
                <lucide_react_1.X className="h-5 w-5"/>
              </button>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <lucide_react_1.Shield className="h-5 w-5 text-indigo-600"/>
                <span className="font-medium">Premium Features Include:</span>
              </div>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li>✓ Personalized AI Financial Advice</li>
                <li>✓ Advanced Budget Planning</li>
                <li>✓ Investment Recommendations</li>
                <li>✓ Unlimited AI Chat Support</li>
              </ul>
            </div>

            <react_stripe_js_1.Elements stripe={stripePromise}>
              <CheckoutForm onClose={onClose}/>
            </react_stripe_js_1.Elements>

            <p className="text-xs text-slate-500 text-center mt-4">
              Secure payment powered by Stripe. Cancel anytime.
            </p>
          </framer_motion_1.motion.div>
        </framer_motion_1.motion.div>)}
    </framer_motion_1.AnimatePresence>);
}
