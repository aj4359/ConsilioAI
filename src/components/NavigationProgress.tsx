import React from 'react';
import { motion } from 'framer-motion';
import { useNavigationStore } from '../store/useNavigationStore';

export function NavigationProgress() {
  const { currentSection } = useNavigationStore();

  const sections = [
    { id: 'home', step: 1 },
    { id: 'financial-dashboard', step: 2 },
    { id: 'ai-advisor', step: 3 },
    { id: 'features', step: 4 }
  ];

  const currentStep = sections.find(s => s.id === currentSection)?.step || 1;
  const progress = (currentStep / sections.length) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        className="h-1 bg-gradient-to-r from-cyan-500 to-indigo-500"
      />
    </div>
  );
}