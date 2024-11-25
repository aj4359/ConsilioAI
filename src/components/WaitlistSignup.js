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
exports.WaitlistSignup = WaitlistSignup;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function WaitlistSignup() {
    var _this = this;
    var _a = (0, react_1.useState)(''), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(false), submitted = _b[0], setSubmitted = _b[1];
    var _c = (0, react_1.useState)(0), position = _c[0], setPosition = _c[1];
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    // Simulate API call
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                case 1:
                    // Simulate API call
                    _a.sent();
                    setSubmitted(true);
                    setPosition(Math.floor(Math.random() * 100) + 400); // Simulate waitlist position
                    return [2 /*return*/];
            }
        });
    }); };
    var features = [
        {
            icon: lucide_react_1.Brain,
            title: "AI-Powered Insights",
            description: "Get personalized financial advice powered by advanced AI"
        },
        {
            icon: lucide_react_1.Users,
            title: "Early Access",
            description: "Be among the first to experience revolutionary AI financial planning"
        },
        {
            icon: lucide_react_1.TrendingUp,
            title: "Founder Benefits",
            description: "Special perks and lifetime benefits for early adopters"
        }
    ];
    return (<section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <framer_motion_1.motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white mb-6">
            Join the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              AI Financial Planning
            </span>
          </framer_motion_1.motion.h2>
          <p className="text-xl text-slate-300 mb-8">
            Be part of the exclusive group getting early access to Consilio-AI's revolutionary platform
          </p>

          {!submitted ? (<framer_motion_1.motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-md mx-auto mb-12">
              <div className="flex gap-4">
                <input type="email" value={email} onChange={function (e) { return setEmail(e.target.value); }} placeholder="Enter your email" required className="flex-1 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"/>
                <button type="submit" className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-400 hover:to-indigo-400 transition-colors flex items-center">
                  Join <lucide_react_1.Send className="ml-2 h-4 w-4"/>
                </button>
              </div>
            </framer_motion_1.motion.form>) : (<framer_motion_1.motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-slate-800/50 p-8 rounded-2xl max-w-md mx-auto mb-12">
              <lucide_react_1.CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold text-white mb-2">You're In!</h3>
              <p className="text-slate-300 mb-4">
                You're #{position} on the waitlist
              </p>
              <div className="text-sm text-slate-400">
                We'll notify you when it's your turn to join Consilio-AI
              </div>
            </framer_motion_1.motion.div>)}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(function (feature, index) { return (<framer_motion_1.motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm">
              <feature.icon className="h-8 w-8 text-cyan-400 mb-4"/>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </framer_motion_1.motion.div>); })}
        </div>

        <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-16 text-center">
          <p className="text-slate-400">
            Already {position + 1243} people have joined the waitlist
          </p>
        </framer_motion_1.motion.div>
      </div>
    </section>);
}
