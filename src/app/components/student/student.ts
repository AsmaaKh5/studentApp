import { Component } from '@angular/core';

// تعريف الـ Interface (يبقى كما هو Student)
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
  templateUrl: './student.html', // الإشارة للملف بدون كلمة component
  styleUrl: './student.css'      
})
export class StudentData { // تغيير اسم الكلاس هنا لـ StudentData لفك التعارض
  students: Student[] = [
    { id: 1, name: 'Ahmed Mohammed', age: 20, photoUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Sara Ahmed', age: 22, photoUrl: 'https://via.placeholder.com/150' }
  ];
}