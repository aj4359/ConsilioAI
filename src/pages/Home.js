"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var react_1 = require("react");
var Header_1 = require("../components/Header");
var Hero_1 = require("../components/Hero");
var Features_1 = require("../components/Features");
var Demo_1 = require("../components/Demo");
var DemoVideo_1 = require("../components/DemoVideo");
var Pricing_1 = require("../components/Pricing");
var ReferralSystem_1 = require("../components/ReferralSystem");
var FinancialIntegrations_1 = require("../components/FinancialIntegrations");
var Compliance_1 = require("../components/Compliance");
var Footer_1 = require("../components/Footer");
var Chatbot_1 = require("../components/Chatbot");
var FloatingBenson_1 = require("../components/FloatingBenson");
var TrustLogos_1 = require("../components/TrustLogos");
var AffiliateDeals_1 = require("../components/AffiliateDeals");
var WaitlistSignup_1 = require("../components/WaitlistSignup");
var FinancialDashboard_1 = require("../components/financial/FinancialDashboard");
var SupportChat_1 = require("../components/support/SupportChat");
var BensonGuide_1 = require("../components/BensonGuide");
function Home() {
    return (<div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
      {/* Ambient Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"/>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"/>
      </div>

      <div className="relative w-full max-w-[2000px] mx-auto">
        <Header_1.Header />
        <main className="min-h-screen">
          <Hero_1.Hero />
          <TrustLogos_1.TrustLogos />
          <Features_1.Features />
          <div id="financial-dashboard">
            <FinancialDashboard_1.FinancialDashboard />
          </div>
          <DemoVideo_1.DemoVideo />
          <Demo_1.Demo />
          <div id="ai-advisor">
            <AffiliateDeals_1.AffiliateDeals />
          </div>
          <WaitlistSignup_1.WaitlistSignup />
          <div id="premium-features">
            <Pricing_1.Pricing />
          </div>
          <ReferralSystem_1.ReferralSystem />
          <FinancialIntegrations_1.FinancialIntegrations />
          <Compliance_1.Compliance />
        </main>
        <Footer_1.Footer />
        <FloatingBenson_1.FloatingBenson />
        <Chatbot_1.Chatbot />
        <SupportChat_1.SupportChat />
        <BensonGuide_1.BensonGuide />
      </div>
    </div>);
}
