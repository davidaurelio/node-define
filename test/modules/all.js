define([
  './foo',
  'test/modules/bar',
  './baz'
], function(foo, bar, baz) {
  'use strict';

  return {foo: foo, bar: bar, baz: baz};
});
