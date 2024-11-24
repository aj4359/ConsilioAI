import { create } from 'zustand';

interface SpeechState {
  isSpeaking: boolean;
  isListening: boolean;
  transcript: string;
  error: string | null;
  setIsSpeaking: (value: boolean) => void;
  setIsListening: (value: boolean) => void;
  setTranscript: (value: string) => void;
  setError: (error: string | null) => void;
}

export const useSpeechStore = create<SpeechState>((set) => ({
  isSpeaking: false,
  isListening: false,
  transcript: '',
  error: null,
  setIsSpeaking: (value) => set({ isSpeaking: value }),
  setIsListening: (value) => set({ isListening: value }),
  setTranscript: (value) => set({ transcript: value }),
  setError: (error) => set({ error })
}));

class SpeechService {
  private synthesis: SpeechSynthesis;
  private recognition: any;
  private voices: SpeechSynthesisVoice[] = [];
  private retryTimeout: NodeJS.Timeout | null = null;
  private maxRetries = 3;
  private currentRetry = 0;

  constructor() {
    if (typeof window !== 'undefined') {
      this.synthesis = window.speechSynthesis;
      this.initializeSpeechRecognition();
      this.loadVoices();
    }
  }

  private loadVoices() {
    const updateVoices = () => {
      this.voices = this.synthesis.getVoices();
    };

    updateVoices();
    if (this.synthesis.onvoiceschanged !== undefined) {
      this.synthesis.onvoiceschanged = updateVoices;
    }
  }

  private initializeSpeechRecognition() {
    try {
      // @ts-ignore
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.lang = 'en-US';

        this.setupRecognitionHandlers();
      }
    } catch (error) {
      console.error('Failed to initialize speech recognition:', error);
      useSpeechStore.getState().setError('Speech recognition not supported');
    }
  }

  private setupRecognitionHandlers() {
    this.recognition.onstart = () => {
      useSpeechStore.getState().setIsListening(true);
      useSpeechStore.getState().setError(null);
      this.currentRetry = 0;
    };

    this.recognition.onend = () => {
      useSpeechStore.getState().setIsListening(false);
      
      // Retry if no speech was detected and within retry limits
      if (this.currentRetry < this.maxRetries) {
        this.retryTimeout = setTimeout(() => {
          this.currentRetry++;
          this.startListening();
        }, 1000);
      }
    };

    this.recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join('');
      
      if (transcript.trim()) {
        useSpeechStore.getState().setTranscript(transcript);
        this.currentRetry = this.maxRetries; // Stop retrying if we got a result
      }
    };

    this.recognition.onerror = (event: any) => {
      console.error('Speech recognition error:', event.error);
      
      if (event.error === 'no-speech') {
        useSpeechStore.getState().setError('No speech detected. Please try again.');
      } else {
        useSpeechStore.getState().setError('Error recognizing speech. Please try again.');
      }
      
      useSpeechStore.getState().setIsListening(false);
    };
  }

  async speak(text: string): Promise<void> {
    if (!this.synthesis) {
      console.error('Speech synthesis not supported');
      return;
    }

    return new Promise((resolve, reject) => {
      try {
        this.synthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Select a male voice if available
        const maleVoice = this.voices.find(voice => 
          voice.name.toLowerCase().includes('male') || 
          voice.name.toLowerCase().includes('guy')
        );
        
        if (maleVoice) {
          utterance.voice = maleVoice;
        }

        utterance.pitch = 1;
        utterance.rate = 1;
        utterance.volume = 1;

        utterance.onstart = () => {
          useSpeechStore.getState().setIsSpeaking(true);
        };

        utterance.onend = () => {
          useSpeechStore.getState().setIsSpeaking(false);
          resolve();
        };

        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event);
          useSpeechStore.getState().setIsSpeaking(false);
          reject(event);
        };

        this.synthesis.speak(utterance);
      } catch (error) {
        console.error('Speech synthesis error:', error);
        reject(error);
      }
    });
  }

  startListening() {
    if (this.recognition) {
      try {
        this.recognition.start();
      } catch (error) {
        console.error('Error starting speech recognition:', error);
      }
    }
  }

  stopListening() {
    if (this.recognition) {
      try {
        if (this.retryTimeout) {
          clearTimeout(this.retryTimeout);
          this.retryTimeout = null;
        }
        this.currentRetry = this.maxRetries; // Prevent further retries
        this.recognition.stop();
      } catch (error) {
        console.error('Error stopping speech recognition:', error);
      }
    }
  }
}

export const speechService = new SpeechService();