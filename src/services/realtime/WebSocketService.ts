import { io, Socket } from 'socket.io-client';
import { create } from 'zustand';

interface WebSocketState {
  connected: boolean;
  lastUpdate: Date | null;
  setConnected: (status: boolean) => void;
  setLastUpdate: (date: Date) => void;
}

export const useWebSocketStore = create<WebSocketState>((set) => ({
  connected: false,
  lastUpdate: null,
  setConnected: (status) => set({ connected: status }),
  setLastUpdate: (date) => set({ lastUpdate: date })
}));

class WebSocketService {
  private socket: Socket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  connect() {
    // Using free WebSocket echo server for demo
    this.socket = io('wss://socketsbay.com/wss/v2/1/demo/');

    this.socket.on('connect', () => {
      useWebSocketStore.getState().setConnected(true);
      this.reconnectAttempts = 0;
      console.log('WebSocket connected');
    });

    this.socket.on('disconnect', () => {
      useWebSocketStore.getState().setConnected(false);
      this.handleReconnect();
    });

    this.socket.on('marketUpdate', (data) => {
      useWebSocketStore.getState().setLastUpdate(new Date());
      // Handle market updates
    });
  }

  private handleReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        this.reconnectAttempts++;
        this.connect();
      }, Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000));
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export const webSocketService = new WebSocketService();