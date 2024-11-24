import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { useNavigationStore } from '../store/useNavigationStore';

export function Navigation() {
  const { currentSection, breadcrumbs, navigateTo } = useNavigationStore();

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'financial-dashboard', label: 'Dashboard' },
    { id: 'ai-advisor', label: 'AI Advisor' },
    { id: 'features', label: 'Features' }
  ];

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="py-2 flex items-center text-sm">
          <button 
            onClick={() => navigateTo('home')}
            className="text-slate-400 hover:text-white flex items-center"
          >
            <Home className="h-4 w-4" />
          </button>
          
          {breadcrumbs.slice(1).map((crumb, index) => (
            <React.Fragment key={crumb}>
              <ChevronRight className="h-4 w-4 mx-2 text-slate-600" />
              <span className="text-slate-300">{crumb}</span>
            </React.Fragment>
          ))}
        </div>

        {/* Section Navigation */}
        <div className="flex space-x-6 py-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => navigateTo(section.id)}
              className={`relative px-4 py-2 text-sm transition-colors ${
                currentSection === section.id
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {section.label}
              {currentSection === section.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}