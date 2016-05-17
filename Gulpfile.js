"use strict";

const gulp   = require('gulp');
const rollup = require('rollup');
const babel  = require('rollup-plugin-babel');
const buble  = require('rollup-plugin-buble');

/**
 *  rollup.js Gulp task
 */
gulp.task('rollup', () => {
  let entry   = './src/js/master.js';
  let dest    = './public/js/master.js';
  let plugins = [ babel(), buble() ];
  rollup.rollup({ entry, plugins }).then( (bundle) => {
    let format = 'umd'; /* amd, cjs, es6, iife, umd */
    let result = bundle.generate({ format });
    bundle.write({ format, dest });
  });
});

/**
 *  Default Gulp task
 */
gulp.task('default', ['rollup'], () => {
  gulp.watch(['./src/js/master.js', './src/js/modules/**/*.js'], ['rollup'])
    .on('change', (event) => {
      console.log(`File ${event.path} was ${event.type}, running tasks...`);
    })
  ;
});