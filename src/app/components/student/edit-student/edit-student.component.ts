import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  @Input() studentId: any;
  @Output() closeModal = new EventEmitter<void>();
  @Output() updateStudent = new EventEmitter<any>();

  studentEditForm: FormGroup;

  places:any[]=[
    {name: 'Delhi', value: "delhi"},
    {name:'Mumbai', value: 'mumbai'},
    {name: 'Kolkata', value: 'kolkata'},
    { name:'Chennai', value: 'chennai'},
    { name:'Dubai', value: 'dubai'}

  ]
  studentData: any;

  constructor(private formBuilder: FormBuilder, private studentService: StudentService) { }

  ngOnInit(): void {
    console.log(this.studentId);

    this.studentEditForm = this.formBuilder.group({
      id: [''],
      name:[''],
      age:[''],
      email: [''],
      gender: [''],
      place: ['']
    });

    
   this.getStudent();

  }

  getStudent(){
   this.studentData= this.studentService.getStuddent(this.studentId);
   console.log(this.studentData);
   this.studentEditForm.patchValue(this.studentData);
   console.log(this.studentData);


  }

  onSubmit() {
    if (this.studentEditForm.valid) {
      this.updateStudent.emit(this.studentEditForm.value);
      this.onClose();
    }
  }

  onClose() {
    this.closeModal.emit();
  }

}
