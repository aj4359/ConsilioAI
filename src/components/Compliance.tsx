import React from 'react';
import { Shield, Award, BookOpen, Scale } from 'lucide-react';

const certifications = [
  {
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    title: "SEC Compliant",
    description: "Our AI models adhere to SEC guidelines and regulatory requirements for financial advice"
  },
  {
    icon: <Award className="h-8 w-8 text-indigo-600" />,
    title: "CFP® Standards",
    description: "AI training based on Certified Financial Planner™ professional standards"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
    title: "FINRA Aligned",
    description: "Follows FINRA's best practices for investor protection and market integrity"
  },
  {
    icon: <Scale className="h-8 w-8 text-indigo-600" />,
    title: "Fiduciary Standard",
    description: "Committed to putting clients' interests first in all recommendations"
  }
];

export function Compliance() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            Professional Standards & Compliance
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our AI advisors are trained to meet the same high standards required of top US financial professionals, ensuring you receive qualified, compliant financial guidance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl">
              <div className="bg-white w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                {cert.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {cert.title}
              </h3>
              <p className="text-slate-600 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">
            Our Commitment to Excellence
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="space-y-3">
              <p className="text-slate-700">
                ✓ Regular updates to match evolving financial regulations
              </p>
              <p className="text-slate-700">
                ✓ Continuous model training with industry experts
              </p>
              <p className="text-slate-700">
                ✓ Strict adherence to ethical guidelines
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-slate-700">
                ✓ Real-time compliance monitoring
              </p>
              <p className="text-slate-700">
                ✓ Transparent decision-making process
              </p>
              <p className="text-slate-700">
                ✓ Regular third-party audits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}