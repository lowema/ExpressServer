// server.js
//
// server initialisation
//==========================================================================================================
var express = require('express');
var settings = require('./settings');
var logger = require('./utils/logger');

//Lets get going
logger.info("Starting ExpressServer - A server based on express.");
logger.info("Configuring express ...");
var app = express();
require('./utils/expressSetup').init(app, express, settings);
logger.info("Express configured.");

//Set up the API routes
logger.info("Setting up the API routes ...");
var router = express.Router();
require('./api/api').init(router);
app.use(router);
logger.info("All routes set up.");

//And we listen for things to happen
app.listen(settings.portNumber, function () {
  logger.info('Listening on port: '+ settings.portNumber);
});