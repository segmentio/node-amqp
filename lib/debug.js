'use strict';

var debug = process.env['NODE_DEBUG_AMQP'];

if (!debug) return;

module.exports = function() {
  console.error.apply(null, arguments);
};

