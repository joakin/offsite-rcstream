var path = require('path')
var io = require('socket.io-client')
var http = require('http')
var ecstatic = require('ecstatic')
var WebSocketServer = require('ws').Server

// HTTP server for static assets
var server = http.createServer(
  ecstatic({ root: path.join(__dirname, '/public') })
).listen(8080)

// Socket server
var wss = new WebSocketServer({ server: server })

wss.broadcast = function broadcast (data) {
  wss.clients.forEach(function each (client) {
    client.send(data)
  })
}

wss.on('connection', function connection (ws) {
  ws.on('message', function incoming (message) {
    console.log('received: %s', message)
  })

  ws.send('something')
})

// Connect to rc stream and broadcast the messages
var socket = io.connect('stream.wikimedia.org/rc')
socket.on('connect', function () {
  socket.emit('subscribe', '*')
})
socket.on('change', function (data) {
  wss.broadcast(JSON.stringify(data))
})
