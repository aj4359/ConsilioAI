import React from 'react';
import { useQuestionnaireStore } from '../../../store/useQuestionnaireStore';

export function BasicInfo() {
  const { profile, updateProfile } = useQuestionnaireStore();

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Current Age
        </label>
        <input
          type="number"
          value={profile.age || ''}
          onChange={(e) => updateProfile({ age: parseInt(e.target.value) })}
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Annual Income
        </label>
        <input
          type="number"
          value={profile.annualIncome || ''}
          onChange={(e) => updateProfile({ annualIncome: parseInt(e.target.value) })}
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Monthly Expenses
        </label>
        <input
          type="number"
          value={profile.monthlyExpenses || ''}
          onChange={(e) => updateProfile({ monthlyExpenses: parseInt(e.target.value) })}
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Debt Information
        </label>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Credit Card Debt"
            value={profile.debt?.creditCards || ''}
            onChange={(e) => updateProfile({
              debt: { ...profile.debt, creditCards: parseInt(e.target.value) }
            })}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
          <input
            type="number"
            placeholder="Student Loans"
            value={profile.debt?.studentLoans || ''}
            onChange={(e) => updateProfile({
              debt: { ...profile.debt, studentLoans: parseInt(e.target.value) }
            })}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}