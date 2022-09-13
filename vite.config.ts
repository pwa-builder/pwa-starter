import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    sourcemap: true,
    assetsDir: "code",
  },
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,
      manifest: false,
      workbox: {
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,png,webp,jpg}'
        ],
      },
      devOptions: {
        enabled: true
      }
    })
  ]
})
