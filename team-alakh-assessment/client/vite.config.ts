import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true, // Allow access from other devices on the network
    port: 5173, 
    proxy: {
      '/api': 'https://assessment-o61q.onrender.com',
      '/uploads': 'https://assessment-o61q.onrender.com',
    },
  },
});
