"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_1 = require("@vitejs/plugin-react");
exports.default = (0, vite_1.defineConfig)({
    plugins: [
        (0, plugin_react_1.default)({
            babel: {
                plugins: [
                    ['@babel/plugin-transform-runtime', {
                            corejs: 3,
                            helpers: true,
                            regenerator: true
                        }]
                ]
            }
        })
    ],
    optimizeDeps: {
        include: [
            'regenerator-runtime/runtime',
            'react-speech-recognition',
            'socket.io-client'
        ]
    },
    server: {
        host: true,
        port: 5173
    }
});
