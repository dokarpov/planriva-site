import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    host: '0.0.0.0',
    allowedHosts: ['planriva-v44-staging.up.railway.app'],
  },
});
