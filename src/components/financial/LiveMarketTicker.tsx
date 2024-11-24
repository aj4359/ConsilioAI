import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useMarketStore } from '../../services/realtime/MarketDataService';

export function LiveMarketTicker() {
  const { data, connected } = useMarketStore();

  if (!connected) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 z-40 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative h-12 overflow-hidden">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute flex items-center space-x-8 h-full whitespace-nowrap"
          >
            <AnimatePresence mode="popLayout">
              {Object.entries(data).map(([symbol, marketData]) => (
                <motion.div
                  key={symbol}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center space-x-2"
                >
                  <span className="text-slate-400 min-w-[60px]">{symbol}</span>
                  <motion.span
                    key={marketData.price}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white min-w-[80px]"
                  >
                    ${marketData.price.toFixed(2)}
                  </motion.span>
                  <span 
                    className={`flex items-center space-x-1 min-w-[80px] ${
                      marketData.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {marketData.change >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    <span>{Math.abs(marketData.change).toFixed(2)}%</span>
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}