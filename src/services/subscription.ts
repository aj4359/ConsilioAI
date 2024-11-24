import { create } from 'zustand';

interface SubscriptionState {
  isPremium: boolean;
  features: {
    alerts: boolean;
    portfolioAnalysis: boolean;
    aiAdvice: boolean;
    taxOptimization: boolean;
  };
  setFeature: (feature: keyof SubscriptionState['features'], value: boolean) => void;
  upgradeToPremuim: () => void;
  downgradeToBasic: () => void;
}

export const useSubscription = create<SubscriptionState>((set) => ({
  isPremium: false,
  features: {
    alerts: false,
    portfolioAnalysis: false,
    aiAdvice: false,
    taxOptimization: false,
  },
  setFeature: (feature, value) =>
    set((state) => ({
      features: {
        ...state.features,
        [feature]: value,
      },
    })),
  upgradeToPremuim: () =>
    set({
      isPremium: true,
      features: {
        alerts: true,
        portfolioAnalysis: true,
        aiAdvice: true,
        taxOptimization: true,
      },
    }),
  downgradeToBasic: () =>
    set({
      isPremium: false,
      features: {
        alerts: false,
        portfolioAnalysis: false,
        aiAdvice: false,
        taxOptimization: false,
      },
    }),
}));