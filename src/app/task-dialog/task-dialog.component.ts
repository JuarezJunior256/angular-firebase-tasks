import { Component, OnInit, Inject } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

   dialogTitle = 'Nova Tarefa';
   task: Task = {title: ''};

  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
               private taskService: TaskService,
               private dialogRef: MatDialogRef<TaskDialogComponent>) { }

  ngOnInit(): void {
    if (this.data) {  // se data tiver dados
      this.dialogTitle = 'Nova Tarefa';
      this.task = this.data.task;
    }
  }

  onSave(): void {
    const operation: Promise<void> =
    (!this.data) // se não tiver dados
      ? this.taskService.create(this.task) // o metodo create é chamado
      : this.taskService.update(this.task); // se não o metodo update é chamado
   operation.then(() => {
        this.dialogRef.close();
       });

  }

}
