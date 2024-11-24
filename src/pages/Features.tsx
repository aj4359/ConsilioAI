import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PremiumFeatures } from '../components/PremiumFeatures';
import { AIFeatures } from '../components/features/AIFeatures';
import { InvestmentTools } from '../components/features/InvestmentTools';
import { SecurityFeatures } from '../components/features/SecurityFeatures';

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white text-center mb-8"
            >
              Platform Features
            </motion.h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <AIFeatures />
              <InvestmentTools />
              <SecurityFeatures />
            </div>

            <PremiumFeatures />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}