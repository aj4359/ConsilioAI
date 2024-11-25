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
exports.azureSpeechService = exports.useSpeechStore = void 0;
var SpeechSDK = require("microsoft-cognitiveservices-speech-sdk");
var zustand_1 = require("zustand");
exports.useSpeechStore = (0, zustand_1.create)(function (set) { return ({
    isSpeaking: false,
    isListening: false,
    transcript: '',
    setIsSpeaking: function (value) { return set({ isSpeaking: value }); },
    setIsListening: function (value) { return set({ isListening: value }); },
    setTranscript: function (value) { return set({ transcript: value }); },
}); });
var AzureSpeechService = /** @class */ (function () {
    function AzureSpeechService() {
        this.synthesizer = null;
        this.recognizer = null;
        var subscriptionKey = import.meta.env.VITE_AZURE_SPEECH_KEY;
        var region = import.meta.env.VITE_AZURE_SPEECH_REGION;
        if (!subscriptionKey || !region) {
            console.error('Azure Speech credentials not configured');
            throw new Error('Azure Speech credentials not configured');
        }
        this.speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, region);
        this.speechConfig.speechSynthesisVoiceName = "en-US-GuyNeural";
        this.initializeSpeech();
    }
    AzureSpeechService.prototype.initializeSpeech = function () {
        try {
            var audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
            this.synthesizer = new SpeechSDK.SpeechSynthesizer(this.speechConfig, audioConfig);
            var recognitionConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
            this.recognizer = new SpeechSDK.SpeechRecognizer(this.speechConfig, recognitionConfig);
            this.setupRecognitionHandlers();
        }
        catch (error) {
            console.error('Failed to initialize speech services:', error);
        }
    };
    AzureSpeechService.prototype.setupRecognitionHandlers = function () {
        if (!this.recognizer)
            return;
        this.recognizer.recognized = function (s, e) {
            if (e.result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
                exports.useSpeechStore.getState().setTranscript(e.result.text);
            }
        };
        this.recognizer.recognizing = function (s, e) {
            exports.useSpeechStore.getState().setIsListening(true);
        };
        this.recognizer.canceled = function (s, e) {
            exports.useSpeechStore.getState().setIsListening(false);
            if (e.reason === SpeechSDK.CancellationReason.Error) {
                console.error("Speech recognition error: ".concat(e.errorDetails));
            }
        };
    };
    AzureSpeechService.prototype.speak = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.synthesizer) {
                            console.error('Speech synthesizer not initialized');
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        exports.useSpeechStore.getState().setIsSpeaking(true);
                        return [4 /*yield*/, this.synthesizer.speakTextAsync(text)];
                    case 2:
                        result = _a.sent();
                        if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
                            console.log('Speech synthesis completed successfully');
                        }
                        else {
                            console.error("Speech synthesis failed: ".concat(result.errorDetails));
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Speech synthesis error:', error_1);
                        return [3 /*break*/, 5];
                    case 4:
                        exports.useSpeechStore.getState().setIsSpeaking(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AzureSpeechService.prototype.startListening = function () {
        if (!this.recognizer) {
            console.error('Speech recognizer not initialized');
            return;
        }
        try {
            this.recognizer.startContinuousRecognitionAsync(function () {
                exports.useSpeechStore.getState().setIsListening(true);
                console.log('Speech recognition started');
            }, function (error) {
                console.error('Speech recognition error:', error);
                exports.useSpeechStore.getState().setIsListening(false);
            });
        }
        catch (error) {
            console.error('Failed to start speech recognition:', error);
        }
    };
    AzureSpeechService.prototype.stopListening = function () {
        if (!this.recognizer)
            return;
        try {
            this.recognizer.stopContinuousRecognitionAsync(function () {
                exports.useSpeechStore.getState().setIsListening(false);
                console.log('Speech recognition stopped');
            }, function (error) {
                console.error('Error stopping speech recognition:', error);
            });
        }
        catch (error) {
            console.error('Failed to stop speech recognition:', error);
        }
    };
    AzureSpeechService.prototype.dispose = function () {
        if (this.synthesizer) {
            this.synthesizer.close();
            this.synthesizer = null;
        }
        if (this.recognizer) {
            this.recognizer.close();
            this.recognizer = null;
        }
    };
    return AzureSpeechService;
}());
exports.azureSpeechService = new AzureSpeechService();
