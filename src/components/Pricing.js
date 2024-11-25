"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pricing = Pricing;
var react_1 = require("react");
var VisitorRegistration_1 = require("./VisitorRegistration");
var useAppStore_1 = require("../store/useAppStore");
// Rest of the code remains the same until the button click handler
function Pricing() {
    var _a = (0, react_1.useState)(false), showRegistration = _a[0], setShowRegistration = _a[1];
    var isVisitorRegistered = (0, useAppStore_1.useAppStore)().isVisitorRegistered;
    var handleFreeTrial = function () {
        if (!isVisitorRegistered) {
            setShowRegistration(true);
        }
        else {
            // Proceed with trial activation
            console.log('Activating free trial for registered user');
        }
    };
    return (<>
      {/* Existing Pricing UI */}
      {showRegistration && (<VisitorRegistration_1.VisitorRegistration />)}
    </>);
}
