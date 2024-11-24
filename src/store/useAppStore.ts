import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  currentView: string;
  setCurrentView: (view: string) => void;
  isPortfolioVisible: boolean;
  togglePortfolio: () => void;
  chatHistory: ChatMessage[];
  addChatMessage: (message: ChatMessage) => void;
  jurisdiction: 'US' | 'UK' | null;
  setJurisdiction: (jurisdiction: 'US' | 'UK') => void;
  isVisitorRegistered: boolean;
  setVisitorRegistered: (value: boolean) => void;
  visitorData: VisitorData | null;
  setVisitorData: (data: VisitorData) => void;
  jurisdictionModalOpen: boolean;
  setJurisdictionModalOpen: (value: boolean) => void;
  resetAppState: () => void;
}

interface ChatMessage {
  id: string;
  text: string;
  type: 'user' | 'bot';
  timestamp: Date;
}

interface VisitorData {
  name: string;
  email: string;
  phone: string;
  socialMedia?: string;
  registeredAt: Date;
}

const initialState = {
  currentView: 'home',
  isPortfolioVisible: false,
  chatHistory: [],
  jurisdiction: null,
  isVisitorRegistered: false,
  visitorData: null,
  jurisdictionModalOpen: false
};

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      ...initialState,
      setCurrentView: (view) => set({ currentView: view }),
      togglePortfolio: () => set((state) => ({ isPortfolioVisible: !state.isPortfolioVisible })),
      addChatMessage: (message) => set((state) => ({
        chatHistory: [...state.chatHistory, message]
      })),
      setJurisdiction: (jurisdiction) => set({ jurisdiction }),
      setVisitorRegistered: (value) => set({ isVisitorRegistered: value }),
      setVisitorData: (data) => set({ visitorData: data }),
      setJurisdictionModalOpen: (value) => set({ jurisdictionModalOpen: value }),
      resetAppState: () => set(initialState)
    }),
    {
      name: 'app-storage'
    }
  )
);