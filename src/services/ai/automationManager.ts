import { HfInference } from '@huggingface/inference';
import { AITask, AutomationConfig, TaskResult } from '../types';
import { getMarketNews, getStockData } from '../financial';

const HF_TOKEN = import.meta.env.VITE_HUGGINGFACE_API_KEY;
const hf = new HfInference(HF_TOKEN);

class AutomationManager {
  private tasks: Map<string, AITask>;
  private config: AutomationConfig;

  constructor() {
    this.tasks = new Map();
    this.config = {
      updateInterval: 300000, // 5 minutes
      maxConcurrentTasks: 5,
      retryAttempts: 3
    };
  }

  async scheduleTask(taskId: string, task: AITask): Promise<void> {
    this.tasks.set(taskId, task);
    await this.executeTask(taskId);
    
    // Schedule recurring execution
    setInterval(() => this.executeTask(taskId), this.config.updateInterval);
  }

  private async executeTask(taskId: string): Promise<TaskResult> {
    const task = this.tasks.get(taskId);
    if (!task) throw new Error(`Task ${taskId} not found`);

    try {
      const result = await this.processTask(task);
      return { success: true, data: result };
    } catch (error) {
      console.error(`Task ${taskId} failed:`, error);
      return { success: false, error: error as Error };
    }
  }

  private async processTask(task: AITask): Promise<any> {
    switch (task.type) {
      case 'market-analysis':
        return this.analyzeMarket();
      case 'content-generation':
        return this.generateContent(task.prompt);
      case 'user-engagement':
        return this.analyzeUserEngagement(task.userData);
      default:
        throw new Error(`Unknown task type: ${task.type}`);
    }
  }

  private async analyzeMarket(): Promise<string> {
    const news = await getMarketNews();
    const stockData = await Promise.all([
      getStockData('AAPL'),
      getStockData('GOOGL'),
      getStockData('MSFT')
    ]);

    const prompt = `Analyze the following market data and provide insights:
      News: ${JSON.stringify(news)}
      Stock Data: ${JSON.stringify(stockData)}
    `;

    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: prompt,
      parameters: {
        max_length: 200,
        temperature: 0.7
      }
    });

    return response.generated_text;
  }

  private async generateContent(prompt: string): Promise<string> {
    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: prompt,
      parameters: {
        max_length: 500,
        temperature: 0.8
      }
    });

    return response.generated_text;
  }

  private async analyzeUserEngagement(userData: any): Promise<string> {
    const prompt = `Analyze user engagement patterns and suggest improvements:
      User Data: ${JSON.stringify(userData)}
    `;

    const response = await hf.textGeneration({
      model: 'facebook/opt-350m',
      inputs: prompt,
      parameters: {
        max_length: 300,
        temperature: 0.7
      }
    });

    return response.generated_text;
  }
}

export const automationManager = new AutomationManager();