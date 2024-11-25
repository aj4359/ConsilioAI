"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoalsTimeline = GoalsTimeline;
var react_1 = require("react");
var useQuestionnaireStore_1 = require("../../../store/useQuestionnaireStore");
var commonGoals = [
    'Retirement',
    'Home Purchase',
    'Education',
    'Emergency Fund',
    'Investment Growth',
    'Debt Repayment',
    'Travel',
    'Starting a Business'
];
function GoalsTimeline() {
    var _a = (0, useQuestionnaireStore_1.useQuestionnaireStore)(), profile = _a.profile, updateProfile = _a.updateProfile;
    var _b = react_1.default.useState(''), customGoal = _b[0], setCustomGoal = _b[1];
    var handleGoalToggle = function (goal) {
        var currentGoals = profile.goals || [];
        var newGoals = currentGoals.includes(goal)
            ? currentGoals.filter(function (g) { return g !== goal; })
            : __spreadArray(__spreadArray([], currentGoals, true), [goal], false);
        updateProfile({ goals: newGoals });
    };
    var addCustomGoal = function () {
        if (customGoal.trim()) {
            updateProfile({
                goals: __spreadArray(__spreadArray([], (profile.goals || []), true), [customGoal.trim()], false)
            });
            setCustomGoal('');
        }
    };
    return (<div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-4">
          Select your financial goals
        </label>
        <div className="grid grid-cols-2 gap-4">
          {commonGoals.map(function (goal) {
            var _a;
            return (<button key={goal} onClick={function () { return handleGoalToggle(goal); }} className={"p-3 rounded-lg text-left ".concat(((_a = profile.goals) === null || _a === void 0 ? void 0 : _a.includes(goal))
                    ? 'bg-cyan-500/20 border-cyan-500'
                    : 'bg-slate-700/50 border-slate-600', " border hover:border-cyan-400 transition-colors")}>
              <span className="text-white">{goal}</span>
            </button>);
        })}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Add custom goal
        </label>
        <div className="flex space-x-2">
          <input type="text" value={customGoal} onChange={function (e) { return setCustomGoal(e.target.value); }} className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent" placeholder="Enter your custom goal"/>
          <button onClick={addCustomGoal} disabled={!customGoal.trim()} className="px-4 py-2 rounded-lg bg-cyan-500 text-white hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed">
            Add
          </button>
        </div>
      </div>

      {profile.goals && profile.goals.length > 0 && (<div>
          <h3 className="text-sm font-medium text-slate-300 mb-2">Your Goals:</h3>
          <div className="space-y-2">
            {profile.goals.map(function (goal, index) { return (<div key={index} className="flex items-center justify-between bg-slate-700/50 p-2 rounded-lg">
                <span className="text-white">{goal}</span>
                <button onClick={function () { return handleGoalToggle(goal); }} className="text-slate-400 hover:text-red-400">
                  Remove
                </button>
              </div>); })}
          </div>
        </div>)}
    </div>);
}
