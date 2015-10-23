import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'
import App from './ui/app.js'

import stream from './net/rc.js'
import editsPerSecondStream from './streams/edits-per-second.js'
import botsVsHumansStream from './streams/bots-vs-humans.js'

function render() {
  ReactDOM.render(<App edits={edits} speed={speed} botScore={botScore} titles={titles}
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

bots.on('message', (m) => { botScore = m; render(); })
stream.on('message', (m) => {
  if ( m.namespace === 0 ) {
    titles[0][m.title] = titles[0][m.title] || 0;
    titles[0][m.title] += 1;
  }
  edits.push(m);
  edits = edits.slice( -10 );
  render();
})
eps.on('message', (m) => { speed = m; render(); })
render();
