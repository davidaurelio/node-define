define('names/baz', function() {
  return 'baz';
});
define(['names/baz'], function(baz) {
  return {name: baz};
});
