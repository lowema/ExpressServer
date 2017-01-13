// expressSetup.js
//
// All the stuff that's set up as a standard for the express framework the way i like it
//==========================================================================================================
(function (expressConfig) {

  var logger = require("./logger");
  var path = require('path');

  expressConfig.init = function (app, express, settings) {

    api = express.Router();
    api.use(clientErrorHandler);

    function clientErrorHandler(err, req, res, next) {
      logger.log("error","Something wrong with an XHR request",err.stack);

      if (req.xhr) {
        res.send(500, { error: 'Something blew up!' });
      } else {
         next(err);
      }
    }

    logger.debug("Setting 'client' folder");
    var clientDir = path.dirname(module.parent.filename)  + "/client";
    app.use('/', express.static(clientDir));

    logger.debug("Injecting body-parser - parse urlencoded request bodies into req.body.");
    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    logger.debug("Injecting express-validator.");
    app.use(require('express-validator')());

    logger.debug("Overriding 'Express' logger");
    app.use(require('morgan')(settings.accessLogTokens,{ "stream": logger.stream }));

  };

})(module.exports);