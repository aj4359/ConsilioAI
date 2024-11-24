import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
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