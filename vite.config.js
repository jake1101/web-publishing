// import { defineConfig } from 'vite';

// export default defineConfig({
//   mode: 'development',
//   publicDir: 'public',
//   server: {
//     watch: {
//       usePolling: true,
//     },
//     open: '/',
//   },
// });
const { resolve } = require('path');
const { defineConfig } = require('vite');
console.log(resolve(__dirname));

module.exports = defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    open: '/',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sample1: resolve(__dirname, 'src/sample1/index.html'),
      },
    },
  },
});
