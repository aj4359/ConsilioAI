import React from 'react';
import { useQuestionnaireStore } from '../../../store/useQuestionnaireStore';

const commonGoals = [
  'Retirement',
  'Home Purchase',
  'Education',
  'Emergency Fund',
  'Investment Growth',
  'Debt Repayment',
  'Travel',
  'Starting a Business'
];

export function GoalsTimeline() {
  const { profile, updateProfile } = useQuestionnaireStore();
  const [customGoal, setCustomGoal] = React.useState('');

  const handleGoalToggle = (goal: string) => {
    const currentGoals = profile.goals || [];
    const newGoals = currentGoals.includes(goal)
      ? currentGoals.filter(g => g !== goal)
      : [...currentGoals, goal];
    updateProfile({ goals: newGoals });
  };

  const addCustomGoal = () => {
    if (customGoal.trim()) {
      updateProfile({
        goals: [...(profile.goals || []), customGoal.trim()]
      });
      setCustomGoal('');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-4">
          Select your financial goals
        </label>
        <div className="grid grid-cols-2 gap-4">
          {commonGoals.map((goal) => (
            <button
              key={goal}
              onClick={() => handleGoalToggle(goal)}
              className={`p-3 rounded-lg text-left ${
                profile.goals?.includes(goal)
                  ? 'bg-cyan-500/20 border-cyan-500'
                  : 'bg-slate-700/50 border-slate-600'
              } border hover:border-cyan-400 transition-colors`}
            >
              <span className="text-white">{goal}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Add custom goal
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={customGoal}
            onChange={(e) => setCustomGoal(e.target.value)}
            className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            placeholder="Enter your custom goal"
          />
          <button
            onClick={addCustomGoal}
            disabled={!customGoal.trim()}
            className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </div>

      {profile.goals && profile.goals.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-slate-300 mb-2">Your Goals:</h3>
          <div className="space-y-2">
            {profile.goals.map((goal, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-slate-700/50 p-2 rounded-lg"
              >
                <span className="text-white">{goal}</span>
                <button
                  onClick={() => handleGoalToggle(goal)}
                  className="text-slate-400 hover:text-red-400"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}