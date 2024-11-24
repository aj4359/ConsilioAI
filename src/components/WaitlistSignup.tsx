import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Brain, Users, TrendingUp } from 'lucide-react';

export function WaitlistSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [position, setPosition] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setPosition(Math.floor(Math.random() * 100) + 400); // Simulate waitlist position
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Get personalized financial advice powered by advanced AI"
    },
    {
      icon: Users,
      title: "Early Access",
      description: "Be among the first to experience revolutionary AI financial planning"
    },
    {
      icon: TrendingUp,
      title: "Founder Benefits",
      description: "Special perks and lifetime benefits for early adopters"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Join the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              AI Financial Planning
            </span>
          </motion.h2>
          <p className="text-xl text-slate-300 mb-8">
            Be part of the exclusive group getting early access to Consilio-AI's revolutionary platform
          </p>

          {!submitted ? (
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto mb-12"
            >
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-400 hover:to-indigo-400 transition-colors flex items-center"
                >
                  Join <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-800/50 p-8 rounded-2xl max-w-md mx-auto mb-12"
            >
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">You're In!</h3>
              <p className="text-slate-300 mb-4">
                You're #{position} on the waitlist
              </p>
              <div className="text-sm text-slate-400">
                We'll notify you when it's your turn to join Consilio-AI
              </div>
            </motion.div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm"
            >
              <feature.icon className="h-8 w-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400">
            Already {position + 1243} people have joined the waitlist
          </p>
        </motion.div>
      </div>
    </section>
  );
}