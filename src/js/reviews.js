import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import axios from 'axios';
import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const reviewsList = document.querySelector('.reviews');

function createReviewsMarkup(reviews) {

const markup = reviews.map(({avatar_url, author, review}) =>
    `<li class="review-item swiper-slide">
      <img
        class="review-image"
        src="${avatar_url}"
        alt="${author}"
      />
      <div class="review-textbox">
      <h3 class="review-author">${author}</h3>
      <p class="review-text">${review}</p>
      </div>
  </li>`)
    .join("");
  reviewsList.insertAdjacentHTML("beforeend", markup);

  const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 16,
  // Responsive breakpoints
  // breakpoints: {
  //   375: {
  //     slidesPerView: 2,
  //     spaceBetween: 16
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 16
  //     }
  //   },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
}

axios.defaults.baseURL = "https://portfolio-js.b.goit.study/api/";

async function getReviews() {
  const response = await axios.get("reviews");
  return response.data;
}
 
try {
    const reviews = await getReviews(); 
    createReviewsMarkup(reviews);
  } catch (error) {
    iziToast.error({
        fontSize: 'large',
        position:	'topRight',
        messageColor: 'white',
        timeout:	5000,
        backgroundColor: '#ED3B44',
        theme: 'dark',
        progressBar: false,
        message: 'Reviews not found',
    });
    reviewsList.insertAdjacentHTML("beforeend",`<li class="review-item">
    <p class="review-text">Not found</p></li>` );
}
  

