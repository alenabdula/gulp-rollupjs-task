import babel from 'rollup-plugin-babel';
import buble from 'rollup-plugin-buble';

export default {
  entry: './src/js/master.js',
  dest: './public/js/master.js',
  format: 'umd',
  plugins: [ babel(), buble() ]
};