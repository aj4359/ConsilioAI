"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webSocketService = exports.useWebSocketStore = void 0;
var socket_io_client_1 = require("socket.io-client");
var zustand_1 = require("zustand");
exports.useWebSocketStore = (0, zustand_1.create)(function (set) { return ({
    connected: false,
    lastUpdate: null,
    setConnected: function (status) { return set({ connected: status }); },
    setLastUpdate: function (date) { return set({ lastUpdate: date }); }
}); });
var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
        this.socket = null;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
    }
    WebSocketService.prototype.connect = function () {
        var _this = this;
        // Using free WebSocket echo server for demo
        this.socket = (0, socket_io_client_1.io)('wss://socketsbay.com/wss/v2/1/demo/');
        this.socket.on('connect', function () {
            exports.useWebSocketStore.getState().setConnected(true);
            _this.reconnectAttempts = 0;
            console.log('WebSocket connected');
        });
        this.socket.on('disconnect', function () {
            exports.useWebSocketStore.getState().setConnected(false);
            _this.handleReconnect();
        });
        this.socket.on('marketUpdate', function (data) {
            exports.useWebSocketStore.getState().setLastUpdate(new Date());
            // Handle market updates
        });
    };
    WebSocketService.prototype.handleReconnect = function () {
        var _this = this;
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            setTimeout(function () {
                _this.reconnectAttempts++;
                _this.connect();
            }, Math.min(1000 * Math.pow(2, this.reconnectAttempts), 30000));
        }
    };
    WebSocketService.prototype.disconnect = function () {
        if (this.socket) {
            this.socket.disconnect();
            this.socket = null;
        }
    };
    return WebSocketService;
}());
exports.webSocketService = new WebSocketService();
