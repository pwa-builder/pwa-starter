import resolve from '@rollup/plugin-node-resolve';
import html from '@open-wc/rollup-plugin-html';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';

export default {
  input: 'index.html',
  output: {
    dir: 'dev',
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
    copy({
      targets: [
        { src: 'assets/**/*', dest: 'dev/assets/' },
        { src: 'styles/global.css', dest: 'dev/styles/'},
        { src: 'manifest.json', dest: 'dev/'}
      ]
    })
  ]
};