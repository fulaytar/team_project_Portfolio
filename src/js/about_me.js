import Swiper from 'swiper';
import 'swiper/css';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const arrow = document.querySelectorAll('.arrow');
const aboutMeAcc = document.querySelector('.accordion-container');

const aboutMeAccordion = new Accordion(aboutMeAcc, {
  showMultiple: true,
});

aboutMeAcc.addEventListener('click', event => {
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

const aboutMeswiper = new Swiper('.swiper4', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    nextEl: '.arrow',
  },
});

nextArrow.addEventListener('click', () => {
  aboutMeswiper.slideNext();
});

if (window.innerWidth > 767 && window.innerWidth < 1440) {
  aboutMeswiper.params.slidesPerView = 3;
  aboutMeswiper.update();
}

if (window.innerWidth > 1440) {
  aboutMeswiper.params.slidesPerView = 6;
  aboutMeswiper.update();
}
