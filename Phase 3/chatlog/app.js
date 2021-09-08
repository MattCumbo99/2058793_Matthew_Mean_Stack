let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/tcsmean";
let app = express();

let chatSchema = mongoose.Schema({
    name:String,
    msg:String
});

app.get("/", (request,response)=> {
    response.sendFile(__dirname+"\\MainPage.html");
});

app.listen(9090, ()=>console.log("Server running on port 9090"));
