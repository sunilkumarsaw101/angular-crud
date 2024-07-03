import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentComponent } from './components/student/student.component';
import { StopWatchComponent } from './components/stop-watch/stop-watch.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'student', component:StudentComponent
  },
  {
    path: 'stopwatch', component: StopWatchComponent
  },
  {
    path: 'taskManager', component: TaskManagerComponent
  },
  {
    path: 'employee', component: EmployeeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
