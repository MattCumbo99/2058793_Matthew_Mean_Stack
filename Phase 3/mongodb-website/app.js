let express = require("express");

let app = express();

let http = require("http").Server(app);
let io = require("socket.io")(http);

app.get("/", (request,response)=> {
    response.sendFile(__dirname+"\\Index.html");
});

app.get("/AddCourse", (request,response)=> {
    response.sendFile(__dirname+"\\AddCourse.html");
});

app.get("/UpdateCourse", (request,response)=> {
    response.sendFile(__dirname+"\\UpdateCourse.html");
});

app.get("/DeleteCourse", (request,response)=> {
    response.sendFile(__dirname+"\\DeleteCourse.html");
});

app.get("/FetchCourse", (request,response)=> {
    response.sendFile(__dirname+"\\FetchCourse.html");
});

io.on("connection", (socket)=> {

});

http.listen(9090, ()=>console.log("Server running on port 9090"));
