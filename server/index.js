var io = require('socket.io-client')
var http = require('http')
var sockjs = require('sockjs')

// Clients list
var clients = {}

// Broadcast to all clients
function broadcast(message){
  // iterate through each client in clients object
  for (var client in clients){
    // send the message to that client
    clients[client].write(JSON.stringify(message))
  }
}

// Socket server
var rc = sockjs.createServer({
  sockjs_url: 'http://cdn.jsdelivr.net/sockjs/1.0.1/sockjs.min.js'
})
rc.on('connection', function(conn) {
  // add this client to clients object
  clients[conn.id] = conn
  conn.on('close', function() { delete clients[conn.id] })
})

// HTTP server for static assets
var ecstatic = require('ecstatic')
var server = http.createServer(
  ecstatic({ root: './public' })
).listen(8080)
rc.installHandlers(server, {
  prefix: '/rc'
})
server.listen(9999, '0.0.0.0')

// Connect to rc stream and broadcast the messages
var socket = io.connect('stream.wikimedia.org/rc')
socket.on('connect', function() {
  socket.emit('subscribe', '*')
})
socket.on('change', function(data) {
  console.log(data.title)
  broadcast(data)
})
