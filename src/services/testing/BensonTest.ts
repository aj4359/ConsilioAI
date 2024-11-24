import { getUSExpertAdvice } from '../ai/BensonUSExpertise';
import { trainBensonUSExpert } from '../ai/BensonUSExpertise';

export async function testBensonExpertise() {
  // First, train Benson
  await trainBensonUSExpert();

  // Test cases covering key financial areas
  const testCases = [
    {
      topic: 'investment',
      question: "What's the optimal portfolio allocation for a 35-year-old with moderate risk tolerance?",
      expectedTopics: ['asset allocation', 'diversification', 'risk management']
    },
    {
      topic: 'retirement',
      question: "Should I choose a Traditional or Roth IRA given a $150,000 annual income?",
      expectedTopics: ['tax implications', 'contribution limits', 'income requirements']
    },
    {
      topic: 'tax',
      question: "How can I minimize capital gains tax on my investment portfolio?",
      expectedTopics: ['tax-loss harvesting', 'long-term vs short-term', 'qualified dividends']
    },
    {
      topic: 'estate',
      question: "What are the best strategies to minimize estate tax for a $5M portfolio?",
      expectedTopics: ['gift tax exclusion', 'trusts', 'tax exemptions']
    }
  ];

  // Run tests
  const results = await Promise.all(
    testCases.map(async (test) => {
      try {
        const response = await getUSExpertAdvice(test.topic as any, test.question);
        
        // Verify response contains expected topics
        const containsExpectedTopics = test.expectedTopics.every(
          topic => response.toLowerCase().includes(topic.toLowerCase())
        );

        // Verify regulatory compliance
        const includesDisclaimer = response.includes('This information is not financial advice');
        const mentionsRegulation = response.includes('SEC') || response.includes('FINRA');

        return {
          topic: test.topic,
          question: test.question,
          passed: containsExpectedTopics && includesDisclaimer && mentionsRegulation,
          response
        };
      } catch (error) {
        return {
          topic: test.topic,
          question: test.question,
          passed: false,
          error: error.message
        };
      }
    })
  );

  // Log results
  results.forEach(result => {
    console.log(`Test for ${result.topic}:`);
    console.log(`Question: ${result.question}`);
    console.log(`Passed: ${result.passed}`);
    if (result.response) {
      console.log(`Response: ${result.response.slice(0, 100)}...`);
    }
    if (result.error) {
      console.error(`Error: ${result.error}`);
    }
    console.log('---');
  });

  return results;
}