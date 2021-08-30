let express = require("express");
let app = express();
let ws = require("express-ws")(app);

app.get("/",(request,response)=> {
    console.log("Client connected");

    socket.on("Message", (data)=> {
        console.log(data);
    });

    socket.send("Hello client, you are connected to the socket server.");
});

app.listen(9090, ()=>console.log("Server running on port 9090"));
