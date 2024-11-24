import axios from 'axios';
import { StockData, MarketNews } from './types';

// Mock data for development/demo
const mockStockData: Record<string, StockData> = {
  AAPL: { c: 150.23, h: 151.20, l: 149.50, o: 150.00, pc: 149.80, t: Date.now() },
  GOOGL: { c: 2800.50, h: 2805.30, l: 2795.20, o: 2798.00, pc: 2797.50, t: Date.now() },
  MSFT: { c: 290.75, h: 291.50, l: 289.80, o: 290.00, pc: 289.90, t: Date.now() },
  AMZN: { c: 3300.25, h: 3305.40, l: 3295.60, o: 3298.00, pc: 3297.80, t: Date.now() }
};

// Use mock data instead of real API calls for demo purposes
export async function getStockData(symbol: string): Promise<StockData> {
  try {
    // Return mock data
    return Promise.resolve(mockStockData[symbol] || {
      c: 100 + Math.random() * 100,
      h: 150 + Math.random() * 50,
      l: 50 + Math.random() * 50,
      o: 100 + Math.random() * 100,
      pc: 100 + Math.random() * 100,
      t: Date.now()
    });
  } catch (error) {
    console.error('Failed to fetch stock data:', error);
    throw error;
  }
}

// Mock news data
const mockNews: MarketNews[] = [
  {
    title: "Market Update: Tech Stocks Rally",
    url: "https://example.com/tech-rally",
    time_published: new Date().toISOString(),
    summary: "Major tech stocks showed strong gains today as investors remain optimistic about AI developments.",
    source: "Financial Times",
    overall_sentiment_score: 0.8
  },
  {
    title: "Federal Reserve Announces Policy Changes",
    url: "https://example.com/fed-policy",
    time_published: new Date().toISOString(),
    summary: "The Federal Reserve announced new monetary policy measures aimed at controlling inflation.",
    source: "Reuters",
    overall_sentiment_score: 0.6
  }
];

export async function getMarketNews(): Promise<MarketNews[]> {
  return Promise.resolve(mockNews);
}

// Mock crypto prices
const mockCryptoPrices = {
  bitcoin: { usd: 45000 + Math.random() * 1000, usd_24h_change: -2.5 },
  ethereum: { usd: 3000 + Math.random() * 100, usd_24h_change: 1.8 },
  dogecoin: { usd: 0.1 + Math.random() * 0.01, usd_24h_change: 5.2 }
};

export async function getCryptoPrices(): Promise<any> {
  return Promise.resolve(mockCryptoPrices);
}

// Mock forex rates
const mockForexRates = {
  rates: {
    EUR: 0.85 + Math.random() * 0.01,
    GBP: 0.73 + Math.random() * 0.01,
    JPY: 110 + Math.random() * 1,
    AUD: 1.35 + Math.random() * 0.01
  },
  base: 'USD',
  timestamp: Date.now()
};

export async function getForexRates(): Promise<any> {
  return Promise.resolve(mockForexRates);
}

// Mock economic indicators
const mockEconomicIndicators = {
  gdp_growth: 2.5 + Math.random() * 0.5,
  inflation_rate: 2.1 + Math.random() * 0.3,
  unemployment_rate: 3.8 + Math.random() * 0.2,
  interest_rate: 0.25 + Math.random() * 0.1
};

export async function getEconomicIndicators(): Promise<any> {
  return Promise.resolve(mockEconomicIndicators);
}