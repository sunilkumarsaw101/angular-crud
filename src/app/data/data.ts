import { Employee, Student, Task } from "../models/model";

export let studentData: Student[] = [
  {
    id: 1,
    name: 'John',
    age: 26,
    email: 'john@gmail.com',
    hobbies: ['travelling', 'writting'],
    gender: 'male',
    place: 'dubai',
  },
  {
    id: 2,
    name: 'Raj',
    age: 20,
    email: 'john@gmail.com',
    hobbies: ['singing', 'dancing'],
    gender: 'male',
    place: 'mumbai',
  },
  {
    id: 3,
    name: 'Kylie',
    age: 20,
    email: 'kylie@gmail.com',
    hobbies: ['swimming', 'playing cricket'],
    gender: 'female',
    place: 'delhi',
  },
];

export const taskData: Task[] = [
  {
    name: 'Ecommerce Website', progress: 70, dueDate: '2018-01-20'},
  { name: 'Android App', progress: 30, dueDate: '2018-09-11' },
  { name: 'Logo Design', progress: 50, dueDate: '2018-04-12' },
  { name: 'Java Project', progress: 90, dueDate: '2018-01-20' },
];

export const employeeData: Employee[]= [
  {id: 1, name: 'Joe', email: 'joe@gmail.com', age: 26, gender: 'Female', phone: '345433445', address: 'New York, USA'}
]


