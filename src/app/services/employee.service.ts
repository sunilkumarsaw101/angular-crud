import { Injectable } from '@angular/core';
import { employeeData } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getAllEmployee(){
    return employeeData;
  }

  addEmployee(employeeFormData:any){
     employeeData.push(employeeFormData);
  }

  updateEmployee(employee:any){
    console.log(employee);
    
  }
}
