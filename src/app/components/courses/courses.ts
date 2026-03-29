import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { DisableAfterClickDirective } from '../../directives/disable-after-click';
import { CoursesService } from '../../services/courses';
import { CategoriesService } from '../../services/categories';
import { Course } from '../../models/course';
import { Category } from '../../models/category';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, DiscountPipe, DisableAfterClickDirective],
  templateUrl: './courses.html',
  styleUrl: './courses.css'
})
export class Courses implements OnInit {

  @Output() courseRegistered = new EventEmitter<Course>();

  selectedCategory: string = 'All';
  discountValue: number = 10;
  courses: Course[] = [];
  categories: Category[] = [];

  constructor(
    private coursesService: CoursesService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.courses    = this.coursesService.getAllCourses();
    this.categories = this.categoriesService.getAllCategories();
  }

  register(item: Course): void {
    if (item.seats > 0) {
      this.coursesService.registerCourse(item.id);
      this.courseRegistered.emit(item);
    }
  }
}