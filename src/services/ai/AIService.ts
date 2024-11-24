import { HfInference } from '@huggingface/inference';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

// Simplified knowledge base for token efficiency
const bensonKnowledge = {
  greetings: [
    "Hello! I'm Benson, your AI financial advisor. How can I help?",
    "Hi there! I'm Benson, ready to assist with your financial questions.",
    "Welcome! I'm Benson, your personal AI financial guide."
  ],
  expertise: {
    US: "I'm trained on SEC and FINRA standards to provide US financial guidance.",
    UK: "I'm trained on FCA standards to provide UK financial guidance."
  }
};

export async function getFinancialAdvice(input: string, jurisdiction: 'US' | 'UK'): Promise<string> {
  try {
    // Handle greetings efficiently
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('hello') || lowerInput.includes('hi ')) {
      return bensonKnowledge.greetings[0];
    }

    // Handle credentials question
    if (lowerInput.includes('credentials') || lowerInput.includes('qualified')) {
      return bensonKnowledge.expertise[jurisdiction];
    }

    // Get AI response with minimal prompt
    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `As a financial advisor, answer: ${input}. Consider ${jurisdiction} regulations.`,
      parameters: {
        max_length: 100,
        temperature: 0.7
      }
    });

    return response.generated_text.trim();
  } catch (error) {
    console.error('Failed to get response:', error);
    return "I apologize, but I'm having trouble processing that right now. Please try again.";
  }
}