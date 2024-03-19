import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.getElementById('form');
const closeModalButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

const INSTANCE =  axios.create({
  baseURL: `https://portfolio-js.b.goit.study/api`,
  headers: {
    'Accept': 'application/json'
  }
});

const toggleModal = (action) => {
  if (modal === null) return;

  if (action === 'open') {
    modal.classList.add('active');
    overlay.classList.add('active');
  } else if (action === 'close') {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
};

const openModal = () => {
  toggleModal('open');
  addEscapeKeyListener();
};

const closeModal = () => {
  toggleModal('close');
  removeEscapeKeyListener();
};

const setRequests = async (data) => {
  try {
    const response = await INSTANCE.post(`/requests`, data);
    handleSuccess(response.data);
  } catch (error) {
    handleError(error.message);
  }
};

const handleSuccess = (responseData) => {
  createHTML(responseData);
  form.reset();
};

const handleError = (errorMessage) => {
  iziToast.error({
    title: 'Error',
    message: errorMessage,
    position: 'topRight'
  });
};

const notification = (input, text, format) => {
  const parent = input.parentNode;
  parent.classList.add(format);

  const notificationLabel = document.createElement('label');
  notificationLabel.classList.add(`${format}-label`);
  notificationLabel.textContent = text;

  parent.append(notificationLabel);
};

const removeError = (input) => {
  const parent = input.parentNode;

  parent.classList.remove('error', 'success');

  const errorLabel = parent.querySelector('.error-label');
  if (errorLabel) {
    errorLabel.remove();
  }

  const successLabel = parent.querySelector('.success-label');
  if (successLabel) {
    successLabel.remove();
  }
};

const createHTML = (data) => {
  const { title, message } = data;

  const content = document.querySelector('.content');
  content.innerHTML = '';

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = message;

  content.append(titleElement, paragraphElement);

  openModal();
  addEscapeKeyListener();
};

const validateInputs = () => {
  const inputs = form.querySelectorAll('.form-control');
  const valid = [];

  inputs.forEach((item) => {
    const parent = item.parentNode;
    const checkAttr = item.getAttribute('type') || item.tagName.toLowerCase();
    removeError(item);

    switch (checkAttr) {
      case 'text':
        if (item.value.trim() === '') {
          parent.classList.add("error");
          notification(item, "The field is required.", "error");
          valid.push(item.getAttribute('name'));
        } else {
          parent.classList.remove("error");
          notification(item, "Success!", "success");
        }
        break;
      case 'email':
        const regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (item.value.trim() === '' || !regEmail.test(item.value)) {
          parent.classList.add("error");
          notification(item, "Invalid email, please try again", "error");
          valid.push(item.getAttribute('name'));
        } else {
          parent.classList.remove("error");
          notification(item, "Success!", "success");
        }
        break;
      default:
        if (item.value.trim() === '') {
          parent.classList.add("error");
          notification(item, "The field is required.", "error");
          valid.push(item.getAttribute('name'));
        } else {
          parent.classList.remove("error");
          notification(item, "Success!", "success");
        }
        break;
    }
  });

  return valid.length > 0;
};

const escapeKeyHandler = (e) => {
  if (e.key === "Escape") {
    closeModal();
    removeEscapeKeyListener();
  }
}

const addEscapeKeyListener = () => {
  document.addEventListener('keydown', escapeKeyHandler);
}

const removeEscapeKeyListener = () => {
  document.removeEventListener('keydown', escapeKeyHandler);
}

closeModalButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let checkValid = validateInputs();

  if(!checkValid){

    let formData = Object.fromEntries(new FormData(document.getElementById('form')).entries());

    const response = setRequests(formData);

    Array.prototype.forEach.call(form.querySelectorAll('label'), (node) => {
      node.parentNode.removeChild(node);
    });

    Array.prototype.forEach.call(document.querySelectorAll('.input-holder'), (node) => {
      node.classList.remove('success');
    });
  }
});

form.addEventListener('input', (e) => {
  validateInputs();
});