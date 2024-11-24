import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Demo } from '../components/Demo';
import { DemoVideo } from '../components/DemoVideo';
import { Pricing } from '../components/Pricing';
import { ReferralSystem } from '../components/ReferralSystem';
import { FinancialIntegrations } from '../components/FinancialIntegrations';
import { Compliance } from '../components/Compliance';
import { Footer } from '../components/Footer';
import { Chatbot } from '../components/Chatbot';
import { FloatingBenson } from '../components/FloatingBenson';
import { TrustLogos } from '../components/TrustLogos';
import { AffiliateDeals } from '../components/AffiliateDeals';
import { WaitlistSignup } from '../components/WaitlistSignup';
import { FinancialDashboard } from '../components/financial/FinancialDashboard';
import { SupportChat } from '../components/support/SupportChat';
import { BensonGuide } from '../components/BensonGuide';

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
      </div>

      <div className="relative w-full max-w-[2000px] mx-auto">
        <Header />
        <main className="min-h-screen">
          <Hero />
          <TrustLogos />
          <Features />
          <div id="financial-dashboard">
            <FinancialDashboard />
          </div>
          <DemoVideo />
          <Demo />
          <div id="ai-advisor">
            <AffiliateDeals />
          </div>
          <WaitlistSignup />
          <div id="premium-features">
            <Pricing />
          </div>
          <ReferralSystem />
          <FinancialIntegrations />
          <Compliance />
        </main>
        <Footer />
        <FloatingBenson />
        <Chatbot />
        <SupportChat />
        <BensonGuide />
      </div>
    </div>
  );
}