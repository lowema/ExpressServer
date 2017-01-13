// api.js
//
// setup routine for each of the API routes
//==========================================================================================================
(function (api) {
    var logger = require('../utils/logger');

    // init happens here
    api.init = function (router) {

        var baseRoute = '/api';
        logger.debug("Applying routes for base: " + baseRoute);
        //add a require for each API code file you want to include under this base URL
        require('./test/~TEST').init(baseRoute, router); // for testing - comment out when you want
        logger.debug("Applied routes for base: " + baseRoute);
    }

})(module.exports)