"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveMarketData = LiveMarketData;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var react_query_1 = require("@tanstack/react-query");
var financial_1 = require("../services/financial");
function LiveMarketData() {
    // Real-time market data queries
    var cryptoData = (0, react_query_1.useQuery)({
        queryKey: ['crypto-live'],
        queryFn: financial_1.getCryptoPrices,
        refetchInterval: 2000 // Update every 2 seconds
    }).data;
    var forexData = (0, react_query_1.useQuery)({
        queryKey: ['forex-live'],
        queryFn: financial_1.getForexRates,
        refetchInterval: 2000
    }).data;
    return (<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Crypto Section */}
      <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Crypto</h3>
          <framer_motion_1.motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="text-cyan-400">
            <lucide_react_1.RefreshCw className="h-4 w-4"/>
          </framer_motion_1.motion.div>
        </div>
        <div className="space-y-4">
          <framer_motion_1.AnimatePresence mode="popLayout">
            {cryptoData && Object.entries(cryptoData).map(function (_a) {
            var coin = _a[0], data = _a[1];
            return (<framer_motion_1.motion.div key={coin} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-slate-700/50 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h4 className="text-white font-medium">{coin.toUpperCase()}</h4>
                  <span className="text-slate-400 text-sm">
                    24h: {data.usd_24h_change.toFixed(2)}%
                  </span>
                </div>
                <framer_motion_1.motion.div className="text-xl font-bold" animate={{
                    color: data.usd_24h_change >= 0 ? '#34d399' : '#f87171',
                    scale: [1, 1.1, 1]
                }} transition={{ duration: 0.3 }}>
                  ${data.usd.toFixed(2)}
                </framer_motion_1.motion.div>
              </framer_motion_1.motion.div>);
        })}
          </framer_motion_1.AnimatePresence>
        </div>
      </div>

      {/* Forex Section */}
      <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Forex</h3>
          <framer_motion_1.motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="text-cyan-400">
            <lucide_react_1.RefreshCw className="h-4 w-4"/>
          </framer_motion_1.motion.div>
        </div>
        <div className="space-y-4">
          <framer_motion_1.AnimatePresence mode="popLayout">
            {forexData && Object.entries(forexData.rates).map(function (_a) {
            var currency = _a[0], rate = _a[1];
            return (<framer_motion_1.motion.div key={currency} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-slate-700/50 rounded-lg p-4 flex justify-between items-center">
                <div>
                  <h4 className="text-white font-medium">{currency}/USD</h4>
                  <span className="text-slate-400 text-sm">
                    Volume: {Math.floor(Math.random() * 1000000)}
                  </span>
                </div>
                <framer_motion_1.motion.div className="text-xl font-bold text-white" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.3 }}>
                  {rate.toFixed(4)}
                </framer_motion_1.motion.div>
              </framer_motion_1.motion.div>);
        })}
          </framer_motion_1.AnimatePresence>
        </div>
      </div>

      {/* Market Summary */}
      <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Market Summary</h3>
          <framer_motion_1.motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="text-cyan-400">
            <lucide_react_1.RefreshCw className="h-4 w-4"/>
          </framer_motion_1.motion.div>
        </div>
        <div className="space-y-4">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Market Sentiment</h4>
            <div className="flex items-center space-x-2">
              <framer_motion_1.motion.div className="h-2 bg-green-400 rounded-full" initial={{ width: '0%' }} animate={{ width: '65%' }} transition={{ duration: 1 }}/>
              <span className="text-slate-400 text-sm">65% Bullish</span>
            </div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Trading Volume</h4>
            <div className="text-2xl font-bold text-white">
              $2.4T <span className="text-green-400 text-sm">+5.2%</span>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
