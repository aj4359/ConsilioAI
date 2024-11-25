"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveMarketTicker = LiveMarketTicker;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var MarketDataService_1 = require("../../services/realtime/MarketDataService");
function LiveMarketTicker() {
    var _a = (0, MarketDataService_1.useMarketStore)(), data = _a.data, connected = _a.connected;
    if (!connected)
        return null;
    return (<div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 z-40 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative h-12 overflow-hidden">
          <framer_motion_1.motion.div animate={{ x: [0, -2000] }} transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
        }} className="absolute flex items-center space-x-8 h-full whitespace-nowrap">
            <framer_motion_1.AnimatePresence mode="popLayout">
              {Object.entries(data).map(function (_a) {
            var symbol = _a[0], marketData = _a[1];
            return (<framer_motion_1.motion.div key={symbol} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex items-center space-x-2">
                  <span className="text-slate-400 min-w-[60px]">{symbol}</span>
                  <framer_motion_1.motion.span key={marketData.price} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-white min-w-[80px]">
                    ${marketData.price.toFixed(2)}
                  </framer_motion_1.motion.span>
                  <span className={"flex items-center space-x-1 min-w-[80px] ".concat(marketData.change >= 0 ? 'text-green-400' : 'text-red-400')}>
                    {marketData.change >= 0 ? (<lucide_react_1.TrendingUp className="h-4 w-4"/>) : (<lucide_react_1.TrendingDown className="h-4 w-4"/>)}
                    <span>{Math.abs(marketData.change).toFixed(2)}%</span>
                  </span>
                </framer_motion_1.motion.div>);
        })}
            </framer_motion_1.AnimatePresence>
          </framer_motion_1.motion.div>
        </div>
      </div>
    </div>);
}
