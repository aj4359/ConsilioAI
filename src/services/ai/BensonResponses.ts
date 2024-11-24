import { HfInference } from '@huggingface/inference';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

export const bensonCapabilities = [
  {
    name: "Investment Advice",
    examples: [
      "How should I diversify my portfolio?",
      "What's a good investment strategy for retirement?",
      "Should I invest in stocks or bonds?"
    ]
  },
  {
    name: "Financial Planning",
    examples: [
      "How much should I save for retirement?",
      "How can I create a budget?",
      "What's the best way to pay off debt?"
    ]
  },
  {
    name: "Market Analysis",
    examples: [
      "What's your take on the current market?",
      "Which sectors look promising?",
      "How should I react to market volatility?"
    ]
  }
];

export async function generateContextualResponse(input: string): Promise<string> {
  try {
    const prompt = `As a professional financial advisor, provide a helpful response to: "${input}"
    
    Consider:
    - Keep responses clear and concise
    - Focus on practical advice
    - Include relevant financial concepts
    - Maintain a professional tone
    - Acknowledge if more information is needed
    
    Response:`;

    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: prompt,
      parameters: {
        max_length: 150,
        temperature: 0.7,
        top_p: 0.9,
        repetition_penalty: 1.2
      }
    });

    return response.generated_text.trim();
  } catch (error) {
    console.error('Failed to generate response:', error);
    return "I apologize, but I'm having trouble processing that right now. Could you rephrase your question?";
  }
}