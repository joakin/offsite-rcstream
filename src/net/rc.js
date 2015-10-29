import SockJS from 'sockjs-client'
import EventEmitter from 'event-emitter'

let emitter = new EventEmitter()
export default emitter

var sock = new SockJS('/rc')
sock.onopen = function () {
  emitter.emit('open')
}
sock.onmessage = function (e) {
  var data = JSON.parse(e.data)
  if ([ 'test2wiki' ].indexOf(data.wiki) === -1) {
    emitter.emit('message', data)
  }
}
sock.onclose = function () {
  emitter.emit('close')
}
