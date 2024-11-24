import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Goldman Sachs',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs.svg',
    link: 'https://www.goldmansachs.com'
  },
  {
    name: 'JPMorgan Chase',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/J.P._Morgan_Logo_2008_1.svg',
    link: 'https://www.jpmorgan.com'
  },
  {
    name: 'Morgan Stanley',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Morgan_Stanley_Logo_1.svg',
    link: 'https://www.morganstanley.com'
  },
  {
    name: 'BlackRock',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/BlackRock_wordmark.svg',
    link: 'https://www.blackrock.com'
  }
];

export function PartnerLogos() {
  return (
    <div className="bg-slate-900/50 backdrop-blur-sm py-8">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm text-slate-400 mb-6">
          Trusted by Leading Financial Institutions
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <motion.a
              key={partner.name}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}