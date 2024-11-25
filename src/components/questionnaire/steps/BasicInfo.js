"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicInfo = BasicInfo;
var react_1 = require("react");
var useQuestionnaireStore_1 = require("../../../store/useQuestionnaireStore");
function BasicInfo() {
    var _a, _b;
    var _c = (0, useQuestionnaireStore_1.useQuestionnaireStore)(), profile = _c.profile, updateProfile = _c.updateProfile;
    return (<div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Current Age
        </label>
        <input type="number" value={profile.age || ''} onChange={function (e) { return updateProfile({ age: parseInt(e.target.value) }); }} className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"/>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Annual Income
        </label>
        <input type="number" value={profile.annualIncome || ''} onChange={function (e) { return updateProfile({ annualIncome: parseInt(e.target.value) }); }} className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"/>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Monthly Expenses
        </label>
        <input type="number" value={profile.monthlyExpenses || ''} onChange={function (e) { return updateProfile({ monthlyExpenses: parseInt(e.target.value) }); }} className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"/>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">
          Debt Information
        </label>
        <div className="grid grid-cols-2 gap-4">
          <input type="number" placeholder="Credit Card Debt" value={((_a = profile.debt) === null || _a === void 0 ? void 0 : _a.creditCards) || ''} onChange={function (e) { return updateProfile({
            debt: __assign(__assign({}, profile.debt), { creditCards: parseInt(e.target.value) })
        }); }} className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"/>
          <input type="number" placeholder="Student Loans" value={((_b = profile.debt) === null || _b === void 0 ? void 0 : _b.studentLoans) || ''} onChange={function (e) { return updateProfile({
            debt: __assign(__assign({}, profile.debt), { studentLoans: parseInt(e.target.value) })
        }); }} className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent"/>
        </div>
      </div>
    </div>);
}
