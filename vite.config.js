// vite.config.js
const { resolve } = require('path');
const { defineConfig } = require('vite');
import htmlPurge from 'vite-plugin-html-purgecss';

module.exports = defineConfig({
  plugins: [htmlPurge()],
  build: {
    sourcemap: true,
  },
  rollupOptions: {
    input: {
      main: resolve(__dirname, 'index.html'),
      design: resolve(__dirname, 'design.html'),
    },
  },
});
