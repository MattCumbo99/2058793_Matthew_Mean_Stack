let express = require("express");
let bodyParser = require("body-parser");

let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/tcsmean";

let app = express();

let courseSchema = mongoose.Schema({
    _id:Number,
    name:String,
    desc:String,
    amount:Number
});

function turnOnDB() {
    mongoose.pluralize(null);
    mongoose.connect(url).then(res=>console.log("Connected")).catch(err=>console.log(err));
}

app.use(bodyParser.urlencoded({extended:true}));

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

//===================================================================================
app.get("/insertCourse", (request,response)=> {
    let cid = request.query.course_id;
    let cname = request.query.course_name;
    let cdesc = request.query.course_description;
    let camount = request.query.course_amount;
    
    turnOnDB();

    let db = mongoose.connection;

    db.once("open", ()=> {
        let courseModel = mongoose.model("Courses", courseSchema);
        let course = new courseModel({_id:cid, name:cname, desc:cdesc, amount:camount});

        // Insert the course to the database
        courseModel.insertMany([course], (err,result)=> {
            if (!err) {
                console.log("Added course with id " + course._id);
            }
            else {
                console.log(err);
            }
            mongoose.disconnect();
        });
    });
    response.redirect("/AddCourse");
    response.end();
});

app.get("/changeCourse", (request,response)=> {
    let cid = request.query.course_id;
    let camount = request.query.course_amount;

    turnOnDB();

    let db = mongoose.connection;

    db.once("open", ()=> {

        let courseModel = mongoose.model("Courses", courseSchema);

        courseModel.updateOne({_id:cid},{$set:{amount:camount}}, (err,result)=> {
            if (!err && (result.modifiedCount>0 || result.matchedCount>0)) {
                console.log("Course updated!");
            }
            else {
                console.log(err);
            }
            mongoose.disconnect();
        });

        response.redirect("/UpdateCourse");
        response.end();
    });
});

app.get("/removeCourse", (request,response)=> {
    let cid = request.query.course_id;

    turnOnDB();

    let db = mongoose.connection;

    db.once("open", ()=> {
        let courseModel = mongoose.model("Courses", courseSchema);

        // Delete the course
        courseModel.deleteMany({_id:cid}, (err,result)=> {
            if (!err && result.deletedCount>0) {
                console.log("Course deleted successfully.");
            }
            else if (!err) {
                console.log("Cannot find course of id " + cid);
            }
            else {
                console.log(err);
            }
            mongoose.disconnect();
        });
    })
    response.redirect("/DeleteCourse");
    response.end();
});

app.get("/getCourse", (request,response)=> {
    
});

app.listen(9090, ()=>console.log("Server running on port 9090"));
