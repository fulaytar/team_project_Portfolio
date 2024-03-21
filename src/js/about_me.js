import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css';

const container = document.querySelector('.accordion-container-about');
const accordion = new Accordion(container, {
  showMultiple: true,
  openOnInit: [0],
});


const AboutMeSwiper = new Swiper('.swiper2', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 0,
  modules: [Navigation, Keyboard, Mousewheel],

  navigation: {
    nextEl: '.sbn',
  },

  breakpoints: {
    767: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },

  keyboard: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
    forceToAxis: true,
  },
});
