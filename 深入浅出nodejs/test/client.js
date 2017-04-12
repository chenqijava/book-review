var net = require('net')

/*var client = net.connect({port: 8000}, function (){ // 'connect' listener
  console.log('连上服务器')
  console.log(socket)
  client.write('hello world')
});*/
// 等价于
var client = net.connect({host:'127.0.0.1', port: 8000})
client.on('connect', function(){
  client.write('hello world')
});

client.on('data', function(data){
  console.log(data.toString())
})

client.on('end', function(){
  console.log('client disconnected')
})