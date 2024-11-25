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
exports.Chatbot = Chatbot;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var AIAvatar_1 = require("./AIAvatar");
var useAppStore_1 = require("../store/useAppStore");
var AIService_1 = require("../services/ai/AIService");
var SpeechService_1 = require("../services/speech/SpeechService");
function Chatbot() {
    var _this = this;
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = (0, react_1.useState)([{
            id: '1',
            text: "Hi! I'm Benson, your AI financial advisor. How can I help you today?",
            type: 'bot',
            timestamp: new Date()
        }]), messages = _b[0], setMessages = _b[1];
    var _c = (0, react_1.useState)(''), input = _c[0], setInput = _c[1];
    var _d = (0, react_1.useState)(false), isProcessing = _d[0], setIsProcessing = _d[1];
    var messagesEndRef = (0, react_1.useRef)(null);
    var jurisdiction = (0, useAppStore_1.useAppStore)().jurisdiction;
    var scrollToBottom = function () {
        var _a;
        (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    };
    (0, react_1.useEffect)(function () {
        scrollToBottom();
    }, [messages]);
    var handleSend = function () { return __awaiter(_this, void 0, void 0, function () {
        var userMessage, response, botMessage_1, error_1, errorMessage_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!input.trim() || isProcessing)
                        return [2 /*return*/];
                    userMessage = {
                        id: Date.now().toString(),
                        text: input,
                        type: 'user',
                        timestamp: new Date()
                    };
                    setMessages(function (prev) { return __spreadArray(__spreadArray([], prev, true), [userMessage], false); });
                    setInput('');
                    setIsProcessing(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, (0, AIService_1.getFinancialAdvice)(input, jurisdiction || 'US')];
                case 2:
                    response = _a.sent();
                    botMessage_1 = {
                        id: (Date.now() + 1).toString(),
                        text: response,
                        type: 'bot',
                        timestamp: new Date()
                    };
                    setMessages(function (prev) { return __spreadArray(__spreadArray([], prev, true), [botMessage_1], false); });
                    // Speak the response
                    return [4 /*yield*/, SpeechService_1.speechService.speak(response)];
                case 3:
                    // Speak the response
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4:
                    error_1 = _a.sent();
                    console.error('Failed to get response:', error_1);
                    errorMessage_1 = {
                        id: (Date.now() + 1).toString(),
                        text: "I apologize, but I'm having trouble processing that right now. Please try again.",
                        type: 'bot',
                        timestamp: new Date()
                    };
                    setMessages(function (prev) { return __spreadArray(__spreadArray([], prev, true), [errorMessage_1], false); });
                    return [3 /*break*/, 6];
                case 5:
                    setIsProcessing(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var handleKeyPress = function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };
    return (<>
      <framer_motion_1.motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} onClick={function () { return setIsOpen(true); }} className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg z-50">
        <lucide_react_1.MessageCircle className="h-6 w-6"/>
      </framer_motion_1.motion.button>

      <framer_motion_1.AnimatePresence>
        {isOpen && (<framer_motion_1.motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-xl z-50">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-4 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <AIAvatar_1.AIAvatar scale={0.6}/>
                  <div className="ml-3">
                    <h3 className="text-white font-semibold">Benson</h3>
                    <p className="text-indigo-200 text-sm">AI Financial Advisor</p>
                  </div>
                </div>
                <button onClick={function () { return setIsOpen(false); }} className="text-white/80 hover:text-white">
                  <lucide_react_1.X className="h-5 w-5"/>
                </button>
              </div>
            </div>

            <div className="h-96 overflow-y-auto p-4 bg-slate-50">
              <div className="space-y-4">
                {messages.map(function (message) { return (<framer_motion_1.motion.div key={message.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={"flex ".concat(message.type === 'user' ? 'justify-end' : 'justify-start')}>
                    {message.type === 'bot' && (<div className="w-8 h-8 mr-2 flex-shrink-0">
                        <AIAvatar_1.AIAvatar scale={0.5}/>
                      </div>)}
                    <div className={"max-w-[80%] p-3 rounded-xl ".concat(message.type === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-slate-800')}>
                      {message.text}
                    </div>
                  </framer_motion_1.motion.div>); })}
                {isProcessing && (<div className="flex items-center space-x-2">
                    <framer_motion_1.motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} className="w-2 h-2 bg-indigo-600 rounded-full"/>
                    <framer_motion_1.motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-indigo-600 rounded-full"/>
                    <framer_motion_1.motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-indigo-600 rounded-full"/>
                  </div>)}
                <div ref={messagesEndRef}/>
              </div>
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input type="text" value={input} onChange={function (e) { return setInput(e.target.value); }} onKeyPress={handleKeyPress} placeholder="Type your message..." disabled={isProcessing} className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent disabled:opacity-50"/>
                <button onClick={handleSend} disabled={isProcessing || !input.trim()} className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed">
                  <lucide_react_1.Send className="h-5 w-5"/>
                </button>
              </div>
            </div>
          </framer_motion_1.motion.div>)}
      </framer_motion_1.AnimatePresence>
    </>);
}
