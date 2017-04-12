
var net = require('net')

var server = net.createServer(function(socket){
  // 处理从客户端发送过来的消息
  socket.on('data', function(data){
    console.log(data.toString());
  });
  // 链接出现错误
  socket.on('end', function(){
    console.log('链接断开');
  });
  socket.write('欢迎光临实例:\n')
})
// 监听端口
server.listen(8000, function(){
  console.log('success')
})

















