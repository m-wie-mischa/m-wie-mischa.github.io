import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";

let socket = io("https://web-friends.onrender.com/");
let keys;

window.addEventListener('DOMContentLoaded', function() {
    keys = document.getElementById("keys");
});

window.addEventListener("keydown", (e) => {
    socket.emit("keyPressed", e.key)
    console.log(e.key)
})

socket.on("keyReceived", (id, key) => {
    keys.innerHTML = `User: ${id} sent Key: ${key}`
})