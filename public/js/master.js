(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, function () { 'use strict';

  class Example {
    init() {
      return 'Class: Example, Method: init()';
    }
  }

  let foo = new Example();
  console.log(foo.init());

}));