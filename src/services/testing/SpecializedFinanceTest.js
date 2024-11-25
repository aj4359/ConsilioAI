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
exports.SpecializedTestRunner = void 0;
exports.runSpecializedTests = runSpecializedTests;
var inference_1 = require("@huggingface/inference");
var BensonUSExpertise_1 = require("../ai/BensonUSExpertise");
var HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
var hf = new inference_1.HfInference(HF_TOKEN);
// Specialized test cases covering niche areas
var specializedTestCases = [
    {
        category: "Alternative Investments",
        questions: [
            "How should I evaluate private equity investments?",
            "What role should REITs play in my portfolio?",
            "How can I invest in art and collectibles responsibly?"
        ]
    },
    {
        category: "Advanced Tax Strategies",
        questions: [
            "How can I utilize Qualified Opportunity Zones?",
            "What are the benefits of charitable remainder trusts?",
            "How do I structure a tax-efficient family limited partnership?"
        ]
    },
    {
        category: "Estate Planning Techniques",
        questions: [
            "How can I use GRATs to minimize estate tax?",
            "What are the benefits of an intentionally defective grantor trust?",
            "How should I structure a family dynasty trust?"
        ]
    },
    {
        category: "Advanced Retirement Strategies",
        questions: [
            "How can I implement a Roth conversion ladder?",
            "What's the optimal strategy for backdoor Roth IRA contributions?",
            "How should I sequence withdrawals from multiple retirement accounts?"
        ]
    },
    {
        category: "Insurance Optimization",
        questions: [
            "When should I consider premium financing for life insurance?",
            "How can I use a captive insurance company?",
            "What role should variable universal life insurance play in estate planning?"
        ]
    },
    {
        category: "Business Owner Strategies",
        questions: [
            "How should I structure a Section 1202 qualified small business stock sale?",
            "What are the benefits of a management company structure?",
            "How can I optimize my defined benefit pension plan?"
        ]
    }
];
function runSpecializedTests() {
    return __awaiter(this, void 0, void 0, function () {
        var results, _i, specializedTestCases_1, category, _a, _b, question, response, result, error_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log("Starting specialized finance tests...");
                    // Ensure Benson is trained
                    return [4 /*yield*/, (0, BensonUSExpertise_1.trainBensonUSExpert)()];
                case 1:
                    // Ensure Benson is trained
                    _c.sent();
                    results = [];
                    _i = 0, specializedTestCases_1 = specializedTestCases;
                    _c.label = 2;
                case 2:
                    if (!(_i < specializedTestCases_1.length)) return [3 /*break*/, 9];
                    category = specializedTestCases_1[_i];
                    console.log("\nTesting ".concat(category.category, ":"));
                    _a = 0, _b = category.questions;
                    _c.label = 3;
                case 3:
                    if (!(_a < _b.length)) return [3 /*break*/, 8];
                    question = _b[_a];
                    _c.label = 4;
                case 4:
                    _c.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "As a Series 7 qualified financial advisor with advanced expertise, \n            provide detailed guidance on this specialized topic:\n            ".concat(question, "\n            \n            Consider:\n            - Regulatory requirements\n            - Tax implications\n            - Risk factors\n            - Implementation strategy\n            - Required disclosures"),
                            parameters: {
                                max_length: 500,
                                temperature: 0.7
                            }
                        })];
                case 5:
                    response = _c.sent();
                    result = validateSpecializedResponse(response.generated_text);
                    results.push({
                        category: category.category,
                        question: question,
                        response: response.generated_text,
                        validation: result
                    });
                    console.log("Q: ".concat(question));
                    console.log("Validation Results:", result);
                    console.log('---');
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _c.sent();
                    console.error("Failed to test question: ".concat(question), error_1);
                    return [3 /*break*/, 7];
                case 7:
                    _a++;
                    return [3 /*break*/, 3];
                case 8:
                    _i++;
                    return [3 /*break*/, 2];
                case 9: return [2 /*return*/, results];
            }
        });
    });
}
function validateSpecializedResponse(response) {
    return {
        hasRegulatoryCitation: /SEC|FINRA|IRS|DOL/.test(response),
        includesRiskWarning: /risk|careful|consider|caution/.test(response.toLowerCase()),
        mentionsTaxImplications: /tax|IRS|deduction|liability/.test(response),
        providesImplementationSteps: /first|then|next|finally|step/.test(response.toLowerCase()),
        includesDisclaimer: /not financial advice|consult|professional|advisor/.test(response.toLowerCase()),
        isComprehensive: response.length > 200,
        usesProfessionalLanguage: !/maybe|probably|guess|think/.test(response.toLowerCase())
    };
}
exports.SpecializedTestRunner = {
    runAll: runSpecializedTests,
    validateResponse: validateSpecializedResponse
};
