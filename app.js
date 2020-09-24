const server = require('http').createServer();
const options = { /* ... */ };
const io = require('socket.io')(server, options);

io.on('connection', socket => {
    console.log(socket.id);
});

const chat = io.of('/chat');
chat.on("connection", socket => {
    socket.emit("r-message", "Ban da vao phong chat")
    console.log(socket.id, "Da vao phong chat");
});

server.listen(3000, () => {
    console.log("socket 3000...")
});