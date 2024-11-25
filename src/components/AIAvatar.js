"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAvatar = AIAvatar;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function AIAvatar(_a) {
    var isListening = _a.isListening, _b = _a.isFloating, isFloating = _b === void 0 ? false : _b, _c = _a.scale, scale = _c === void 0 ? 1 : _c;
    return (<framer_motion_1.motion.div animate={isFloating ? {
            y: [0, -10, 0],
            rotate: [-1, 1, -1],
        } : undefined} transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }} className="relative" style={{
            width: "".concat(64 * scale, "px"),
            height: "".concat(64 * scale, "px")
        }}>
      {/* Base Circle */}
      <div className="absolute inset-0 bg-slate-900 rounded-full border border-cyan-500/30"/>
      
      {/* Glowing Effect */}
      <framer_motion_1.motion.div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl" animate={{
            opacity: isListening ? [0.2, 0.4, 0.2] : 0.1,
            scale: isListening ? [1, 1.1, 1] : 1,
        }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }}/>

      {/* Avatar Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <lucide_react_1.Brain className="h-8 w-8 text-cyan-400"/>
      </div>

      {/* Status Indicator */}
      <framer_motion_1.motion.div className="absolute -right-1 -top-1 w-4 h-4 bg-cyan-400 rounded-full" animate={{
            scale: isListening ? [1, 1.2, 1] : 1,
            opacity: isListening ? [0.5, 1, 0.5] : 0.7,
            boxShadow: isListening
                ? ['0 0 10px rgba(34, 211, 238, 0.5)', '0 0 20px rgba(34, 211, 238, 0.7)', '0 0 10px rgba(34, 211, 238, 0.5)']
                : '0 0 10px rgba(34, 211, 238, 0.3)'
        }} transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
        }}/>
    </framer_motion_1.motion.div>);
}
