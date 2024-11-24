import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, User, Lock } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  socialMedia?: string;
}

interface Props {
  onClose?: () => void;
}

export function VisitorRegistration({ onClose }: Props) {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    phone: '',
    socialMedia: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const setVisitorRegistered = useAppStore(state => state.setVisitorRegistered);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store visitor data
    localStorage.setItem('visitorData', JSON.stringify(formData));
    setVisitorRegistered(true);
    setIsSubmitted(true);
    onClose?.();
  };

  if (isSubmitted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-slate-800 rounded-xl p-6 max-w-md w-full relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-500" />

        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Welcome to Consilio-AI</h2>
            {onClose && (
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          
          <p className="text-slate-300 mb-6">
            Register to access our free financial tools and AI-powered insights.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                LinkedIn/Twitter (Optional)
              </label>
              <input
                type="text"
                value={formData.socialMedia}
                onChange={(e) => setFormData({ ...formData, socialMedia: e.target.value })}
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                placeholder="https://linkedin.com/in/username"
              />
            </div>

            <div className="flex items-start mt-6">
              <div className="flex items-center h-5">
                <input
                  required
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-600 text-cyan-400 focus:ring-cyan-400"
                />
              </div>
              <label className="ml-2 block text-sm text-slate-300">
                I agree to receive financial insights and updates from Consilio-AI
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-2 rounded-lg hover:from-cyan-400 hover:to-indigo-400 transition-colors"
            >
              Get Started
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-400 text-center">
            Your data is encrypted and secure. View our{' '}
            <a href="/privacy" className="text-cyan-400 hover:text-cyan-300">
              Privacy Policy
            </a>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}