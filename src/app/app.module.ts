import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { MatToolbarModule, MatListModule, MatLineModule,
         MatSlideToggleModule, MatButtonModule, MatIconModule,
         MatDialogModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatProgressSpinnerModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './task.service';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TaskItemComponent,
    TaskListComponent,
    TaskDialogComponent
  ],
  entryComponents: [
    TaskDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFirestoreModule.enablePersistence(), // enablePersistence para trabalhar com dados offline
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatLineModule,
    MatSlideToggleModule,
    MatListModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
