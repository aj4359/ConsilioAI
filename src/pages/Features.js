"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Features;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var Header_1 = require("../components/Header");
var Footer_1 = require("../components/Footer");
var PremiumFeatures_1 = require("../components/PremiumFeatures");
var AIFeatures_1 = require("../components/features/AIFeatures");
var InvestmentTools_1 = require("../components/features/InvestmentTools");
var SecurityFeatures_1 = require("../components/features/SecurityFeatures");
function Features() {
    return (<div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
      <Header_1.Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <framer_motion_1.motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white text-center mb-8">
              Platform Features
            </framer_motion_1.motion.h1>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <AIFeatures_1.AIFeatures />
              <InvestmentTools_1.InvestmentTools />
              <SecurityFeatures_1.SecurityFeatures />
            </div>

            <PremiumFeatures_1.PremiumFeatures />
          </div>
        </section>
      </main>
      <Footer_1.Footer />
    </div>);
}
