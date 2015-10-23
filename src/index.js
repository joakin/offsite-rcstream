import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'
import App from './ui/app.js'

import stream from './net/rc.js'
import editsPerSecondStream from './streams/edits-per-second.js'
import botsVsHumansStream from './streams/bots-vs-humans.js'

function render() {
  ReactDOM.render(<App edits={edits} speed={speed} botScore={botScore}/>, document.body)
}

var edits = []
var speed = new Map();
var eps = editsPerSecondStream( stream )
var bots = botsVsHumansStream( stream )
var botScore = 0;

bots.on('message', (m) => { botScore = m; render(); })
stream.on('message', (m) => { edits.push(m); render(); })
render(edits,speed,bots);
eps.on('message', (m) => { speed = m; render(); })
