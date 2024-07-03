export class Student{
    id: number;
    name: string;
    age: number;
    email: string;
    hobbies:string[];
    gender: string;
    place: string;

}

export interface Task{
    name: string,
    progress: number,
    dueDate: string
}

export interface Employee{
    id: number,
    name: string,
    email: string,
    age: number,
    gender: string,
    phone: string,
    address: string
}