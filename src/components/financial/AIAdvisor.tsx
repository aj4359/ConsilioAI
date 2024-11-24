import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { AIAvatar } from '../AIAvatar';
import { useAppStore } from '../../store/useAppStore';

export function AIAdvisor() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { addChatMessage } = useAppStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    
    // Add user message to chat
    const userMessage = {
      id: Date.now().toString(),
      text: input,
      type: 'user' as const,
      timestamp: new Date()
    };
    addChatMessage(userMessage);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = `Based on your question "${input}", here's my recommendation: Consider diversifying your portfolio with a mix of stocks, bonds, and ETFs. Would you like specific investment suggestions?`;
      
      setResponse(aiResponse);
      
      // Add AI response to chat
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        type: 'bot' as const,
        timestamp: new Date()
      };
      addChatMessage(botMessage);
      
      setIsLoading(false);
      setInput('');
    }, 1000);
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
      <div className="flex items-center mb-6">
        <AIAvatar isListening={isLoading} scale={0.8} />
        <h3 className="text-xl font-semibold text-white ml-3">AI Financial Advisor</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me about investments, retirement, or budgeting..."
            className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-cyan-400 hover:to-indigo-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>

      {response && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 bg-slate-700/50 rounded-lg p-4"
        >
          <p className="text-white">{response}</p>
        </motion.div>
      )}

      {isLoading && (
        <div className="mt-4 flex items-center space-x-2 text-cyan-400">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
          />
          <span>Analyzing your request...</span>
        </div>
      )}
    </div>
  );
}