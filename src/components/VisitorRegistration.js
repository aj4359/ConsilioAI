"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorRegistration = VisitorRegistration;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var useAppStore_1 = require("../store/useAppStore");
function VisitorRegistration(_a) {
    var onClose = _a.onClose;
    var _b = (0, react_1.useState)({
        name: '',
        email: '',
        phone: '',
        socialMedia: ''
    }), formData = _b[0], setFormData = _b[1];
    var _c = (0, react_1.useState)(false), isSubmitted = _c[0], setIsSubmitted = _c[1];
    var setVisitorRegistered = (0, useAppStore_1.useAppStore)(function (state) { return state.setVisitorRegistered; });
    var handleSubmit = function (e) {
        e.preventDefault();
        // Store visitor data
        localStorage.setItem('visitorData', JSON.stringify(formData));
        setVisitorRegistered(true);
        setIsSubmitted(true);
        onClose === null || onClose === void 0 ? void 0 : onClose();
    };
    if (isSubmitted) {
        return null;
    }
    return (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <framer_motion_1.motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-slate-800 rounded-xl p-6 max-w-md w-full relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10"/>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500"/>

        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Welcome to Consilio-AI</h2>
            {onClose && (<button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                <lucide_react_1.X className="h-5 w-5"/>
              </button>)}
          </div>
          
          <p className="text-slate-300 mb-6">
            Register to access our free financial tools and AI-powered insights.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <lucide_react_1.User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500"/>
                <input required type="text" value={formData.name} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { name: e.target.value })); }} className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent" placeholder="John Doe"/>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <lucide_react_1.Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500"/>
                <input required type="email" value={formData.email} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { email: e.target.value })); }} className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent" placeholder="you@example.com"/>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <lucide_react_1.Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500"/>
                <input required type="tel" value={formData.phone} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { phone: e.target.value })); }} className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent" placeholder="+1 (555) 000-0000"/>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                LinkedIn/Twitter (Optional)
              </label>
              <input type="text" value={formData.socialMedia} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { socialMedia: e.target.value })); }} className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent" placeholder="https://linkedin.com/in/username"/>
            </div>

            <div className="flex items-start mt-6">
              <div className="flex items-center h-5">
                <input required type="checkbox" className="h-4 w-4 rounded border-slate-600 text-cyan-400 focus:ring-cyan-400"/>
              </div>
              <label className="ml-2 block text-sm text-slate-300">
                I agree to receive financial insights and updates from Consilio-AI
              </label>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-2 rounded-lg hover:from-cyan-400 hover:to-indigo-400 transition-colors">
              Get Started
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-400 text-center">
            Your data is encrypted and secure. View our{' '}
            <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </framer_motion_1.motion.div>
    </framer_motion_1.motion.div>);
}
