import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
  standalone: true
})
export class DisableAfterClick {

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    const button = this.el.nativeElement as HTMLButtonElement;

    // Disable the button and change text
    button.disabled = true;
    button.textContent = 'Processing...';

    // Re-enable after 3 seconds
    setTimeout(() => {
      button.disabled = false;
      button.textContent = 'Click Me';
    }, 3000);
  }
}