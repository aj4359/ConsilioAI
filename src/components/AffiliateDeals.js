"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffiliateDeals = AffiliateDeals;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function AffiliateDeals() {
    var deals = [
        {
            partner: 'Charles Schwab',
            offer: 'Get $500 when you open a new account',
            terms: 'Minimum deposit of $25,000 required',
            link: '/partners/schwab'
        },
        {
            partner: 'Fidelity',
            offer: '300 free trades for new accounts',
            terms: 'Valid for first 12 months',
            link: '/partners/fidelity'
        },
        {
            partner: 'E*TRADE',
            offer: 'Up to $3,500 bonus + zero commissions',
            terms: 'Based on deposit amount',
            link: '/partners/etrade'
        }
    ];
    return (<section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Exclusive Partner Offers</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Take advantage of special deals from our trusted financial partners
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {deals.map(function (deal, index) { return (<framer_motion_1.motion.div key={deal.partner} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{deal.partner}</h3>
                <lucide_react_1.Star className="h-5 w-5 text-yellow-400"/>
              </div>
              
              <p className="text-cyan-400 text-lg font-medium mb-2">{deal.offer}</p>
              <p className="text-slate-400 text-sm mb-6">{deal.terms}</p>
              
              <a href={deal.link} className="inline-flex items-center text-white bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 rounded-lg hover:from-cyan-400 hover:to-indigo-400 transition-colors">
                Claim Offer <lucide_react_1.ArrowRight className="ml-2 h-4 w-4"/>
              </a>
            </framer_motion_1.motion.div>); })}
        </div>

        {/* Advertisement Space */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <framer_motion_1.motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.1),transparent_50%)]"/>
            <div className="relative z-10">
              <lucide_react_1.Shield className="h-12 w-12 text-purple-400 mb-4"/>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Investment Tools</h3>
              <p className="text-slate-300 mb-6">Access professional-grade financial analysis tools</p>
              <a href="/premium" className="text-purple-400 hover:text-purple-300 font-medium">
                Learn More →
              </a>
            </div>
          </framer_motion_1.motion.div>

          <framer_motion_1.motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(34,211,238,0.1),transparent_50%)]"/>
            <div className="relative z-10">
              <lucide_react_1.Zap className="h-12 w-12 text-cyan-400 mb-4"/>
              <h3 className="text-2xl font-bold text-white mb-4">AI Trading Signals</h3>
              <p className="text-slate-300 mb-6">Get real-time market insights powered by AI</p>
              <a href="/signals" className="text-cyan-400 hover:text-cyan-300 font-medium">
                Learn More →
              </a>
            </div>
          </framer_motion_1.motion.div>
        </div>
      </div>
    </section>);
}
