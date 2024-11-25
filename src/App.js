"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
var react_1 = require("react");
var react_query_1 = require("@tanstack/react-query");
var Header_1 = require("./components/Header");
var Hero_1 = require("./components/Hero");
var Features_1 = require("./components/Features");
var DemoVideo_1 = require("./components/DemoVideo");
var Footer_1 = require("./components/Footer");
var Chatbot_1 = require("./components/Chatbot");
var FloatingBenson_1 = require("./components/FloatingBenson");
var LiveMarketTicker_1 = require("./components/financial/LiveMarketTicker");
var JurisdictionModal_1 = require("./components/JurisdictionModal");
var useAppStore_1 = require("./store/useAppStore");
var MarketDataService_1 = require("./services/realtime/MarketDataService");
var RegionIndicator_1 = require("./components/RegionIndicator");
var WebSocketService_1 = require("./services/realtime/WebSocketService");
var queryClient = new react_query_1.QueryClient();
function App() {
    var _a = (0, useAppStore_1.useAppStore)(), jurisdictionModalOpen = _a.jurisdictionModalOpen, setJurisdictionModalOpen = _a.setJurisdictionModalOpen, jurisdiction = _a.jurisdiction;
    (0, react_1.useEffect)(function () {
        // Show jurisdiction modal if not set
        if (!jurisdiction) {
            setJurisdictionModalOpen(true);
        }
        // Initialize WebSocket connection
        WebSocketService_1.webSocketService.connect();
        // Cleanup on unmount
        return function () {
            MarketDataService_1.marketDataService.disconnect();
            WebSocketService_1.webSocketService.disconnect();
        };
    }, [jurisdiction, setJurisdictionModalOpen]);
    return (<react_query_1.QueryClientProvider client={queryClient}>
      <div className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"/>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"/>
        </div>

        <Header_1.Header />
        <main>
          <Hero_1.Hero />
          <Features_1.Features />
          <DemoVideo_1.DemoVideo />
        </main>
        <Footer_1.Footer />
        <Chatbot_1.Chatbot />
        <FloatingBenson_1.FloatingBenson />
        <LiveMarketTicker_1.LiveMarketTicker />
        <RegionIndicator_1.RegionIndicator />
        <JurisdictionModal_1.JurisdictionModal isOpen={jurisdictionModalOpen} onClose={function () { return setJurisdictionModalOpen(false); }}/>
      </div>
    </react_query_1.QueryClientProvider>);
}
