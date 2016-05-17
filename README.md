# Gulp Task for rollup.js

[Rollup.js](http://rollupjs.org/) the next-generation JavaScript module bundler allows you to bundle your JavaScript dependencies. In addition, it offers tree-shaking. Tree-shaking?

> Normally if you require a module, you import the whole thing. ES2015 lets you just import the bits you need, without mucking around with custom builds. - rollupjs.org

Rollup.js comes with plug-ins, [Bublé](https://gitlab.com/Rich-Harris/rollup-plugin-buble) for example, allows you to compile code from ES6 to ES5.

## Getting started

1. run `npm install` from root directory, this will install following dependencies:
  1. `gulp`, JavaScript task runner
  1. `rollup`, JavaScript bundler
  1. `rollup-plugin-babel`, JavaScript compiler plug-in
  1. `rollup-plugin-buble`, JavaScript compiler plug-in
2. Compiling code can be accomplished in two ways, by typing:
  1. `gulp`, will use `Gulpfile.js` and run default Gulp task
  2. `npm run rollup`, will use `rollup.config.js` and run compiling process via terminal