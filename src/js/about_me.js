//Izitoast

<<<<<<< HEAD
//import iziToast from "izitoast";
//import "izitoast/dist/css/iziToast.min.css";

//Бібліотека Axios

//import axios from 'axios';
=======
const arrow = document.querySelectorAll('.arrow');
const ac = document.querySelector('.accordion-container');
const container = document.querySelector('.accordion-container');

const accordion = new Accordion(container, {
  showMultiple: true,
});

ac.addEventListener('click', event => {
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
>>>>>>> parent of bd124e1 (refactoring)

//Swiper.js

<<<<<<< HEAD
//import Swiper from 'swiper';
// import Swiper styles
//import 'swiper/css';
//const swiper = new Swiper(...);

//Accordion

//import Accordion from 'accordion-js';
//import 'accordion-js/dist/accordion.min.css';

/* Видаляй зайве, якщо не використавуєш */
=======
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    nextEl: '.arrow',
  },
});

nextArrow.addEventListener('click', () => {
  swiper.slideNext();
});

if (window.innerWidth > 767 && window.innerWidth < 1440) {
  swiper.params.slidesPerView = 3;
  swiper.update();
}

if (window.innerWidth > 1440) {
  swiper.params.slidesPerView = 6;
  swiper.update();
}
>>>>>>> parent of bd124e1 (refactoring)
