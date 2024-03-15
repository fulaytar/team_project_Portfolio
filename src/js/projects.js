// Core version + navigation, keyboard, mousewheel modules:
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

// Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

// Init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 500,

    // Configure Swiper to use modules
    modules: [Navigation, Keyboard, Mousewheel],

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    keyboard: {
        enabled: true,
    },

    mousewheel: {
        enabled: true,
        forceToAxis: true,
    }
});