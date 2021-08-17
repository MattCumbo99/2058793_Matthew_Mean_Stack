import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface TaskElement {
  id:string;
  name:string;
  task:string;
  deadline:string;
}

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css']
})
export class TaskTrackerComponent implements OnInit {
  dataSource:TaskElement[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  addTask(taskRef:NgForm): void {
    let theTask = taskRef.value;
    let nTask = {id:theTask.id, name:theTask.name, task:theTask.task, deadline:theTask.deadline};

    this.dataSource.push(nTask);
    taskRef.reset();
    this.displayTable();
  }

  displayTable(): void {
    let dataTable = document.getElementById("tasks") as HTMLElement;
    let display:string = "";
    let exists:boolean = false;

    for (let task of this.dataSource) {
      if (!exists) {
        display += "<br><table border='1' style='margin: 0 auto;'><tr><th>ID</th><th>Name</th><th>Task</th><th>Deadline</th></tr>";
        exists = true;
      }
      display += "<tr><td>" + task.id + "</td><td>" + task.name + "</td><td>" + task.task + "</td><td>" + task.deadline + "</td></tr>";
    }
    if (!exists) {
      dataTable.innerHTML = "<h4>No tasks yet</h4>";
    }
    else {
      dataTable.innerHTML = display + "</table>";
    }
  }

}
