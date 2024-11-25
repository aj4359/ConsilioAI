"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BensonVoice = BensonVoice;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var react_speech_recognition_1 = require("react-speech-recognition");
function BensonVoice(_a) {
    var onCommand = _a.onCommand;
    var _b = (0, react_1.useState)(false), isListening = _b[0], setIsListening = _b[1];
    var _c = (0, react_1.useState)(''), feedback = _c[0], setFeedback = _c[1];
    var commands = [
        {
            command: 'show me (the) dashboard',
            callback: function () { return onCommand('dashboard'); }
        },
        {
            command: 'show me (the) features',
            callback: function () { return onCommand('features'); }
        },
        {
            command: 'show me (the) pricing',
            callback: function () { return onCommand('pricing'); }
        },
        {
            command: 'scroll to top',
            callback: function () { return window.scrollTo({ top: 0, behavior: 'smooth' }); }
        }
    ];
    var _d = (0, react_speech_recognition_1.useSpeechRecognition)({ commands: commands }), transcript = _d.transcript, listening = _d.listening, resetTranscript = _d.resetTranscript;
    var toggleListening = function () {
        if (!listening) {
            react_speech_recognition_1.default.startListening({ continuous: true });
            setIsListening(true);
            setFeedback('Listening...');
        }
        else {
            react_speech_recognition_1.default.stopListening();
            setIsListening(false);
            resetTranscript();
            setFeedback('');
        }
    };
    (0, react_1.useEffect)(function () {
        if (!react_speech_recognition_1.default.browserSupportsSpeechRecognition()) {
            setFeedback('Voice commands not supported in this browser');
        }
    }, []);
    return (<div className="fixed bottom-24 right-6 z-50">
      <framer_motion_1.AnimatePresence>
        {feedback && (<framer_motion_1.motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mb-2 bg-slate-800/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-sm">
            {feedback}
          </framer_motion_1.motion.div>)}
      </framer_motion_1.AnimatePresence>

      <framer_motion_1.motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleListening} className={"p-3 rounded-full ".concat(isListening
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-indigo-600 hover:bg-indigo-700', " text-white shadow-lg relative")}>
        {isListening ? (<>
            <lucide_react_1.MicOff className="h-5 w-5"/>
            <framer_motion_1.motion.div className="absolute inset-0 rounded-full border-2 border-red-400" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }}/>
          </>) : (<lucide_react_1.Mic className="h-5 w-5"/>)}
      </framer_motion_1.motion.button>
    </div>);
}
