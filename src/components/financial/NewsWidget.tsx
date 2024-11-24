import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink } from 'lucide-react';
import { getMarketNews } from '../../services/financial';

export function NewsWidget() {
  const { data: news, isLoading } = useQuery({
    queryKey: ['market-news'],
    queryFn: getMarketNews,
    refetchInterval: 300000 // Refresh every 5 minutes
  });

  if (isLoading) {
    return (
      <div className="animate-pulse bg-slate-800/50 rounded-xl p-6">
        <div className="h-8 w-48 bg-slate-700 rounded mb-4"></div>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-24 bg-slate-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
        <Newspaper className="h-5 w-5 text-cyan-400 mr-2" />
        Market News
      </h3>

      <div className="space-y-4">
        {news?.slice(0, 5).map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="block bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h4 className="text-white font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 line-clamp-2">
                  {item.summary}
                </p>
                <div className="mt-2 flex items-center text-xs text-slate-500">
                  <span>{item.source}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(item.time_published).toLocaleDateString()}</span>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 ml-2 flex-shrink-0" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}