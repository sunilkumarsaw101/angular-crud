import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { uniqueNameValidator } from 'src/app/validators/uniqueNameValidator';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss'],
})
export class CreateStudentComponent implements OnInit {
  @Output() close = new EventEmitter();
  @Output() submit = new EventEmitter();
  studentForm: FormGroup;
  studentList: any;
  isSubmitted: boolean = false;
  places: any[] = [
    { name: 'Delhi', value: 'delhi' },
    { name: 'Mumbai', value: 'mumbai' },
    { name: 'Kolkata', value: 'kolkata' },
    { name: 'Chennai', value: 'chennai' },
    { name: 'Dubai', value: 'dubai' },
  ];
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.studentList = this.studentService.getAllStudents();
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, this._uniqueIdValidator.bind(this)]],
      age: ['', Validators.required],
      email: ['', Validators.required],
      hobbies: this.fb.array([this.fb.control('')]),
      gender: ['', Validators.required],
      place: ['chennai', Validators.required],
    });

    console.log(this.studentForm);
  }

  get hobbies(): FormArray {
    return this.studentForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  removeHobby(index: number) {
    if (this.hobbies.length > 1) {
      this.hobbies.removeAt(index);
    }
  }

  private _uniqueIdValidator(control: FormControl) {
    // console.log(control.value);
    // console.log(this.studentForm.get('name'));
    if (
      this.studentList.find(
        (item: any) => item.name?.toLowerCase() === control.value?.toLowerCase()
      )
    ) {
      return { duplicate: true };
    } else {
      return null;
    }
  }

  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.studentForm.valid) {
      let formData = this.studentForm.value;
      formData.id = this.studentList.length + 1;

      console.log(formData);

      this.studentService.addStudent(formData);
      this.submit.emit(true);
    } else {
      console.log('form is invalid');
    }
  }

  onReset(){
    this.studentForm.reset();
  }
}
