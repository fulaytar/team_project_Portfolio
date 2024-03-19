// Core version + navigation, keyboard, mousewheel modules:
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel, Parallax } from 'swiper/modules';

// Init Swiper:
const swiper = new Swiper('.swiper1', {
   // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 500,
    spaceBetween: 20,

    // Configure Swiper to use modules
    modules: [Navigation, Keyboard, Mousewheel, Parallax],

    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },

    keyboard: {
        enabled: true,
    },

    mousewheel: {
        enabled: true,
        forceToAxis: true,
    },

    parallax: true,

});