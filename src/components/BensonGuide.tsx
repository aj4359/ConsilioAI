import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AIAvatar } from './AIAvatar';
import { ChevronRight, X, Info } from 'lucide-react';
import { useNavigationStore } from '../store/useNavigationStore';

interface GuideStep {
  title: string;
  description: string;
  elementId: string;
}

const guideSteps: GuideStep[] = [
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

export function BensonGuide() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isHighlighting, setIsHighlighting] = useState(false);
  const { navigateTo } = useNavigationStore();

  const scrollToElement = (elementId: string) => {
    navigateTo(elementId);
    setIsHighlighting(true);
    setTimeout(() => setIsHighlighting(false), 2000);
  };

  const handleNext = () => {
    if (currentStep < guideSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
      scrollToElement(guideSteps[currentStep + 1].elementId);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 right-6 w-72 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl z-50 overflow-hidden border border-white/10"
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <AIAvatar scale={0.6} />
                  <span className="ml-2 font-medium text-white">Benson Guide</span>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mb-4">
                <h3 className="font-medium text-white mb-2">{guideSteps[currentStep].title}</h3>
                <p className="text-sm text-white/80">{guideSteps[currentStep].description}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  {guideSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index === currentStep ? 'bg-cyan-400' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="flex items-center text-sm text-cyan-400 hover:text-cyan-300"
                >
                  {currentStep === guideSteps.length - 1 ? 'Finish' : 'Next'}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsVisible(true)}
        className="fixed bottom-24 right-6 bg-white/10 backdrop-blur-sm text-white/80 p-3 rounded-full shadow-lg z-40 border border-white/10 hover:text-white transition-colors"
      >
        <Info className="h-5 w-5" />
      </motion.button>
    </>
  );
}