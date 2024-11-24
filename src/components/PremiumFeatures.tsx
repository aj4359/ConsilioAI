import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  FileText, 
  Bell, 
  PieChart, 
  Calendar,
  BookOpen,
  Video,
  MessageSquare,
  Users
} from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: "AI Investment Advisor",
    description: "Personalized investment recommendations based on your risk profile and goals"
  },
  {
    icon: Target,
    title: "Goal Planning",
    description: "Smart milestones and tracking for retirement, home buying, or education"
  },
  {
    icon: FileText,
    title: "Tax Optimization",
    description: "AI-powered tax strategies and deduction recommendations"
  },
  {
    icon: Bell,
    title: "Market Alerts",
    description: "Real-time notifications for market opportunities and portfolio rebalancing"
  },
  {
    icon: PieChart,
    title: "Wealth Dashboard",
    description: "Comprehensive view of all your assets, liabilities, and net worth"
  },
  {
    icon: Calendar,
    title: "Bill Management",
    description: "Smart bill tracking and optimization suggestions"
  },
  {
    icon: BookOpen,
    title: "Financial Education",
    description: "Personalized learning paths and market insights"
  },
  {
    icon: Video,
    title: "Expert Webinars",
    description: "Monthly live sessions with financial experts"
  },
  {
    icon: MessageSquare,
    title: "Priority Support",
    description: "24/7 access to financial advisors"
  },
  {
    icon: Users,
    title: "Community Access",
    description: "Private community of investors and weekly mastermind sessions"
  }
];

export function PremiumFeatures() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-slate-800 mb-4"
          >
            Premium Member Benefits
          </motion.h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Unlock powerful AI-driven tools and expert guidance to accelerate your financial success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Limited Time Offer
          </h3>
          <p className="text-indigo-100 mb-6">
            Get 3 months of premium access for the price of 2 when you subscribe today
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors"
          >
            Claim Your Discount
          </motion.button>
        </div>
      </div>
    </section>
  );
}