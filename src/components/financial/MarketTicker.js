"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketTicker = MarketTicker;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var react_query_1 = require("@tanstack/react-query");
var lucide_react_1 = require("lucide-react");
var financial_1 = require("../../services/financial");
function MarketTicker() {
    // Real-time market data queries with 5s refresh
    var cryptoData = (0, react_query_1.useQuery)({
        queryKey: ['crypto'],
        queryFn: financial_1.getCryptoPrices,
        refetchInterval: 5000
    }).data;
    var forexData = (0, react_query_1.useQuery)({
        queryKey: ['forex'],
        queryFn: financial_1.getForexRates,
        refetchInterval: 5000
    }).data;
    var newsData = (0, react_query_1.useQuery)({
        queryKey: ['market-news'],
        queryFn: financial_1.getMarketNews,
        refetchInterval: 30000
    }).data;
    return (<div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 z-40">
      <div className="container mx-auto">
        {/* Scrolling Ticker */}
        <div className="relative h-12 overflow-hidden">
          <framer_motion_1.motion.div animate={{ x: [0, -2000] }} transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
        }} className="absolute flex items-center space-x-8 h-full">
            {/* Crypto Prices */}
            {cryptoData && Object.entries(cryptoData).map(function (_a) {
            var coin = _a[0], data = _a[1];
            return (<div key={coin} className="flex items-center space-x-2">
                <span className="text-slate-400">{coin.toUpperCase()}</span>
                <span className="text-white">${data.usd.toFixed(2)}</span>
                <span className={data.usd_24h_change > 0 ? 'text-green-400' : 'text-red-400'}>
                  {data.usd_24h_change > 0 ? (<lucide_react_1.TrendingUp className="h-4 w-4"/>) : (<lucide_react_1.TrendingDown className="h-4 w-4"/>)}
                </span>
              </div>);
        })}

            {/* Forex Rates */}
            {forexData && Object.entries(forexData.rates).map(function (_a) {
            var currency = _a[0], rate = _a[1];
            return (<div key={currency} className="flex items-center space-x-2">
                <span className="text-slate-400">{currency}/USD</span>
                <span className="text-white">{rate.toFixed(4)}</span>
              </div>);
        })}

            {/* Breaking News */}
            {newsData === null || newsData === void 0 ? void 0 : newsData.map(function (news, index) { return (<div key={index} className="flex items-center space-x-2">
                <lucide_react_1.Newspaper className="h-4 w-4 text-cyan-400"/>
                <span className="text-white whitespace-nowrap">{news.title}</span>
              </div>); })}
          </framer_motion_1.motion.div>
        </div>
      </div>
    </div>);
}
