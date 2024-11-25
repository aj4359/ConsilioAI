"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralSystem = ReferralSystem;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var useSubscriptionStore_1 = require("../store/useSubscriptionStore");
function ReferralSystem() {
    var _a = (0, useSubscriptionStore_1.useSubscriptionStore)(), referralCode = _a.referralCode, referralCount = _a.referralCount;
    var _b = (0, react_1.useState)(false), copied = _b[0], setCopied = _b[1];
    var handleCopy = function () {
        navigator.clipboard.writeText("https://consilio-ai.com/refer/".concat(referralCode));
        setCopied(true);
        setTimeout(function () { return setCopied(false); }, 2000);
    };
    var rewards = [
        { referrals: 1, reward: '1 Month Free Premium' },
        { referrals: 3, reward: '3 Months Free Premium' },
        { referrals: 5, reward: '6 Months Free Premium' },
        { referrals: 10, reward: '1 Year Free Premium' },
    ];
    return (<section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <lucide_react_1.Share2 className="h-12 w-12 text-indigo-600 mx-auto mb-4"/>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Share & Earn Rewards
            </h2>
            <p className="text-slate-600">
              Invite friends to join Consilio-AI and earn premium benefits
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-slate-800">Your Referral Link</h3>
                <p className="text-sm text-slate-600">Share this link with friends</p>
              </div>
              <lucide_react_1.Gift className="h-6 w-6 text-indigo-600"/>
            </div>
            
            <div className="flex items-center space-x-2">
              <input type="text" value={"https://consilio-ai.com/refer/".concat(referralCode)} readOnly className="flex-1 p-2 bg-slate-50 rounded-lg text-slate-600 text-sm"/>
              <button onClick={handleCopy} className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700">
                <lucide_react_1.Copy className="h-5 w-5"/>
              </button>
            </div>
            {copied && (<p className="text-sm text-green-600 mt-2">Copied to clipboard!</p>)}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-slate-800 mb-6">Referral Rewards</h3>
            <div className="space-y-4">
              {rewards.map(function (tier, index) { return (<div key={index} className={"p-4 rounded-lg ".concat(referralCount >= tier.referrals
                ? 'bg-green-50 border border-green-200'
                : 'bg-slate-50')}>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-slate-800">
                        {tier.reward}
                      </p>
                      <p className="text-sm text-slate-600">
                        {tier.referrals} Referral{tier.referrals > 1 ? 's' : ''}
                      </p>
                    </div>
                    {referralCount >= tier.referrals && (<span className="text-green-600 text-sm font-medium">
                        Unlocked!
                      </span>)}
                  </div>
                  <div className="mt-2 bg-white rounded-full h-2 overflow-hidden">
                    <framer_motion_1.motion.div initial={{ width: 0 }} animate={{
                width: "".concat(Math.min((referralCount / tier.referrals) * 100, 100), "%"),
            }} className="h-full bg-indigo-600"/>
                  </div>
                </div>); })}
            </div>
          </div>
        </div>
      </div>
    </section>);
}
