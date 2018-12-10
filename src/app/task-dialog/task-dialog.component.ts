import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  task: Task = {title: ''};

  constructor( private taskService: TaskService,
               private dialogRef: MatDialogRef<TaskDialogComponent>) { }

  ngOnInit() {
  }

  onSave(): void {
    // tslint:disable-next-line:no-unused-expression
    this.taskService.create(this.task)
       .then(() => {
          console.log('Tarefa Criada');
          this.dialogRef.close();
       });

  }

}
