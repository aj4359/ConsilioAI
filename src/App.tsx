import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DemoVideo } from './components/DemoVideo';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { FloatingBenson } from './components/FloatingBenson';
import { LiveMarketTicker } from './components/financial/LiveMarketTicker';
import { JurisdictionModal } from './components/JurisdictionModal';
import { useAppStore } from './store/useAppStore';
import { marketDataService } from './services/realtime/MarketDataService';
import { RegionIndicator } from './components/RegionIndicator';
import { webSocketService } from './services/realtime/WebSocketService';

const queryClient = new QueryClient();

export default function App() {
  const { jurisdictionModalOpen, setJurisdictionModalOpen, jurisdiction } = useAppStore();

  useEffect(() => {
    // Show jurisdiction modal if not set
    if (!jurisdiction) {
      setJurisdictionModalOpen(true);
    }

    // Initialize WebSocket connection
    webSocketService.connect();

    // Cleanup on unmount
    return () => {
      marketDataService.disconnect();
      webSocketService.disconnect();
    };
  }, [jurisdiction, setJurisdictionModalOpen]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
        </div>

        <Header />
        <main>
          <Hero />
          <Features />
          <DemoVideo />
        </main>
        <Footer />
        <Chatbot />
        <FloatingBenson />
        <LiveMarketTicker />
        <RegionIndicator />
        <JurisdictionModal 
          isOpen={jurisdictionModalOpen} 
          onClose={() => setJurisdictionModalOpen(false)} 
        />
      </div>
    </QueryClientProvider>
  );
}