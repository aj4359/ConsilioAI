import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Stocks', value: 60, color: '#06b6d4' },
  { name: 'Bonds', value: 20, color: '#6366f1' },
  { name: 'Crypto', value: 15, color: '#8b5cf6' },
  { name: 'Cash', value: 5, color: '#f43f5e' }
];

export function PortfolioManager() {
  return (
    <div className="bg-slate-800/50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Portfolio Overview</h2>
        <button className="text-cyan-400 hover:text-cyan-300">
          View Details
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-slate-300">{item.name}</span>
              </div>
              <span className="text-white">{item.value}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-slate-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400">Total Value</span>
            <ArrowUpRight className="h-4 w-4 text-green-400" />
          </div>
          <span className="text-2xl font-bold text-white">$124,500</span>
        </div>
        
        <div className="bg-slate-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400">24h Change</span>
            <ArrowUpRight className="h-4 w-4 text-green-400" />
          </div>
          <span className="text-2xl font-bold text-green-400">+2.4%</span>
        </div>
      </div>
    </div>
  );
}