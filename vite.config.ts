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
      // you can remove base and scope pwa plugin will use the base on vite: defaults to /
      base: "/",
      scope: "/",
      registerType: "autoUpdate",
      manifest: {
        id: "/",
        name: "PWA Starter",
        display: "standalone",
        start_url: "/",
        short_name: "starter",
        theme_color: "#E1477E",
        description: "This is a PWA Starter app",
        orientation: "any",
        background_color: "#E1477E",
        related_applications: [],
        prefer_related_applications: false,
        icons: [
          {
            src: "assets/icons/icon_512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "assets/icons/icon_192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "assets/icons/icon_48.png",
            sizes: "48x48",
            type: "image/png"
          },
          {
            src: "assets/icons/icon_24.png",
            sizes: "24x24",
            type: "image/png"
          }
        ],
        screenshots: [
          {
            src: "assets/screenshots/screen.png",
            sizes: "1617x1012",
            type: "image/png"
          }
        ],
        // what is this?
        // features: [
        //   "Cross Platform",
        //   "fast",
        //   "simple"
        // ],
        categories: [
          "utility"
        ]
      },
      workbox: {
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,png,webp,jpg}'
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/unpkg\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'unpkg-libs-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      },
      devOptions: {
        enabled: true
      }
    })
  ]
})
