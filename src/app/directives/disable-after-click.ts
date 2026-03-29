import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
  standalone: true
})
export class DisableAfterClickDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    this.el.nativeElement.disabled = true;
    this.el.nativeElement.textContent = 'Processing...';

    setTimeout(() => {
      this.el.nativeElement.disabled = false;
      this.el.nativeElement.textContent = 'Register';
    }, 3000);
  }
}