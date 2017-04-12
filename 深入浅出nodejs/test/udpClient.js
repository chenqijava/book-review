var dgram = require('dgram')

var client = dgram.createSocket("udp4")

client.send(new Buffer('hello world'), 41234, '127.0.0.1', function (err) {
  client.close()
})


















