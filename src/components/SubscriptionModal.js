"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModal = SubscriptionModal;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var PayPalButton_1 = require("./PayPalButton");
function SubscriptionModal(_a) {
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

            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <lucide_react_1.Shield className="h-12 w-12 text-indigo-600"/>
              </div>
              <div className="text-center mb-6">
                <p className="text-3xl font-bold text-slate-800">$9.99<span className="text-lg text-slate-600">/month</span></p>
                <p className="text-slate-600">Cancel anytime</p>
              </div>
              <ul className="space-y-3">
                {[
                "AI-Powered Financial Advice",
                "Advanced Portfolio Analysis",
                "Tax Optimization Strategies",
                "Expert Webinars Access",
                "Priority 24/7 Support",
                "Private Investment Community"
            ].map(function (feature, index) { return (<li key={index} className="flex items-center space-x-2">
                    <lucide_react_1.Check className="h-5 w-5 text-green-500 flex-shrink-0"/>
                    <span className="text-slate-700">{feature}</span>
                  </li>); })}
              </ul>
            </div>

            <div className="space-y-4">
              <PayPalButton_1.PayPalButton />
              <p className="text-xs text-slate-500 text-center">
                By subscribing, you agree to our terms of service and privacy policy
              </p>
            </div>
          </framer_motion_1.motion.div>
        </framer_motion_1.motion.div>)}
    </framer_motion_1.AnimatePresence>);
}
