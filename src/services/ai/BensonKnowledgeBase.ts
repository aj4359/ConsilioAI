import { HfInference } from '@huggingface/inference';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

// Benson's knowledge base of services and features
export const serviceOfferings = {
  core: {
    aiAdvisor: {
      name: "AI Financial Advisor",
      description: "24/7 personalized financial guidance powered by advanced AI",
      features: [
        "Real-time portfolio analysis",
        "Market trend predictions",
        "Risk assessment",
        "Custom investment strategies"
      ],
      uniqueValue: "Series 7 trained AI that combines human expertise with machine learning"
    },
    wealthManagement: {
      name: "Smart Wealth Management",
      description: "Automated portfolio management with AI optimization",
      features: [
        "Dynamic rebalancing",
        "Tax-loss harvesting",
        "Multi-currency support",
        "ESG investing options"
      ],
      uniqueValue: "Proprietary AI algorithms for optimal asset allocation"
    },
    education: {
      name: "Financial Education Hub",
      description: "Interactive learning platform for financial literacy",
      features: [
        "Personalized learning paths",
        "Expert webinars",
        "Interactive simulations",
        "Certification programs"
      ],
      uniqueValue: "Adaptive learning system that evolves with your knowledge"
    }
  },
  premium: {
    predictiveAnalytics: {
      name: "Predictive Market Analytics",
      description: "Advanced market forecasting and trend analysis",
      features: [
        "AI-powered market predictions",
        "Sentiment analysis",
        "Volatility forecasting",
        "Custom alerts"
      ]
    },
    taxOptimization: {
      name: "Tax Strategy Optimizer",
      description: "AI-driven tax optimization for investments",
      features: [
        "Automated tax-loss harvesting",
        "Tax-efficient investing",
        "Year-round tax planning",
        "Custom tax strategies"
      ]
    },
    wealthPlanning: {
      name: "Comprehensive Wealth Planning",
      description: "Long-term wealth building and preservation",
      features: [
        "Estate planning",
        "Retirement modeling",
        "Goal-based planning",
        "Risk management"
      ]
    }
  },
  free: {
    basicAnalytics: {
      name: "Basic Financial Analytics",
      description: "Essential financial tracking and analysis",
      features: [
        "Portfolio tracking",
        "Basic market data",
        "Investment calculators",
        "Educational resources"
      ]
    },
    communityAccess: {
      name: "Financial Community",
      description: "Connect with other investors and experts",
      features: [
        "Discussion forums",
        "Market insights",
        "Expert Q&A",
        "Weekly newsletters"
      ]
    },
    taxCalculator: {
      name: "Free Tax Calculator",
      description: "Basic tax estimation and planning tools",
      features: [
        "Income tax calculator",
        "Capital gains calculator",
        "Tax planning basics",
        "Deduction finder"
      ]
    }
  }
};

// Train Benson with service knowledge
export async function trainBenson(): Promise<void> {
  const trainingData = JSON.stringify(serviceOfferings, null, 2);
  
  try {
    await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `Learn and understand the following service offerings for Consilio-AI:
        ${trainingData}
        
        Provide accurate and helpful responses about these services.`,
      parameters: {
        max_length: 1000,
        temperature: 0.7
      }
    });
  } catch (error) {
    console.error('Failed to train Benson:', error);
  }
}

// Get service recommendations
export async function getServiceRecommendations(userProfile: any): Promise<string> {
  try {
    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: `Based on the user profile: ${JSON.stringify(userProfile)}
        Recommend appropriate services from our offerings: ${JSON.stringify(serviceOfferings)}
        Provide personalized recommendations.`,
      parameters: {
        max_length: 300,
        temperature: 0.7
      }
    });

    return response.generated_text;
  } catch (error) {
    console.error('Failed to get recommendations:', error);
    return 'I apologize, but I cannot provide recommendations at the moment. Please try again later.';
  }
}