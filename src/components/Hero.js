"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = Hero;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var AIAvatar_1 = require("./AIAvatar");
var useAppStore_1 = require("../store/useAppStore");
var VisitorRegistration_1 = require("./VisitorRegistration");
function Hero() {
    var setCurrentView = (0, useAppStore_1.useAppStore)().setCurrentView;
    var _a = (0, react_1.useState)(false), showRegistration = _a[0], setShowRegistration = _a[1];
    var handleGetStarted = function () {
        setShowRegistration(true);
    };
    return (<section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="container mx-auto text-center relative">
        <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex justify-center mb-8">
            <framer_motion_1.motion.div animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
        }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }}>
              <AIAvatar_1.AIAvatar scale={2.5} isFloating/>
            </framer_motion_1.motion.div>
          </div>

          <framer_motion_1.motion.h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
            Your AI Financial Advisor,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Always On
            </span>
          </framer_motion_1.motion.h1>
          
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Experience the future of financial planning with our AI-powered advisor
          </p>

          <framer_motion_1.motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleGetStarted} className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-8 py-3 rounded-full font-medium hover:from-cyan-400 hover:to-indigo-400 transition-colors">
            Start Your Journey
          </framer_motion_1.motion.button>
        </framer_motion_1.motion.div>
      </div>

      {showRegistration && (<VisitorRegistration_1.VisitorRegistration onClose={function () { return setShowRegistration(false); }}/>)}
    </section>);
}
