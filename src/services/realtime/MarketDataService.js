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
exports.marketDataService = exports.useMarketStore = void 0;
var zustand_1 = require("zustand");
exports.useMarketStore = (0, zustand_1.create)(function (set) { return ({
    connected: false,
    data: {},
    setConnected: function (status) { return set({ connected: status }); },
    updateData: function (symbol, data) { return set(function (state) {
        var _a;
        return ({
            data: __assign(__assign({}, state.data), (_a = {}, _a[symbol] = data, _a))
        });
    }); }
}); });
var MarketDataService = /** @class */ (function () {
    function MarketDataService() {
        this.symbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'BTC-USD', 'ETH-USD'];
        this.mockInterval = null;
        this.basePrices = {
            'AAPL': 150,
            'GOOGL': 2800,
            'MSFT': 290,
            'AMZN': 3300,
            'BTC-USD': 45000,
            'ETH-USD': 3000
        };
        this.startMockDataFeed();
    }
    MarketDataService.prototype.startMockDataFeed = function () {
        var _this = this;
        // Initialize with base prices
        this.symbols.forEach(function (symbol) {
            _this.generateMockData(symbol);
        });
        // Update prices periodically
        this.mockInterval = setInterval(function () {
            _this.symbols.forEach(function (symbol) {
                _this.generateMockData(symbol);
            });
        }, 2000); // Update every 2 seconds
        exports.useMarketStore.getState().setConnected(true);
    };
    MarketDataService.prototype.generateMockData = function (symbol) {
        var previousData = exports.useMarketStore.getState().data[symbol];
        var basePrice = this.basePrices[symbol];
        var previousPrice = (previousData === null || previousData === void 0 ? void 0 : previousData.price) || basePrice;
        // Generate realistic price movement
        var volatility = symbol.includes('BTC') || symbol.includes('ETH') ? 2 : 0.5;
        var change = (Math.random() - 0.5) * volatility;
        var newPrice = previousPrice * (1 + change / 100);
        var mockData = {
            symbol: symbol,
            price: newPrice,
            change: ((newPrice - basePrice) / basePrice) * 100,
            volume: Math.floor(Math.random() * 1000000),
            timestamp: new Date()
        };
        exports.useMarketStore.getState().updateData(symbol, mockData);
    };
    MarketDataService.prototype.disconnect = function () {
        if (this.mockInterval) {
            clearInterval(this.mockInterval);
        }
        exports.useMarketStore.getState().setConnected(false);
    };
    return MarketDataService;
}());
exports.marketDataService = new MarketDataService();
