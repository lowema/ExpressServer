// logger.js
//
// A logging routine based on a few i've found round the internet
//==========================================================================================================
var winston = require('winston');
var settings = require('../settings');
var path = require('path');

winston.emitErrs = true;

// Set up logger
var customColors = {
  trace: 'white',
  debug: 'cyan',
  info: 'green',
  warn: 'yellow',
  crit: 'red',
  fatal: 'red',
  access: 'magenta'
};
winston.addColors(customColors);

var customLevels = {
    fatal: 0,
    access: 0,
    crit: 1,
    warn: 2,
    info: 3,
    debug: 4,
    trace: 5
};

var fileName = path.join(settings.logDirectory + '/all-logs.log');


var logger = new winston.Logger({
    colors: customColors,
    levels: customLevels,
    transports: [
        new winston.transports.File({
            level: settings.fileLogLevel,
            filename: fileName,
            timestamp: true,
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: settings.consoleLogLevel,
            handleExceptions: true,
            json: false,
            timestamp: true,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.access(message);
    }
};