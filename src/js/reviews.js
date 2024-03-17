import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import axios from 'axios';
import Swiper from 'swiper';

import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import 'swiper/css/bundle';


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
    modules: [Navigation, Keyboard, Mousewheel],
    slidesPerView: 1,
    spaceBetween: 16,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    },
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
    },
  });
}

axios.defaults.baseURL = "https://portfolio-js.b.goit.study/api/";

async function getAndDisplayReviews() {
  try {
    const reviews = await getReviews();
    createReviewsMarkup(reviews);
  } catch (error) {
    handleError(error);
  }
}

function handleError(error) {
  iziToast.show({
    fontSize: 'large',
    position: 'topRight',
    messageColor: 'white',
    timeout: 6000,
    backgroundColor: '#ED3B44',
    theme: 'dark',
    progressBar: false,
    message: 'Something went wrong',
  });
  reviewsList.insertAdjacentHTML("beforeend", `<li class="not-found-item">
    <p class="not-found-text">Not found</p></li>`);
}

async function getReviews() {
  const response = await axios.get("reviews");
  return response.data;
}

getAndDisplayReviews();
