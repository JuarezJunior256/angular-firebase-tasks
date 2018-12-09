import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    {
      uid: '',
      title: 'Curso Anguar',
      done: false
    },
    {
      uid: '',
      title: 'Curso JS',
      done: false
    }
  ];

  selectedTask: Task;

  constructor() { }

  ngOnInit() {
  }
    onPerformTask(task: Task): void {
     console.log(task);
   }

}
