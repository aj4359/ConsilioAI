"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumAlerts = PremiumAlerts;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function PremiumAlerts() {
    var _a = (0, react_1.useState)(false), showUpgrade = _a[0], setShowUpgrade = _a[1];
    var alerts = [
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
    return (<div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <lucide_react_1.Bell className="h-5 w-5 text-cyan-400 mr-2"/>
          Smart Alerts
        </h3>
        <button onClick={function () { return setShowUpgrade(true); }} className="text-xs bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-3 py-1 rounded-full">
          Upgrade
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map(function (alert, index) { return (<framer_motion_1.motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={"bg-slate-700/50 rounded-lg p-4 ".concat(alert.premium ? 'opacity-50' : '')}>
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-white font-medium mb-1">{alert.title}</h4>
                <p className="text-sm text-slate-400">{alert.description}</p>
              </div>
              {alert.premium && (<lucide_react_1.DollarSign className="h-4 w-4 text-cyan-400 flex-shrink-0"/>)}
            </div>
          </framer_motion_1.motion.div>); })}
      </div>

      {showUpgrade && (<framer_motion_1.motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mt-6 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-lg p-4">
          <h4 className="text-white font-medium mb-2">Unlock Premium Alerts</h4>
          <ul className="space-y-2 text-sm text-slate-400 mb-4">
            <li className="flex items-center">
              <lucide_react_1.Target className="h-4 w-4 text-cyan-400 mr-2"/>
              Real-time investment opportunities
            </li>
            <li className="flex items-center">
              <lucide_react_1.TrendingUp className="h-4 w-4 text-cyan-400 mr-2"/>
              AI-powered market predictions
            </li>
          </ul>
          <button className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-2 rounded-lg">
            Upgrade Now - $9.99/mo
          </button>
        </framer_motion_1.motion.div>)}
    </div>);
}
