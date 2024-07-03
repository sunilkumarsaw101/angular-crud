import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/model';
// import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  studentList: Student[] = [];
  // filteredStudentList: Student[]= [];
  isCreateModalOpen: boolean = false;
  isEditModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;
  isViewModalOpen: boolean = false;
  currentStudentId: any;

  searchQuery:any='';
  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getStudents();
  }

  // onSearch(searchQuery:any){
  //   console.log(searchQuery);
  //   if(searchQuery==''){
  //     this.filteredStudentList= [...this.studentList]
  //   }
  //   this.filteredStudentList = this.studentList.filter((item) => {
  //     if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
  //       return item;
  //     }
  //   });

  //   console.log(this.filteredStudentList);
  // }

  getStudents() {
    this.studentList = this.studentService.getAllStudents();
    // this.filteredStudentList= [...this.studentList]
  }

  //........create methods...............
  openCreateModal() {
    this.isCreateModalOpen = true;
  }

  onClose() {
    this.isCreateModalOpen = false;
  }
  handleSubmit(event: any) {
    // console.log(event);
    if (event == true) {
      // console.log('truuuueee');
      this.getStudents();
      this.isCreateModalOpen = false;
    }
  }

  // ..............edit methods..............
  openEditModal(id: any) {
    this.currentStudentId = id;
    // console.log(this.currentStudentId);
    this.isEditModalOpen = true;
  }
  closeEditModal() {
    this.isEditModalOpen = false;
  }
  updateStudent(studentUpdatedData: any) {
    console.log('Updated Student:', studentUpdatedData);

    this.studentService.updateStudent(studentUpdatedData);
    this.getStudents();
    this.closeEditModal();
  }

  //..............delete methods................
  openDeleteModal(id: any) {
    //  console.log(id);
    this.currentStudentId = id;
    this.isDeleteModalOpen = true;
  }

  handleConfirm(result: any) {
    console.log(result);
    this.isDeleteModalOpen = false;
    if (result == 'true') {
      this.studentService.deleteStudent(this.currentStudentId);
    }
  }

  //...........view methods....................
  openViewModal(id: any) {
    this.currentStudentId = id;
    this.isViewModalOpen = true;
  }

  closeDeleteModal() {
    this.isViewModalOpen = false;
  }
}
