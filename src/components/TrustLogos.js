"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrustLogos = TrustLogos;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
function TrustLogos() {
    var logos = [
        { name: 'FINRA', src: '/logos/finra.svg' },
        { name: 'SEC', src: '/logos/sec.svg' },
        { name: 'NYSE', src: '/logos/nyse.svg' },
        { name: 'Bloomberg', src: '/logos/bloomberg.svg' },
        { name: 'Wall Street Journal', src: '/logos/wsj.svg' },
        { name: 'Forbes', src: '/logos/forbes.svg' }
    ];
    var affiliates = [
        { name: 'Charles Schwab', src: '/logos/schwab.svg' },
        { name: 'Fidelity', src: '/logos/fidelity.svg' },
        { name: 'E*TRADE', src: '/logos/etrade.svg' },
        { name: 'TD Ameritrade', src: '/logos/td-ameritrade.svg' }
    ];
    return (<section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Featured In */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-slate-400 mb-8">Featured In</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {logos.map(function (logo, index) { return (<framer_motion_1.motion.div key={logo.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all">
                <img src={logo.src} alt={"".concat(logo.name, " logo")} className="object-contain w-full h-full opacity-50 hover:opacity-100 transition-opacity"/>
              </framer_motion_1.motion.div>); })}
          </div>
        </div>

        {/* Affiliate Partners */}
        <div className="text-center mt-16">
          <h3 className="text-lg font-medium text-slate-400 mb-8">Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {affiliates.map(function (partner, index) { return (<framer_motion_1.motion.a key={partner.name} href={"/partners/".concat(partner.name.toLowerCase().replace(/\s+/g, '-'))} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all">
                <img src={partner.src} alt={"".concat(partner.name, " logo")} className="object-contain w-full h-full opacity-50 hover:opacity-100 transition-opacity"/>
              </framer_motion_1.motion.a>); })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-slate-800/50 p-6 rounded-xl text-center">
            <img src="/badges/sec-registered.svg" alt="SEC Registered" className="w-16 h-16 mx-auto mb-4"/>
            <h4 className="text-white font-medium mb-2">SEC Registered</h4>
            <p className="text-slate-400 text-sm">Registered investment advisor with the Securities and Exchange Commission</p>
          </framer_motion_1.motion.div>

          <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-slate-800/50 p-6 rounded-xl text-center">
            <img src="/badges/finra-member.svg" alt="FINRA Member" className="w-16 h-16 mx-auto mb-4"/>
            <h4 className="text-white font-medium mb-2">FINRA Member</h4>
            <p className="text-slate-400 text-sm">Member of the Financial Industry Regulatory Authority</p>
          </framer_motion_1.motion.div>

          <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-slate-800/50 p-6 rounded-xl text-center">
            <img src="/badges/sipc-protected.svg" alt="SIPC Protected" className="w-16 h-16 mx-auto mb-4"/>
            <h4 className="text-white font-medium mb-2">SIPC Protected</h4>
            <p className="text-slate-400 text-sm">Securities Investor Protection Corporation member</p>
          </framer_motion_1.motion.div>
        </div>
      </div>
    </section>);
}
