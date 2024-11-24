import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AIAvatar } from './AIAvatar';
import { Mic, MicOff, RefreshCw } from 'lucide-react';
import { getFinancialAdvice } from '../services/ai/AIService';
import { useAppStore } from '../store/useAppStore';
import { speechService } from '../services/speech/SpeechService';

export function FloatingBenson() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { jurisdiction, resetAppState } = useAppStore();

  const handleUserInput = async (input: string) => {
    if (!input.trim()) return;
    
    setFeedback('Processing your request...');
    
    try {
      const response = await getFinancialAdvice(input, jurisdiction || 'US');
      setFeedback(response);
      
      // Text-to-speech
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(response);
        // Select a male voice if available
        const voices = speechSynthesis.getVoices();
        const maleVoice = voices.find(voice => 
          voice.name.toLowerCase().includes('male') || 
          voice.name.toLowerCase().includes('guy')
        );
        if (maleVoice) utterance.voice = maleVoice;
        speechSynthesis.speak(utterance);
      }
    } catch (error) {
      console.error('Failed to process input:', error);
      setFeedback('Sorry, I had trouble with that. Please try again.');
    }
  };

  const toggleListening = () => {
    if (!isListening) {
      // Start browser's speech recognition
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setTranscript(transcript);
          handleUserInput(transcript);
        };

        recognition.onerror = (event) => {
          console.error('Speech recognition error:', event.error);
          setFeedback('Sorry, I had trouble hearing that. Please try again.');
          setIsListening(false);
        };

        recognition.start();
        setIsListening(true);
        setFeedback('Listening...');
      } else {
        setFeedback('Speech recognition is not supported in your browser.');
      }
    } else {
      setIsListening(false);
      setFeedback('');
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    resetAppState();
    // Reset all states
    setTranscript('');
    setFeedback('');
    setIsListening(false);
    // Visual feedback
    setTimeout(() => {
      setIsRefreshing(false);
      setFeedback("Hi! I'm Benson, ready to help with your financial questions.");
    }, 1000);
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative"
      >
        <AIAvatar 
          isFloating 
          isListening={isListening}
          scale={1.5}
        />
        
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -left-64 top-1/2 -translate-y-1/2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm w-60"
          >
            {feedback}
          </motion.div>
        )}
        
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <motion.button
            onClick={toggleListening}
            className={`p-2 rounded-full ${
              isListening ? 'bg-red-500' : 'bg-indigo-600'
            } text-white shadow-lg hover:shadow-xl transition-shadow`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isListening ? (
              <MicOff className="h-4 w-4" />
            ) : (
              <Mic className="h-4 w-4" />
            )}
          </motion.button>

          <motion.button
            onClick={handleRefresh}
            className="p-2 rounded-full bg-cyan-600 text-white shadow-lg hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={isRefreshing ? { rotate: 360 } : {}}
            transition={{ duration: 1 }}
          >
            <RefreshCw className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-16 space-y-2"
      >
        {[
          'What are your credentials?',
          'How can you help me?',
          'Tell me about investing'
        ].map((action, index) => (
          <motion.button
            key={action}
            onClick={() => handleUserInput(action)}
            className="block w-full px-4 py-2 text-sm text-white bg-slate-800/80 backdrop-blur-sm rounded-lg hover:bg-slate-700/80 transition-colors"
            whileHover={{ x: -5 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {action}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}