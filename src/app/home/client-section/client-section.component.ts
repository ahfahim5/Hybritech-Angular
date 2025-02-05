import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

@Component({
  selector: 'app-client-section',
  templateUrl: './client-section.component.html',
  styleUrls: ['./client-section.component.css']
})
export class ClientSectionComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // Ensure Swiper is initialized in the client (browser) only
    if (typeof document !== 'undefined') {
      console.log('Initializing Swiper...');
      const swiper = new Swiper('.card-wrapper', {
        loop: true,
        spaceBetween: 3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      });
      console.log('Swiper initialized:', swiper);
    }
  }
}
