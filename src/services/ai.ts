import { HfInference } from '@huggingface/inference';
import { FinancialData } from './types';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

export async function getAIFinancialAdvice(data: FinancialData): Promise<string> {
  try {
    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `Given the following financial data:
        Income: ${data.income}
        Expenses: ${data.expenses}
        Goals: ${data.goals}
        
        Provide financial advice and recommendations:`,
      parameters: {
        max_length: 200,
        temperature: 0.7,
      }
    });

    return response.generated_text;
  } catch (error) {
    console.error('AI advice generation failed:', error);
    return 'I apologize, but I cannot provide financial advice at the moment. Please try again later.';
  }
}