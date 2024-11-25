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
exports.AIAdvisor = AIAdvisor;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var AIAvatar_1 = require("../AIAvatar");
var useAppStore_1 = require("../../store/useAppStore");
function AIAdvisor() {
    var _this = this;
    var _a = (0, react_1.useState)(''), input = _a[0], setInput = _a[1];
    var _b = (0, react_1.useState)(''), response = _b[0], setResponse = _b[1];
    var _c = (0, react_1.useState)(false), isLoading = _c[0], setIsLoading = _c[1];
    var addChatMessage = (0, useAppStore_1.useAppStore)().addChatMessage;
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var userMessage;
        return __generator(this, function (_a) {
            e.preventDefault();
            if (!input.trim())
                return [2 /*return*/];
            setIsLoading(true);
            userMessage = {
                id: Date.now().toString(),
                text: input,
                type: 'user',
                timestamp: new Date()
            };
            addChatMessage(userMessage);
            // Simulate AI response
            setTimeout(function () {
                var aiResponse = "Based on your question \"".concat(input, "\", here's my recommendation: Consider diversifying your portfolio with a mix of stocks, bonds, and ETFs. Would you like specific investment suggestions?");
                setResponse(aiResponse);
                // Add AI response to chat
                var botMessage = {
                    id: (Date.now() + 1).toString(),
                    text: aiResponse,
                    type: 'bot',
                    timestamp: new Date()
                };
                addChatMessage(botMessage);
                setIsLoading(false);
                setInput('');
            }, 1000);
            return [2 /*return*/];
        });
    }); };
    return (<div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center mb-6">
        <AIAvatar_1.AIAvatar isListening={isLoading} scale={0.8}/>
        <h3 className="text-xl font-semibold text-white ml-3">AI Financial Advisor</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <input type="text" value={input} onChange={function (e) { return setInput(e.target.value); }} placeholder="Ask me about investments, retirement, or budgeting..." className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"/>
          <button type="submit" disabled={isLoading || !input.trim()} className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-cyan-400 hover:to-indigo-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <lucide_react_1.Send className="h-5 w-5"/>
          </button>
        </div>
      </form>

      {response && (<framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-6 bg-slate-700/50 rounded-lg p-4">
          <p className="text-white">{response}</p>
        </framer_motion_1.motion.div>)}

      {isLoading && (<div className="mt-4 flex items-center space-x-2 text-cyan-400">
          <framer_motion_1.motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"/>
          <span>Analyzing your request...</span>
        </div>)}
    </div>);
}
