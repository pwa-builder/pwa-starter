import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
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
        { src: 'src/index.html', dest: 'dist/', rename: 'index.html' },
        { src: 'assets/**/*', dest: 'dist/assets/' },
        { src: 'src/global.css', dest: 'dist/'},
        { src: 'manifest.json', dest: 'dist/'},
        { src: 'pwabuilder-sw.js', dest: 'dist/'}
      ]
    })
  ]
};