import { HfInference } from '@huggingface/inference';
import { trainBensonUSExpert } from '../ai/BensonUSExpertise';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

// Specialized test cases covering niche areas
const specializedTestCases = [
  {
    category: "Alternative Investments",
    questions: [
      "How should I evaluate private equity investments?",
      "What role should REITs play in my portfolio?",
      "How can I invest in art and collectibles responsibly?"
    ]
  },
  {
    category: "Advanced Tax Strategies",
    questions: [
      "How can I utilize Qualified Opportunity Zones?",
      "What are the benefits of charitable remainder trusts?",
      "How do I structure a tax-efficient family limited partnership?"
    ]
  },
  {
    category: "Estate Planning Techniques",
    questions: [
      "How can I use GRATs to minimize estate tax?",
      "What are the benefits of an intentionally defective grantor trust?",
      "How should I structure a family dynasty trust?"
    ]
  },
  {
    category: "Advanced Retirement Strategies",
    questions: [
      "How can I implement a Roth conversion ladder?",
      "What's the optimal strategy for backdoor Roth IRA contributions?",
      "How should I sequence withdrawals from multiple retirement accounts?"
    ]
  },
  {
    category: "Insurance Optimization",
    questions: [
      "When should I consider premium financing for life insurance?",
      "How can I use a captive insurance company?",
      "What role should variable universal life insurance play in estate planning?"
    ]
  },
  {
    category: "Business Owner Strategies",
    questions: [
      "How should I structure a Section 1202 qualified small business stock sale?",
      "What are the benefits of a management company structure?",
      "How can I optimize my defined benefit pension plan?"
    ]
  }
];

export async function runSpecializedTests() {
  console.log("Starting specialized finance tests...");
  
  // Ensure Benson is trained
  await trainBensonUSExpert();

  const results = [];

  for (const category of specializedTestCases) {
    console.log(`\nTesting ${category.category}:`);
    
    for (const question of category.questions) {
      try {
        const response = await hf.textGeneration({
          model: 'facebook/opt-350m',
          inputs: `As a Series 7 qualified financial advisor with advanced expertise, 
            provide detailed guidance on this specialized topic:
            ${question}
            
            Consider:
            - Regulatory requirements
            - Tax implications
            - Risk factors
            - Implementation strategy
            - Required disclosures`,
          parameters: {
            max_length: 500,
            temperature: 0.7
          }
        });

        const result = validateSpecializedResponse(response.generated_text);
        results.push({
          category: category.category,
          question,
          response: response.generated_text,
          validation: result
        });

        console.log(`Q: ${question}`);
        console.log(`Validation Results:`, result);
        console.log('---');
      } catch (error) {
        console.error(`Failed to test question: ${question}`, error);
      }
    }
  }

  return results;
}

function validateSpecializedResponse(response: string): Record<string, boolean> {
  return {
    hasRegulatoryCitation: /SEC|FINRA|IRS|DOL/.test(response),
    includesRiskWarning: /risk|careful|consider|caution/.test(response.toLowerCase()),
    mentionsTaxImplications: /tax|IRS|deduction|liability/.test(response),
    providesImplementationSteps: /first|then|next|finally|step/.test(response.toLowerCase()),
    includesDisclaimer: /not financial advice|consult|professional|advisor/.test(response.toLowerCase()),
    isComprehensive: response.length > 200,
    usesProfessionalLanguage: !/maybe|probably|guess|think/.test(response.toLowerCase())
  };
}

export const SpecializedTestRunner = {
  runAll: runSpecializedTests,
  validateResponse: validateSpecializedResponse
};