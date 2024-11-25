"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketOverview = MarketOverview;
var react_1 = require("react");
var react_query_1 = require("@tanstack/react-query");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var financial_1 = require("../services/financial");
var WebSocketService_1 = require("../services/realtime/WebSocketService");
var WATCHED_SYMBOLS = ['AAPL', 'GOOGL', 'MSFT', 'AMZN'];
function MarketOverview() {
    var _this = this;
    var _a = (0, WebSocketService_1.useWebSocketStore)(), connected = _a.connected, lastUpdate = _a.lastUpdate;
    // Stock Data Query with simulated real-time updates
    var _b = (0, react_query_1.useQuery)({
        queryKey: ['stocks'],
        queryFn: function () { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(WATCHED_SYMBOLS.map(function (symbol) { return (0, financial_1.getStockData)(symbol); }))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, WATCHED_SYMBOLS.map(function (symbol, index) { return ({
                                symbol: symbol,
                                data: data[index]
                            }); })];
                }
            });
        }); },
        refetchInterval: 5000 // Refresh every 5 seconds for demo
    }), stocksData = _b.data, stocksLoading = _b.isLoading;
    // Crypto Data Query
    var _c = (0, react_query_1.useQuery)({
        queryKey: ['crypto'],
        queryFn: financial_1.getCryptoPrices,
        refetchInterval: 5000
    }), cryptoData = _c.data, cryptoLoading = _c.isLoading;
    // Forex Data Query
    var _d = (0, react_query_1.useQuery)({
        queryKey: ['forex'],
        queryFn: financial_1.getForexRates,
        refetchInterval: 5000
    }), forexData = _d.data, forexLoading = _d.isLoading;
    if (stocksLoading || cryptoLoading || forexLoading) {
        return (<div className="animate-pulse bg-slate-800/50 rounded-xl p-6">
        <div className="h-8 w-48 bg-slate-700 rounded mb-4"></div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map(function (i) { return (<div key={i} className="h-16 bg-slate-700 rounded"></div>); })}
        </div>
      </div>);
    }
    return (<div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <lucide_react_1.BarChart2 className="h-5 w-5 text-cyan-400 mr-2"/>
          <h3 className="text-xl font-semibold text-white">Market Overview</h3>
        </div>
        
        {/* Real-time Status Indicator */}
        <div className="flex items-center space-x-2">
          <framer_motion_1.motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="h-2 w-2 rounded-full bg-green-400"/>
          <span className="text-xs text-slate-400">Live Demo</span>
        </div>
      </div>

      {/* Stocks Section */}
      <div className="space-y-4 mb-6">
        <framer_motion_1.AnimatePresence mode="popLayout">
          {stocksData === null || stocksData === void 0 ? void 0 : stocksData.map(function (_a, index) {
            var symbol = _a.symbol, data = _a.data;
            var priceChange = data.c - data.pc;
            var percentageChange = (priceChange / data.pc) * 100;
            var isPositive = priceChange >= 0;
            return (<framer_motion_1.motion.div key={symbol} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ delay: index * 0.1 }} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 relative overflow-hidden group">
                {/* Live Update Animation */}
                <framer_motion_1.motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10" animate={{
                    opacity: [0, 0.2, 0],
                }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}/>

                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <h4 className="text-white font-medium">{symbol}</h4>
                    <p className="text-sm text-slate-400">
                      Vol: {new Intl.NumberFormat().format(data.t)}
                    </p>
                  </div>
                  <div className="text-right">
                    <framer_motion_1.motion.p className="text-lg text-white" animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 0.5 }}>
                      ${data.c.toFixed(2)}
                    </framer_motion_1.motion.p>
                    <p className={"text-sm flex items-center justify-end ".concat(isPositive ? 'text-green-400' : 'text-red-400')}>
                      {isPositive ? (<lucide_react_1.TrendingUp className="h-4 w-4 mr-1"/>) : (<lucide_react_1.TrendingDown className="h-4 w-4 mr-1"/>)}
                      {percentageChange.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </framer_motion_1.motion.div>);
        })}
        </framer_motion_1.AnimatePresence>
      </div>

      {/* Last Update Indicator */}
      <div className="text-xs text-slate-400 flex items-center justify-end">
        <lucide_react_1.RefreshCw className="h-3 w-3 mr-1 animate-spin"/>
        Updating live...
      </div>
    </div>);
}
