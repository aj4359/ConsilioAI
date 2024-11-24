import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Info } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  weights: number[];
}

const riskQuestions: Question[] = [
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

export function RiskProfiler() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const calculateRiskProfile = () => {
    const total = answers.reduce((acc, val) => acc + val, 0);
    const maxScore = riskQuestions.length * 4;
    const percentage = (total / maxScore) * 100;
    
    if (percentage < 25) return "Conservative";
    if (percentage < 50) return "Moderate-Conservative";
    if (percentage < 75) return "Moderate-Aggressive";
    return "Aggressive";
  };

  const handleAnswer = (weight: number) => {
    const newAnswers = [...answers, weight];
    setAnswers(newAnswers);

    if (currentQuestion < riskQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center mb-6">
        <Shield className="h-6 w-6 text-cyan-400 mr-2" />
        <h3 className="text-xl font-semibold text-white">Risk Profile Assessment</h3>
      </div>

      {!showResult ? (
        <div>
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="mb-6"
          >
            <h4 className="text-lg text-white mb-4">
              {riskQuestions[currentQuestion].text}
            </h4>
            <div className="space-y-3">
              {riskQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(riskQuestions[currentQuestion].weights[index])}
                  className="w-full text-left p-3 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
          
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>Question {currentQuestion + 1} of {riskQuestions.length}</span>
            <div className="flex items-center">
              <Info className="h-4 w-4 mr-1" />
              <span>Your answers help us tailor our advice</span>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
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
              <AlertTriangle className="h-5 w-5 text-amber-400 mr-2" />
              <span className="text-white font-medium">Important Notice</span>
            </div>
            <p className="text-sm text-slate-300">
              This assessment is for informational purposes only and should not be considered as financial advice. Please consult with a qualified financial advisor for personalized recommendations.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers([]);
              setShowResult(false);
            }}
            className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-2 rounded-lg"
          >
            Retake Assessment
          </button>
        </motion.div>
      )}
    </div>
  );
}