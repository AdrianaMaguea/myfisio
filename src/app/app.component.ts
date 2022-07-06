import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  menuOpen = false;
  isCalendlyOpen = false;
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ){}

  toggleMenu(isOpen?: boolean) {
    this.menuOpen = isOpen === undefined ? !this.menuOpen : isOpen;
    if (this.menuOpen) {
      this.renderer.addClass(this.document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(this.document.body, 'no-scroll');
    }
  }

  onCalendlyOpen() {
    this.isCalendlyOpen = true;
    this.renderer.addClass(this.document.body, 'no-scroll');
  }

  onCalendlyClose() {
    this.isCalendlyOpen = false;
    this.renderer.removeClass(this.document.body, 'no-scroll');
  }
}
