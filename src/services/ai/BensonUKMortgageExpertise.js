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
exports.trainBensonUKMortgage = trainBensonUKMortgage;
exports.getUKMortgageGuidance = getUKMortgageGuidance;
var inference_1 = require("@huggingface/inference");
var HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
var hf = new inference_1.HfInference(HF_TOKEN);
// UK Mortgage and Property Knowledge Base
var ukMortgageKnowledge = {
    mortgageTypes: {
        fixed_rate: {
            description: "Interest rate fixed for set period",
            terms: ["2-year", "3-year", "5-year", "10-year"],
            benefits: ["Payment certainty", "Budgeting ease"],
            considerations: ["Early repayment charges", "Higher initial rates"]
        },
        tracker: {
            description: "Rate follows Bank of England base rate",
            variants: ["Lifetime tracker", "Initial period tracker"],
            benefits: ["Potential lower rates", "More flexibility"],
            risks: ["Payment uncertainty", "Rate increases"]
        },
        discount: {
            description: "Discount off lender's SVR",
            features: ["Initial discount period", "Variable payments"],
            benefits: ["Lower initial payments"],
            risks: ["SVR changes", "Payment uncertainty"]
        }
    },
    affordability: {
        calculations: {
            income_multiples: {
                single: "4.5-5x annual income",
                joint: "4x joint income typical",
                factors: ["Employment type", "Credit score", "Existing commitments"]
            },
            stress_testing: {
                interest_rates: "3% above current rate",
                affordability: "Include bills and commitments",
                future_changes: "Consider known income changes"
            }
        },
        requirements: {
            deposit: {
                minimum: "5-10% typical minimum",
                optimal: "15-25% for better rates",
                sources: ["Savings", "Help to Buy", "Gifted", "LISA"]
            },
            documentation: [
                "3 months payslips",
                "3-6 months bank statements",
                "2-3 years accounts if self-employed",
                "Proof of deposit source"
            ]
        }
    },
    schemes: {
        help_to_buy: {
            equity_loan: {
                features: ["Government loan up to 20%", "40% in London"],
                eligibility: ["New build only", "First-time buyers"],
                considerations: ["Equity loan fees", "Repayment terms"]
            },
            shared_ownership: {
                features: ["Buy 25-75% share", "Pay rent on remainder"],
                eligibility: ["Income caps", "Priority groups"],
                considerations: ["Service charges", "Staircasing costs"]
            }
        },
        first_homes: {
            features: ["30-50% discount", "Local connection criteria"],
            eligibility: ["First-time buyers", "Income caps"],
            restrictions: ["Resale criteria", "Price caps"]
        }
    },
    process: {
        steps: [
            {
                stage: "Preparation",
                actions: [
                    "Credit report check",
                    "Deposit saving",
                    "Budget planning",
                    "Documentation gathering"
                ]
            },
            {
                stage: "Agreement in Principle",
                actions: [
                    "Basic affordability check",
                    "Soft credit search",
                    "Initial deposit confirmation"
                ]
            },
            {
                stage: "Property Search",
                actions: [
                    "Area research",
                    "Property viewings",
                    "Offer negotiation",
                    "Survey arrangement"
                ]
            },
            {
                stage: "Full Application",
                actions: [
                    "Full documentation submission",
                    "Property valuation",
                    "Underwriting process",
                    "Mortgage offer"
                ]
            },
            {
                stage: "Completion",
                actions: [
                    "Conveyancing",
                    "Searches",
                    "Exchange contracts",
                    "Completion and move"
                ]
            }
        ],
        timeframes: {
            agreement_in_principle: "24 hours typical",
            full_application: "2-4 weeks typical",
            total_process: "2-3 months average"
        }
    },
    marketChallenges: {
        affordability: {
            issues: [
                "High house prices relative to income",
                "Strict lending criteria",
                "Large deposit requirements",
                "Rising interest rates"
            ],
            solutions: [
                "Government schemes utilization",
                "Joint applications",
                "Guarantor options",
                "Longer fixed terms"
            ]
        },
        firstTimeBuyers: {
            challenges: [
                "Deposit saving difficulty",
                "Limited credit history",
                "Competition from investors",
                "Property chain free requirement"
            ],
            support: [
                "LISA benefits",
                "Help to Buy schemes",
                "Shared ownership",
                "Family support options"
            ]
        }
    }
};
// Train Benson with UK mortgage expertise
function trainBensonUKMortgage() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "Learn and understand UK mortgage and property expertise:\n        ".concat(JSON.stringify(ukMortgageKnowledge, null, 2), "\n        \n        Key requirements:\n        1. Follow FCA mortgage regulations\n        2. Apply Consumer Duty principles\n        3. Consider affordability carefully\n        4. Explain all options clearly\n        5. Highlight risks and benefits\n        6. Provide practical guidance\n        7. Include relevant schemes\n        8. Address market challenges"),
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
                    console.error('Failed to train Benson with UK mortgage expertise:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Get UK mortgage guidance
function getUKMortgageGuidance(topic, userProfile) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "As a UK mortgage specialist, provide guidance on ".concat(topic, ":\n        User Profile: ").concat(JSON.stringify(userProfile), "\n        \n        Consider:\n        - Current market conditions\n        - Affordability factors\n        - Available schemes\n        - Practical steps\n        - Risk factors\n        - Documentation requirements"),
                            parameters: {
                                max_length: 500,
                                temperature: 0.7
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, "".concat(response.generated_text, "\n\nIMPORTANT: This information is for guidance only. For personalised mortgage advice, please consult with a qualified mortgage advisor regulated by the FCA. Your home may be repossessed if you do not keep up repayments on your mortgage.")];
                case 2:
                    error_2 = _a.sent();
                    console.error('Failed to get UK mortgage guidance:', error_2);
                    return [2 /*return*/, 'I apologise, but I cannot provide mortgage guidance at the moment. Please try again later.'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
