import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link2, Shield, RefreshCw, Building2 } from 'lucide-react';

export function FinancialIntegrations() {
  const [connected, setConnected] = useState(false);

  const integrations = [
    {
      name: 'Bank Accounts',
      icon: Building2,
      description: 'Connect your checking and savings accounts',
      status: connected ? 'Connected' : 'Not Connected',
    },
    {
      name: 'Investment Accounts',
      icon: RefreshCw,
      description: 'Sync your investment portfolio',
      status: 'Coming Soon',
    },
    {
      name: 'Credit Cards',
      icon: Link2,
      description: 'Track your credit card spending',
      status: 'Coming Soon',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Financial Account Integrations
            </h2>
            <p className="text-slate-400">
              Securely connect your accounts for comprehensive financial analysis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-colors"
              >
                <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <integration.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {integration.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {integration.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${
                    integration.status === 'Connected' 
                      ? 'text-cyan-400' 
                      : 'text-slate-500'
                  }`}>
                    {integration.status}
                  </span>
                  {integration.name === 'Bank Accounts' && !connected && (
                    <button
                      onClick={() => setConnected(true)}
                      className="text-cyan-400 text-sm font-medium hover:text-cyan-300"
                    >
                      Connect
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-slate-800/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">
              Security First
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-400">
                <Shield className="h-5 w-5 text-cyan-400 mr-2" />
                Bank-level 256-bit encryption
              </li>
              <li className="flex items-center text-slate-400">
                <Shield className="h-5 w-5 text-cyan-400 mr-2" />
                Read-only access to your data
              </li>
              <li className="flex items-center text-slate-400">
                <Shield className="h-5 w-5 text-cyan-400 mr-2" />
                SOC2 Type II certified
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}