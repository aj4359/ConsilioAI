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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppStore = void 0;
var zustand_1 = require("zustand");
var middleware_1 = require("zustand/middleware");
var initialState = {
    currentView: 'home',
    isPortfolioVisible: false,
    chatHistory: [],
    jurisdiction: null,
    isVisitorRegistered: false,
    visitorData: null,
    jurisdictionModalOpen: false
};
exports.useAppStore = (0, zustand_1.create)()((0, middleware_1.persist)(function (set) { return (__assign(__assign({}, initialState), { setCurrentView: function (view) { return set({ currentView: view }); }, togglePortfolio: function () { return set(function (state) { return ({ isPortfolioVisible: !state.isPortfolioVisible }); }); }, addChatMessage: function (message) { return set(function (state) { return ({
        chatHistory: __spreadArray(__spreadArray([], state.chatHistory, true), [message], false)
    }); }); }, setJurisdiction: function (jurisdiction) { return set({ jurisdiction: jurisdiction }); }, setVisitorRegistered: function (value) { return set({ isVisitorRegistered: value }); }, setVisitorData: function (data) { return set({ visitorData: data }); }, setJurisdictionModalOpen: function (value) { return set({ jurisdictionModalOpen: value }); }, resetAppState: function () { return set(initialState); } })); }, {
    name: 'app-storage'
}));
