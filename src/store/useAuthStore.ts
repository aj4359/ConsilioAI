import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  token: string | null;
  user: {
    id: string;
    email: string;
    role: 'admin' | 'user';
    isPremium: boolean;
  } | null;
  setAuth: (token: string, user: AuthState['user']) => void;
  logout: () => void;
  setPremium: (isPremium: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setAuth: (token, user) => set({ token, user }),
      logout: () => set({ token: null, user: null }),
      setPremium: (isPremium) => 
        set((state) => ({
          user: state.user ? { ...state.user, isPremium } : null
        })),
    }),
    {
      name: 'auth-storage',
    }
  )
);