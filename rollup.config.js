import babel from 'rollup-plugin-babel';

export default {
  entry: './src/js/master.js',
  dest: './public/js/master.js',
  format: 'umd',
  plugins: [ babel() ]
};