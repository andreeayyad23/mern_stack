const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, { cors: true });

io.on("connection", (socket) => {
  console.log("Nice to meet you. (shake hand)");

  socket.on("Welcome", (data) => {
    socket.broadcast.emit("send_data_to_all", data);
  });

  
});

server.listen(8000, () => {
  console.log('The server is all fired up on port 8000');
});
