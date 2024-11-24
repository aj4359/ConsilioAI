import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Share2, Gift } from 'lucide-react';
import { useSubscriptionStore } from '../store/useSubscriptionStore';

export function ReferralSystem() {
  const { referralCode, referralCount } = useSubscriptionStore();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`https://consilio-ai.com/refer/${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const rewards = [
    { referrals: 1, reward: '1 Month Free Premium' },
    { referrals: 3, reward: '3 Months Free Premium' },
    { referrals: 5, reward: '6 Months Free Premium' },
    { referrals: 10, reward: '1 Year Free Premium' },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Share2 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
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
              <Gift className="h-6 w-6 text-indigo-600" />
            </div>
            
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={`https://consilio-ai.com/refer/${referralCode}`}
                readOnly
                className="flex-1 p-2 bg-slate-50 rounded-lg text-slate-600 text-sm"
              />
              <button
                onClick={handleCopy}
                className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
              >
                <Copy className="h-5 w-5" />
              </button>
            </div>
            {copied && (
              <p className="text-sm text-green-600 mt-2">Copied to clipboard!</p>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-slate-800 mb-6">Referral Rewards</h3>
            <div className="space-y-4">
              {rewards.map((tier, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    referralCount >= tier.referrals
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-slate-50'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-slate-800">
                        {tier.reward}
                      </p>
                      <p className="text-sm text-slate-600">
                        {tier.referrals} Referral{tier.referrals > 1 ? 's' : ''}
                      </p>
                    </div>
                    {referralCount >= tier.referrals && (
                      <span className="text-green-600 text-sm font-medium">
                        Unlocked!
                      </span>
                    )}
                  </div>
                  <div className="mt-2 bg-white rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${Math.min(
                          (referralCount / tier.referrals) * 100,
                          100
                        )}%`,
                      }}
                      className="h-full bg-indigo-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}