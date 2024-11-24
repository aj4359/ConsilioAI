import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

interface AIAvatarProps {
  isListening?: boolean;
  isFloating?: boolean;
  scale?: number;
}

export function AIAvatar({ 
  isListening, 
  isFloating = false,
  scale = 1 
}: AIAvatarProps) {
  return (
    <motion.div
      animate={isFloating ? {
        y: [0, -10, 0],
        rotate: [-1, 1, -1],
      } : undefined}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="relative"
      style={{ 
        width: `${64 * scale}px`, 
        height: `${64 * scale}px` 
      }}
    >
      {/* Base Circle */}
      <div className="absolute inset-0 bg-slate-900 rounded-full border border-cyan-500/30" />
      
      {/* Glowing Effect */}
      <motion.div
        className="absolute inset-0 bg-cyan-400 rounded-full blur-xl"
        animate={{
          opacity: isListening ? [0.2, 0.4, 0.2] : 0.1,
          scale: isListening ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Avatar Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Brain className="h-8 w-8 text-cyan-400" />
      </div>

      {/* Status Indicator */}
      <motion.div
        className="absolute -right-1 -top-1 w-4 h-4 bg-cyan-400 rounded-full"
        animate={{
          scale: isListening ? [1, 1.2, 1] : 1,
          opacity: isListening ? [0.5, 1, 0.5] : 0.7,
          boxShadow: isListening 
            ? ['0 0 10px rgba(34, 211, 238, 0.5)', '0 0 20px rgba(34, 211, 238, 0.7)', '0 0 10px rgba(34, 211, 238, 0.5)']
            : '0 0 10px rgba(34, 211, 238, 0.3)'
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}