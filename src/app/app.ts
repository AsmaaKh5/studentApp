import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentData } from './components/student/student';

@Component({
  selector: 'app-root',
 
  imports: [RouterOutlet, StudentData], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studentApp');
}