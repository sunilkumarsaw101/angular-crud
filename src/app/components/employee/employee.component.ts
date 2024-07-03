import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  constructor(private empService: EmployeeService, private dialog: MatDialog) {}
  employeeList: any[] = [];
  showAddEmployeeForm: boolean = false;
  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(){
    this.employeeList = this.empService.getAllEmployee();

  }

  addEmployee() {
    const dialogRef = this.dialog.open(CreateEmployeeComponent, {
      width: '400px',
      data: { employee: {} }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadEmployees();
      }
    });
  }

  updateEmployee(employee){
    const dialogRef= this.dialog.open(EditEmployeeComponent, {
       width: '400px',
       data: {employee}
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.loadEmployees();
      }
    })


  }
}
