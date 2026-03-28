import { Component } from '@angular/core';

 export interface Student {
  id: number;
  name: string;
  age: number;
  photoUrl: string;
}

@Component({
  selector: 'app-student',
  standalone: true, 
  imports: [],
  templateUrl: './student.html',  
  styleUrl: './student.css'      
})
export class StudentData {  
  students: Student[] = [
    { id: 1, name: 'Ahmed Mohammed', age: 20, photoUrl: 'https://picsum.photos/200'},
    { id: 2, name: 'Sara Ahmed', age: 22, photoUrl: 'https://picsum.photos/200'}
  ];
}