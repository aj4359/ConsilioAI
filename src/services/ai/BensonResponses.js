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
exports.bensonCapabilities = void 0;
exports.generateContextualResponse = generateContextualResponse;
var inference_1 = require("@huggingface/inference");
var HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
var hf = new inference_1.HfInference(HF_TOKEN);
exports.bensonCapabilities = [
    {
        name: "Investment Advice",
        examples: [
            "How should I diversify my portfolio?",
            "What's a good investment strategy for retirement?",
            "Should I invest in stocks or bonds?"
        ]
    },
    {
        name: "Financial Planning",
        examples: [
            "How much should I save for retirement?",
            "How can I create a budget?",
            "What's the best way to pay off debt?"
        ]
    },
    {
        name: "Market Analysis",
        examples: [
            "What's your take on the current market?",
            "Which sectors look promising?",
            "How should I react to market volatility?"
        ]
    }
];
function generateContextualResponse(input) {
    return __awaiter(this, void 0, void 0, function () {
        var prompt_1, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    prompt_1 = "As a professional financial advisor, provide a helpful response to: \"".concat(input, "\"\n    \n    Consider:\n    - Keep responses clear and concise\n    - Focus on practical advice\n    - Include relevant financial concepts\n    - Maintain a professional tone\n    - Acknowledge if more information is needed\n    \n    Response:");
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: prompt_1,
                            parameters: {
                                max_length: 150,
                                temperature: 0.7,
                                top_p: 0.9,
                                repetition_penalty: 1.2
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.generated_text.trim()];
                case 2:
                    error_1 = _a.sent();
                    console.error('Failed to generate response:', error_1);
                    return [2 /*return*/, "I apologize, but I'm having trouble processing that right now. Could you rephrase your question?"];
                case 3: return [2 /*return*/];
            }
        });
    });
}
