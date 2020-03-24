import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import { injectManifest } from 'rollup-plugin-workbox';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import strip from '@rollup/plugin-strip';
import copy from 'rollup-plugin-copy';

export default {
  input: ['build/script/pages/app-index.js'],
  output: {
    dir: 'dist/script/',
    format: 'es',
  },
  plugins: [
    resolve(),
    minifyHTML(),
    terser(),
    strip({
      functions: ['console.log']
    }),
    copy({
      targets: [
        { src: 'index.prod.html', dest: 'dist/', rename: 'index.html' },
        { src: 'assets/**/*', dest: 'dist/assets/' },
        { src: 'src/global.css', dest: 'dist/'},
        { src: 'manifest.json', dest: 'dist/'}
      ]
    }),
    injectManifest({
      swSrc: 'pwabuilder-sw.js',
      swDest: 'dist/pwabuilder-sw.js',
      globDirectory: 'dist/',
      globPatterns: [
        '*.css',
        '**/*/*.svg',
        '*/**.js',
        '*.html',
        'assets/**',
        '*.json'
      ]
    })
  ]
};