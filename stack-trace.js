function customPrepareStackTrace(_, v8StackTrace) { return v8StackTrace; }

function getStackTrace(depth, fn) {
  var stackTraceLimit = Error.stackTraceLimit;
  var prepareStackTrace = Error.prepareStackTrace;

  var stackObject = {};
  Error.stackTraceLimit = depth;
  Error.prepareStackTrace = customPrepareStackTrace;
  Error.captureStackTrace(stackObject, fn);
  var v8StackTrace = stackObject.stack;

  Error.stackTraceLimit = stackTraceLimit;
  Error.prepareStackTrace = prepareStackTrace;

  return v8StackTrace;
}

module.exports = getStackTrace;
