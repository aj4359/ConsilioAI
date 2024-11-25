"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = Header;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var useNavigationStore_1 = require("../store/useNavigationStore");
function Header() {
    var _a = (0, react_1.useState)(false), isScrolled = _a[0], setIsScrolled = _a[1];
    var _b = (0, react_1.useState)(false), isMobileMenuOpen = _b[0], setIsMobileMenuOpen = _b[1];
    var navigateTo = (0, useNavigationStore_1.useNavigationStore)().navigateTo;
    (0, react_1.useEffect)(function () {
        var updateScroll = function () {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', updateScroll);
        return function () { return window.removeEventListener('scroll', updateScroll); };
    }, []);
    var menuItems = [
        { label: 'Features', id: 'features' },
        { label: 'Dashboard', id: 'financial-dashboard' },
        { label: 'AI Advisor', id: 'ai-advisor' }
    ];
    var handleNavigation = function (id) {
        navigateTo(id);
        setIsMobileMenuOpen(false);
    };
    return (<header className={"fixed w-full backdrop-blur-md z-50 transition-all duration-300 ".concat(isScrolled ? 'bg-slate-900/95 shadow-lg' : 'bg-transparent')}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={function () { return handleNavigation('home'); }} className="flex items-center space-x-2">
            <lucide_react_1.Brain className="h-8 w-8 text-cyan-400"/>
            <span className="text-xl font-bold text-white">
              Consilio-AI
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map(function (item) { return (<button key={item.id} onClick={function () { return handleNavigation(item.id); }} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </button>); })}
            
            <framer_motion_1.motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={function () { return handleNavigation('ai-advisor'); }} className="bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-indigo-400">
              Get Started
            </framer_motion_1.motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={function () { return setIsMobileMenuOpen(!isMobileMenuOpen); }} className="md:hidden text-white">
            {isMobileMenuOpen ? (<lucide_react_1.X className="h-6 w-6"/>) : (<lucide_react_1.Menu className="h-6 w-6"/>)}
          </button>
        </div>

        {/* Mobile Menu */}
        <framer_motion_1.motion.div initial={false} animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} className="md:hidden overflow-hidden">
          <div className="py-4 space-y-4">
            {menuItems.map(function (item) { return (<button key={item.id} onClick={function () { return handleNavigation(item.id); }} className="block w-full text-left text-slate-300 hover:text-white transition-colors">
                {item.label}
              </button>); })}
            <button onClick={function () { return handleNavigation('ai-advisor'); }} className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white px-6 py-2 rounded-lg">
              Get Started
            </button>
          </div>
        </framer_motion_1.motion.div>
      </nav>
    </header>);
}
