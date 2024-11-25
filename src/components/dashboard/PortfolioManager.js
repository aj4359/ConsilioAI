"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioManager = PortfolioManager;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var recharts_1 = require("recharts");
var data = [
    { name: 'Stocks', value: 60, color: '#06b6d4' },
    { name: 'Bonds', value: 20, color: '#6366f1' },
    { name: 'Crypto', value: 15, color: '#8b5cf6' },
    { name: 'Cash', value: 5, color: '#f43f5e' }
];
function PortfolioManager() {
    return (<div className="bg-slate-800/50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Portfolio Overview</h2>
        <button className="text-cyan-400 hover:text-cyan-300">
          View Details
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="h-64">
          <recharts_1.ResponsiveContainer width="100%" height="100%">
            <recharts_1.PieChart>
              <recharts_1.Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {data.map(function (entry, index) { return (<recharts_1.Cell key={index} fill={entry.color}/>); })}
              </recharts_1.Pie>
            </recharts_1.PieChart>
          </recharts_1.ResponsiveContainer>
        </div>

        <div className="space-y-4">
          {data.map(function (item, index) { return (<framer_motion_1.motion.div key={index} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}/>
                <span className="text-slate-300">{item.name}</span>
              </div>
              <span className="text-white">{item.value}%</span>
            </framer_motion_1.motion.div>); })}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-slate-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400">Total Value</span>
            <lucide_react_1.ArrowUpRight className="h-4 w-4 text-green-400"/>
          </div>
          <span className="text-2xl font-bold text-white">$124,500</span>
        </div>
        
        <div className="bg-slate-700/50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400">24h Change</span>
            <lucide_react_1.ArrowUpRight className="h-4 w-4 text-green-400"/>
          </div>
          <span className="text-2xl font-bold text-green-400">+2.4%</span>
        </div>
      </div>
    </div>);
}
