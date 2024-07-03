import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss']
})
export class DeleteStudentComponent implements OnInit {
@Input() message: any='Are you sure?'
@Output() confirmEvent= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onCancel(){
   this.confirmEvent.emit('false');
  }
  onConfirm(){
   this.confirmEvent.emit('true');
  }
}
