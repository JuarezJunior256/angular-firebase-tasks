import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { MatToolbarModule, MatListModule, MatLineModule, MatSlideToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatToolbarModule,
    MatLineModule,
    MatSlideToggleModule,
    MatListModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
