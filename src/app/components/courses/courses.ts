import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { DisableAfterClickDirective } from '../../directives/disable-after-click';

export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  seats: number;
  image: string;
  category: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses {
  selectedCategory: string = 'All';
  discountValue: number = 10;

  courses: Course[] = [
    { id: 1, title: 'Angular Basics', instructor: 'Mona', price: 500, seats: 5, image: 'https://picsum.photos/400/200?random=1', category: 'Programming' },
    { id: 2, title: 'UI Design', instructor: 'Ahmed', price: 300, seats: 2, image: 'https://picsum.photos/400/200?random=2', category: 'Design' },
    { id: 3, title: 'Social Media', instructor: 'Sara', price: 400, seats: 1, image: 'https://picsum.photos/400/200?random=3', category: 'Marketing' },
    { id: 4, title: 'Business Dev', instructor: 'John', price: 600, seats: 10, image: 'https://picsum.photos/400/200?random=4', category: 'Business' },
    { id: 5, title: 'Advanced TS', instructor: 'Mona', price: 550, seats: 0, image: 'https://picsum.photos/400/200?random=5', category: 'Programming' }
  ];

  register(item: Course) {
    if (item.seats > 0) {
      item.seats--;
    }
  }
}