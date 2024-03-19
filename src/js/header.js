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

const header_close_btn = document.querySelector(".close");
const header_burger_btn = document.querySelector(".burger");
const mobileModal = document.querySelector('.mob-menu');

header_close_btn.addEventListener("click",openModalByBurger);

function openModalByBurger(){
        header_burger_btn.classList.add("activ-burger");
        mobileModal.classList.toggle("is-open");
        // Додаємо відслідковувач події прокрутки після кліку на header_close_btn
        window.addEventListener("scroll", scrollHandler);
    }


function scrollHandler() {
    // Перевіряємо, чи прокручено сторінку вниз
    if (window.scrollY > 5) {
        // Викликаємо функцію clickModalX() для закриття модального вікна
        clickModalX();
        // Видаляємо відслідковувач події прокрутки після виклику clickModalX()
        window.removeEventListener("scroll", scrollHandler);
    }
}

header_burger_btn.addEventListener("scroll", notScroll);

// Обробка меню 
const header_list = document.querySelector('.list-menu-header');
const openMenuList = document.querySelector('.header_menu');
let status = false;
const cssText = `
            display: flex;
            text-align: center;
            flex-direction: column;
            row-gap: 5px;
            position: absolute;
            left: 50.6%;
            top: 119px;
            transform: translate(-50%, -50%);
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        `;

openMenuList.addEventListener('click', menuHandler);

function menuHandler(event) {
    event.preventDefault()
    if (status) {
         closeMenu();
        return;
    } 
    window.addEventListener('scroll', checkScroll);
    openMenu();
}

function closeMenu() {
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
}

function openMenu() {
    header_list.style.cssText = cssText;

    const items = document.querySelectorAll('.list-menu-header-item');
    items.forEach((item, index) => {
        setTimeout(() => {
            item.style.transition = 'all 1000ms cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.transform = 'translateX(0)';
            item.style.opacity = '1';
            item.style.visibility = 'visible';
            item.style.pointerEvents = 'auto';
        }, index * 100); // Додатковий затримка для кожного елемента
    });
    status = true;
}

function checkScroll() {
    // Отримати кількість пікселів, на які прокручено сторінку по вертикалі
    const scrolledPixels = window.scrollY;
    // Тепер ви можете використати це значення для вашої логіки
    // Наприклад, ви можете перевірити, чи сторінка прокручена на певну кількість пікселів і виконати відповідні дії
     if (scrolledPixels > 10) {
         closeMenu();
         window.removeEventListener("scroll", checkScroll);
    } 
}

const header_close_btn_modal = document.querySelector(".close-modal");
const header_burger_btn_modal = document.querySelector(".burger-modal");

header_close_btn_modal.addEventListener("click", clickModalX);
header_close_btn_modal.addEventListener('scroll', notScroll);

function clickModalX() {
    header_burger_btn_modal.classList.toggle("activ-burger");
    header_burger_btn.classList.toggle("activ-burger");
    mobileModal.classList.toggle("is-open");
}

function notScroll() {
    let scrolledPixels = window.scrollY;
    if (scrolledPixels > 10) {
        header_burger_btn.classList.remove("activ-burger");
        clickModalX();
        window.removeEventListener("scroll", notScroll);

    }
}

