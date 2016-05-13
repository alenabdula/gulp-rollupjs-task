"use strict";

const gulp   = require('gulp');
const rollup = require('rollup');
const babel  = require('rollup-plugin-babel');

gulp.task('rollup', () => {
  let source      = './src/js/master.js';
  let destination = './public/js/master.js';
  rollup.rollup({
    entry: source,
    plugins: [ babel() ]
  }).then( (bundle) => {
    let format = 'umd';
    let result = bundle.generate({ format: format });
    bundle.write({ format: format, dest: destination });
  });
});

gulp.task('default', ['rollup'], () => {
  gulp.watch(['./src/js/master.js', './src/js/modules/**/*.js'], ['rollup'])
    .on('change', (event) => {
      console.log(`File ${event.path} was ${event.type}, running tasks...`);
    })
  ;
});