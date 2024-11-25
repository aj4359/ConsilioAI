"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinancialDashboard = FinancialDashboard;
var react_1 = require("react");
var react_query_1 = require("@tanstack/react-query");
var MarketOverview_1 = require("./MarketOverview");
var NewsWidget_1 = require("./NewsWidget");
var AIAdvisor_1 = require("./AIAdvisor");
var PremiumAlerts_1 = require("./PremiumAlerts");
var PortfolioAnalyzer_1 = require("./PortfolioAnalyzer");
var LiveMarketData_1 = require("./LiveMarketData");
var queryClient = new react_query_1.QueryClient();
function FinancialDashboard() {
    return (<react_query_1.QueryClientProvider client={queryClient}>
      <div className="py-12 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Financial Dashboard</h2>
          
          {/* Live Market Data */}
          <div className="mb-8">
            <LiveMarketData_1.LiveMarketData />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <MarketOverview_1.MarketOverview />
              <PremiumAlerts_1.PremiumAlerts />
              <AIAdvisor_1.AIAdvisor />
            </div>
            <div className="space-y-8">
              <PortfolioAnalyzer_1.PortfolioAnalyzer />
              <NewsWidget_1.NewsWidget />
            </div>
          </div>
        </div>
      </div>
    </react_query_1.QueryClientProvider>);
}
