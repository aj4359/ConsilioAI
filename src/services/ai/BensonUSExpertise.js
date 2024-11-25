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
exports.trainBensonUSExpert = trainBensonUSExpert;
exports.getUSExpertAdvice = getUSExpertAdvice;
var inference_1 = require("@huggingface/inference");
var HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
var hf = new inference_1.HfInference(HF_TOKEN);
// Enhanced US-specific financial expertise
var usFinancialKnowledge = {
    mortgages: {
        types: {
            conventional: {
                features: ['Fixed-rate', 'Adjustable-rate (ARM)', 'Jumbo'],
                requirements: ['Credit score', 'Down payment', 'Debt-to-income ratio'],
                programs: ['Fannie Mae', 'Freddie Mac']
            },
            government: {
                FHA: {
                    features: ['Lower down payment', 'Lower credit requirements'],
                    requirements: ['MIP insurance', 'Property standards']
                },
                VA: {
                    features: ['No down payment', 'No PMI'],
                    eligibility: ['Veterans', 'Active duty', 'Eligible spouses']
                },
                USDA: {
                    features: ['No down payment', 'Rural properties'],
                    requirements: ['Income limits', 'Location requirements']
                }
            }
        },
        strategies: {
            refinancing: ['Rate-and-term', 'Cash-out', 'Streamline'],
            optimization: ['Points vs. rate', 'PMI removal', 'Extra payments']
        }
    },
    pensions: {
        qualified: {
            defined_benefit: {
                features: ['Guaranteed income', 'Employer-funded'],
                options: ['Single life', 'Joint and survivor', 'Period certain']
            },
            defined_contribution: {
                types: ['401(k)', '403(b)', '457'],
                features: ['Employee contributions', 'Employer matching'],
                limits: {
                    contribution: '$22,500 (2024)',
                    catchUp: '$7,500 (50+ years)'
                }
            }
        },
        social_security: {
            benefits: ['Retirement', 'Disability', 'Survivors'],
            strategies: {
                claiming: ['Early (62)', 'Full retirement age', 'Delayed (70)'],
                optimization: ['Spousal benefits', 'Ex-spouse benefits', 'Survivors benefits']
            }
        },
        pbgc: {
            protection: ['Single-employer', 'Multi-employer'],
            limits: ['Maximum guarantee', 'Benefit calculations']
        }
    },
    trusts: {
        revocable: {
            living_trust: {
                features: ['Flexibility', 'Probate avoidance', 'Privacy'],
                control: ['Grantor control', 'Amendment rights'],
                taxation: ['Grantor trust rules', 'Basis step-up']
            }
        },
        irrevocable: {
            types: {
                QPRT: {
                    purpose: 'Qualified Personal Residence Trust',
                    benefits: ['Gift tax savings', 'Estate tax reduction']
                },
                IDGT: {
                    purpose: 'Intentionally Defective Grantor Trust',
                    benefits: ['Income tax efficiency', 'Estate tax savings']
                },
                SLAT: {
                    purpose: 'Spousal Lifetime Access Trust',
                    benefits: ['Gift tax exemption', 'Spouse access']
                },
                CRT: {
                    purpose: 'Charitable Remainder Trust',
                    benefits: ['Income stream', 'Charitable deduction']
                }
            },
            planning: ['Generation-skipping', 'Asset protection', 'Tax efficiency']
        }
    },
    personal_finance: {
        budgeting: {
            methods: ['50/30/20 rule', 'Zero-based', 'Envelope system'],
            tools: ['Expense tracking', 'Cash flow analysis', 'Goal setting']
        },
        debt_management: {
            strategies: ['Avalanche method', 'Snowball method', 'Consolidation'],
            priorities: ['High-interest debt', 'Secured vs. unsecured', 'Emergency fund']
        },
        insurance: {
            life: ['Term', 'Whole', 'Universal'],
            disability: ['Short-term', 'Long-term', 'Own-occupation'],
            property: ['Homeowners', 'Auto', 'Umbrella']
        },
        credit: {
            factors: ['Payment history', 'Utilization', 'Length of history'],
            optimization: ['Score improvement', 'Report monitoring', 'Dispute resolution']
        }
    }
};
// Train Benson with enhanced expertise
function trainBensonUSExpert() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "Learn and understand comprehensive US financial expertise:\n        ".concat(JSON.stringify(usFinancialKnowledge, null, 2), "\n        \n        Key requirements:\n        1. Maintain fiduciary duty\n        2. Provide SEC/FINRA compliant advice\n        3. Include required disclosures\n        4. Consider tax implications\n        5. Focus on client suitability\n        6. Understand state-specific regulations\n        7. Keep current with market conditions\n        8. Apply risk management principles"),
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
                    console.error('Failed to train Benson with US expertise:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Get expert US financial advice
function getUSExpertAdvice(topic, question) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "As a Series 7 qualified financial advisor with expertise in ".concat(topic, ", provide guidance:\n        Question: ").concat(question, "\n        \n        Consider:\n        - Current market conditions\n        - Regulatory requirements\n        - Risk factors\n        - Tax implications\n        - Client suitability\n        - Implementation strategy\n        - Required disclosures"),
                            parameters: {
                                max_length: 500,
                                temperature: 0.7
                            }
                        })];
                case 1:
                    response = _a.sent();
                    // Add required disclaimers
                    return [2 /*return*/, "".concat(response.generated_text, "\n\nIMPORTANT: This information is not financial advice. Please consult with a qualified financial advisor for personalized recommendations. Securities offered through FINRA member firms. Mortgage products are subject to qualification and market conditions.")];
                case 2:
                    error_2 = _a.sent();
                    console.error('Failed to get US expert advice:', error_2);
                    return [2 /*return*/, 'I apologize, but I cannot provide financial guidance at the moment. Please try again later.'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
