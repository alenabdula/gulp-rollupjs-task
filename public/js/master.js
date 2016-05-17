(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, function () { 'use strict';

  var Example = function Example () {};

  Example.prototype.init = function init() {
    return 'Class: Example, Method: init()';
  };

  var foo = new Example();
  console.log(foo.init());

}));