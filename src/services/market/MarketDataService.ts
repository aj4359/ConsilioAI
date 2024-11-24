import { io } from 'socket.io-client';
import { create } from 'zustand';
import axios from 'axios';

interface MarketState {
  connected: boolean;
  lastUpdate: Date | null;
  realTimeData: any;
  setConnected: (status: boolean) => void;
  setLastUpdate: (date: Date) => void;
  updateRealTimeData: (data: any) => void;
}

export const useMarketStore = create<MarketState>((set) => ({
  connected: false,
  lastUpdate: null,
  realTimeData: null,
  setConnected: (status) => set({ connected: status }),
  setLastUpdate: (date) => set({ lastUpdate: date }),
  updateRealTimeData: (data) => set({ realTimeData: data })
}));

class MarketDataService {
  private socket: any = null;
  private finnhubClient: any = null;
  private alphaVantageKey: string;

  constructor() {
    this.alphaVantageKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
    this.initializeWebSocket();
  }

  private initializeWebSocket() {
    // Using free WebSocket service for demo
    this.socket = io('wss://ws.finnhub.io');

    this.socket.on('connect', () => {
      useMarketStore.getState().setConnected(true);
      this.subscribeToSymbols(['AAPL', 'GOOGL', 'MSFT', 'AMZN']);
    });

    this.socket.on('disconnect', () => {
      useMarketStore.getState().setConnected(false);
    });

    this.socket.on('data', (data: any) => {
      useMarketStore.getState().updateRealTimeData(data);
      useMarketStore.getState().setLastUpdate(new Date());
    });
  }

  private subscribeToSymbols(symbols: string[]) {
    symbols.forEach(symbol => {
      this.socket.emit('subscribe', `trade.${symbol}`);
    });
  }

  async getHistoricalData(symbol: string, interval: string = 'daily') {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_${interval.toUpperCase()}&symbol=${symbol}&apikey=${this.alphaVantageKey}`
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch historical data:', error);
      throw error;
    }
  }

  async getMarketNews() {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=${this.alphaVantageKey}`
      );
      return response.data;
    } catch (error) {
      console.error('Failed to fetch market news:', error);
      throw error;
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}

export const marketDataService = new MarketDataService();