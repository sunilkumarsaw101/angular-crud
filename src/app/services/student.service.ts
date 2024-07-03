import { Injectable } from '@angular/core';
import { studentData } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  addStudent(data: any) {
    console.log('data in service ', data.name);
    studentData.push(data);
  }

  getAllStudents() {
    return studentData;
  }

  getStuddent(id) {
    return this.getAllStudents().find((student) => student.id == id);
  }

  updateStudent(studentUpdatedData: any) {
    const index = studentData.findIndex(
      (item) => item.id == studentUpdatedData.id
    );
    studentData[index] = studentUpdatedData;
  }

  deleteStudent(id: any) {
    let index = studentData.findIndex((item) => item.id == id);
    console.log(index);
    if (index != -1) {
      studentData.splice(index, 1);
    }
    console.log(studentData);
  }
}
