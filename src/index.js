import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'
import App from './ui/app.js'

import stream from './net/rc.js'
import editsPerSecondStream from './streams/edits-per-second.js'
import botsVsHumansStream from './streams/bots-vs-humans.js'
import Leaderboard from './libs/leaderboard.js'

function render() {
  console.log(leaderboards);
  ReactDOM.render(<App edits={edits} speed={speed} botScore={botScore} titles={titles}
    leaderboards={leaderboards}
    startTime={startTime}/>,
    document.getElementById('app'))
}

var startTime = new Date();
var edits = []
var speed = new Map();
var eps = editsPerSecondStream( stream )
var bots = botsVsHumansStream( stream )
var botScore = 0;
var titles = {
  0: {}
};
var leaderboards = {
  '*': new Leaderboard(),
};

bots.on('message', (m) => { botScore = m; render(); })
stream.on('message', (m) => {
  var leaderboard;
  if ( m.namespace === 0 ) {
    var wiki = m.wiki;
    var item = titles[0][m.title] || {
      title: m.title,
      wiki: m.wiki,
      edits: 0,
    }
    item.edits += 1;

    // select the leaderboard for this wiki
    leaderboard = leaderboards[wiki];
    if ( !leaderboard ) {
      leaderboard = new Leaderboard();
      leaderboards[wiki] = leaderboard;
    }
    leaderboard.addItem(item);
    // also add to the global leaderboard
    leaderboards['*'].addItem(item);
    titles[0][m.title] = item;
  }
  edits.push(m);
  edits = edits.slice( -10 );
  render();
})
eps.on('message', (m) => { speed = m; render(); })
render();

