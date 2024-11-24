import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { TrendingUp, TrendingDown, Newspaper } from 'lucide-react';
import { getMarketNews, getCryptoPrices, getForexRates } from '../../services/financial';

export function MarketTicker() {
  // Real-time market data queries with 5s refresh
  const { data: cryptoData } = useQuery({
    queryKey: ['crypto'],
    queryFn: getCryptoPrices,
    refetchInterval: 5000
  });

  const { data: forexData } = useQuery({
    queryKey: ['forex'],
    queryFn: getForexRates,
    refetchInterval: 5000
  });

  const { data: newsData } = useQuery({
    queryKey: ['market-news'],
    queryFn: getMarketNews,
    refetchInterval: 30000
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 z-40">
      <div className="container mx-auto">
        {/* Scrolling Ticker */}
        <div className="relative h-12 overflow-hidden">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute flex items-center space-x-8 h-full"
          >
            {/* Crypto Prices */}
            {cryptoData && Object.entries(cryptoData).map(([coin, data]: any) => (
              <div key={coin} className="flex items-center space-x-2">
                <span className="text-slate-400">{coin.toUpperCase()}</span>
                <span className="text-white">${data.usd.toFixed(2)}</span>
                <span className={data.usd_24h_change > 0 ? 'text-green-400' : 'text-red-400'}>
                  {data.usd_24h_change > 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                </span>
              </div>
            ))}

            {/* Forex Rates */}
            {forexData && Object.entries(forexData.rates).map(([currency, rate]: any) => (
              <div key={currency} className="flex items-center space-x-2">
                <span className="text-slate-400">{currency}/USD</span>
                <span className="text-white">{rate.toFixed(4)}</span>
              </div>
            ))}

            {/* Breaking News */}
            {newsData?.map((news: any, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <Newspaper className="h-4 w-4 text-cyan-400" />
                <span className="text-white whitespace-nowrap">{news.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}