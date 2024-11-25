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
exports.trainBensonUKFinancialPlanning = trainBensonUKFinancialPlanning;
exports.getUKFinancialPlanningGuidance = getUKFinancialPlanningGuidance;
var inference_1 = require("@huggingface/inference");
var HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
var hf = new inference_1.HfInference(HF_TOKEN);
// UK Financial Planning Knowledge Base
var ukFinancialPlanningKnowledge = {
    insurance: {
        life: {
            types: {
                term: {
                    description: "Cover for fixed period",
                    variants: ["Level", "Decreasing", "Family Income Benefit"],
                    suitability: ["Mortgage protection", "Family protection", "Business protection"]
                },
                whole_of_life: {
                    description: "Lifelong cover with investment element",
                    features: ["Guaranteed payout", "Investment component", "IHT planning tool"],
                    considerations: ["Premium reviews", "Investment performance", "Cost"]
                }
            },
            considerations: [
                "Cover amount calculation",
                "Term length",
                "Premium affordability",
                "Trust arrangements",
                "Critical illness addition"
            ]
        },
        health: {
            critical_illness: {
                features: ["Lump sum on diagnosis", "Specified conditions", "Severity levels"],
                considerations: ["Definition quality", "Exclusions", "Premium guarantees"]
            },
            income_protection: {
                features: ["Regular income if unable to work", "Own/any occupation", "Deferred periods"],
                considerations: ["Benefit level", "Claim duration", "Integration with sick pay"]
            }
        }
    },
    retirement: {
        state_pension: {
            entitlement: {
                qualifying_years: "35 years for full pension",
                credits: ["Caring", "Child benefit", "Universal Credit"],
                gaps: ["Voluntary contributions", "Checking record", "Buying years"]
            },
            planning: {
                age_considerations: ["Normal age", "Deferral options", "Early retirement impact"],
                maximisation: ["National Insurance record", "Credits claiming", "Voluntary top-ups"]
            }
        },
        private_pensions: {
            workplace: {
                auto_enrolment: {
                    features: ["Employer contributions", "Tax relief", "Investment choice"],
                    optimisation: ["Contribution levels", "Fund selection", "Salary sacrifice"]
                },
                defined_benefit: {
                    features: ["Guaranteed income", "Inflation protection", "Death benefits"],
                    considerations: ["Transfer values", "Early retirement", "Additional contributions"]
                }
            },
            personal: {
                types: {
                    SIPP: {
                        features: ["Investment flexibility", "Tax relief", "Pension freedoms"],
                        considerations: ["Investment risk", "Management costs", "Contribution limits"]
                    },
                    stakeholder: {
                        features: ["Capped charges", "Default funds", "Minimum standards"],
                        suitability: ["Lower contributions", "Simple approach", "Cost sensitivity"]
                    }
                },
                contribution_strategies: {
                    tax_efficiency: ["Annual allowance", "Carry forward", "Lifetime allowance"],
                    investment_approach: ["Risk profiling", "Asset allocation", "Regular review"]
                }
            }
        }
    },
    trusts: {
        types: {
            bare: {
                features: ["Simple structure", "Fixed beneficiaries", "Immediate IHT benefits"],
                uses: ["Junior ISAs", "Child pensions", "Life policies"]
            },
            discretionary: {
                features: ["Flexible beneficiaries", "Trustee control", "IHT planning"],
                uses: ["Family protection", "Business succession", "Asset protection"]
            },
            interest_in_possession: {
                features: ["Income rights", "Capital preservation", "Succession planning"],
                uses: ["Widow(er) provision", "Second marriages", "Asset protection"]
            }
        },
        planning: {
            tax_considerations: {
                iht: ["Entry charges", "Periodic charges", "Exit charges"],
                income_tax: ["Trust rates", "Beneficiary rates", "Tax pools"],
                cgt: ["Annual exemption", "Hold-over relief", "Base cost"]
            },
            practical_aspects: {
                trustees: ["Selection", "Powers", "Duties"],
                administration: ["Record keeping", "Tax returns", "Distributions"],
                reviews: ["Regular assessment", "Beneficiary changes", "Tax changes"]
            }
        }
    }
};
// Train Benson with UK financial planning expertise
function trainBensonUKFinancialPlanning() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "Learn and understand UK financial planning:\n        ".concat(JSON.stringify(ukFinancialPlanningKnowledge, null, 2), "\n        \n        Key requirements:\n        1. Follow FCA regulations\n        2. Apply Consumer Duty principles\n        3. Consider suitability\n        4. Explain clearly and simply\n        5. Highlight key risks\n        6. Provide practical guidance\n        7. Regular reviews\n        8. Documentation requirements"),
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
                    console.error('Failed to train Benson with UK financial planning:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Get UK financial planning guidance
function getUKFinancialPlanningGuidance(topic, userProfile) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "As a UK financial planning specialist, provide guidance on ".concat(topic, ":\n        User Profile: ").concat(JSON.stringify(userProfile), "\n        \n        Consider:\n        - Personal circumstances\n        - Risk factors\n        - Tax implications\n        - Practical implementation\n        - Regular reviews\n        - Documentation needs"),
                            parameters: {
                                max_length: 500,
                                temperature: 0.7
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, "".concat(response.generated_text, "\n\nIMPORTANT: This information is for guidance only. For personalised financial advice, please consult with a qualified financial advisor regulated by the FCA.")];
                case 2:
                    error_2 = _a.sent();
                    console.error('Failed to get UK financial planning guidance:', error_2);
                    return [2 /*return*/, 'I apologise, but I cannot provide guidance at the moment. Please try again later.'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
