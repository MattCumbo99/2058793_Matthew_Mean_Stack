let fs = require("fs");
let http = require("http");
let url = require("url");

let tasks = [];

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
        <input type="text" name="add_empid"><br>
        <label>Task ID:</label>
        <input type="text" name="add_taskid"><br>
        <label>Task:</label>
        <input type="text" name="add_task"><br>
        <label>Deadline:</label>
        <input type="date" name="add_date"><br>
        <input type="submit" value="Add Task">
    </form>
    <hr>
    <h2>Delete Task</h2>
    <form action="delete">
        <label>Task ID:</label>
        <input type="text" name="del_taskid">
        <input type="submit" value="Delete Task">
    </form>
    <hr>
    <h2>Task List</h2>
</body>
</html>`;

function removeTask(id) {
    for (let i=0; i < tasks.length; i++) {
        if (tasks[i].taskId == id) {
            tasks.splice(i, 1);
            fs.writeFileSync("tasks.json", JSON.stringify(tasks));
            console.log("Removed task of id " + id);
            return;
        }
    }
    console.log("Unable to remove task with id of " + id + " (task doesn't exist)");
}

let server = http.createServer((request,response)=> {
    let urlInfo = url.parse(request.url, true);

    if (urlInfo.path != "/favicon.ico") {
        tasks = JSON.parse(fs.readFileSync("tasks.json").toString());
        response.write(taskMainPage);

        // Adding a task
        if (urlInfo.pathname == "/add") {
            let taskInfo = urlInfo.query;
            let task = {employeeId:taskInfo.add_empid, taskId:taskInfo.add_taskid, taskName:taskInfo.add_task, deadline:taskInfo.add_date};
            tasks.push(task);
            console.log("Added: ");
            console.log(task);
            fs.writeFileSync("tasks.json", JSON.stringify(tasks));
        }
        // Deleting a task
        else if (urlInfo.pathname == "/delete") {
            let delInfo = urlInfo.query;
            removeTask(delInfo.del_taskid);
        }

        if (tasks.length > 0) {
            let tableStart = "<table border=1><tr><th>Employee ID</th><th>Task ID</th><th>Task Name</th><th>Deadline</th></tr>";
            let tableData = "";
            for (let task of tasks) {
                tableData += "<tr><td>"+task.employeeId+"</td><td>"+task.taskId+"</td><td>"+task.taskName+"</td><td>"+task.deadline+"</td></tr>";
            }
            response.write(tableStart+tableData+"</table>");
        }
    }

    response.end();
});

server.listen(9090,()=>console.log("Server running on port 9090"));
