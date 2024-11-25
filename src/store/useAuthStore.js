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
exports.useAuthStore = void 0;
var zustand_1 = require("zustand");
var middleware_1 = require("zustand/middleware");
exports.useAuthStore = (0, zustand_1.create)()((0, middleware_1.persist)(function (set) { return ({
    token: null,
    user: null,
    setAuth: function (token, user) { return set({ token: token, user: user }); },
    logout: function () { return set({ token: null, user: null }); },
    setPremium: function (isPremium) {
        return set(function (state) { return ({
            user: state.user ? __assign(__assign({}, state.user), { isPremium: isPremium }) : null
        }); });
    },
}); }, {
    name: 'auth-storage',
}));
