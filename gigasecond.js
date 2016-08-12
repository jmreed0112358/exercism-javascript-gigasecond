var moment = require('moment'),
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js');

const GIGA_SECOND = moment.duration(1000000000, 'seconds');

var Gigasecond = function(startDate) {
  if (!(startDate instanceof Date)) {
    throw new InvalidParameterException('This function takes a Date object');
  }

  if (Number.isNaN(startDate.getYear())) {
    throw new InvalidParameterException('Invalid date');
  }
  this.startDate = startDate;
};

Gigasecond.prototype.date = function() {
  var startMoment;

  startMoment = new moment(this.startDate);
  return new Date(startMoment.add(GIGA_SECOND));
};

module.exports = Gigasecond;