import { create } from 'zustand';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
  volume: number;
  timestamp: Date;
}

interface MarketState {
  connected: boolean;
  data: Record<string, MarketData>;
  setConnected: (status: boolean) => void;
  updateData: (symbol: string, data: MarketData) => void;
}

export const useMarketStore = create<MarketState>((set) => ({
  connected: false,
  data: {},
  setConnected: (status) => set({ connected: status }),
  updateData: (symbol, data) => set((state) => ({
    data: { ...state.data, [symbol]: data }
  }))
}));

class MarketDataService {
  private symbols: string[] = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'BTC-USD', 'ETH-USD'];
  private mockInterval: NodeJS.Timeout | null = null;
  private basePrices: Record<string, number>;

  constructor() {
    this.basePrices = {
      'AAPL': 150,
      'GOOGL': 2800,
      'MSFT': 290,
      'AMZN': 3300,
      'BTC-USD': 45000,
      'ETH-USD': 3000
    };
    this.startMockDataFeed();
  }

  private startMockDataFeed() {
    // Initialize with base prices
    this.symbols.forEach(symbol => {
      this.generateMockData(symbol);
    });

    // Update prices periodically
    this.mockInterval = setInterval(() => {
      this.symbols.forEach(symbol => {
        this.generateMockData(symbol);
      });
    }, 2000); // Update every 2 seconds

    useMarketStore.getState().setConnected(true);
  }

  private generateMockData(symbol: string) {
    const previousData = useMarketStore.getState().data[symbol];
    const basePrice = this.basePrices[symbol];
    const previousPrice = previousData?.price || basePrice;
    
    // Generate realistic price movement
    const volatility = symbol.includes('BTC') || symbol.includes('ETH') ? 2 : 0.5;
    const change = (Math.random() - 0.5) * volatility;
    const newPrice = previousPrice * (1 + change / 100);
    
    const mockData: MarketData = {
      symbol,
      price: newPrice,
      change: ((newPrice - basePrice) / basePrice) * 100,
      volume: Math.floor(Math.random() * 1000000),
      timestamp: new Date()
    };

    useMarketStore.getState().updateData(symbol, mockData);
  }

  disconnect() {
    if (this.mockInterval) {
      clearInterval(this.mockInterval);
    }
    useMarketStore.getState().setConnected(false);
  }
}

export const marketDataService = new MarketDataService();