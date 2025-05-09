import { Server } from "socket.io";

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
    console.log(socket.id)
});

io.on("keyPressed", (socket, key) => {})

io.listen(3000);