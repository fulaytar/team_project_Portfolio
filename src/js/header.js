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

header_close_btn.addEventListener("click", function() {
    header_burger_btn.classList.remove("activ-burger");
    mobileModal.classList.add("is-open");

    // Додаємо відслідковувач події прокрутки після кліку на header_close_btn
    window.addEventListener("scroll", scrollHandler);
});

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
    openMenu();
    window.addEventListener('scroll', checkScroll);
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
    
    header_burger_btn_modal.classList.remove("activ-burger");
    header_burger_btn.classList.remove("activ-burger");
    mobileModal.classList.remove("is-open");
    const links=document.querySelectorAll('.list-open-item');
}

function notScroll() {
    let scrolledPixels = window.scrollY;
    if (scrolledPixels > 1) {
        header_burger_btn.classList.remove("activ-burger");
        clickModalX();
        window.removeEventListener("scroll", notScroll);

    }
}

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".list-open-item a");
    clickModalX();
    menuItems.forEach(function(item) {
      item.addEventListener("click", function(event) {
        
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Додаємо або видаляємо клас "is-open" відповідно до потреби
        document.querySelector(".mob-menu").classList.remove("is-open");
  
        // Прокручуємо до цільового елемента
        targetElement.scrollIntoView({ behavior: "smooth" });
      });
    });
  });