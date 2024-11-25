"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSubscriptionStore = void 0;
var zustand_1 = require("zustand");
var middleware_1 = require("zustand/middleware");
exports.useSubscriptionStore = (0, zustand_1.create)()((0, middleware_1.persist)(function (set) { return ({
    tier: 'basic',
    referralCode: null,
    referredBy: null,
    referralCount: 0,
    setTier: function (tier) { return set({ tier: tier }); },
    setReferralCode: function (code) { return set({ referralCode: code }); },
    setReferredBy: function (code) { return set({ referredBy: code }); },
    incrementReferralCount: function () {
        return set(function (state) { return ({ referralCount: state.referralCount + 1 }); });
    },
}); }, {
    name: 'subscription-storage',
}));
