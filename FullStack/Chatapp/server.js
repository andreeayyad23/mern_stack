const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (message) => {
        console.log('Message received:', message);
        io.emit('message', message); 
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
