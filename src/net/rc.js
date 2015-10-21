import SockJS from 'sockjs-client'
import EventEmitter from 'event-emitter'

let emitter = new EventEmitter()
export default emitter

var sock = new SockJS('/rc')
 sock.onopen = function() {
  emitter.emit('open')
 }
 sock.onmessage = function(e) {
   emitter.emit('message', JSON.parse(e.data))
 }
 sock.onclose = function() {
   emitter.emit('close')
 }

