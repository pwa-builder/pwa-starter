import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    assetsDir: "code",
    // rollupOptions: {
    //   external: [/^lit/,  /^@fluentui/, /^@microsoft\/fast/ ]
    // }
  },
  plugins: [
    VitePWA({
      workbox: {
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,png,webp,jpg}',
        ],
      },
      manifest: false,
      devOptions: {
        enabled: true
      }
    })
  ]
})