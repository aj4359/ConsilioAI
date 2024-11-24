import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface FinancialProfile {
  age?: number;
  retirementAge?: number;
  annualIncome?: number;
  monthlyExpenses?: number;
  debt?: {
    creditCards?: number;
    studentLoans?: number;
    mortgage?: number;
  };
  goals?: string[];
  riskTolerance?: 'conservative' | 'moderate' | 'aggressive';
  investmentExperience?: 'none' | 'beginner' | 'intermediate' | 'advanced';
  familyStatus?: {
    maritalStatus?: 'single' | 'married' | 'divorced' | 'widowed';
    dependents?: number;
  };
  insurance?: string[];
  emergencyFund?: number;
  taxBracket?: number;
  employmentBenefits?: string[];
}

interface QuestionnaireState {
  currentStep: number;
  profile: FinancialProfile;
  isComplete: boolean;
  updateProfile: (updates: Partial<FinancialProfile>) => void;
  nextStep: () => void;
  previousStep: () => void;
  setComplete: (value: boolean) => void;
  resetQuestionnaire: () => void;
}

export const useQuestionnaireStore = create<QuestionnaireState>()(
  persist(
    (set) => ({
      currentStep: 0,
      profile: {},
      isComplete: false,
      updateProfile: (updates) =>
        set((state) => ({
          profile: { ...state.profile, ...updates }
        })),
      nextStep: () =>
        set((state) => ({
          currentStep: state.currentStep + 1
        })),
      previousStep: () =>
        set((state) => ({
          currentStep: Math.max(0, state.currentStep - 1)
        })),
      setComplete: (value) =>
        set({ isComplete: value }),
      resetQuestionnaire: () =>
        set({
          currentStep: 0,
          profile: {},
          isComplete: false
        })
    }),
    {
      name: 'financial-questionnaire'
    }
  )
);