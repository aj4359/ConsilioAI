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
exports.useSubscription = void 0;
var zustand_1 = require("zustand");
exports.useSubscription = (0, zustand_1.create)(function (set) { return ({
    isPremium: false,
    features: {
        alerts: false,
        portfolioAnalysis: false,
        aiAdvice: false,
        taxOptimization: false,
    },
    setFeature: function (feature, value) {
        return set(function (state) {
            var _a;
            return ({
                features: __assign(__assign({}, state.features), (_a = {}, _a[feature] = value, _a)),
            });
        });
    },
    upgradeToPremuim: function () {
        return set({
            isPremium: true,
            features: {
                alerts: true,
                portfolioAnalysis: true,
                aiAdvice: true,
                taxOptimization: true,
            },
        });
    },
    downgradeToBasic: function () {
        return set({
            isPremium: false,
            features: {
                alerts: false,
                portfolioAnalysis: false,
                aiAdvice: false,
                taxOptimization: false,
            },
        });
    },
}); });
