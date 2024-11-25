"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickAssessment = QuickAssessment;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var AIAvatar_1 = require("./AIAvatar");
var questions = [
    {
        id: 'income',
        question: 'What is your annual income range?',
        options: [
            'Under $30,000',
            '$30,000 - $60,000',
            '$60,000 - $100,000',
            'Over $100,000'
        ]
    },
    {
        id: 'savings',
        question: 'How much do you save monthly?',
        options: [
            'Nothing currently',
            'Less than 10% of income',
            '10-20% of income',
            'More than 20% of income'
        ]
    },
    {
        id: 'debt',
        question: 'What is your current debt situation?',
        options: [
            'No debt',
            'Only mortgage/student loans',
            'Credit card debt',
            'Multiple types of debt'
        ]
    },
    {
        id: 'goals',
        question: 'What is your primary financial goal?',
        options: [
            'Building emergency savings',
            'Investing for retirement',
            'Paying off debt',
            'Growing wealth'
        ]
    },
    {
        id: 'risk',
        question: 'How do you feel about investment risk?',
        options: [
            'Very conservative',
            'Somewhat conservative',
            'Moderate',
            'Aggressive'
        ],
        isPremium: true
    }
];
function QuickAssessment() {
    var _a = (0, react_1.useState)(0), currentQuestion = _a[0], setCurrentQuestion = _a[1];
    var _b = (0, react_1.useState)({}), answers = _b[0], setAnswers = _b[1];
    var _c = (0, react_1.useState)(false), showResults = _c[0], setShowResults = _c[1];
    var _d = (0, react_1.useState)(false), showPremiumOffer = _d[0], setShowPremiumOffer = _d[1];
    var handleAnswer = function (answer) {
        var question = questions[currentQuestion];
        setAnswers(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[question.id] = answer, _a)));
        });
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(function (prev) { return prev + 1; });
        }
        else {
            setShowResults(true);
        }
    };
    var getAssessmentSummary = function () {
        // Basic analysis based on answers
        var summary = {
            status: '',
            recommendations: [],
            premiumBenefits: []
        };
        if (answers.savings === 'Nothing currently' || answers.savings === 'Less than 10% of income') {
            summary.recommendations.push('Increase your monthly savings rate');
            summary.premiumBenefits.push('Personalized savings strategies');
        }
        if (answers.debt === 'Credit card debt' || answers.debt === 'Multiple types of debt') {
            summary.recommendations.push('Focus on debt reduction');
            summary.premiumBenefits.push('AI-powered debt payoff calculator');
        }
        if (answers.goals === 'Investing for retirement') {
            summary.recommendations.push('Review your retirement strategy');
            summary.premiumBenefits.push('Advanced retirement planning tools');
        }
        return summary;
    };
    return (<div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <AIAvatar_1.AIAvatar scale={0.8}/>
        <div className="ml-3">
          <h3 className="text-xl font-semibold text-white">Quick Financial Assessment</h3>
          <p className="text-slate-400 text-sm">Let me help you understand your financial situation</p>
        </div>
      </div>

      {!showResults ? (<framer_motion_1.motion.div key={currentQuestion} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-slate-400 text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            {questions[currentQuestion].isPremium && (<span className="flex items-center text-cyan-400 text-sm">
                <lucide_react_1.Lock className="h-4 w-4 mr-1"/>
                Premium Feature
              </span>)}
          </div>

          <h4 className="text-lg text-white mb-4">
            {questions[currentQuestion].question}
          </h4>

          <div className="space-y-3">
            {questions[currentQuestion].options.map(function (option, index) { return (<framer_motion_1.motion.button key={index} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={function () { return handleAnswer(option); }} className="w-full text-left p-4 rounded-lg bg-slate-700/50 text-white hover:bg-slate-700 transition-colors">
                {option}
              </framer_motion_1.motion.button>); })}
          </div>
        </framer_motion_1.motion.div>) : (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          {!showPremiumOffer ? (<>
              <div className="bg-slate-700/50 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-4">Your Financial Snapshot</h4>
                {getAssessmentSummary().recommendations.map(function (rec, index) { return (<div key={index} className="flex items-start space-x-2 mb-2">
                    <lucide_react_1.ChevronRight className="h-5 w-5 text-cyan-400 mt-0.5"/>
                    <p className="text-slate-300">{rec}</p>
                  </div>); })}
              </div>

              <framer_motion_1.motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={function () { return setShowPremiumOffer(true); }} className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2">
                <lucide_react_1.Sparkles className="h-5 w-5"/>
                <span>Get Detailed Analysis</span>
              </framer_motion_1.motion.button>
            </>) : (<div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Unlock Premium Features
                </h4>
                <div className="space-y-4">
                  {getAssessmentSummary().premiumBenefits.map(function (benefit, index) { return (<div key={index} className="flex items-center space-x-2">
                      <lucide_react_1.Lock className="h-5 w-5 text-cyan-400"/>
                      <p className="text-slate-300">{benefit}</p>
                    </div>); })}
                </div>
              </div>

              <framer_motion_1.motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2">
                <lucide_react_1.Brain className="h-5 w-5"/>
                <span>Start Free Trial</span>
              </framer_motion_1.motion.button>
            </div>)}
        </framer_motion_1.motion.div>)}
    </div>);
}
