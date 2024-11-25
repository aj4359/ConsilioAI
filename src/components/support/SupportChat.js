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
exports.SupportChat = SupportChat;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var initialMessages = [
    {
        id: '1',
        text: 'Hello! How can I help you today?',
        sender: 'bot',
        timestamp: new Date()
    }
];
var supportTopics = [
    'Account Issues',
    'Subscription Help',
    'Financial Advice',
    'Technical Support',
    'Billing Questions'
];
function SupportChat() {
    var _this = this;
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = (0, react_1.useState)(initialMessages), messages = _b[0], setMessages = _b[1];
    var _c = (0, react_1.useState)(''), input = _c[0], setInput = _c[1];
    var _d = (0, react_1.useState)(false), isTyping = _d[0], setIsTyping = _d[1];
    var messagesEndRef = (0, react_1.useRef)(null);
    var scrollToBottom = function () {
        var _a;
        (_a = messagesEndRef.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth' });
    };
    (0, react_1.useEffect)(function () {
        scrollToBottom();
    }, [messages]);
    var handleSend = function () { return __awaiter(_this, void 0, void 0, function () {
        var userMessage;
        return __generator(this, function (_a) {
            if (!input.trim())
                return [2 /*return*/];
            userMessage = {
                id: Date.now().toString(),
                text: input,
                sender: 'user',
                timestamp: new Date()
            };
            setMessages(function (prev) { return __spreadArray(__spreadArray([], prev, true), [userMessage], false); });
            setInput('');
            setIsTyping(true);
            // Simulate bot response
            setTimeout(function () {
                var botMessage = {
                    id: (Date.now() + 1).toString(),
                    text: getBotResponse(input),
                    sender: 'bot',
                    timestamp: new Date()
                };
                setMessages(function (prev) { return __spreadArray(__spreadArray([], prev, true), [botMessage], false); });
                setIsTyping(false);
            }, 1000);
            return [2 /*return*/];
        });
    }); };
    var getBotResponse = function (input) {
        var lowerInput = input.toLowerCase();
        if (lowerInput.includes('price') || lowerInput.includes('cost')) {
            return "Our pricing plans start at $9.99/month for Premium features. Would you like to know more about our subscription plans?";
        }
        if (lowerInput.includes('account') || lowerInput.includes('login')) {
            return "For account-related issues, please ensure you're using the correct email address. If you need to reset your password, use the 'Forgot Password' link on the login page.";
        }
        if (lowerInput.includes('cancel') || lowerInput.includes('refund')) {
            return "You can cancel your subscription anytime from your account settings. Refunds are processed within 5-7 business days.";
        }
        return "I understand your question. Let me connect you with a human support agent who can better assist you. In the meantime, you can check our FAQ section for immediate answers.";
    };
    return (<>
      <framer_motion_1.motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} onClick={function () { return setIsOpen(true); }} className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg z-50">
        <lucide_react_1.MessageSquare className="h-6 w-6"/>
      </framer_motion_1.motion.button>

      <framer_motion_1.AnimatePresence>
        {isOpen && (<framer_motion_1.motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} className="fixed bottom-24 right-6 w-96 bg-white rounded-2xl shadow-xl z-50">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-4 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <lucide_react_1.Bot className="h-6 w-6 text-white mr-2"/>
                  <h3 className="text-white font-semibold">Support Chat</h3>
                </div>
                <button onClick={function () { return setIsOpen(false); }} className="text-white/80 hover:text-white">
                  <lucide_react_1.X className="h-5 w-5"/>
                </button>
              </div>
            </div>

            <div className="h-96 overflow-y-auto p-4 bg-slate-50">
              <div className="space-y-4">
                {messages.map(function (message) { return (<framer_motion_1.motion.div key={message.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={"flex ".concat(message.sender === 'user' ? 'justify-end' : 'justify-start')}>
                    <div className={"max-w-[80%] p-3 rounded-xl ".concat(message.sender === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-slate-800')}>
                      {message.text}
                    </div>
                  </framer_motion_1.motion.div>); })}
                {isTyping && (<div className="flex items-center space-x-2 text-slate-500">
                    <lucide_react_1.Loader className="h-4 w-4 animate-spin"/>
                    <span className="text-sm">Support is typing...</span>
                  </div>)}
                <div ref={messagesEndRef}/>
              </div>
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input type="text" value={input} onChange={function (e) { return setInput(e.target.value); }} onKeyPress={function (e) { return e.key === 'Enter' && handleSend(); }} placeholder="Type your message..." className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"/>
                <button onClick={handleSend} className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700">
                  <lucide_react_1.Send className="h-5 w-5"/>
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {supportTopics.map(function (topic) { return (<button key={topic} onClick={function () { return setInput(topic); }} className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-1 rounded-full">
                    {topic}
                  </button>); })}
              </div>
            </div>
          </framer_motion_1.motion.div>)}
      </framer_motion_1.AnimatePresence>
    </>);
}
