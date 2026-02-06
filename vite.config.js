import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: '/Gene-Personal-Web/',
  plugins: [
    vue(),
    // vueDevTools(),
  ],
  server: {
    allowedHosts: true // This allows all hostnames, including Pinggy for "ssh -p 443 -R 0:localhost:5173 a.pinggy.io"
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
