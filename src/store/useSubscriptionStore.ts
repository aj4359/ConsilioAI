import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SubscriptionTier = 'basic' | 'pro' | 'enterprise';

interface SubscriptionState {
  tier: SubscriptionTier;
  referralCode: string | null;
  referredBy: string | null;
  referralCount: number;
  setTier: (tier: SubscriptionTier) => void;
  setReferralCode: (code: string) => void;
  setReferredBy: (code: string) => void;
  incrementReferralCount: () => void;
}

export const useSubscriptionStore = create<SubscriptionState>()(
  persist(
    (set) => ({
      tier: 'basic',
      referralCode: null,
      referredBy: null,
      referralCount: 0,
      setTier: (tier) => set({ tier }),
      setReferralCode: (code) => set({ referralCode: code }),
      setReferredBy: (code) => set({ referredBy: code }),
      incrementReferralCount: () => 
        set((state) => ({ referralCount: state.referralCount + 1 })),
    }),
    {
      name: 'subscription-storage',
    }
  )
);