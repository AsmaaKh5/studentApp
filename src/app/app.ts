import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Courses } from './components/courses/courses'; 
import { StudentData } from './components/student/student'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Courses, StudentData ], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'studentApp';
}