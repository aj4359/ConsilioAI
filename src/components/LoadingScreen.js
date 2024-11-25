"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingScreen = LoadingScreen;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function LoadingScreen() {
    return (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <framer_motion_1.motion.div animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
        }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }} className="relative">
        <lucide_react_1.Brain className="h-16 w-16 text-indigo-600"/>
        <framer_motion_1.motion.div animate={{
            opacity: [0, 1, 0],
        }} transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }} className="absolute inset-0 bg-indigo-400 blur-xl opacity-50 rounded-full"/>
      </framer_motion_1.motion.div>
      <framer_motion_1.motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="absolute mt-24 text-slate-600 font-medium">
        Loading your financial insights...
      </framer_motion_1.motion.p>
    </framer_motion_1.motion.div>);
}
