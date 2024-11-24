import React from 'react';
import { motion } from 'framer-motion';
import { useQuestionnaireStore } from '../../store/useQuestionnaireStore';
import { BasicInfo } from './steps/BasicInfo';
import { GoalsTimeline } from './steps/GoalsTimeline';
import { RiskAssessment } from './steps/RiskAssessment';
import { FamilyObligations } from './steps/FamilyObligations';
import { ProtectionPlanning } from './steps/ProtectionPlanning';
import { TaxEmployment } from './steps/TaxEmployment';

const steps = [
  { component: BasicInfo, title: 'Basic Information' },
  { component: GoalsTimeline, title: 'Goals & Timeline' },
  { component: RiskAssessment, title: 'Risk Assessment' },
  { component: FamilyObligations, title: 'Family & Obligations' },
  { component: ProtectionPlanning, title: 'Protection & Planning' },
  { component: TaxEmployment, title: 'Tax & Employment' }
];

export function FinancialQuestionnaire() {
  const { currentStep, nextStep, previousStep } = useQuestionnaireStore();
  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-2xl mx-auto bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          {steps[currentStep].title}
        </h2>
        <div className="flex gap-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`h-1 flex-1 rounded-full ${
                index <= currentStep ? 'bg-cyan-400' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
      >
        <CurrentStepComponent />
      </motion.div>

      <div className="flex justify-between mt-8">
        <button
          onClick={previousStep}
          disabled={currentStep === 0}
          className="px-6 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-400 hover:to-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  );
}