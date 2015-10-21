import React from 'react'
import ReactDOM from 'react-dom'

import './index.less'
import App from './ui/app.js'

import stream from './net/rc.js'

function render (edits) {
  ReactDOM.render(<App edits={edits}/>, document.body)
}

var edits = []
stream.on('message', (m) => { console.log(m); edits.push(m); render(edits); })
render(edits)
