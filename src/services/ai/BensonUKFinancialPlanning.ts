import { HfInference } from '@huggingface/inference';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

// UK Financial Planning Knowledge Base
const ukFinancialPlanningKnowledge = {
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
export async function trainBensonUKFinancialPlanning(): Promise<void> {
  try {
    await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `Learn and understand UK financial planning:
        ${JSON.stringify(ukFinancialPlanningKnowledge, null, 2)}
        
        Key requirements:
        1. Follow FCA regulations
        2. Apply Consumer Duty principles
        3. Consider suitability
        4. Explain clearly and simply
        5. Highlight key risks
        6. Provide practical guidance
        7. Regular reviews
        8. Documentation requirements`,
      parameters: {
        max_length: 2000,
        temperature: 0.7
      }
    });
  } catch (error) {
    console.error('Failed to train Benson with UK financial planning:', error);
  }
}

// Get UK financial planning guidance
export async function getUKFinancialPlanningGuidance(
  topic: keyof typeof ukFinancialPlanningKnowledge,
  userProfile: any
): Promise<string> {
  try {
    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `As a UK financial planning specialist, provide guidance on ${topic}:
        User Profile: ${JSON.stringify(userProfile)}
        
        Consider:
        - Personal circumstances
        - Risk factors
        - Tax implications
        - Practical implementation
        - Regular reviews
        - Documentation needs`,
      parameters: {
        max_length: 500,
        temperature: 0.7
      }
    });

    return `${response.generated_text}\n\nIMPORTANT: This information is for guidance only. For personalised financial advice, please consult with a qualified financial advisor regulated by the FCA.`;
  } catch (error) {
    console.error('Failed to get UK financial planning guidance:', error);
    return 'I apologise, but I cannot provide guidance at the moment. Please try again later.';
  }
}