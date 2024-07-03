import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  employeeList: any[];
  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    public dialogRef: MatDialogRef<CreateEmployeeComponent>
  ) // @Inject(MAT_DIALOG_DATA) public data: { employee: Employee }
  {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.employeeList = this.empService.getAllEmployee();
  }

  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    if (this.employeeForm.valid) {
      let formData = this.employeeForm.value;
      formData.id = this.employeeList.length;
      this.empService.addEmployee(formData);
      this.dialogRef.close(true);
    }
  }
}
