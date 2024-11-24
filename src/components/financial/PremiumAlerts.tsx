import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, DollarSign, Target, TrendingUp } from 'lucide-react';

export function PremiumAlerts() {
  const [showUpgrade, setShowUpgrade] = useState(false);

  const alerts = [
    {
      type: 'opportunity',
      title: 'Investment Opportunity',
      description: 'AAPL showing strong buy signals',
      premium: true
    },
    {
      type: 'warning',
      title: 'Portfolio Alert',
      description: 'Tech sector overweight detected',
      premium: true
    },
    {
      type: 'info',
      title: 'Market Update',
      description: 'Fed meeting impact analysis',
      premium: false
    }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <Bell className="h-5 w-5 text-cyan-400 mr-2" />
          Smart Alerts
        </h3>
        <button
          onClick={() => setShowUpgrade(true)}
          className="text-xs bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-3 py-1 rounded-full"
        >
          Upgrade
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-slate-700/50 rounded-lg p-4 ${
              alert.premium ? 'opacity-50' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-white font-medium mb-1">{alert.title}</h4>
                <p className="text-sm text-slate-400">{alert.description}</p>
              </div>
              {alert.premium && (
                <DollarSign className="h-4 w-4 text-cyan-400 flex-shrink-0" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {showUpgrade && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-lg p-4"
        >
          <h4 className="text-white font-medium mb-2">Unlock Premium Alerts</h4>
          <ul className="space-y-2 text-sm text-slate-400 mb-4">
            <li className="flex items-center">
              <Target className="h-4 w-4 text-cyan-400 mr-2" />
              Real-time investment opportunities
            </li>
            <li className="flex items-center">
              <TrendingUp className="h-4 w-4 text-cyan-400 mr-2" />
              AI-powered market predictions
            </li>
          </ul>
          <button className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-2 rounded-lg">
            Upgrade Now - $9.99/mo
          </button>
        </motion.div>
      )}
    </div>
  );
}