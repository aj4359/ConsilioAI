import { HfInference } from '@huggingface/inference';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

// UK Mortgage and Property Knowledge Base
const ukMortgageKnowledge = {
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
export async function trainBensonUKMortgage(): Promise<void> {
  try {
    await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `Learn and understand UK mortgage and property expertise:
        ${JSON.stringify(ukMortgageKnowledge, null, 2)}
        
        Key requirements:
        1. Follow FCA mortgage regulations
        2. Apply Consumer Duty principles
        3. Consider affordability carefully
        4. Explain all options clearly
        5. Highlight risks and benefits
        6. Provide practical guidance
        7. Include relevant schemes
        8. Address market challenges`,
      parameters: {
        max_length: 2000,
        temperature: 0.7
      }
    });
  } catch (error) {
    console.error('Failed to train Benson with UK mortgage expertise:', error);
  }
}

// Get UK mortgage guidance
export async function getUKMortgageGuidance(
  topic: keyof typeof ukMortgageKnowledge,
  userProfile: any
): Promise<string> {
  try {
    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `As a UK mortgage specialist, provide guidance on ${topic}:
        User Profile: ${JSON.stringify(userProfile)}
        
        Consider:
        - Current market conditions
        - Affordability factors
        - Available schemes
        - Practical steps
        - Risk factors
        - Documentation requirements`,
      parameters: {
        max_length: 500,
        temperature: 0.7
      }
    });

    return `${response.generated_text}\n\nIMPORTANT: This information is for guidance only. For personalised mortgage advice, please consult with a qualified mortgage advisor regulated by the FCA. Your home may be repossessed if you do not keep up repayments on your mortgage.`;
  } catch (error) {
    console.error('Failed to get UK mortgage guidance:', error);
    return 'I apologise, but I cannot provide mortgage guidance at the moment. Please try again later.';
  }
}