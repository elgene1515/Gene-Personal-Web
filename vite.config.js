import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  // base: '/Gene-Personal-Web/', //for githubpages deployment
  base: '/', // now switching to vercel for cleaner DNS.
  plugins: [
    vue(),
    // vueDevTools(),
  ],
  // --- ADD THIS BUILD BLOCK ---
  build: {
    target: 'es2015', // Increases compatibility for iOS 11-13
    cssTarget: 'chrome61' // Ensures CSS variables work on older mobile browsers
  },
  // ----------------------------
  server: {
    allowedHosts: true // This allows all hostnames, including Pinggy for "ssh -p 443 -R 0:localhost:5173 a.pinggy.io"
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
