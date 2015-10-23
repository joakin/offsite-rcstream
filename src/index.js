import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'
import App from './ui/app.js'

import stream from './net/rc.js'
import editsPerSecondStream from './streams/edits-per-second.js'
import botsVsHumansStream from './streams/bots-vs-humans.js'
import Leaderboard from './libs/leaderboard.js'

function render() {
  ReactDOM.render(<App edits={edits} speed={speed} botScore={botScore} titles={titles}
    leaderboard={leaderboard}
    startTime={startTime}/>,
    document.body)
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
var leaderboard = new Leaderboard();

bots.on('message', (m) => { botScore = m; render(); })
stream.on('message', (m) => {
  if ( m.namespace === 0 ) {
    var item = titles[0][m.title] || {
      title: m.title,
      wiki: m.wiki,
      edits: 0,
    }
    item.edits += 1;
    leaderboard.addItem(item);
    titles[0][m.title] = item;
  }
  edits.push(m);
  edits = edits.slice( -10 );
  render();
})
eps.on('message', (m) => { speed = m; render(); })
render();

