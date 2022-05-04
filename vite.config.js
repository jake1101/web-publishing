import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  mode: 'development',
  publicDir: 'public',
  server: {
    watch: {
      usePolling: true,
    },
    open: '/html/home.html',
  },
});
