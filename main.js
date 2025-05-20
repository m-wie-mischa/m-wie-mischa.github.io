import { io } from "https://cdn.socket.io/4.8.1/socket.io.esm.min.js";

let socket = io("https://web-friends.onrender.com/");
let canvas;
let ctx;

window.addEventListener('DOMContentLoaded', function() {

    canvas = document.getElementById("canvas")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx = canvas.getContext("2d")
});

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})

socket.on("update", (clients) => {
    console.log("Clients connected", clients)
})


window.addEventListener("keydown", (e) => {
    socket.emit("keyDown", e.key)
    console.log(e.key)
})

window.addEventListener("keyup", (e) => {
    socket.emit("keyUp", e.key)
    console.log(e.key)
})