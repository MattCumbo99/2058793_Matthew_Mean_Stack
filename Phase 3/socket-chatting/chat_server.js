let express = require("express");

let app = express();

// load the http module and connect to express module with Server property
let http = require("http").Server(app);

// load the socket.io module and connect http module 
// with IIFE features 
let io = require('socket.io')(http);

app.get("/",(request,response)=> {
    response.sendFile(__dirname+"\\MainScreen.html");
});

io.on("connection",(socket)=> {
    //console.log("Client connected");

    socket.on("obj",(msg)=> {
        console.log(msg);
    });

    socket.emit("obj1", "Hello, client connected to server...");
});

http.listen(9090, ()=>console.log("Server running on port 9090"));
