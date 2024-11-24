import { HfInference } from '@huggingface/inference';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

// UK Financial Literacy Knowledge Base
const ukFinancialLiteracyData = {
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
export async function trainBensonUKFinancialLiteracy(): Promise<void> {
  try {
    await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `Learn and understand UK financial literacy challenges:
        ${JSON.stringify(ukFinancialLiteracyData, null, 2)}
        
        Key objectives:
        1. Improve pension awareness and engagement
        2. Enhance financial literacy
        3. Promote better savings habits
        4. Provide practical education
        5. Address common misconceptions
        6. Offer actionable solutions
        7. Support informed decision-making`,
      parameters: {
        max_length: 2000,
        temperature: 0.7
      }
    });
  } catch (error) {
    console.error('Failed to train Benson with UK financial literacy:', error);
  }
}

// Get financial literacy guidance
export async function getFinancialLiteracyGuidance(
  topic: 'retirement' | 'education' | 'savings',
  userProfile: any
): Promise<string> {
  try {
    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `As a UK financial education specialist, provide guidance on ${topic}:
        User Profile: ${JSON.stringify(userProfile)}
        
        Consider:
        - Current knowledge level
        - Specific concerns
        - Learning preferences
        - Practical steps
        - Available resources
        - Common misconceptions`,
      parameters: {
        max_length: 500,
        temperature: 0.7
      }
    });

    return `${response.generated_text}\n\nIMPORTANT: This information is for educational purposes only. For personalised financial advice, please consult with a qualified financial advisor regulated by the FCA.`;
  } catch (error) {
    console.error('Failed to get financial literacy guidance:', error);
    return 'I apologise, but I cannot provide guidance at the moment. Please try again later.';
  }
}