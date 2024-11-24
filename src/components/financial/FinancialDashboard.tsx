import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MarketOverview } from './MarketOverview';
import { NewsWidget } from './NewsWidget';
import { AIAdvisor } from './AIAdvisor';
import { PremiumAlerts } from './PremiumAlerts';
import { PortfolioAnalyzer } from './PortfolioAnalyzer';
import { LiveMarketData } from './LiveMarketData';

const queryClient = new QueryClient();

export function FinancialDashboard() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="py-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Financial Dashboard</h2>
          
          {/* Live Market Data */}
          <div className="mb-8">
            <LiveMarketData />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <MarketOverview />
              <PremiumAlerts />
              <AIAdvisor />
            </div>
            <div className="space-y-8">
              <PortfolioAnalyzer />
              <NewsWidget />
            </div>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}