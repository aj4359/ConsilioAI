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
exports.speechService = exports.useSpeechStore = void 0;
var zustand_1 = require("zustand");
exports.useSpeechStore = (0, zustand_1.create)(function (set) { return ({
    isSpeaking: false,
    isListening: false,
    transcript: '',
    error: null,
    setIsSpeaking: function (value) { return set({ isSpeaking: value }); },
    setIsListening: function (value) { return set({ isListening: value }); },
    setTranscript: function (value) { return set({ transcript: value }); },
    setError: function (error) { return set({ error: error }); }
}); });
var SpeechService = /** @class */ (function () {
    function SpeechService() {
        this.voices = [];
        this.retryTimeout = null;
        this.maxRetries = 3;
        this.currentRetry = 0;
        if (typeof window !== 'undefined') {
            this.synthesis = window.speechSynthesis;
            this.initializeSpeechRecognition();
            this.loadVoices();
        }
    }
    SpeechService.prototype.loadVoices = function () {
        var _this = this;
        var updateVoices = function () {
            _this.voices = _this.synthesis.getVoices();
        };
        updateVoices();
        if (this.synthesis.onvoiceschanged !== undefined) {
            this.synthesis.onvoiceschanged = updateVoices;
        }
    };
    SpeechService.prototype.initializeSpeechRecognition = function () {
        try {
            // @ts-ignore
            var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                this.recognition = new SpeechRecognition();
                this.recognition.continuous = false;
                this.recognition.interimResults = true;
                this.recognition.lang = 'en-US';
                this.setupRecognitionHandlers();
            }
        }
        catch (error) {
            console.error('Failed to initialize speech recognition:', error);
            exports.useSpeechStore.getState().setError('Speech recognition not supported');
        }
    };
    SpeechService.prototype.setupRecognitionHandlers = function () {
        var _this = this;
        this.recognition.onstart = function () {
            exports.useSpeechStore.getState().setIsListening(true);
            exports.useSpeechStore.getState().setError(null);
            _this.currentRetry = 0;
        };
        this.recognition.onend = function () {
            exports.useSpeechStore.getState().setIsListening(false);
            // Retry if no speech was detected and within retry limits
            if (_this.currentRetry < _this.maxRetries) {
                _this.retryTimeout = setTimeout(function () {
                    _this.currentRetry++;
                    _this.startListening();
                }, 1000);
            }
        };
        this.recognition.onresult = function (event) {
            var transcript = Array.from(event.results)
                .map(function (result) { return result[0].transcript; })
                .join('');
            if (transcript.trim()) {
                exports.useSpeechStore.getState().setTranscript(transcript);
                _this.currentRetry = _this.maxRetries; // Stop retrying if we got a result
            }
        };
        this.recognition.onerror = function (event) {
            console.error('Speech recognition error:', event.error);
            if (event.error === 'no-speech') {
                exports.useSpeechStore.getState().setError('No speech detected. Please try again.');
            }
            else {
                exports.useSpeechStore.getState().setError('Error recognizing speech. Please try again.');
            }
            exports.useSpeechStore.getState().setIsListening(false);
        };
    };
    SpeechService.prototype.speak = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.synthesis) {
                    console.error('Speech synthesis not supported');
                    return [2 /*return*/];
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            _this.synthesis.cancel();
                            var utterance = new SpeechSynthesisUtterance(text);
                            // Select a male voice if available
                            var maleVoice = _this.voices.find(function (voice) {
                                return voice.name.toLowerCase().includes('male') ||
                                    voice.name.toLowerCase().includes('guy');
                            });
                            if (maleVoice) {
                                utterance.voice = maleVoice;
                            }
                            utterance.pitch = 1;
                            utterance.rate = 1;
                            utterance.volume = 1;
                            utterance.onstart = function () {
                                exports.useSpeechStore.getState().setIsSpeaking(true);
                            };
                            utterance.onend = function () {
                                exports.useSpeechStore.getState().setIsSpeaking(false);
                                resolve();
                            };
                            utterance.onerror = function (event) {
                                console.error('Speech synthesis error:', event);
                                exports.useSpeechStore.getState().setIsSpeaking(false);
                                reject(event);
                            };
                            _this.synthesis.speak(utterance);
                        }
                        catch (error) {
                            console.error('Speech synthesis error:', error);
                            reject(error);
                        }
                    })];
            });
        });
    };
    SpeechService.prototype.startListening = function () {
        if (this.recognition) {
            try {
                this.recognition.start();
            }
            catch (error) {
                console.error('Error starting speech recognition:', error);
            }
        }
    };
    SpeechService.prototype.stopListening = function () {
        if (this.recognition) {
            try {
                if (this.retryTimeout) {
                    clearTimeout(this.retryTimeout);
                    this.retryTimeout = null;
                }
                this.currentRetry = this.maxRetries; // Prevent further retries
                this.recognition.stop();
            }
            catch (error) {
                console.error('Error stopping speech recognition:', error);
            }
        }
    };
    return SpeechService;
}());
exports.speechService = new SpeechService();
