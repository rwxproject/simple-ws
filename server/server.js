var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || '3000';

io.on('connection', function(socket){
    console.log(`connected id: ${socket.id}`);
    socket.on('disconnect', function(){
      console.log(`disconnected id: ${socket.id}`);
    });
    socket.on('message', function(data){
        console.log(`message received: id: ${socket.id} >>> ${data}`);
      });
});

http.listen(port, function(){
  console.log(`listening on *:${port}`);
});