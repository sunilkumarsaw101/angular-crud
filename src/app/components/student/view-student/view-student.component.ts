import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss'],
})
export class ViewStudentComponent implements OnInit {
  @Input() studentId: any;
  @Output() closeModal= new EventEmitter();
  studentDetails: any = [];
  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.studentDetails = this.studentService.getStuddent(this.studentId);
    this.studentDetails = Object.entries(this.studentDetails).map(
      ([key, value]) => {
        return {
          key,
          value,
        };
      }
    );
    console.log(this.studentDetails);
  }

  close(){
  this.closeModal.emit(true);
  }


}
