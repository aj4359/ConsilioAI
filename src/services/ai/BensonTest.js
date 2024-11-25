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
exports.BensonTestRunner = void 0;
exports.runComprehensiveTests = runComprehensiveTests;
var inference_1 = require("@huggingface/inference");
var BensonTest_1 = require("../testing/BensonTest");
var BensonUSExpertise_1 = require("./BensonUSExpertise");
var HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
var hf = new inference_1.HfInference(HF_TOKEN);
// Test cases for US financial expertise
var usTestCases = [
    {
        category: "Investment Strategy",
        questions: [
            "What's the optimal asset allocation for a 40-year-old with moderate risk tolerance?",
            "How should I diversify my portfolio across different sectors?",
            "When should I rebalance my investment portfolio?"
        ]
    },
    {
        category: "Retirement Planning",
        questions: [
            "How much should I contribute to my 401(k) if my employer matches 5%?",
            "What are the pros and cons of Roth vs Traditional IRA?",
            "When should I start taking Social Security benefits?"
        ]
    },
    {
        category: "Tax Strategy",
        questions: [
            "How can I minimize capital gains tax on my investments?",
            "What tax-advantaged accounts should I prioritize?",
            "How does tax-loss harvesting work?"
        ]
    },
    {
        category: "Risk Management",
        questions: [
            "How should I protect my portfolio against market volatility?",
            "What insurance products should I consider for wealth protection?",
            "How do I hedge against inflation risk?"
        ]
    }
];
// Run comprehensive tests
function runComprehensiveTests() {
    return __awaiter(this, void 0, void 0, function () {
        var expertiseResults, _i, usTestCases_1, category, _a, _b, question, response, containsDisclaimer, mentionsRegulations, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log("Starting comprehensive Benson tests...");
                    // First, ensure Benson is trained
                    return [4 /*yield*/, (0, BensonUSExpertise_1.trainBensonUSExpert)()];
                case 1:
                    // First, ensure Benson is trained
                    _c.sent();
                    return [4 /*yield*/, (0, BensonTest_1.testBensonExpertise)()];
                case 2:
                    expertiseResults = _c.sent();
                    console.log("Expertise test results:", expertiseResults);
                    _i = 0, usTestCases_1 = usTestCases;
                    _c.label = 3;
                case 3:
                    if (!(_i < usTestCases_1.length)) return [3 /*break*/, 10];
                    category = usTestCases_1[_i];
                    console.log("\nTesting ".concat(category.category, ":"));
                    _a = 0, _b = category.questions;
                    _c.label = 4;
                case 4:
                    if (!(_a < _b.length)) return [3 /*break*/, 9];
                    question = _b[_a];
                    _c.label = 5;
                case 5:
                    _c.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "As a US financial advisor, answer: ".concat(question),
                            parameters: {
                                max_length: 200,
                                temperature: 0.7
                            }
                        })];
                case 6:
                    response = _c.sent();
                    console.log("Q: ".concat(question));
                    console.log("A: ".concat(response.generated_text));
                    containsDisclaimer = response.generated_text.toLowerCase().includes('not financial advice');
                    mentionsRegulations = response.generated_text.toLowerCase().includes('sec') ||
                        response.generated_text.toLowerCase().includes('finra');
                    console.log('Response Quality:');
                    console.log('- Contains Disclaimer:', containsDisclaimer);
                    console.log('- Mentions Regulations:', mentionsRegulations);
                    console.log('---');
                    return [3 /*break*/, 8];
                case 7:
                    error_1 = _c.sent();
                    console.error("Failed to test question: ".concat(question), error_1);
                    return [3 /*break*/, 8];
                case 8:
                    _a++;
                    return [3 /*break*/, 4];
                case 9:
                    _i++;
                    return [3 /*break*/, 3];
                case 10: return [2 /*return*/];
            }
        });
    });
}
// Validate response quality
function validateResponse(response) {
    var criteria = [
        {
            name: 'Regulatory Compliance',
            check: function (text) { return text.toLowerCase().includes('sec') || text.toLowerCase().includes('finra'); }
        },
        {
            name: 'Disclaimer Present',
            check: function (text) { return text.toLowerCase().includes('not financial advice'); }
        },
        {
            name: 'Professional Language',
            check: function (text) { return !text.toLowerCase().includes('maybe') && !text.toLowerCase().includes('probably'); }
        },
        {
            name: 'Comprehensive Answer',
            check: function (text) { return text.length > 100; }
        }
    ];
    return criteria.every(function (criterion) { return criterion.check(response); });
}
// Export test runner
exports.BensonTestRunner = {
    runAll: runComprehensiveTests,
    validateResponse: validateResponse
};
