node-define
===========

Makes AMD modules require’able in node by adding a global define function that delegates to RequireJS. The module configures RequireJS to use `process.cwd()` as `baseUrl` once and the module-local node `require` for every call to `define`.

Usage
-----

- Install with npm: `npm install node-define`
- Require the module: `require('node-define')`

**Note:** node-define deliberately does not expose `define.amd`. This way, modules in the UMD format will take the “node route” instead of using `define`. Named modules work better this way.

Further Configuration
---------------------

The module exposes RequireJS as `requirejs` property, and a `config` method that takes the same arguments as `requirejs.config`. Note that passing a `nodeRequire` option will be overwritten by node-define itself, as it always passes the module-local `require` to RequireJS.

Example: mocha tests
--------------------

For AMD-based projects with a mocha test suite, this module can help with executing the tests in node.js:

    mocha -r node-define

Letting mocha require the module will create a synchronous global `define` function that can load tests and code before mocha starts running, avoiding the problem that mocha does not pick up test suites when code is pulled in asynchronously.

For further configuration, a simple setup module can be created that pulls in node-require and provides further configuration. Simply pass that module to mocha with the `-r` switch.



