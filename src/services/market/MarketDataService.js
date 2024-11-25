"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketDataService = exports.useMarketStore = void 0;
var socket_io_client_1 = require("socket.io-client");
var zustand_1 = require("zustand");
var axios_1 = require("axios");
exports.useMarketStore = (0, zustand_1.create)(function (set) { return ({
    connected: false,
    lastUpdate: null,
    realTimeData: null,
    setConnected: function (status) { return set({ connected: status }); },
    setLastUpdate: function (date) { return set({ lastUpdate: date }); },
    updateRealTimeData: function (data) { return set({ realTimeData: data }); }
}); });
var MarketDataService = /** @class */ (function () {
    function MarketDataService() {
        this.socket = null;
        this.finnhubClient = null;
        this.alphaVantageKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;
        this.initializeWebSocket();
    }
    MarketDataService.prototype.initializeWebSocket = function () {
        var _this = this;
        // Using free WebSocket service for demo
        this.socket = (0, socket_io_client_1.io)('wss://ws.finnhub.io');
        this.socket.on('connect', function () {
            exports.useMarketStore.getState().setConnected(true);
            _this.subscribeToSymbols(['AAPL', 'GOOGL', 'MSFT', 'AMZN']);
        });
        this.socket.on('disconnect', function () {
            exports.useMarketStore.getState().setConnected(false);
        });
        this.socket.on('data', function (data) {
            exports.useMarketStore.getState().updateRealTimeData(data);
            exports.useMarketStore.getState().setLastUpdate(new Date());
        });
    };
    MarketDataService.prototype.subscribeToSymbols = function (symbols) {
        var _this = this;
        symbols.forEach(function (symbol) {
            _this.socket.emit('subscribe', "trade.".concat(symbol));
        });
    };
    MarketDataService.prototype.getHistoricalData = function (symbol_1) {
        return __awaiter(this, arguments, void 0, function (symbol, interval) {
            var response, error_1;
            if (interval === void 0) { interval = 'daily'; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("https://www.alphavantage.co/query?function=TIME_SERIES_".concat(interval.toUpperCase(), "&symbol=").concat(symbol, "&apikey=").concat(this.alphaVantageKey))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Failed to fetch historical data:', error_1);
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MarketDataService.prototype.getMarketNews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("https://www.alphavantage.co/query?function=NEWS_SENTIMENT&apikey=".concat(this.alphaVantageKey))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 2:
                        error_2 = _a.sent();
                        console.error('Failed to fetch market news:', error_2);
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MarketDataService.prototype.disconnect = function () {
        if (this.socket) {
            this.socket.disconnect();
        }
    };
    return MarketDataService;
}());
exports.marketDataService = new MarketDataService();
