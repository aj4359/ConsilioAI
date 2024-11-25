"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionIndicator = RegionIndicator;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var useAppStore_1 = require("../store/useAppStore");
function RegionIndicator() {
    var _a = (0, useAppStore_1.useAppStore)(), jurisdiction = _a.jurisdiction, setJurisdictionModalOpen = _a.setJurisdictionModalOpen;
    if (!jurisdiction)
        return null;
    return (<framer_motion_1.motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fixed top-20 right-6 z-50">
      <button onClick={function () { return setJurisdictionModalOpen(true); }} className="flex items-center space-x-2 bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700 hover:border-cyan-500/50 transition-colors group">
        <lucide_react_1.MapPin className="h-4 w-4 text-cyan-400"/>
        <span className="text-sm text-slate-300">{jurisdiction === 'US' ? 'United States' : 'United Kingdom'}</span>
        <lucide_react_1.Settings className="h-3 w-3 text-slate-400 group-hover:text-cyan-400 transition-colors"/>
      </button>
    </framer_motion_1.motion.div>);
}
