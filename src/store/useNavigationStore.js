"use strict";
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
exports.useNavigationStore = void 0;
var zustand_1 = require("zustand");
exports.useNavigationStore = (0, zustand_1.create)(function (set) { return ({
    currentSection: 'home',
    previousSection: '',
    isNavigating: false,
    breadcrumbs: ['Home'],
    setCurrentSection: function (section) { return set(function (state) { return ({
        previousSection: state.currentSection,
        currentSection: section
    }); }); },
    navigateTo: function (section) {
        set({ isNavigating: true });
        var element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setTimeout(function () {
            set({
                isNavigating: false,
                currentSection: section,
            });
        }, 1000);
    },
    addBreadcrumb: function (section) { return set(function (state) { return ({
        breadcrumbs: __spreadArray(__spreadArray([], state.breadcrumbs, true), [section], false)
    }); }); },
    clearBreadcrumbs: function () { return set({
        breadcrumbs: ['Home']
    }); }
}); });
