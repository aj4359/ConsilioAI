import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Lock, Zap, Shield } from 'lucide-react';

export function PortfolioAnalyzer() {
  const [showFeatures, setShowFeatures] = useState(false);

  const mockPortfolio = {
    total: 25000,
    allocation: [
      { category: 'Stocks', percentage: 60, locked: false },
      { category: 'Bonds', percentage: 20, locked: true },
      { category: 'Crypto', percentage: 15, locked: true },
      { category: 'Cash', percentage: 5, locked: false }
    ]
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
      <h3 className="text-xl font-semibold text-white flex items-center mb-6">
        <PieChart className="h-5 w-5 text-cyan-400 mr-2" />
        Portfolio Analysis
      </h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="text-white font-medium mb-4">Current Allocation</h4>
            {mockPortfolio.allocation.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-2 last:mb-0"
              >
                <div className="flex items-center">
                  <span className="text-slate-300">{item.category}</span>
                  {item.locked && (
                    <Lock className="h-4 w-4 text-cyan-400 ml-2" />
                  )}
                </div>
                <span className="text-slate-400">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-lg p-4">
          <h4 className="text-white font-medium mb-4">Premium Analysis</h4>
          <div className="space-y-4">
            <button
              onClick={() => setShowFeatures(true)}
              className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-2 rounded-lg flex items-center justify-center"
            >
              <Zap className="h-4 w-4 mr-2" />
              Unlock Advanced Insights
            </button>
            
            {showFeatures && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                <div className="flex items-center text-sm text-slate-400">
                  <Shield className="h-4 w-4 text-cyan-400 mr-2" />
                  Risk analysis & rebalancing
                </div>
                <div className="flex items-center text-sm text-slate-400">
                  <Shield className="h-4 w-4 text-cyan-400 mr-2" />
                  Tax optimization strategies
                </div>
                <div className="flex items-center text-sm text-slate-400">
                  <Shield className="h-4 w-4 text-cyan-400 mr-2" />
                  AI-powered recommendations
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-2 rounded-lg mt-4">
                  Start Free Trial
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}