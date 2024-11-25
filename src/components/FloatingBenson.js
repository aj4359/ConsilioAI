"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FloatingBenson = FloatingBenson;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var AIAvatar_1 = require("./AIAvatar");
var lucide_react_1 = require("lucide-react");
var AIService_1 = require("../services/ai/AIService");
var useAppStore_1 = require("../store/useAppStore");
function FloatingBenson() {
    var _this = this;
    var _a = (0, react_1.useState)(false), isListening = _a[0], setIsListening = _a[1];
    var _b = (0, react_1.useState)(''), transcript = _b[0], setTranscript = _b[1];
    var _c = (0, react_1.useState)(''), feedback = _c[0], setFeedback = _c[1];
    var _d = (0, react_1.useState)(false), isRefreshing = _d[0], setIsRefreshing = _d[1];
    var _e = (0, useAppStore_1.useAppStore)(), jurisdiction = _e.jurisdiction, resetAppState = _e.resetAppState;
    var handleUserInput = function (input) { return __awaiter(_this, void 0, void 0, function () {
        var response, utterance, voices, maleVoice, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!input.trim())
                        return [2 /*return*/];
                    setFeedback('Processing your request...');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, AIService_1.getFinancialAdvice)(input, jurisdiction || 'US')];
                case 2:
                    response = _a.sent();
                    setFeedback(response);
                    // Text-to-speech
                    if ('speechSynthesis' in window) {
                        utterance = new SpeechSynthesisUtterance(response);
                        voices = speechSynthesis.getVoices();
                        maleVoice = voices.find(function (voice) {
                            return voice.name.toLowerCase().includes('male') ||
                                voice.name.toLowerCase().includes('guy');
                        });
                        if (maleVoice)
                            utterance.voice = maleVoice;
                        speechSynthesis.speak(utterance);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Failed to process input:', error_1);
                    setFeedback('Sorry, I had trouble with that. Please try again.');
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var toggleListening = function () {
        if (!isListening) {
            // Start browser's speech recognition
            var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                var recognition = new SpeechRecognition();
                recognition.continuous = false;
                recognition.interimResults = false;
                recognition.onresult = function (event) {
                    var transcript = event.results[0][0].transcript;
                    setTranscript(transcript);
                    handleUserInput(transcript);
                };
                recognition.onerror = function (event) {
                    console.error('Speech recognition error:', event.error);
                    setFeedback('Sorry, I had trouble hearing that. Please try again.');
                    setIsListening(false);
                };
                recognition.start();
                setIsListening(true);
                setFeedback('Listening...');
            }
            else {
                setFeedback('Speech recognition is not supported in your browser.');
            }
        }
        else {
            setIsListening(false);
            setFeedback('');
        }
    };
    var handleRefresh = function () {
        setIsRefreshing(true);
        resetAppState();
        // Reset all states
        setTranscript('');
        setFeedback('');
        setIsListening(false);
        // Visual feedback
        setTimeout(function () {
            setIsRefreshing(false);
            setFeedback("Hi! I'm Benson, ready to help with your financial questions.");
        }, 1000);
    };
    return (<framer_motion_1.motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <framer_motion_1.motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
        <AIAvatar_1.AIAvatar isFloating isListening={isListening} scale={1.5}/>
        
        {feedback && (<framer_motion_1.motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute -left-64 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm w-60">
            {feedback}
          </framer_motion_1.motion.div>)}
        
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <framer_motion_1.motion.button onClick={toggleListening} className={"p-2 rounded-full ".concat(isListening ? 'bg-red-500' : 'bg-indigo-600', " text-white shadow-lg hover:shadow-xl transition-shadow")} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {isListening ? (<lucide_react_1.MicOff className="h-4 w-4"/>) : (<lucide_react_1.Mic className="h-4 w-4"/>)}
          </framer_motion_1.motion.button>

          <framer_motion_1.motion.button onClick={handleRefresh} className="p-2 rounded-full bg-cyan-600 text-white shadow-lg hover:shadow-xl transition-shadow" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} animate={isRefreshing ? { rotate: 360 } : {}} transition={{ duration: 1 }}>
            <lucide_react_1.RefreshCw className="h-4 w-4"/>
          </framer_motion_1.motion.button>
        </div>
      </framer_motion_1.motion.div>

      {/* Quick Actions */}
      <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-16 space-y-2">
        {[
            'What are your credentials?',
            'How can you help me?',
            'Tell me about investing'
        ].map(function (action, index) { return (<framer_motion_1.motion.button key={action} onClick={function () { return handleUserInput(action); }} className="block w-full px-4 py-2 text-sm text-white bg-slate-800/80 backdrop-blur-sm rounded-lg hover:bg-slate-700/80 transition-colors" whileHover={{ x: -5 }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
            {action}
          </framer_motion_1.motion.button>); })}
      </framer_motion_1.motion.div>
    </framer_motion_1.motion.div>);
}
