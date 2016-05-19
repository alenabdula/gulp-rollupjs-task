import buble from 'rollup-plugin-buble';

export default {
  entry: './src/js/master.js',
  dest: './public/js/master.js',
  format: 'umd', /* amd, cjs, es6, iife, umd */
  plugins: [
    buble(),
  ]
};