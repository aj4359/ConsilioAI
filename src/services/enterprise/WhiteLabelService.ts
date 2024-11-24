import { create } from 'zustand';

interface WhiteLabelConfig {
  brandName: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  logo: string;
  domain: string;
}

interface WhiteLabelState {
  configs: Record<string, WhiteLabelConfig>;
  addConfig: (clientId: string, config: WhiteLabelConfig) => void;
  getConfig: (clientId: string) => WhiteLabelConfig | null;
}

export const useWhiteLabelStore = create<WhiteLabelState>((set, get) => ({
  configs: {},
  addConfig: (clientId, config) => 
    set(state => ({
      configs: { ...state.configs, [clientId]: config }
    })),
  getConfig: (clientId) => get().configs[clientId] || null
}));