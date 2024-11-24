import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, BarChart2, RefreshCw } from 'lucide-react';
import { getStockData, getCryptoPrices, getForexRates } from '../services/financial';
import { useWebSocketStore } from '../services/realtime/WebSocketService';

const WATCHED_SYMBOLS = ['AAPL', 'GOOGL', 'MSFT', 'AMZN'];

export function MarketOverview() {
  const { connected, lastUpdate } = useWebSocketStore();

  // Stock Data Query with simulated real-time updates
  const { data: stocksData, isLoading: stocksLoading } = useQuery({
    queryKey: ['stocks'],
    queryFn: async () => {
      const data = await Promise.all(
        WATCHED_SYMBOLS.map(symbol => getStockData(symbol))
      );
      return WATCHED_SYMBOLS.map((symbol, index) => ({
        symbol,
        data: data[index]
      }));
    },
    refetchInterval: 5000 // Refresh every 5 seconds for demo
  });

  // Crypto Data Query
  const { data: cryptoData, isLoading: cryptoLoading } = useQuery({
    queryKey: ['crypto'],
    queryFn: getCryptoPrices,
    refetchInterval: 5000
  });

  // Forex Data Query
  const { data: forexData, isLoading: forexLoading } = useQuery({
    queryKey: ['forex'],
    queryFn: getForexRates,
    refetchInterval: 5000
  });

  if (stocksLoading || cryptoLoading || forexLoading) {
    return (
      <div className="animate-pulse bg-slate-800/50 rounded-xl p-6">
        <div className="h-8 w-48 bg-slate-700 rounded mb-4"></div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-16 bg-slate-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <BarChart2 className="h-5 w-5 text-cyan-400 mr-2" />
          <h3 className="text-xl font-semibold text-white">Market Overview</h3>
        </div>
        
        {/* Real-time Status Indicator */}
        <div className="flex items-center space-x-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="h-2 w-2 rounded-full bg-green-400"
          />
          <span className="text-xs text-slate-400">Live Demo</span>
        </div>
      </div>

      {/* Stocks Section */}
      <div className="space-y-4 mb-6">
        <AnimatePresence mode="popLayout">
          {stocksData?.map(({ symbol, data }, index) => {
            const priceChange = data.c - data.pc;
            const percentageChange = (priceChange / data.pc) * 100;
            const isPositive = priceChange >= 0;

            return (
              <motion.div
                key={symbol}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 relative overflow-hidden group"
              >
                {/* Live Update Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10"
                  animate={{
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <div className="flex justify-between items-center relative z-10">
                  <div>
                    <h4 className="text-white font-medium">{symbol}</h4>
                    <p className="text-sm text-slate-400">
                      Vol: {new Intl.NumberFormat().format(data.t)}
                    </p>
                  </div>
                  <div className="text-right">
                    <motion.p 
                      className="text-lg text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      ${data.c.toFixed(2)}
                    </motion.p>
                    <p className={`text-sm flex items-center justify-end ${
                      isPositive ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {isPositive ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      {percentageChange.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Last Update Indicator */}
      <div className="text-xs text-slate-400 flex items-center justify-end">
        <RefreshCw className="h-3 w-3 mr-1 animate-spin" />
        Updating live...
      </div>
    </div>
  );
}