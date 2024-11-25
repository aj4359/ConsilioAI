"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialQuestionnaire = FinancialQuestionnaire;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var useQuestionnaireStore_1 = require("../../store/useQuestionnaireStore");
var BasicInfo_1 = require("./steps/BasicInfo");
var GoalsTimeline_1 = require("./steps/GoalsTimeline");
var RiskAssessment_1 = require("./steps/RiskAssessment");
var FamilyObligations_1 = require("./steps/FamilyObligations");
var ProtectionPlanning_1 = require("./steps/ProtectionPlanning");
var TaxEmployment_1 = require("./steps/TaxEmployment");
var steps = [
    { component: BasicInfo_1.BasicInfo, title: 'Basic Information' },
    { component: GoalsTimeline_1.GoalsTimeline, title: 'Goals & Timeline' },
    { component: RiskAssessment_1.RiskAssessment, title: 'Risk Assessment' },
    { component: FamilyObligations_1.FamilyObligations, title: 'Family & Obligations' },
    { component: ProtectionPlanning_1.ProtectionPlanning, title: 'Protection & Planning' },
    { component: TaxEmployment_1.TaxEmployment, title: 'Tax & Employment' }
];
function FinancialQuestionnaire() {
    var _a = (0, useQuestionnaireStore_1.useQuestionnaireStore)(), currentStep = _a.currentStep, nextStep = _a.nextStep, previousStep = _a.previousStep;
    var CurrentStepComponent = steps[currentStep].component;
    return (<div className="max-w-2xl mx-auto bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          {steps[currentStep].title}
        </h2>
        <div className="flex gap-2">
          {steps.map(function (_, index) { return (<div key={index} className={"h-1 flex-1 rounded-full ".concat(index <= currentStep ? 'bg-cyan-400' : 'bg-slate-600')}/>); })}
        </div>
      </div>

      <framer_motion_1.motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
        <CurrentStepComponent />
      </framer_motion_1.motion.div>

      <div className="flex justify-between mt-8">
        <button onClick={previousStep} disabled={currentStep === 0} className="px-6 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed">
          Previous
        </button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1} className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-400 hover:to-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed">
          Next
        </button>
      </div>
    </div>);
}
