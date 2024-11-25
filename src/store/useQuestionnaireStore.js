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
exports.useQuestionnaireStore = void 0;
var zustand_1 = require("zustand");
var middleware_1 = require("zustand/middleware");
exports.useQuestionnaireStore = (0, zustand_1.create)()((0, middleware_1.persist)(function (set) { return ({
    currentStep: 0,
    profile: {},
    isComplete: false,
    updateProfile: function (updates) {
        return set(function (state) { return ({
            profile: __assign(__assign({}, state.profile), updates)
        }); });
    },
    nextStep: function () {
        return set(function (state) { return ({
            currentStep: state.currentStep + 1
        }); });
    },
    previousStep: function () {
        return set(function (state) { return ({
            currentStep: Math.max(0, state.currentStep - 1)
        }); });
    },
    setComplete: function (value) {
        return set({ isComplete: value });
    },
    resetQuestionnaire: function () {
        return set({
            currentStep: 0,
            profile: {},
            isComplete: false
        });
    }
}); }, {
    name: 'financial-questionnaire'
}));
