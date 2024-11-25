"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationProgress = NavigationProgress;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var useNavigationStore_1 = require("../store/useNavigationStore");
function NavigationProgress() {
    var _a;
    var currentSection = (0, useNavigationStore_1.useNavigationStore)().currentSection;
    var sections = [
        { id: 'home', step: 1 },
        { id: 'financial-dashboard', step: 2 },
        { id: 'ai-advisor', step: 3 },
        { id: 'features', step: 4 }
    ];
    var currentStep = ((_a = sections.find(function (s) { return s.id === currentSection; })) === null || _a === void 0 ? void 0 : _a.step) || 1;
    var progress = (currentStep / sections.length) * 100;
    return (<div className="fixed top-0 left-0 right-0 z-50">
      <framer_motion_1.motion.div initial={{ width: '0%' }} animate={{ width: "".concat(progress, "%") }} className="h-1 bg-gradient-to-r from-cyan-500 to-indigo-500"/>
    </div>);
}
