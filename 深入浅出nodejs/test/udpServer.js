var dgram = require('dgram')
var server = dgram.createSocket('udp4')

server.on('message', function (msg, rinfo){
  console.log(msg.toString())
  console.log(rinfo.address+':'+rinfo.port)
})

server.on("listening", function(){
  var address = server.address()
  console.log(address.address+':'+address.port)
})

server.bind(41234);