import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  submitted = false;
  contactForm = { name: '', email: '', message: '' };

  onSubmit(): void {
    console.log('Form submitted:', this.contactForm);
    this.submitted = true;
    this.contactForm = { name: '', email: '', message: '' };
    setTimeout(() => this.submitted = false, 4000);
  }
}