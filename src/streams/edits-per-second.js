const util = require('util');
const EventEmitter = require('events');

var editsPerSecondStream = function( stream ) {
  var wikiEdits = {};
  var newStream = new EventEmitter();

  stream.on('message', function( data ) {
    var wiki = data.wiki;
    if ( !wikiEdits[wiki] ) {
      wikiEdits[wiki] = 0;
    }
    wikiEdits[wiki]++;
  });

  setInterval( function () {
    var i,
      speed = new Map();

    for ( i in wikiEdits ) {
      if ( wikiEdits.hasOwnProperty(i) ) {
        speed.set(i, wikiEdits[i] / 10);
        wikiEdits[i] = 0;
      }
    }
    newStream.emit('message',speed);
  }, 1000 * 1 );
  return newStream;
};

module.exports = editsPerSecondStream;
