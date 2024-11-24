import { HfInference } from '@huggingface/inference';
import { testBensonExpertise } from '../testing/BensonTest';
import { trainBensonUSExpert } from './BensonUSExpertise';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

// Test cases for US financial expertise
const usTestCases = [
  {
    category: "Investment Strategy",
    questions: [
      "What's the optimal asset allocation for a 40-year-old with moderate risk tolerance?",
      "How should I diversify my portfolio across different sectors?",
      "When should I rebalance my investment portfolio?"
    ]
  },
  {
    category: "Retirement Planning",
    questions: [
      "How much should I contribute to my 401(k) if my employer matches 5%?",
      "What are the pros and cons of Roth vs Traditional IRA?",
      "When should I start taking Social Security benefits?"
    ]
  },
  {
    category: "Tax Strategy",
    questions: [
      "How can I minimize capital gains tax on my investments?",
      "What tax-advantaged accounts should I prioritize?",
      "How does tax-loss harvesting work?"
    ]
  },
  {
    category: "Risk Management",
    questions: [
      "How should I protect my portfolio against market volatility?",
      "What insurance products should I consider for wealth protection?",
      "How do I hedge against inflation risk?"
    ]
  }
];

// Run comprehensive tests
export async function runComprehensiveTests() {
  console.log("Starting comprehensive Benson tests...");

  // First, ensure Benson is trained
  await trainBensonUSExpert();

  // Run expertise tests
  const expertiseResults = await testBensonExpertise();
  console.log("Expertise test results:", expertiseResults);

  // Test US-specific knowledge
  for (const category of usTestCases) {
    console.log(`\nTesting ${category.category}:`);
    
    for (const question of category.questions) {
      try {
        const response = await hf.textGeneration({
          model: 'facebook/opt-350m',
          inputs: `As a US financial advisor, answer: ${question}`,
          parameters: {
            max_length: 200,
            temperature: 0.7
          }
        });

        console.log(`Q: ${question}`);
        console.log(`A: ${response.generated_text}`);
        
        // Verify response quality
        const containsDisclaimer = response.generated_text.toLowerCase().includes('not financial advice');
        const mentionsRegulations = response.generated_text.toLowerCase().includes('sec') || 
                                  response.generated_text.toLowerCase().includes('finra');
        
        console.log('Response Quality:');
        console.log('- Contains Disclaimer:', containsDisclaimer);
        console.log('- Mentions Regulations:', mentionsRegulations);
        console.log('---');
      } catch (error) {
        console.error(`Failed to test question: ${question}`, error);
      }
    }
  }
}

// Validate response quality
function validateResponse(response: string): boolean {
  const criteria = [
    {
      name: 'Regulatory Compliance',
      check: (text: string) => text.toLowerCase().includes('sec') || text.toLowerCase().includes('finra')
    },
    {
      name: 'Disclaimer Present',
      check: (text: string) => text.toLowerCase().includes('not financial advice')
    },
    {
      name: 'Professional Language',
      check: (text: string) => !text.toLowerCase().includes('maybe') && !text.toLowerCase().includes('probably')
    },
    {
      name: 'Comprehensive Answer',
      check: (text: string) => text.length > 100
    }
  ];

  return criteria.every(criterion => criterion.check(response));
}

// Export test runner
export const BensonTestRunner = {
  runAll: runComprehensiveTests,
  validateResponse
};