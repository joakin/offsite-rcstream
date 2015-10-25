const util = require('util');
const EventEmitter = require('events');

// returns the % of edits that are from bots
var botsVsHumansStream = function( stream ) {
  var bots = 1;
  var humans = 1;
  var newStream = new EventEmitter();

  stream.on('message', function( data ) {
    if ( data.bot ) {
      bots += 1;
    } else {
      humans += 1;
    }
    newStream.emit('message', bots / ( bots + humans ) );
  });
  return newStream;
};

module.exports = botsVsHumansStream;

