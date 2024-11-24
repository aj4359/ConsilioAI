import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Menu, X } from 'lucide-react';
import { useNavigationStore } from '../store/useNavigationStore';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { navigateTo } = useNavigationStore();

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const menuItems = [
    { label: 'Features', id: 'features' },
    { label: 'Dashboard', id: 'financial-dashboard' },
    { label: 'AI Advisor', id: 'ai-advisor' }
  ];

  const handleNavigation = (id: string) => {
    navigateTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full backdrop-blur-md z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center space-x-2"
          >
            <Brain className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">
              Consilio-AI
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('ai-advisor')}
              className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-indigo-400"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="block w-full text-left text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('ai-advisor')}
              className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-2 rounded-lg"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}