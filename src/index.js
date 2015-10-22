import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'
import App from './ui/app.js'

import stream from './net/rc.js'
import editsPerSecondStream from './streams/edits-per-second.js'

function render(edits,speed) {
  ReactDOM.render(<App edits={edits} speed={speed}/>, document.body)
}

var edits = []
var speed = new Map();
var eps = editsPerSecondStream( stream )
stream.on('message', (m) => { edits.push(m); render(edits,speed); })
render(edits,speed);
eps.on('message', (m) => { speed = m; render(edits,speed); })
