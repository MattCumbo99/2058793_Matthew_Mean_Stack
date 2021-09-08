let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/tcsmean";
let app = express();

app.use(bodyParser.urlencoded({extended:true}));

let chatSchema = mongoose.Schema({
    _id:Number,
    name:String,
    message:String
});

app.get("/", (request,response)=> {
    response.sendFile(__dirname+"\\MainPage.html");
});

// Send message function
app.get("/sendMessage", (request,response)=> {
    let uname = request.query.username;
    let msgInput = request.query.message;
    let lastUserId = 1;

    // Connect the database
    mongoose.pluralize(null);
    mongoose.connect(url).then(res=>{}).catch(err=>console.log(err));

    let db = mongoose.connection;

    // Start our database operation
    db.once("open", ()=> {
        let messageModel = mongoose.model("MessageLog", chatSchema);

        // First, get the id of the last message sent
        messageModel.find({}, (err,doc)=> {
            if (!err) {
                doc.forEach(rec=> {
                    lastUserId = rec._id+1;
                });
            }
            let msg = new messageModel({_id:lastUserId, name:uname, message:msgInput});

            // Log the message
            messageModel.insertMany([msg], (err,result)=> {
                if (!err) {
                    const date = new Date().toLocaleTimeString();
                    console.log("("+date+") "+msg.name+": "+msg.message);
                }
                else {
                    console.log(err);
                }
                mongoose.disconnect();
            });
        });

        // let msg = new messageModel({_id:lastUserId, name:uname, message:msgInput});

        // // Log the message
        // messageModel.insertMany([msg], (err,result)=> {
        //     if (!err) {
        //         const date = new Date().toLocaleTimeString();
        //         console.log("("+date+") "+msg.name+": "+msg.message);
        //     }
        //     else {
        //         console.log(err);
        //         console.log("[ERR] Could not send message of id "+lastUserId);
        //     }
        //     mongoose.disconnect();
        // });

    });
    response.redirect("/");
    response.end();
});

app.listen(9090, ()=>console.log("Server running on port 9090"));
