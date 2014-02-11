var PATH_SEPARATOR = require('path').sep;
var requirejs = exports.requirejs = require('requirejs');
var getStackTrace = require('./stack-trace');

requirejs.config({baseUrl: process.cwd()});
var config = {};
var loadedModules = Object.create(null);

var toModuleId = PATH_SEPARATOR === '/' ?
  function(fileName) { return fileName; } :
  function(fileName) { return fileName.split(PATH_SEPARATOR).join('/'); };

function define() {
  var fileName = getStackTrace(1, define)[0].getFileName();
  if (!(loadedModules[fileName])) {
    var module = require.cache[fileName];
    config.nodeRequire = module.require.bind(module);
    module.exports = requirejs.config(config)(toModuleId(fileName));
  }
}

global.define = define;

exports.requirejs = requirejs;
exports.config = function(configuration) {
  config = configuration;
};
