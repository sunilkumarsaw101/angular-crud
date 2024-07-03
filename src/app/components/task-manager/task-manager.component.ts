import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Task } from 'src/app/models/model';
// import { Task } from 'src/app/models/task';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  taskList:Task[]=[];
  constructor(private taskService: TaskServiceService) { }

  @ContentChild('para1') para1Ele: ElementRef;

  ngAfterContentInit(){
  console.log(this.para1Ele);
  }

  // @ViewChild('para1') para1Ele: ElementRef;

  // ngAfterViewInit(){
  // console.log(this.para1Ele);
  // }


  ngOnInit(): void {
   this.taskList= this.taskService.getTasks();
  }

}
