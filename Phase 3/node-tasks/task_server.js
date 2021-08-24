let fs = require("fs");
let http = require("http");
let url = require("url");

let taskMainPage = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Tracker in Node JS</title>
</head>
<body>
    <h2>Add Task</h2>
    <form action="add">
        <label>Employee ID:</label>
        <input type="text" id="add_empid"><br>
        <label>Task ID:</label>
        <input type="text" id="add_taskid"><br>
        <label>Task:</label>
        <input type="text" id="add_task"><br>
        <label>Deadline:</label>
        <input type="date" id="add_date"><br>
        <input type="submit" value="Add Task">
    </form>
    <hr>
    <h2>Delete Task</h2>
    <form action="delete">
        <label>Task ID:</label>
        <input type="text" id="del_taskid">
        <input type="sumbit" value="Delete Task">
    </form>
    <hr>
    <h2>Task List</h2>
    <div id="tasktable">
        
    </div>
</body>
</html>`;

let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url, true);

    if (urlInfo.path != "/favicon.ico") {
        response.write(taskMainPage);
    }
});

server.listen(9090,()=>console.log("Server running on port 9090"));
