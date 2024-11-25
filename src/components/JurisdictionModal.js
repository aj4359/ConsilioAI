"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JurisdictionModal = JurisdictionModal;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var useAppStore_1 = require("../store/useAppStore");
function JurisdictionModal(_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    var setJurisdiction = (0, useAppStore_1.useAppStore)(function (state) { return state.setJurisdiction; });
    var handleSelect = function (jurisdiction) {
        setJurisdiction(jurisdiction);
        onClose();
    };
    return (<framer_motion_1.AnimatePresence>
      {isOpen && (<framer_motion_1.motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <framer_motion_1.motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-slate-800 rounded-xl p-6 w-full max-w-md relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"/>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.1),transparent_50%)]"/>

            <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white z-10">
              <lucide_react_1.X className="h-5 w-5"/>
            </button>

            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <lucide_react_1.GlobeIcon className="h-6 w-6 text-cyan-400 mr-2"/>
                <h2 className="text-xl font-semibold text-white">Select Your Region</h2>
              </div>

              <p className="text-slate-300 mb-6">
                To provide you with accurate financial advice and relevant regulatory information, please select your region:
              </p>

              <div className="grid grid-cols-2 gap-4">
                <framer_motion_1.motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={function () { return handleSelect('US'); }} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-6 transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity"/>
                  <img src="https://flagcdn.com/w160/us.png" alt="US Flag" className="w-12 h-8 object-cover rounded mb-4"/>
                  <h3 className="text-lg font-semibold text-white">United States</h3>
                  <p className="text-sm text-slate-400">SEC & FINRA Regulated</p>
                </framer_motion_1.motion.button>

                <framer_motion_1.motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={function () { return handleSelect('UK'); }} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 p-6 transition-all hover:shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"/>
                  <img src="https://flagcdn.com/w160/gb.png" alt="UK Flag" className="w-12 h-8 object-cover rounded mb-4"/>
                  <h3 className="text-lg font-semibold text-white">United Kingdom</h3>
                  <p className="text-sm text-slate-400">FCA Regulated</p>
                </framer_motion_1.motion.button>
              </div>

              <p className="mt-6 text-sm text-slate-400 text-center">
                You can change this setting later in your profile
              </p>
            </div>
          </framer_motion_1.motion.div>
        </framer_motion_1.motion.div>)}
    </framer_motion_1.AnimatePresence>);
}
