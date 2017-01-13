// ~TEST.js
//
// a test module to see if an endpoint works
//==========================================================================================================
(function (api) {
    var logger = require('../../utils/logger');
	var apiRoute = null;

    api.init = function (baseRoute, router) {

	//set the API route here    VVVVVVVV
	apiRoute = baseRoute +      '/test';
	logger.debug("Applying routes for: " + apiRoute);
	router.route(apiRoute)
	//and the methods etc here ...
		.all(allFunction)
		.get(getFunction)
		.put(putFunction)
		.post(postFunction)
		.delete(deleteFunction);
	logger.debug(apiRoute + " set up.");

    }

	//ALL ======================================================================================================
	var allFunction = function(req, res, next) {
		logger.debug("route " + apiRoute + " executed ...");
		next();
	}

	//GET ======================================================================================================
	var getFunction = function (req,res,next) {
		logger.debug('GET happened');
		res.sendStatus(200);
	}

	//POST =====================================================================================================
	var postFunction = function (req,res,next) {
		logger.debug('POST happened');
		next(new Error('Not yet implemented'));
	}

	//PUT ======================================================================================================
	var putFunction = function (req,res,next) {
		logger.debug('POST happened');
		next(new Error('Not yet implemented'));
	}

	//DELETE ===================================================================================================
	var deleteFunction = function (req,res,next) {
		logger.debug('POST happened');
		next(new Error('Not yet implemented'));
	}

	//==========================================================================================================

})(module.exports)