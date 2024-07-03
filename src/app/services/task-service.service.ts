import { Injectable } from '@angular/core';
import { taskData } from '../data/data';
import { Task } from '../models/model';
// import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

   getTasks():Task[]{
    return taskData;
  }
}
