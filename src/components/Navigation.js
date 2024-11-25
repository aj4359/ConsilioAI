"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = Navigation;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var useNavigationStore_1 = require("../store/useNavigationStore");
function Navigation() {
    var _a = (0, useNavigationStore_1.useNavigationStore)(), currentSection = _a.currentSection, breadcrumbs = _a.breadcrumbs, navigateTo = _a.navigateTo;
    var sections = [
        { id: 'home', label: 'Home' },
        { id: 'financial-dashboard', label: 'Dashboard' },
        { id: 'ai-advisor', label: 'AI Advisor' },
        { id: 'features', label: 'Features' }
    ];
    return (<div className="fixed top-20 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="py-2 flex items-center text-sm">
          <button onClick={function () { return navigateTo('home'); }} className="text-slate-400 hover:text-white flex items-center">
            <lucide_react_1.Home className="h-4 w-4"/>
          </button>
          
          {breadcrumbs.slice(1).map(function (crumb, index) { return (<react_1.default.Fragment key={crumb}>
              <lucide_react_1.ChevronRight className="h-4 w-4 mx-2 text-slate-600"/>
              <span className="text-slate-300">{crumb}</span>
            </react_1.default.Fragment>); })}
        </div>

        {/* Section Navigation */}
        <div className="flex space-x-6 py-2">
          {sections.map(function (section) { return (<button key={section.id} onClick={function () { return navigateTo(section.id); }} className={"relative px-4 py-2 text-sm transition-colors ".concat(currentSection === section.id
                ? 'text-white'
                : 'text-slate-400 hover:text-white')}>
              {section.label}
              {currentSection === section.id && (<framer_motion_1.motion.div layoutId="activeSection" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"/>)}
            </button>); })}
        </div>
      </div>
    </div>);
}
