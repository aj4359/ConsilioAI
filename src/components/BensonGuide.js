"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BensonGuide = BensonGuide;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var AIAvatar_1 = require("./AIAvatar");
var lucide_react_1 = require("lucide-react");
var useNavigationStore_1 = require("../store/useNavigationStore");
var guideSteps = [
    {
        title: "Welcome to Consilio-AI",
        description: "Let me show you around our platform",
        elementId: "home"
    },
    {
        title: "Financial Dashboard",
        description: "View your portfolio performance and market insights",
        elementId: "financial-dashboard"
    },
    {
        title: "AI Advisor",
        description: "Get personalized financial recommendations",
        elementId: "ai-advisor"
    },
    {
        title: "Premium Features",
        description: "Explore advanced tools and analytics",
        elementId: "premium-features"
    }
];
function BensonGuide() {
    var _a = (0, react_1.useState)(false), isVisible = _a[0], setIsVisible = _a[1];
    var _b = (0, react_1.useState)(0), currentStep = _b[0], setCurrentStep = _b[1];
    var _c = (0, react_1.useState)(false), isHighlighting = _c[0], setIsHighlighting = _c[1];
    var navigateTo = (0, useNavigationStore_1.useNavigationStore)().navigateTo;
    var scrollToElement = function (elementId) {
        navigateTo(elementId);
        setIsHighlighting(true);
        setTimeout(function () { return setIsHighlighting(false); }, 2000);
    };
    var handleNext = function () {
        if (currentStep < guideSteps.length - 1) {
            setCurrentStep(function (prev) { return prev + 1; });
            scrollToElement(guideSteps[currentStep + 1].elementId);
        }
        else {
            setIsVisible(false);
        }
    };
    return (<>
      <framer_motion_1.AnimatePresence>
        {isVisible && (<framer_motion_1.motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-24 right-6 w-72 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl z-50 overflow-hidden border border-white/10">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <AIAvatar_1.AIAvatar scale={0.6}/>
                  <span className="ml-2 font-medium text-white">Benson Guide</span>
                </div>
                <button onClick={function () { return setIsVisible(false); }} className="text-white/80 hover:text-white">
                  <lucide_react_1.X className="h-5 w-5"/>
                </button>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-white mb-2">{guideSteps[currentStep].title}</h3>
                <p className="text-sm text-white/80">{guideSteps[currentStep].description}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {guideSteps.map(function (_, index) { return (<div key={index} className={"w-2 h-2 rounded-full ".concat(index === currentStep ? 'bg-cyan-400' : 'bg-white/30')}/>); })}
                </div>
                <button onClick={handleNext} className="flex items-center text-sm text-cyan-400 hover:text-cyan-300">
                  {currentStep === guideSteps.length - 1 ? 'Finish' : 'Next'}
                  <lucide_react_1.ChevronRight className="h-4 w-4 ml-1"/>
                </button>
              </div>
            </div>
          </framer_motion_1.motion.div>)}
      </framer_motion_1.AnimatePresence>

      <framer_motion_1.motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} onClick={function () { return setIsVisible(true); }} className="fixed bottom-24 right-6 bg-white/10 backdrop-blur-sm text-white/80 p-3 rounded-full shadow-lg z-40 border border-white/10 hover:text-white transition-colors">
        <lucide_react_1.Info className="h-5 w-5"/>
      </framer_motion_1.motion.button>
    </>);
}
