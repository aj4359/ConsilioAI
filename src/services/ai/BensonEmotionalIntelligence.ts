import { HfInference } from '@huggingface/inference';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

// Financial anxiety patterns and solutions
const financialAnxietyKnowledge = {
  commonConcerns: {
    retirement: {
      symptoms: [
        "Anxiety about retirement savings",
        "Fear of outliving savings",
        "Uncertainty about retirement age"
      ],
      solutions: [
        "Personalized retirement calculator",
        "Social Security optimization strategies",
        "Catch-up contribution strategies",
        "Part-time work transition plans"
      ],
      resources: [
        "Retirement readiness assessment",
        "Monthly savings calculator",
        "Social Security benefits estimator"
      ]
    },
    costOfLiving: {
      symptoms: [
        "Stress about monthly expenses",
        "Difficulty with budgeting",
        "Fear of inflation"
      ],
      solutions: [
        "50/30/20 budgeting strategy",
        "Expense tracking tools",
        "Inflation-protected investments",
        "Cost-cutting strategies"
      ],
      resources: [
        "Interactive budget planner",
        "Expense categorization tool",
        "Local cost of living calculator"
      ]
    },
    debt: {
      symptoms: [
        "Overwhelming debt stress",
        "Difficulty sleeping due to debt worries",
        "Relationship strain from debt"
      ],
      solutions: [
        "Debt snowball/avalanche methods",
        "Debt consolidation options",
        "Credit score improvement plan",
        "Interest rate negotiation"
      ],
      resources: [
        "Debt payoff calculator",
        "Credit improvement guide",
        "Debt consolidation comparison tool"
      ]
    },
    emergencyFunds: {
      symptoms: [
        "Anxiety about unexpected expenses",
        "Fear of job loss",
        "Stress about medical costs"
      ],
      solutions: [
        "Emergency fund building strategy",
        "Side income opportunities",
        "Insurance optimization",
        "Healthcare cost planning"
      ],
      resources: [
        "Emergency fund calculator",
        "Insurance needs assessment",
        "Side gig opportunity finder"
      ]
    }
  },
  supportStrategies: {
    emotional: {
      recognition: [
        "Acknowledge financial anxiety as normal",
        "Validate emotional responses",
        "Create safe space for discussion"
      ],
      coping: [
        "Mindfulness techniques for money stress",
        "Breaking large goals into smaller steps",
        "Celebrating financial wins"
      ]
    },
    practical: {
      immediate: [
        "Quick-win financial actions",
        "Small savings challenges",
        "Expense reduction tips"
      ],
      longTerm: [
        "Goal-setting frameworks",
        "Progress tracking tools",
        "Accountability systems"
      ]
    },
    educational: {
      basics: [
        "Financial literacy fundamentals",
        "Budgeting workshops",
        "Investment basics"
      ],
      advanced: [
        "Tax optimization strategies",
        "Estate planning basics",
        "Investment diversification"
      ]
    }
  }
};

// Train Benson with emotional intelligence
export async function trainBensonEmotionalIntelligence(): Promise<void> {
  try {
    await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `Learn to recognize and address financial anxiety:
        ${JSON.stringify(financialAnxietyKnowledge, null, 2)}
        
        Guidelines:
        1. Always acknowledge emotional concerns first
        2. Provide both emotional support and practical solutions
        3. Break down overwhelming problems into manageable steps
        4. Offer specific, actionable recommendations
        5. Include relevant tools and resources
        6. Maintain empathetic tone while remaining professional
        7. Recognize when to recommend professional help`,
      parameters: {
        max_length: 2000,
        temperature: 0.7
      }
    });
  } catch (error) {
    console.error('Failed to train Benson with emotional intelligence:', error);
  }
}

// Get emotionally intelligent financial guidance
export async function getEmpatheticFinancialGuidance(
  concern: keyof typeof financialAnxietyKnowledge.commonConcerns,
  symptoms: string[]
): Promise<string> {
  try {
    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `As an empathetic financial advisor, address these concerns:
        Main Concern: ${concern}
        Symptoms: ${symptoms.join(', ')}
        
        Consider:
        - Emotional impact
        - Practical solutions
        - Available resources
        - Step-by-step approach
        - Support options`,
      parameters: {
        max_length: 500,
        temperature: 0.7
      }
    });

    return response.generated_text;
  } catch (error) {
    console.error('Failed to get empathetic guidance:', error);
    return 'I understand this is a stressful situation. While I cannot provide specific advice right now, I encourage you to speak with a qualified financial advisor who can help address your concerns.';
  }
}