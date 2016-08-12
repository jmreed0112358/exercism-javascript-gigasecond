var validator = require('validator');
var NotImplementedException = require('./exceptions/NotImplementedException.js');
var InvalidParameterException = require('./exceptions/InvalidParameterException.js');

var Gigasecond = function(startDate) {
	throw new NotImplementedException();
};

Gigasecond.prototype.date = function() {
	throw new NotImplementedException();
};

module.exports = Gigasecond;