'use strict';
import Swiper from 'swiper';
import 'swiper/css';
import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

const arrow = document.querySelectorAll('.arrow');
const container = document.querySelector('.accordion-wrapper');

const aboutMeAccordion = new Accordion(container, {
  showMultiple: true,
});

container.addEventListener('click', event => {
  var button = event.target.closest('button');
  if (button && button.tagName === 'BUTTON') {
    if (button.id === 'ac-trigger-0') {
      arrow[0].classList.toggle('rotate');
    } else if (button.id === 'ac-trigger-1') {
      arrow[1].classList.toggle('rotate');
    } else if (button.id === 'ac-trigger-2') {
      arrow[2].classList.toggle('rotate');
    }
  }
});

const nextArrow = document.querySelector('.arrow-next');

const swiper = new Swiper('.swiper2', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 0,
});

nextArrow.addEventListener('click', () => {
  swiper.slideNext();
});

if (window.innerWidth > 767 && window.innerWidth < 1440) {
  swiper.params.slidesPerView = 3;
  swiper.update();
}

if (window.innerWidth >= 1440) {
  swiper.params.slidesPerView = 6;
  swiper.update();
}
