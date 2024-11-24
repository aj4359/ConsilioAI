import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { VisitorRegistration } from './VisitorRegistration';
import { useAppStore } from '../store/useAppStore';

// Rest of the code remains the same until the button click handler

export function Pricing() {
  const [showRegistration, setShowRegistration] = useState(false);
  const { isVisitorRegistered } = useAppStore();

  const handleFreeTrial = () => {
    if (!isVisitorRegistered) {
      setShowRegistration(true);
    } else {
      // Proceed with trial activation
      console.log('Activating free trial for registered user');
    }
  };

  return (
    <>
      {/* Existing Pricing UI */}
      {showRegistration && (
        <VisitorRegistration />
      )}
    </>
  );
}