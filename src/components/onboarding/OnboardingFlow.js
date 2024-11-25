"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnboardingFlow = OnboardingFlow;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var react_router_dom_1 = require("react-router-dom");
var useQuestionnaireStore_1 = require("../../store/useQuestionnaireStore");
var BasicInfo_1 = require("../questionnaire/steps/BasicInfo");
var GoalsTimeline_1 = require("../questionnaire/steps/GoalsTimeline");
var RiskAssessment_1 = require("../questionnaire/steps/RiskAssessment");
var steps = [
    {
        id: 'welcome',
        title: 'Welcome to Consilio-AI',
        component: function () { return (<div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Welcome to Consilio-AI</h2>
        <p className="text-slate-300 mb-8">Let's get started with your financial journey</p>
      </div>); }
    },
    {
        id: 'basic-info',
        title: 'Basic Information',
        component: BasicInfo_1.BasicInfo
    },
    {
        id: 'goals',
        title: 'Your Financial Goals',
        component: GoalsTimeline_1.GoalsTimeline
    },
    {
        id: 'risk',
        title: 'Risk Assessment',
        component: RiskAssessment_1.RiskAssessment
    }
];
function OnboardingFlow() {
    var _a = (0, react_1.useState)(0), currentStep = _a[0], setCurrentStep = _a[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _b = (0, useQuestionnaireStore_1.useQuestionnaireStore)(), profile = _b.profile, updateProfile = _b.updateProfile;
    var handleNext = function () {
        if (currentStep < steps.length - 1) {
            setCurrentStep(function (prev) { return prev + 1; });
        }
        else {
            navigate('/dashboard');
        }
    };
    var handleBack = function () {
        if (currentStep > 0) {
            setCurrentStep(function (prev) { return prev - 1; });
        }
    };
    var CurrentStepComponent = steps[currentStep].component;
    return (<div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">
                {steps[currentStep].title}
              </h2>
              <span className="text-slate-400">
                Step {currentStep + 1} of {steps.length}
              </span>
            </div>
            <div className="flex gap-2">
              {steps.map(function (_, index) { return (<div key={index} className={"h-1 flex-1 rounded-full ".concat(index <= currentStep ? 'bg-cyan-400' : 'bg-slate-700')}/>); })}
            </div>
          </div>

          <framer_motion_1.AnimatePresence mode="wait">
            <framer_motion_1.motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <CurrentStepComponent />

              <div className="flex justify-between mt-8">
                <button onClick={handleBack} disabled={currentStep === 0} className="px-6 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 disabled:opacity-50">
                  Back
                </button>
                <button onClick={handleNext} className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-400 hover:to-indigo-400">
                  {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
                </button>
              </div>
            </framer_motion_1.motion.div>
          </framer_motion_1.AnimatePresence>
        </div>
      </div>
    </div>);
}
