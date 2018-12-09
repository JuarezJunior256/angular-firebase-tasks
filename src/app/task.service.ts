import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Task } from '../app/models/task.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // instancia do banco firebase
  tasks: AngularFirestoreCollection<Task>;

  constructor(private db: AngularFirestore) { this.setTasks(); }

  private setTasks(): void {
    this.tasks = this.db.collection<Task>('/tasks');
  }

  // metodo para inserir no banco
  create(task: Task): Promise<void> {
    // criando um uid
    const uid = this.db.createId();

    // cria uma nova referencia no banco Ex: tasks/{hhuaedodjioajed, title, done}
    return this.tasks.doc<Task>(uid)
    .set({ uid, title: task.title, done: false });
  }

  // metodo para atualizar no banco
  update(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid).update(task);
  }

  // metodo para deletar no banco
  delete(task: Task): Promise<void> {
    return this.tasks.doc<Task>(task.uid).delete();
  }

  // buscando dados no banco pelo uid
  get(uid: string): Observable<Task> {
    return this.tasks.doc<Task>(uid).valueChanges();
  }

}
