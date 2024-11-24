import { HfInference } from '@huggingface/inference';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

// Enhanced US-specific financial expertise
const usFinancialKnowledge = {
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
export async function trainBensonUSExpert(): Promise<void> {
  try {
    await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `Learn and understand comprehensive US financial expertise:
        ${JSON.stringify(usFinancialKnowledge, null, 2)}
        
        Key requirements:
        1. Maintain fiduciary duty
        2. Provide SEC/FINRA compliant advice
        3. Include required disclosures
        4. Consider tax implications
        5. Focus on client suitability
        6. Understand state-specific regulations
        7. Keep current with market conditions
        8. Apply risk management principles`,
      parameters: {
        max_length: 2000,
        temperature: 0.7
      }
    });
  } catch (error) {
    console.error('Failed to train Benson with US expertise:', error);
  }
}

// Get expert US financial advice
export async function getUSExpertAdvice(
  topic: 'mortgage' | 'pension' | 'trust' | 'personal_finance',
  question: string
): Promise<string> {
  try {
    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `As a Series 7 qualified financial advisor with expertise in ${topic}, provide guidance:
        Question: ${question}
        
        Consider:
        - Current market conditions
        - Regulatory requirements
        - Risk factors
        - Tax implications
        - Client suitability
        - Implementation strategy
        - Required disclosures`,
      parameters: {
        max_length: 500,
        temperature: 0.7
      }
    });

    // Add required disclaimers
    return `${response.generated_text}\n\nIMPORTANT: This information is not financial advice. Please consult with a qualified financial advisor for personalized recommendations. Securities offered through FINRA member firms. Mortgage products are subject to qualification and market conditions.`;
  } catch (error) {
    console.error('Failed to get US expert advice:', error);
    return 'I apologize, but I cannot provide financial guidance at the moment. Please try again later.';
  }
}