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
exports.useWhiteLabelStore = void 0;
var zustand_1 = require("zustand");
exports.useWhiteLabelStore = (0, zustand_1.create)(function (set, get) { return ({
    configs: {},
    addConfig: function (clientId, config) {
        return set(function (state) {
            var _a;
            return ({
                configs: __assign(__assign({}, state.configs), (_a = {}, _a[clientId] = config, _a))
            });
        });
    },
    getConfig: function (clientId) { return get().configs[clientId] || null; }
}); });
