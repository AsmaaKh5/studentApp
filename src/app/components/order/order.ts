import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Courses } from '../courses/courses';
import { Course } from '../../models/course';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, Courses, CurrencyPipe],
  templateUrl: './order.html',
  styleUrl: './order.css'
})
export class Order implements OnChanges {

  @Input()  selectedCourse: Course | null = null;
  @Output() orderPrice = new EventEmitter<number>();

  registeredCourses: Course[] = [];
  totalOrderPrice: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCourse'] && this.selectedCourse) {
      this.addCourse(this.selectedCourse);
    }
  }

  onCourseAdded(course: Course): void {
    this.addCourse(course);
  }

  private addCourse(course: Course): void {
    this.registeredCourses.push({ ...course });
    this.calculateTotal();
  }

  private calculateTotal(): void {
    this.totalOrderPrice = this.registeredCourses.reduce(
      (sum, course) => sum + course.price, 0
    );
    this.orderPrice.emit(this.totalOrderPrice);
  }

  removeCourse(index: number): void {
    this.registeredCourses.splice(index, 1);
    this.calculateTotal();
  }
}