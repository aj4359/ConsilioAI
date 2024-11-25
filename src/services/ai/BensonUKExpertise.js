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
exports.trainBensonUKExpert = trainBensonUKExpert;
exports.getUKExpertAdvice = getUKExpertAdvice;
var inference_1 = require("@huggingface/inference");
var HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
var hf = new inference_1.HfInference(HF_TOKEN);
// UK Financial Expertise Knowledge Base
var ukFinancialKnowledge = {
    qualifications: {
        level4: {
            name: "Level 4 Diploma in Regulated Financial Planning",
            modules: [
                "Financial Services Regulation & Ethics",
                "Investment Principles & Risk",
                "Personal Taxation",
                "Pensions & Retirement Planning",
                "Financial Protection",
                "Financial Planning Practice"
            ],
            regulatoryBody: "FCA"
        },
        level6: {
            name: "Level 6 Advanced Diploma in Financial Planning",
            modules: [
                "Advanced Financial Planning",
                "Advanced Investment Planning",
                "Advanced Pension Planning",
                "Advanced Tax Planning",
                "Trust Planning and Estate Administration"
            ],
            designation: "FPFS (Fellow PFS)"
        },
        chartered: {
            name: "Chartered Financial Planner",
            requirements: [
                "Advanced Diploma in Financial Planning",
                "5 years industry experience",
                "Continuous Professional Development",
                "Ethical standards adherence"
            ]
        }
    },
    regulations: {
        FCA: {
            principles: [
                "Integrity",
                "Skill, care and diligence",
                "Management and control",
                "Financial prudence",
                "Market conduct",
                "Customers' interests",
                "Communications with clients",
                "Conflicts of interest",
                "Relationships of trust",
                "Client assets",
                "Relations with regulators"
            ],
            conductRules: {
                COBS: ["Client categorization", "Suitability", "Best execution"],
                MCOB: ["Mortgage advice", "Affordability", "Disclosure"],
                ICOBS: ["Insurance distribution", "Claims handling", "Cancellation"]
            }
        },
        consumerDuty: {
            principles: [
                "Act in good faith",
                "Avoid foreseeable harm",
                "Enable consumers to pursue financial objectives"
            ],
            outcomes: [
                "Fair value",
                "Products and services",
                "Consumer understanding",
                "Consumer support"
            ]
        }
    },
    expertise: {
        pensions: {
            types: {
                defined_benefit: {
                    features: ["Guaranteed income", "Inflation protection"],
                    considerations: ["Transfer values", "Protected rights"]
                },
                defined_contribution: {
                    personal: ["SIPPs", "Stakeholder pensions"],
                    workplace: ["Auto-enrollment", "Salary sacrifice"]
                },
                statePension: {
                    entitlement: ["Qualifying years", "Credits"],
                    options: ["Deferral", "Additional contributions"]
                }
            },
            transfers: {
                requirements: [
                    "PETR qualification",
                    "Transfer value analysis",
                    "Appropriate pension transfer analysis (APTA)",
                    "Transfer value comparator (TVC)"
                ]
            }
        },
        investments: {
            regulated: {
                products: ["ISAs", "OEICs", "Investment trusts", "ETFs"],
                services: ["Discretionary", "Advisory", "Execution-only"]
            },
            tax_wrappers: {
                ISA: ["Cash", "Stocks & Shares", "Lifetime", "Junior"],
                VCT: ["Tax relief", "Qualifying investments"],
                EIS: ["Tax advantages", "Risk factors"]
            }
        },
        protection: {
            life: ["Term", "Whole of life", "Family income benefit"],
            health: ["Critical illness", "Income protection", "PMI"],
            business: ["Key person", "Shareholder protection", "Relevant life"]
        },
        taxation: {
            income: ["Personal allowance", "Tax bands", "Dividend taxation"],
            capital_gains: ["Annual exemption", "Business relief", "Loss relief"],
            inheritance: ["Nil rate band", "Residence nil rate band", "Gifting"]
        }
    }
};
// Train Benson with UK expertise
function trainBensonUKExpert() {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "Learn and understand comprehensive UK financial expertise:\n        ".concat(JSON.stringify(ukFinancialKnowledge, null, 2), "\n        \n        Key requirements:\n        1. Maintain FCA compliance\n        2. Follow Consumer Duty principles\n        3. Provide suitable advice\n        4. Include required disclosures\n        5. Consider tax implications\n        6. Apply risk management\n        7. Document recommendations\n        8. Maintain CPD requirements"),
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
                    console.error('Failed to train Benson with UK expertise:', error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
// Get expert UK financial advice
function getUKExpertAdvice(topic, question) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, hf.textGeneration({
                            model: 'facebook/opt-350m',
                            inputs: "As a Level 6 qualified financial advisor with expertise in ".concat(topic, ", provide guidance:\n        Question: ").concat(question, "\n        \n        Consider:\n        - FCA regulations\n        - Consumer Duty\n        - Suitability requirements\n        - Risk assessment\n        - Tax implications\n        - Documentation requirements\n        - Required disclosures"),
                            parameters: {
                                max_length: 500,
                                temperature: 0.7
                            }
                        })];
                case 1:
                    response = _a.sent();
                    // Add required disclaimers
                    return [2 /*return*/, "".concat(response.generated_text, "\n\nIMPORTANT: This information is not financial advice. Please consult with a qualified financial advisor for personalised recommendations. Regulated by the Financial Conduct Authority. The value of investments can go down as well as up, and you may get back less than you invest.")];
                case 2:
                    error_2 = _a.sent();
                    console.error('Failed to get UK expert advice:', error_2);
                    return [2 /*return*/, 'I apologise, but I cannot provide financial guidance at the moment. Please try again later.'];
                case 3: return [2 /*return*/];
            }
        });
    });
}
