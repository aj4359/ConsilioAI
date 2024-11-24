import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Settings } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';

export function RegionIndicator() {
  const { jurisdiction, setJurisdictionModalOpen } = useAppStore();

  if (!jurisdiction) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-20 right-6 z-50"
    >
      <button
        onClick={() => setJurisdictionModalOpen(true)}
        className="flex items-center space-x-2 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700 hover:border-cyan-500/50 transition-colors group"
      >
        <MapPin className="h-4 w-4 text-cyan-400" />
        <span className="text-sm text-slate-300">{jurisdiction === 'US' ? 'United States' : 'United Kingdom'}</span>
        <Settings className="h-3 w-3 text-slate-400 group-hover:text-cyan-400 transition-colors" />
      </button>
    </motion.div>
  );
}