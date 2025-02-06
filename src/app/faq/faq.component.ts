import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {
  constructor() {}

  collapseButton(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const icon = button.querySelector("i");
    if (icon) {
      if (icon.classList.contains("fa-plus")) {
        icon.className = "fa-solid fa-xmark text-white";
      } else {
        icon.className = "fa-solid fa-plus text-white";
      }
    }
  }
}

