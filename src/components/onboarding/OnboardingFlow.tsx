import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useQuestionnaireStore } from '../../store/useQuestionnaireStore';
import { BasicInfo } from '../questionnaire/steps/BasicInfo';
import { GoalsTimeline } from '../questionnaire/steps/GoalsTimeline';
import { RiskAssessment } from '../questionnaire/steps/RiskAssessment';

const steps = [
  {
    id: 'welcome',
    title: 'Welcome to Consilio-AI',
    component: () => (
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Welcome to Consilio-AI</h2>
        <p className="text-slate-300 mb-8">Let's get started with your financial journey</p>
      </div>
    )
  },
  {
    id: 'basic-info',
    title: 'Basic Information',
    component: BasicInfo
  },
  {
    id: 'goals',
    title: 'Your Financial Goals',
    component: GoalsTimeline
  },
  {
    id: 'risk',
    title: 'Risk Assessment',
    component: RiskAssessment
  }
];

export function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const { profile, updateProfile } = useQuestionnaireStore();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-20">
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
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full ${
                    index <= currentStep ? 'bg-cyan-400' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8"
            >
              <CurrentStepComponent />

              <div className="flex justify-between mt-8">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="px-6 py-2 rounded-lg bg-slate-700 text-white hover:bg-slate-600 disabled:opacity-50"
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-400 hover:to-indigo-400"
                >
                  {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}