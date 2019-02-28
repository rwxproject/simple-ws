const io = require('socket.io-client');

var port = process.env.PORT || '3000';
var server = process.env.SERVER || 'localhost';
let msg = 0;

const socket = io(`http://${server}:${port}`);

socket.on('connect', function(){
    console.log(`connected - id:${socket.id}`);
});
socket.on('event', function(data){
    console.log('event');
});

setInterval(() => {
    socket.emit('message', `${socket.id} >>> ${msg}`);
    console.log(`sending message: id: ${socket.id} >>> ${msg}`);
    msg ++;
},1000)

socket.on('disconnect', function(){
    console.log(`disconnected - id:${socket.id}`);
});