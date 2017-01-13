// settings.js
//
// all of the relevant server settings
//==========================================================================================================
var path = require('path');

// app port number
exports.portNumber = 3000;
//logging
exports.logDirectory = path.join(path.dirname(module.parent.filename), 'log');
exports.consoleLogLevel = 'debug';
exports.fileLogLevel = 'info';
exports.accessLogTokens = ':date[iso] :method :url :status :response-time :user-agent :remote-addr :remote-user ';
