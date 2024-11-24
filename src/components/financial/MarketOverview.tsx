import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, BarChart2 } from 'lucide-react';
import { getStockData } from '../../services/financial';

const WATCHED_SYMBOLS = ['AAPL', 'GOOGL', 'MSFT', 'AMZN'];

export function MarketOverview() {
  const { data: stocksData, isLoading } = useQuery({
    queryKey: ['stocks'],
    queryFn: async () => {
      try {
        const data = await Promise.all(
          WATCHED_SYMBOLS.map(symbol => getStockData(symbol))
        );
        return WATCHED_SYMBOLS.map((symbol, index) => ({
          symbol,
          data: data[index]
        }));
      } catch (error) {
        console.error('Failed to fetch stocks data:', error);
        return [];
      }
    },
    refetchInterval: 30000
  });

  if (isLoading) {
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative"
      >
        {/* Glowing Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5 rounded-xl" />
        
        <h3 className="text-xl font-semibold text-white mb-6 flex items-center relative z-10">
          <BarChart2 className="h-5 w-5 text-cyan-400 mr-2" />
          Market Overview
        </h3>

        <div className="space-y-4">
          {stocksData?.map(({ symbol, data }, index) => {
            const priceChange = data.c - data.pc;
            const percentageChange = (priceChange / data.pc) * 100;
            const isPositive = priceChange >= 0;

            return (
              <motion.div
                key={symbol}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50 relative overflow-hidden group"
              >
                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    opacity: [0, 0.5, 0],
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
                    <p className={`text-sm flex items-center ${
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
        </div>
      </motion.div>
    </div>
  );
}