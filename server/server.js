const path=require('path');
const publicPath=path.join(__dirname,'../public');
const express=require('express');
const socketIO=require('socket.io');
const http=require('http');


console.log(__dirname,'../public');
console.log(publicPath);
const port=process.env.PORT || 3000;
var app=express();
var server=http.createServer(app);
var io=socketIO(server);

io.on('connection',(socket)=>{

console.log('new user connected');

socket.on('disconnect',()=>{

console.log('user is disconnected');
});
});
app.use(express.static(publicPath));
server.listen(port,()=>{

console.log(`server is listening to port number ${port}`);

});
