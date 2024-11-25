"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = Demo;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function Demo() {
    var _a = (0, react_1.useState)('5000'), income = _a[0], setIncome = _a[1];
    var _b = (0, react_1.useState)('3000'), expenses = _b[0], setExpenses = _b[1];
    var savings = parseInt(income) - parseInt(expenses);
    var savingsPercentage = ((savings / parseInt(income)) * 100).toFixed(1);
    return (<section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          See Consilio-AI in Action
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Input Your Numbers</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Monthly Income
                  </label>
                  <div className="relative">
                    <lucide_react_1.DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5"/>
                    <input type="number" value={income} onChange={function (e) { return setIncome(e.target.value); }} className="pl-10 w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"/>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Monthly Expenses
                  </label>
                  <div className="relative">
                    <lucide_react_1.DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5"/>
                    <input type="number" value={expenses} onChange={function (e) { return setExpenses(e.target.value); }} className="pl-10 w-full p-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"/>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">AI Insights</h3>
              <div className="space-y-6">
                <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <lucide_react_1.TrendingUp className="h-5 w-5 text-green-500"/>
                    <span className="font-medium">Monthly Savings</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-800">${savings}</p>
                </framer_motion_1.motion.div>
                
                <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <lucide_react_1.PieChart className="h-5 w-5 text-indigo-500"/>
                    <span className="font-medium">Savings Rate</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-800">{savingsPercentage}%</p>
                </framer_motion_1.motion.div>
                
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">
                    {savings > 0
            ? "Great job! You're saving ".concat(savingsPercentage, "% of your income. Consider investing your surplus for long-term growth.")
            : "Your expenses exceed your income. Let's work on creating a budget to help you save more."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
}
