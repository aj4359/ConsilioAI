"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dashboard;
var react_1 = require("react");
var Header_1 = require("../components/Header");
var Footer_1 = require("../components/Footer");
var FinancialDashboard_1 = require("../components/financial/FinancialDashboard");
var PortfolioManager_1 = require("../components/dashboard/PortfolioManager");
var GoalTracker_1 = require("../components/dashboard/GoalTracker");
var TransactionHistory_1 = require("../components/dashboard/TransactionHistory");
function Dashboard() {
    return (<div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
      <Header_1.Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          <FinancialDashboard_1.FinancialDashboard />
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <PortfolioManager_1.PortfolioManager />
            <GoalTracker_1.GoalTracker />
          </div>
          <TransactionHistory_1.TransactionHistory />
        </div>
      </main>
      <Footer_1.Footer />
    </div>);
}
