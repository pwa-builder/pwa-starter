import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import { generateSW } from 'rollup-plugin-workbox';
import html from '@open-wc/rollup-plugin-html';
import strip from '@rollup/plugin-strip';
import copy from 'rollup-plugin-copy';

export default {
  input: 'index.html',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    resolve(),
    html(),
    terser(),
    strip({
      functions: ['console.log']
    }),
    copy({
      targets: [
        { src: 'assets/**/*', dest: 'dist/assets/' },
        { src: 'styles/global.css', dest: 'dist/styles/'},
        { src: 'manifest.json', dest: 'dist/'}
      ]
    }),
    generateSW({
      swDest: 'dist/pwabuilder-sw.js',
      globDirectory: 'dist/',
      globPatterns: [
        'styles/*.css',
        '**/*/*.svg',
        '*.js',
        '*.html',
        'assets/**',
        '*.json'
      ]
    }),
  ]
};