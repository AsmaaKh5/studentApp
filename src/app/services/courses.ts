import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private courses: Course[] = [
    { id: 1, title: 'Angular Basics',  instructor: 'Mona',  price: 500, seats: 5,  image: 'https://picsum.photos/400/200?random=1', catId: 1, category: 'Programming' },
    { id: 2, title: 'UI Design',       instructor: 'Ahmed', price: 300, seats: 2,  image: 'https://picsum.photos/400/200?random=2', catId: 2, category: 'Design'       },
    { id: 3, title: 'Social Media',    instructor: 'Sara',  price: 400, seats: 1,  image: 'https://picsum.photos/400/200?random=3', catId: 3, category: 'Marketing'    },
    { id: 4, title: 'Business Dev',    instructor: 'John',  price: 600, seats: 10, image: 'https://picsum.photos/400/200?random=4', catId: 4, category: 'Business'     },
    { id: 5, title: 'Advanced TS',     instructor: 'Mona',  price: 550, seats: 0,  image: 'https://picsum.photos/400/200?random=5', catId: 1, category: 'Programming'  }
  ];

 
  getCoursesByCatID(catId: number): Course[] {
    return this.courses.filter(course => course.catId === catId);
  }

   
  getCourseByID(courseId: number): Course | undefined {
    return this.courses.find(course => course.id === courseId);
  }

   
  getAllCourses(): Course[] {
    return this.courses;
  }

 
  registerCourse(courseId: number): void {
    const course = this.getCourseByID(courseId);
    if (course && course.seats > 0) {
      course.seats--;
    }
  }
}