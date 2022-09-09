import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menuOpen = false;
  isCalendlyOpen = false;
  item$: Observable<any[]>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) { }

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
