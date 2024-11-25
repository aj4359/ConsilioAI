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
exports.trainBensonEmotionalIntelligence = trainBensonEmotionalIntelligence;
exports.getEmpatheticFinancialGuidance = getEmpatheticFinancialGuidance;
var inference_1 = require("@huggingface/inference");
var HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
var hf = new inference_1.HfInference(HF_TOKEN);
// Financial anxiety patterns and solutions
var financialAnxietyKnowledge = {
    commonConcerns: {
        retirement: {
            symptoms: [
                "Anxiety about retirement savings",
                "Fear of outliving savings",
                "Uncertainty about retirement age"
            ],
            solutions: [
                "Personalized retirement calculator",
                "Social Security optimization strategies",
                "Catch-up contribution strategies",
                "Part-time work transition plans"
            ],
            resources: [
                "Retirement readiness assessment",
                "Monthly savings calculator",
                "Social Security benefits estimator"
            ]
        },
        costOfLiving: {
            symptoms: [
                "Stress about monthly expenses",
                "Difficulty with budgeting",
                "Fear of inflation"
            ],
            solutions: [
                "50/30/20 budgeting strategy",
                "Expense tracking tools",
                "Inflation-protected investments",
                "Cost-cutting strategies"
            ],
            resources: [
                "Interactive budget planner",
                "Expense categorization tool",
                "Local cost of living calculator"
            ]
        },
        debt: {
            symptoms: [
                "Overwhelming debt stress",
                "Difficulty sleeping due to debt worries",
                "Relationship strain from debt"
            ],
            solutions: [
                "Debt snowball/avalanche methods",
                "Debt consolidation options",
                "Credit score improvement plan",
                "Interest rate negotiation"
            ],
            resources: [
                "Debt payoff calculator",
                "Credit improvement guide",
                "Debt consolidation comparison tool"
            ]
        },
        emergencyFunds: {
            symptoms: [
                "Anxiety about unexpected expenses",
                "Fear of job loss",
                "Stress about medical costs"
            ],
            solutions: [
                "Emergency fund building strategy",
                "Side income opportunities",
                "Insurance optimization",
                "Healthcare cost planning"
            ],
            resources: [
                "Emergency fund calculator",
                "Insurance needs assessment",
                "Side gig opportunity finder"
            ]
        }
    },
    supportStrategies: {
        emotional: {
            recognition: [
                "Acknowledge financial anxiety as normal",
                "Validate emotional responses",
                "Create safe space for discussion"
            ],
            coping: [
                "Mindfulness techniques for money stress",
                "Breaking large goals into smaller steps",
                "Celebrating financial wins"
            ]
        },
        practical: {
            immediate: [
                "Quick-win financial actions",
                "Small savings challenges",
                "Expense reduction tips"
            ],
            longTerm: [
                "Goal-setting frameworks",
                "Progress tracking tools",
                "Accountability systems"
            ]
        },
        educational: {
            basics: [
                "Financial literacy fundamentals",
                "Budgeting workshops",
                "Investment basics"
            ],
            advanced: [
                "Tax optimization strategies",
                "Estate planning basics",
                "Investment diversification"
            ]
        }
    }
};
// Train Benson with emotional intelligence
function trainBensonEmotionalIntelligence() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "Learn to recognize and address financial anxiety:\n        ".concat(JSON.stringify(financialAnxietyKnowledge, null, 2), "\n        \n        Guidelines:\n        1. Always acknowledge emotional concerns first\n        2. Provide both emotional support and practical solutions\n        3. Break down overwhelming problems into manageable steps\n        4. Offer specific, actionable recommendations\n        5. Include relevant tools and resources\n        6. Maintain empathetic tone while remaining professional\n        7. Recognize when to recommend professional help"),
                            parameters: {
                                max_length: 2000,
                                temperature: 0.7
                            }
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error('Failed to train Benson with emotional intelligence:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Get emotionally intelligent financial guidance
function getEmpatheticFinancialGuidance(concern, symptoms) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "As an empathetic financial advisor, address these concerns:\n        Main Concern: ".concat(concern, "\n        Symptoms: ").concat(symptoms.join(', '), "\n        \n        Consider:\n        - Emotional impact\n        - Practical solutions\n        - Available resources\n        - Step-by-step approach\n        - Support options"),
                            parameters: {
                                max_length: 500,
                                temperature: 0.7
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.generated_text];
                case 2:
                    error_2 = _a.sent();
                    console.error('Failed to get empathetic guidance:', error_2);
                    return [2 /*return*/, 'I understand this is a stressful situation. While I cannot provide specific advice right now, I encourage you to speak with a qualified financial advisor who can help address your concerns.'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
