import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/model';
import { EmployeeService } from 'src/app/services/employee.service';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss'],
})
export class EditEmployeeComponent implements OnInit {
  employeeEditForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    public dialogRef: MatDialogRef<CreateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { employee: Employee }
  ) {}

  ngOnInit(): void {
    console.log(this.data);
    this.employeeEditForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['male', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.employeeEditForm.patchValue(this.data.employee)
  }

  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    if (this.employeeEditForm.valid) {
      let formData = this.employeeEditForm.value;
      formData.id = this.data.employee.id;
      this.empService.updateEmployee(formData);
      this.dialogRef.close(true);
    }
  }
}
