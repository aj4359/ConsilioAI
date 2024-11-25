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
exports.RiskProfiler = RiskProfiler;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var riskQuestions = [
    {
        id: 1,
        text: "How would you react to a 20% drop in your investment value?",
        options: [
            "Sell everything immediately",
            "Sell some investments",
            "Hold and wait",
            "Buy more at lower prices"
        ],
        weights: [1, 2, 3, 4]
    },
    {
        id: 2,
        text: "What's your investment time horizon?",
        options: [
            "Less than 2 years",
            "2-5 years",
            "5-10 years",
            "More than 10 years"
        ],
        weights: [1, 2, 3, 4]
    }
    // Add more questions
];
function RiskProfiler() {
    var _a = (0, react_1.useState)(0), currentQuestion = _a[0], setCurrentQuestion = _a[1];
    var _b = (0, react_1.useState)([]), answers = _b[0], setAnswers = _b[1];
    var _c = (0, react_1.useState)(false), showResult = _c[0], setShowResult = _c[1];
    var calculateRiskProfile = function () {
        var total = answers.reduce(function (acc, val) { return acc + val; }, 0);
        var maxScore = riskQuestions.length * 4;
        var percentage = (total / maxScore) * 100;
        if (percentage < 25)
            return "Conservative";
        if (percentage < 50)
            return "Moderate-Conservative";
        if (percentage < 75)
            return "Moderate-Aggressive";
        return "Aggressive";
    };
    var handleAnswer = function (weight) {
        var newAnswers = __spreadArray(__spreadArray([], answers, true), [weight], false);
        setAnswers(newAnswers);
        if (currentQuestion < riskQuestions.length - 1) {
            setCurrentQuestion(function (prev) { return prev + 1; });
        }
        else {
            setShowResult(true);
        }
    };
    return (<div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center mb-6">
        <lucide_react_1.Shield className="h-6 w-6 text-cyan-400 mr-2"/>
        <h3 className="text-xl font-semibold text-white">Risk Profile Assessment</h3>
      </div>

      {!showResult ? (<div>
          <framer_motion_1.motion.div key={currentQuestion} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="mb-6">
            <h4 className="text-lg text-white mb-4">
              {riskQuestions[currentQuestion].text}
            </h4>
            <div className="space-y-3">
              {riskQuestions[currentQuestion].options.map(function (option, index) { return (<button key={index} onClick={function () { return handleAnswer(riskQuestions[currentQuestion].weights[index]); }} className="w-full text-left p-3 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700 transition-colors">
                  {option}
                </button>); })}
            </div>
          </framer_motion_1.motion.div>
          
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>Question {currentQuestion + 1} of {riskQuestions.length}</span>
            <div className="flex items-center">
              <lucide_react_1.Info className="h-4 w-4 mr-1"/>
              <span>Your answers help us tailor our advice</span>
            </div>
          </div>
        </div>) : (<framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-white mb-2">
              Your Risk Profile: {calculateRiskProfile()}
            </h4>
            <p className="text-slate-400">
              Based on your answers, we've determined your investment risk tolerance.
            </p>
          </div>

          <div className="bg-slate-700/50 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-4">
              <lucide_react_1.AlertTriangle className="h-5 w-5 text-amber-400 mr-2"/>
              <span className="text-white font-medium">Important Notice</span>
            </div>
            <p className="text-sm text-slate-300">
              This assessment is for informational purposes only and should not be considered as financial advice. Please consult with a qualified financial advisor for personalized recommendations.
            </p>
          </div>

          <button onClick={function () {
                setCurrentQuestion(0);
                setAnswers([]);
                setShowResult(false);
            }} className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-2 rounded-lg">
            Retake Assessment
          </button>
        </framer_motion_1.motion.div>)}
    </div>);
}
