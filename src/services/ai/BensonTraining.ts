import { HfInference } from '@huggingface/inference';
import { serviceOfferings } from './BensonKnowledgeBase';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

// Expert-level financial knowledge base
const expertKnowledge = {
  US: {
    regulations: {
      SEC: ['Investment Advisers Act', 'Securities Act', 'Exchange Act'],
      FINRA: ['Series 7', 'Series 66', 'Regulation Best Interest'],
      compliance: ['Form ADV', 'Form CRS', 'Form 13F']
    },
    products: {
      securities: ['Stocks', 'Bonds', 'ETFs', 'Mutual Funds'],
      retirement: ['401(k)', 'IRA', 'Roth IRA', 'SEP IRA'],
      tax: ['Capital Gains', 'Qualified Dividends', 'Tax-Loss Harvesting']
    },
    strategies: {
      investment: ['Asset Allocation', 'Dollar-Cost Averaging', 'Rebalancing'],
      retirement: ['Social Security Optimization', 'Required Minimum Distributions'],
      tax: ['Tax-Efficient Fund Placement', 'Charitable Giving Strategies']
    }
  },
  UK: {
    regulations: {
      FCA: ['COBS Rules', 'SYSC Requirements', 'Consumer Duty'],
      compliance: ['SMCR', 'MiFID II', 'PRIIPs'],
      certifications: ['CFA', 'CISI', 'CII']
    },
    products: {
      securities: ['Shares', 'Gilts', 'Investment Trusts', 'OEICs'],
      retirement: ['SIPP', 'Personal Pension', 'Workplace Pension'],
      tax: ['Capital Gains', 'ISA', 'VCT/EIS']
    },
    strategies: {
      investment: ['Core-Satellite', 'Factor Investing', 'ESG Integration'],
      retirement: ['Pension Freedoms', 'Lifetime Allowance Planning'],
      tax: ['Bed and ISA', 'CGT Harvesting', 'IHT Planning']
    }
  }
};

// Train Benson with expert knowledge
export async function trainBensonExpert(): Promise<void> {
  const trainingData = {
    ...expertKnowledge,
    services: serviceOfferings
  };

  try {
    await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `Comprehensive financial advisory training data:
        ${JSON.stringify(trainingData, null, 2)}
        
        Instructions:
        1. Understand and apply all regulatory requirements
        2. Provide jurisdiction-specific advice (US/UK)
        3. Always include relevant disclosures
        4. Maintain professional standards
        5. Focus on client's best interests`,
      parameters: {
        max_length: 2000,
        temperature: 0.7
      }
    });
  } catch (error) {
    console.error('Failed to train Benson with expert knowledge:', error);
  }
}

// Test Benson's expertise
export async function testBensonExpertise(question: string, jurisdiction: 'US' | 'UK'): Promise<string> {
  try {
    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `As a Level 7 qualified financial advisor in ${jurisdiction}, 
        provide expert guidance for the following question:
        ${question}
        
        Consider:
        - ${jurisdiction} specific regulations
        - Current market conditions
        - Risk management
        - Tax implications
        - Required disclosures`,
      parameters: {
        max_length: 500,
        temperature: 0.7
      }
    });

    return response.generated_text;
  } catch (error) {
    console.error('Failed to get expert response:', error);
    return 'I apologize, but I cannot provide expert guidance at the moment. Please try again later.';
  }
}