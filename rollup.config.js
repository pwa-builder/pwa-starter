import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import { injectManifest } from 'rollup-plugin-workbox';
import html from '@open-wc/rollup-plugin-html';
import strip from '@rollup/plugin-strip';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';

export default {
  input: 'index.html',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    resolve(),
    html(),
    replace(
      {
        'process.env.NODE_ENV': JSON.stringify('production')
      }
    ),
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
    injectManifest({
      swSrc: 'dev/pwabuilder-sw.js',
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