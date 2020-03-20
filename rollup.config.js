import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import minifyHTML from 'rollup-plugin-minify-html-literals';
import strip from '@rollup/plugin-strip';

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
    })
  ]
};