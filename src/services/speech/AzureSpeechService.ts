import * as SpeechSDK from 'microsoft-cognitiveservices-speech-sdk';
import { create } from 'zustand';

interface SpeechState {
  isSpeaking: boolean;
  isListening: boolean;
  transcript: string;
  setIsSpeaking: (value: boolean) => void;
  setIsListening: (value: boolean) => void;
  setTranscript: (value: string) => void;
}

export const useSpeechStore = create<SpeechState>((set) => ({
  isSpeaking: false,
  isListening: false,
  transcript: '',
  setIsSpeaking: (value) => set({ isSpeaking: value }),
  setIsListening: (value) => set({ isListening: value }),
  setTranscript: (value) => set({ transcript: value }),
}));

class AzureSpeechService {
  private speechConfig: SpeechSDK.SpeechConfig;
  private synthesizer: SpeechSDK.SpeechSynthesizer | null = null;
  private recognizer: SpeechSDK.SpeechRecognizer | null = null;

  constructor() {
    const subscriptionKey = import.meta.env.VITE_AZURE_SPEECH_KEY;
    const region = import.meta.env.VITE_AZURE_SPEECH_REGION;

    if (!subscriptionKey || !region) {
      console.error('Azure Speech credentials not configured');
      throw new Error('Azure Speech credentials not configured');
    }

    this.speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, region);
    this.speechConfig.speechSynthesisVoiceName = "en-US-GuyNeural";
    this.initializeSpeech();
  }

  private initializeSpeech() {
    try {
      const audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
      this.synthesizer = new SpeechSDK.SpeechSynthesizer(this.speechConfig, audioConfig);
      
      const recognitionConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
      this.recognizer = new SpeechSDK.SpeechRecognizer(this.speechConfig, recognitionConfig);
      
      this.setupRecognitionHandlers();
    } catch (error) {
      console.error('Failed to initialize speech services:', error);
    }
  }

  private setupRecognitionHandlers() {
    if (!this.recognizer) return;

    this.recognizer.recognized = (s, e) => {
      if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
        useSpeechStore.getState().setTranscript(e.result.text);
      }
    };

    this.recognizer.recognizing = (s, e) => {
      useSpeechStore.getState().setIsListening(true);
    };

    this.recognizer.canceled = (s, e) => {
      useSpeechStore.getState().setIsListening(false);
      if (e.reason === SpeechSDK.CancellationReason.Error) {
        console.error(`Speech recognition error: ${e.errorDetails}`);
      }
    };
  }

  async speak(text: string): Promise<void> {
    if (!this.synthesizer) {
      console.error('Speech synthesizer not initialized');
      return;
    }

    try {
      useSpeechStore.getState().setIsSpeaking(true);
      const result = await this.synthesizer.speakTextAsync(text);
      
      if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
        console.log('Speech synthesis completed successfully');
      } else {
        console.error(`Speech synthesis failed: ${result.errorDetails}`);
      }
    } catch (error) {
      console.error('Speech synthesis error:', error);
    } finally {
      useSpeechStore.getState().setIsSpeaking(false);
    }
  }

  startListening() {
    if (!this.recognizer) {
      console.error('Speech recognizer not initialized');
      return;
    }

    try {
      this.recognizer.startContinuousRecognitionAsync(
        () => {
          useSpeechStore.getState().setIsListening(true);
          console.log('Speech recognition started');
        },
        (error) => {
          console.error('Speech recognition error:', error);
          useSpeechStore.getState().setIsListening(false);
        }
      );
    } catch (error) {
      console.error('Failed to start speech recognition:', error);
    }
  }

  stopListening() {
    if (!this.recognizer) return;

    try {
      this.recognizer.stopContinuousRecognitionAsync(
        () => {
          useSpeechStore.getState().setIsListening(false);
          console.log('Speech recognition stopped');
        },
        (error) => {
          console.error('Error stopping speech recognition:', error);
        }
      );
    } catch (error) {
      console.error('Failed to stop speech recognition:', error);
    }
  }

  dispose() {
    if (this.synthesizer) {
      this.synthesizer.close();
      this.synthesizer = null;
    }
    if (this.recognizer) {
      this.recognizer.close();
      this.recognizer = null;
    }
  }
}

export const azureSpeechService = new AzureSpeechService();