import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Brain } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface BensonVoiceProps {
  onCommand: (command: string) => void;
}

export function BensonVoice({ onCommand }: BensonVoiceProps) {
  const [isListening, setIsListening] = useState(false);
  const [feedback, setFeedback] = useState('');
  
  const commands = [
    {
      command: 'show me (the) dashboard',
      callback: () => onCommand('dashboard')
    },
    {
      command: 'show me (the) features',
      callback: () => onCommand('features')
    },
    {
      command: 'show me (the) pricing',
      callback: () => onCommand('pricing')
    },
    {
      command: 'scroll to top',
      callback: () => window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  ];

  const { transcript, listening, resetTranscript } = useSpeechRecognition({ commands });

  const toggleListening = () => {
    if (!listening) {
      SpeechRecognition.startListening({ continuous: true });
      setIsListening(true);
      setFeedback('Listening...');
    } else {
      SpeechRecognition.stopListening();
      setIsListening(false);
      resetTranscript();
      setFeedback('');
    }
  };

  useEffect(() => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      setFeedback('Voice commands not supported in this browser');
    }
  }, []);

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-2 bg-slate-800/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm"
          >
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleListening}
        className={`p-3 rounded-full ${
          isListening 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-indigo-600 hover:bg-indigo-700'
        } text-white shadow-lg relative`}
      >
        {isListening ? (
          <>
            <MicOff className="h-5 w-5" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-red-400"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </>
        ) : (
          <Mic className="h-5 w-5" />
        )}
      </motion.button>
    </div>
  );
}