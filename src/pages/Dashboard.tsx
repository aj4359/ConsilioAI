import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FinancialDashboard } from '../components/financial/FinancialDashboard';
import { PortfolioManager } from '../components/dashboard/PortfolioManager';
import { GoalTracker } from '../components/dashboard/GoalTracker';
import { TransactionHistory } from '../components/dashboard/TransactionHistory';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          <FinancialDashboard />
          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <PortfolioManager />
            <GoalTracker />
          </div>
          <TransactionHistory />
        </div>
      </main>
      <Footer />
    </div>
  );
}