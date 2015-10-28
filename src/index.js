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
    leaderboards={leaderboards} users={users}
    startTime={startTime}/>,
    document.getElementById('app'))
  window.requestAnimationFrame( render );
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
var users = {};
var leaderboards = {
  '*': new Leaderboard('*'),
};

var getLeaderboard = function( id ) {
  var leaderboard = leaderboards[id];
  if ( !leaderboard ) {
    leaderboard = new Leaderboard(id);
    leaderboards[id] = leaderboard;
  }
  return leaderboard;
};

bots.on('message', (m) => { botScore = m; })
stream.on('message', (m) => {
  var leaderboard = getLeaderboard( m.bot ? 'bot' : 'user' );
  var username = 'User:' + m.user;
  users[m.user] = users[m.user] || {
    title: username,
    bot: m.bot,
    wiki: m.wiki,
    edits: 0
  };
  users[m.user].edits +=1 ;
  leaderboard.addItem(users[m.user]);

  if ( m.namespace === 0 ) {
    var wiki = m.wiki;
    var item = titles[0][m.title] || {
      title: m.title,
      wiki: m.wiki,
      edits: 0,
    }
    item.edits += 1;

    // select the leaderboard for this wiki
    leaderboard = getLeaderboard(wiki);
    leaderboard.addItem(item);
    // also add to the global leaderboard
    leaderboards['*'].addItem(item);
    titles[0][m.title] = item;
  }
  edits.push(m);
  edits = edits.slice( -10 );
})

eps.on('message', (m) => { speed = m; })
render();
