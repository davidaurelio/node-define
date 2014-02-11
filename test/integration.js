var assert = require('assert');
require('../');

var allModule = require('./modules/all');

assert.deepEqual(allModule, {
  foo: {name: 'foo'},
  bar: {name: 'bar'},
  baz: {name: 'baz'}
});
