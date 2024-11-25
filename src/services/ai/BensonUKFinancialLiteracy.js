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
exports.trainBensonUKFinancialLiteracy = trainBensonUKFinancialLiteracy;
exports.getFinancialLiteracyGuidance = getFinancialLiteracyGuidance;
var inference_1 = require("@huggingface/inference");
var HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
var hf = new inference_1.HfInference(HF_TOKEN);
// UK Financial Literacy Knowledge Base
var ukFinancialLiteracyData = {
    retirement: {
        statistics: {
            noPension: "18.2% of Britons have no pension",
            unknownValue: "50.2% don't know their pension value",
            lowContributions: "79% contribute less than 10% of take-home pay",
            uncertainRetirement: "20% uncertain about retirement timing"
        },
        solutions: {
            autoenrollment: {
                benefits: [
                    "Automatic workplace pension participation",
                    "Employer contributions",
                    "Tax relief on contributions"
                ],
                recommendations: [
                    "Increase contributions beyond minimum",
                    "Review pension regularly",
                    "Consider additional voluntary contributions"
                ]
            },
            pensionPlanning: {
                steps: [
                    "Calculate retirement income needs",
                    "Review current pension value",
                    "Assess contribution levels",
                    "Consider consolidation",
                    "Review investment strategy"
                ],
                tools: [
                    "Pension calculator",
                    "Retirement planner",
                    "Investment risk assessment"
                ]
            }
        }
    },
    financialEducation: {
        statistics: {
            literacyRate: "27% pass financial literacy tests",
            knowledgeAreas: {
                investing: "40% knowledge level",
                ISAs: "34% knowledge level",
                generalFinance: "28% knowledge level"
            }
        },
        educationalApproach: {
            topics: [
                "Budgeting basics",
                "Savings strategies",
                "Investment fundamentals",
                "Pension planning",
                "Tax efficiency",
                "Debt management"
            ],
            resources: {
                traditional: [
                    "Bank guidance",
                    "Financial advisors",
                    "Money advice services"
                ],
                digital: [
                    "Educational content",
                    "Interactive tools",
                    "Financial calculators"
                ],
                multimedia: [
                    "Video tutorials",
                    "Webinars",
                    "Podcasts"
                ]
            }
        }
    },
    savingsBehavior: {
        issues: {
            currentAccounts: "26% keep savings in non-interest bearing accounts",
            lowEngagement: "Significant portion avoid investment products",
            riskAversion: "Many prefer cash despite inflation risk"
        },
        improvements: {
            education: [
                "Understanding inflation impact",
                "Investment risk education",
                "Regular savings habits"
            ],
            products: [
                "ISA utilization",
                "High-interest savings accounts",
                "Investment platforms"
            ],
            strategies: [
                "Regular saving plans",
                "Pound cost averaging",
                "Goal-based saving"
            ]
        }
    }
};
// Train Benson with UK financial literacy expertise
function trainBensonUKFinancialLiteracy() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "Learn and understand UK financial literacy challenges:\n        ".concat(JSON.stringify(ukFinancialLiteracyData, null, 2), "\n        \n        Key objectives:\n        1. Improve pension awareness and engagement\n        2. Enhance financial literacy\n        3. Promote better savings habits\n        4. Provide practical education\n        5. Address common misconceptions\n        6. Offer actionable solutions\n        7. Support informed decision-making"),
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
                    console.error('Failed to train Benson with UK financial literacy:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Get financial literacy guidance
function getFinancialLiteracyGuidance(topic, userProfile) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "As a UK financial education specialist, provide guidance on ".concat(topic, ":\n        User Profile: ").concat(JSON.stringify(userProfile), "\n        \n        Consider:\n        - Current knowledge level\n        - Specific concerns\n        - Learning preferences\n        - Practical steps\n        - Available resources\n        - Common misconceptions"),
                            parameters: {
                                max_length: 500,
                                temperature: 0.7
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, "".concat(response.generated_text, "\n\nIMPORTANT: This information is for educational purposes only. For personalised financial advice, please consult with a qualified financial advisor regulated by the FCA.")];
                case 2:
                    error_2 = _a.sent();
                    console.error('Failed to get financial literacy guidance:', error_2);
                    return [2 /*return*/, 'I apologise, but I cannot provide guidance at the moment. Please try again later.'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
