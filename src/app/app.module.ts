import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateStudentComponent } from './components/student/create-student/create-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditStudentComponent } from './components/student/edit-student/edit-student.component';
import { DeleteStudentComponent } from './components/student/delete-student/delete-student.component';
import { ViewStudentComponent } from './components/student/view-student/view-student.component';
import { StopWatchComponent } from './components/stop-watch/stop-watch.component';
import { StudentComponent } from './components/student/student.component';
import { CustomTableFilterPipe } from './pipes/custom-table-filter.pipe';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TitleComponent } from './components/task-manager/title/title.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './components/employee/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './components/employee/edit-employee/edit-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateStudentComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    ViewStudentComponent,
    StopWatchComponent,
    StudentComponent,
    CustomTableFilterPipe,
    TaskManagerComponent,
    TitleComponent,
    EmployeeComponent,
    ViewEmployeeComponent,
    CreateEmployeeComponent,
    DeleteEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
