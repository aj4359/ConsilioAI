import React from 'react';
import { motion } from 'framer-motion';

export function TrustLogos() {
  const logos = [
    { name: 'FINRA', src: '/logos/finra.svg' },
    { name: 'SEC', src: '/logos/sec.svg' },
    { name: 'NYSE', src: '/logos/nyse.svg' },
    { name: 'Bloomberg', src: '/logos/bloomberg.svg' },
    { name: 'Wall Street Journal', src: '/logos/wsj.svg' },
    { name: 'Forbes', src: '/logos/forbes.svg' }
  ];

  const affiliates = [
    { name: 'Charles Schwab', src: '/logos/schwab.svg' },
    { name: 'Fidelity', src: '/logos/fidelity.svg' },
    { name: 'E*TRADE', src: '/logos/etrade.svg' },
    { name: 'TD Ameritrade', src: '/logos/td-ameritrade.svg' }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Featured In */}
        <div className="text-center mb-12">
          <h3 className="text-lg font-medium text-slate-400 mb-8">Featured In</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="object-contain w-full h-full opacity-50 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Affiliate Partners */}
        <div className="text-center mt-16">
          <h3 className="text-lg font-medium text-slate-400 mb-8">Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {affiliates.map((partner, index) => (
              <motion.a
                key={partner.name}
                href={`/partners/${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="w-32 h-12 relative grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={partner.src}
                  alt={`${partner.name} logo`}
                  className="object-contain w-full h-full opacity-50 hover:opacity-100 transition-opacity"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-800/50 p-6 rounded-xl text-center"
          >
            <img src="/badges/sec-registered.svg" alt="SEC Registered" className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-white font-medium mb-2">SEC Registered</h4>
            <p className="text-slate-400 text-sm">Registered investment advisor with the Securities and Exchange Commission</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-800/50 p-6 rounded-xl text-center"
          >
            <img src="/badges/finra-member.svg" alt="FINRA Member" className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-white font-medium mb-2">FINRA Member</h4>
            <p className="text-slate-400 text-sm">Member of the Financial Industry Regulatory Authority</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 p-6 rounded-xl text-center"
          >
            <img src="/badges/sipc-protected.svg" alt="SIPC Protected" className="w-16 h-16 mx-auto mb-4" />
            <h4 className="text-white font-medium mb-2">SIPC Protected</h4>
            <p className="text-slate-400 text-sm">Securities Investor Protection Corporation member</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}