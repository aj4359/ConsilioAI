"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BensonAvatar = BensonAvatar;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
function BensonAvatar(_a) {
    var isListening = _a.isListening, isSpeaking = _a.isSpeaking, _b = _a.isFloating, isFloating = _b === void 0 ? false : _b, _c = _a.scale, scale = _c === void 0 ? 1 : _c;
    var controls = (0, framer_motion_1.useAnimation)();
    var audioRef = (0, react_1.useRef)(null);
    var _d = (0, react_1.useState)(false), imageLoaded = _d[0], setImageLoaded = _d[1];
    (0, react_1.useEffect)(function () {
        if (isFloating) {
            controls.start({
                y: [0, -10, 0],
                rotate: [-1, 1, -1],
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            });
        }
    }, [isFloating, controls]);
    (0, react_1.useEffect)(function () {
        if (isSpeaking && audioRef.current) {
            audioRef.current.play();
        }
    }, [isSpeaking]);
    return (<framer_motion_1.motion.div animate={controls} className={"relative ".concat(isFloating ? 'cursor-pointer' : '')} style={{
            width: "".concat(64 * scale, "px"),
            height: "".concat(64 * scale, "px")
        }}>
      {/* Base Circle */}
      <div className="absolute inset-0 bg-slate-900 rounded-full"/>

      {/* Glowing Effect */}
      <framer_motion_1.motion.div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl" animate={{
            opacity: isListening ? [0.2, 0.4, 0.2] : 0.1,
            scale: isListening ? [1, 1.1, 1] : 1,
        }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }}/>

      {/* Avatar Container */}
      <framer_motion_1.motion.div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-slate-900" animate={{
            scale: isListening ? [0.95, 1, 0.95] : 1,
        }} transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }}>
        {/* Fallback Avatar */}
        {!imageLoaded && (<div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-cyan-400">
            <svg className="w-1/2 h-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="5"/>
              <path d="M20 21a8 8 0 1 0-16 0"/>
            </svg>
          </div>)}

        {/* Actual Avatar Image */}
        <img src="/benson-avatar.png" alt="Benson AI Assistant" className={"w-full h-full object-cover transition-opacity duration-300 ".concat(imageLoaded ? 'opacity-100' : 'opacity-0')} style={{
            filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.3))',
        }} onLoad={function () { return setImageLoaded(true); }} onError={function (e) {
            console.error('Failed to load Benson avatar:', e);
            var imgElement = e.target;
            imgElement.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNSIvPjxwYXRoIGQ9Ik0yMCAyMWE4IDggMCAxIDAtMTYgMCIvPjwvc3ZnPg==';
        }}/>
      </framer_motion_1.motion.div>

      {/* Voice Indicator */}
      {isSpeaking && (<framer_motion_1.motion.div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1.5" style={{ filter: 'blur(0.5px)' }}>
          <framer_motion_1.motion.div className="flex justify-between h-full">
            {__spreadArray([], Array(5), true).map(function (_, i) { return (<framer_motion_1.motion.div key={i} className="w-1.5 bg-cyan-400 rounded-full" animate={{
                    height: ['40%', '100%', '40%'],
                }} transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                }}/>); })}
          </framer_motion_1.motion.div>
        </framer_motion_1.motion.div>)}

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

      {/* Hidden Audio Element */}
      <audio ref={audioRef} className="hidden">
        <source src="/audio/benson-greeting.mp3" type="audio/mpeg"/>
      </audio>
    </framer_motion_1.motion.div>);
}
