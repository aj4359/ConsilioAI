import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getStockData, getCryptoPrices, getForexRates } from '../../services/financial';

export function LiveMarketData() {
  const [priceHistory, setPriceHistory] = useState<Record<string, number[]>>({});

  // Crypto Data Query
  const { data: cryptoData } = useQuery({
    queryKey: ['crypto-live'],
    queryFn: getCryptoPrices,
    refetchInterval: 2000 // Update every 2 seconds
  });

  // Forex Data Query
  const { data: forexData } = useQuery({
    queryKey: ['forex-live'],
    queryFn: getForexRates,
    refetchInterval: 2000
  });

  // Update price history for animations
  useEffect(() => {
    if (cryptoData) {
      Object.entries(cryptoData).forEach(([coin, data]: any) => {
        setPriceHistory(prev => ({
          ...prev,
          [coin]: [...(prev[coin] || []), data.usd].slice(-10)
        }));
      });
    }
  }, [cryptoData]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Crypto Section */}
      <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Crypto</h3>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-cyan-400"
          >
            <RefreshCw className="h-4 w-4" />
          </motion.div>
        </div>
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {cryptoData && Object.entries(cryptoData).map(([coin, data]: any) => {
              const previousPrice = priceHistory[coin]?.slice(-2)[0] || data.usd;
              const priceChange = data.usd - previousPrice;
              const isPositive = priceChange >= 0;

              return (
                <motion.div
                  key={coin}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-slate-700/50 rounded-lg p-4 flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-white font-medium">{coin.toUpperCase()}</h4>
                    <div className="flex items-center space-x-2">
                      <motion.span
                        key={data.usd}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`text-sm ${isPositive ? 'text-green-400' : 'text-red-400'}`}
                      >
                        {isPositive ? '+' : ''}{priceChange.toFixed(2)}
                      </motion.span>
                      <span className="text-slate-400 text-sm">
                        24h: {data.usd_24h_change.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                  <motion.div
                    className="text-xl font-bold"
                    animate={{
                      color: isPositive ? '#34d399' : '#f87171',
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    ${data.usd.toFixed(2)}
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Forex Section */}
      <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Forex</h3>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-cyan-400"
          >
            <RefreshCw className="h-4 w-4" />
          </motion.div>
        </div>
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {forexData && Object.entries(forexData.rates).map(([currency, rate]: any) => (
              <motion.div
                key={currency}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-slate-700/50 rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h4 className="text-white font-medium">{currency}/USD</h4>
                  <span className="text-slate-400 text-sm">
                    Volume: {Math.floor(Math.random() * 1000000)}
                  </span>
                </div>
                <motion.div
                  className="text-xl font-bold text-white"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  {rate.toFixed(4)}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Market Summary */}
      <div className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Market Summary</h3>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-cyan-400"
          >
            <RefreshCw className="h-4 w-4" />
          </motion.div>
        </div>
        <div className="space-y-4">
          <div className="bg-slate-700/50 rounded-lg p-4">
            <h4 className="text-white font-medium mb-2">Market Sentiment</h4>
            <div className="flex items-center space-x-2">
              <motion.div
                className="h-2 bg-green-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '65%' }}
                transition={{ duration: 1 }}
              />
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
    </div>
  );
}