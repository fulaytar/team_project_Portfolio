//Izitoast

//import iziToast from "izitoast";
//import "izitoast/dist/css/iziToast.min.css";

//Бібліотека Axios
//import axios from 'axios';

//Swiper.js

//import Swiper from 'swiper';
// import Swiper styles
//import 'swiper/css';
//const swiper = new Swiper(...);

//Accordion

//import Accordion from 'accordion-js';
//import 'accordion-js/dist/accordion.min.css';

/* Видаляй зайве, якщо не використавуєш */

//обробка бургера
const header_close_btn = document.querySelector(".close");
const header_burger_btn = document.querySelector(".burger");

header_close_btn.addEventListener("click", function() {
        header_burger_btn.classList.toggle("activ-burger");
});
    
//обробка меню 
const header_list = document.querySelector('.list-menu-header')

const openMenuList = document.querySelector('.header_menu');
 
let status = false;

openMenuList.addEventListener('click', openMenu);
function openMenu() {
    if (status) {
        const items = document.querySelectorAll('.list-menu-header-item');
        items.forEach((item, index) => {
            if (index % 2 === 0) {
                item.style.transform = 'translateX(-500%)';
                item.style.opacity = '0';
                item.style.visibility = 'hidden';
                item.style.pointerEvents = 'none';
            } else {
                item.style.transform = 'translateX(500%)';
                item.style.opacity = '0';
                item.style.visibility = 'hidden';
                item.style.pointerEvents = 'none';
            }
        });
        header_list.style.opacity = '0';
        header_list.style.visibility = 'hidden';
        header_list.style.pointerEvents = 'none';
        status = false;
    } else {
        const cssText = `
            display: flex;
            text-align: center;
            flex-direction: column;
            row-gap: 5px;
            position: absolute;
            left: 50.2%;
            top: 119px;
            transform: translate(-50%, -50%);
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        `;
        header_list.style.cssText = cssText;

        const items = document.querySelectorAll('.list-menu-header-item');
        items.forEach((item, index) => {
            item.style.transform = 'translateX(0)';
            item.style.opacity = '1';
            item.style.visibility = 'visible';
            item.style.pointerEvents = 'auto';
            
        });

        status = true;
    }
}