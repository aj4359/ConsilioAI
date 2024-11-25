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
exports.serviceOfferings = void 0;
exports.trainBenson = trainBenson;
exports.getServiceRecommendations = getServiceRecommendations;
var inference_1 = require("@huggingface/inference");
var HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
var hf = new inference_1.HfInference(HF_TOKEN);
// Benson's knowledge base of services and features
exports.serviceOfferings = {
    core: {
        aiAdvisor: {
            name: "AI Financial Advisor",
            description: "24/7 personalized financial guidance powered by advanced AI",
            features: [
                "Real-time portfolio analysis",
                "Market trend predictions",
                "Risk assessment",
                "Custom investment strategies"
            ],
            uniqueValue: "Series 7 trained AI that combines human expertise with machine learning"
        },
        wealthManagement: {
            name: "Smart Wealth Management",
            description: "Automated portfolio management with AI optimization",
            features: [
                "Dynamic rebalancing",
                "Tax-loss harvesting",
                "Multi-currency support",
                "ESG investing options"
            ],
            uniqueValue: "Proprietary AI algorithms for optimal asset allocation"
        },
        education: {
            name: "Financial Education Hub",
            description: "Interactive learning platform for financial literacy",
            features: [
                "Personalized learning paths",
                "Expert webinars",
                "Interactive simulations",
                "Certification programs"
            ],
            uniqueValue: "Adaptive learning system that evolves with your knowledge"
        }
    },
    premium: {
        predictiveAnalytics: {
            name: "Predictive Market Analytics",
            description: "Advanced market forecasting and trend analysis",
            features: [
                "AI-powered market predictions",
                "Sentiment analysis",
                "Volatility forecasting",
                "Custom alerts"
            ]
        },
        taxOptimization: {
            name: "Tax Strategy Optimizer",
            description: "AI-driven tax optimization for investments",
            features: [
                "Automated tax-loss harvesting",
                "Tax-efficient investing",
                "Year-round tax planning",
                "Custom tax strategies"
            ]
        },
        wealthPlanning: {
            name: "Comprehensive Wealth Planning",
            description: "Long-term wealth building and preservation",
            features: [
                "Estate planning",
                "Retirement modeling",
                "Goal-based planning",
                "Risk management"
            ]
        }
    },
    free: {
        basicAnalytics: {
            name: "Basic Financial Analytics",
            description: "Essential financial tracking and analysis",
            features: [
                "Portfolio tracking",
                "Basic market data",
                "Investment calculators",
                "Educational resources"
            ]
        },
        communityAccess: {
            name: "Financial Community",
            description: "Connect with other investors and experts",
            features: [
                "Discussion forums",
                "Market insights",
                "Expert Q&A",
                "Weekly newsletters"
            ]
        },
        taxCalculator: {
            name: "Free Tax Calculator",
            description: "Basic tax estimation and planning tools",
            features: [
                "Income tax calculator",
                "Capital gains calculator",
                "Tax planning basics",
                "Deduction finder"
            ]
        }
    }
};
// Train Benson with service knowledge
function trainBenson() {
    return __awaiter(this, void 0, void 0, function () {
        var trainingData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    trainingData = JSON.stringify(exports.serviceOfferings, null, 2);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "Learn and understand the following service offerings for Consilio-AI:\n        ".concat(trainingData, "\n        \n        Provide accurate and helpful responses about these services."),
                            parameters: {
                                max_length: 1000,
                                temperature: 0.7
                            }
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Failed to train Benson:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Get service recommendations
function getServiceRecommendations(userProfile) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "Based on the user profile: ".concat(JSON.stringify(userProfile), "\n        Recommend appropriate services from our offerings: ").concat(JSON.stringify(exports.serviceOfferings), "\n        Provide personalized recommendations."),
                            parameters: {
                                max_length: 300,
                                temperature: 0.7
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.generated_text];
                case 2:
                    error_2 = _a.sent();
                    console.error('Failed to get recommendations:', error_2);
                    return [2 /*return*/, 'I apologize, but I cannot provide recommendations at the moment. Please try again later.'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
