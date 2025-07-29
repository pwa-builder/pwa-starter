import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const packageLockJson = JSON.parse(
  readFileSync(resolve(__dirname, "package-lock.json"), "utf-8"),
);

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  build: {
    sourcemap: true,
    assetsDir: "code",
    target: ["esnext"],
    cssMinify: true,
    lib: false
  },
  define: {
    __SHOELACE_VERSION__: JSON.stringify(
      packageLockJson.packages["node_modules/@shoelace-style/shoelace"].version,
    ),
    __WORKBOX_VERSION__: JSON.stringify(
      packageLockJson.packages["node_modules/workbox-build"].version,
    ),
  },
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,json,png}',
        ],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true
      }
    })
  ]
})
