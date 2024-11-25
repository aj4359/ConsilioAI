"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Features = Features;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function Features() {
    var features = [
        {
            icon: lucide_react_1.Brain,
            title: "AI-Powered Advice",
            description: "Get personalized financial guidance powered by advanced artificial intelligence"
        },
        {
            icon: lucide_react_1.TrendingUp,
            title: "Smart Analytics",
            description: "Real-time insights into your spending patterns and financial health"
        },
        {
            icon: lucide_react_1.PieChart,
            title: "Portfolio Management",
            description: "AI-optimized investment strategies tailored to your goals"
        },
        {
            icon: lucide_react_1.Bell,
            title: "Smart Alerts",
            description: "Never miss important financial opportunities or deadlines"
        },
        {
            icon: lucide_react_1.Shield,
            title: "Bank-Grade Security",
            description: "Your data is protected with military-grade encryption"
        },
        {
            icon: lucide_react_1.Zap,
            title: "Instant Insights",
            description: "Get immediate answers to your financial questions 24/7"
        }
    ];
    return (<section id="features" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Intelligent Financial Management
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experience the power of AI-driven financial planning
          </p>
        </framer_motion_1.motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(function (feature, index) { return (<framer_motion_1.motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
              <div className="bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-cyan-400"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </framer_motion_1.motion.div>); })}
        </div>
      </div>
    </section>);
}
