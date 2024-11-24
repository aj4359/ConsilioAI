import { HfInference } from '@huggingface/inference';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

// UK Financial Expertise Knowledge Base
const ukFinancialKnowledge = {
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
export async function trainBensonUKExpert(): Promise<void> {
  try {
    await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `Learn and understand comprehensive UK financial expertise:
        ${JSON.stringify(ukFinancialKnowledge, null, 2)}
        
        Key requirements:
        1. Maintain FCA compliance
        2. Follow Consumer Duty principles
        3. Provide suitable advice
        4. Include required disclosures
        5. Consider tax implications
        6. Apply risk management
        7. Document recommendations
        8. Maintain CPD requirements`,
      parameters: {
        max_length: 2000,
        temperature: 0.7
      }
    });
  } catch (error) {
    console.error('Failed to train Benson with UK expertise:', error);
  }
}

// Get expert UK financial advice
export async function getUKExpertAdvice(
  topic: 'pensions' | 'investments' | 'protection' | 'taxation',
  question: string
): Promise<string> {
  try {
    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `As a Level 6 qualified financial advisor with expertise in ${topic}, provide guidance:
        Question: ${question}
        
        Consider:
        - FCA regulations
        - Consumer Duty
        - Suitability requirements
        - Risk assessment
        - Tax implications
        - Documentation requirements
        - Required disclosures`,
      parameters: {
        max_length: 500,
        temperature: 0.7
      }
    });

    // Add required disclaimers
    return `${response.generated_text}\n\nIMPORTANT: This information is not financial advice. Please consult with a qualified financial advisor for personalised recommendations. Regulated by the Financial Conduct Authority. The value of investments can go down as well as up, and you may get back less than you invest.`;
  } catch (error) {
    console.error('Failed to get UK expert advice:', error);
    return 'I apologise, but I cannot provide financial guidance at the moment. Please try again later.';
  }
}