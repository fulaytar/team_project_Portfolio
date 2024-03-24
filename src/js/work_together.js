import axios from 'axios';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.getElementById('form');
const closeModalButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

const INSTANCE = axios.create({
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
  removeValidationHandlers();
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
    message: "Please check the information you entered and try again",
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

const validateInput = (input) => {
  const parent = input.parentNode;
  const checkAttr = input.getAttribute('type') || input.tagName.toLowerCase();
  removeError(input);

  switch (checkAttr) {
    case 'text':
      const inputValue = input.value.trim();
      const minLength = parseInt(input.getAttribute('minlength'));

      if (inputValue === '') {
        parent.classList.add("error");
        notification(input, "The field is required.", "error");
        return input.getAttribute('name');
      } else if (minLength && inputValue.length < minLength) {
        parent.classList.add("error");
        notification(input, `Minimum length is ${minLength} characters.`, "error");
        return input.getAttribute('name');
      } else {
        parent.classList.remove("error");
        notification(input, "Success!", "success");
        return null;
      }
    case 'email':
      const regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (input.value.trim() === '' || !regEmail.test(input.value)) {
        parent.classList.add("error");
        notification(input, "Invalid email, please try again", "error");
        return input.getAttribute('name');
      } else {
        parent.classList.remove("error");
        notification(input, "Success!", "success");
        return null;
      }
    default:
      if (input.value.trim() === '') {
        parent.classList.add("error");
        notification(input, "The field is required.", "error");
        return input.getAttribute('name');
      } else {
        parent.classList.remove("error");
        notification(input, "Success!", "success");
        return null;
      }
  }
};

const handleFocus = (e) => {
  const input = e.target;
  input.addEventListener('input', validateOnInput);
};

const handleBlur = (e) => {
  const input = e.target;
  input.removeEventListener('input', validateOnInput);
  validateInput(input);
};

const validateOnInput = (e) => {
  const input = e.target;
  validateInput(input);
};

const attachValidationHandlers = () => {
  const inputs = form.querySelectorAll('.form-control');
  inputs.forEach((input) => {
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
  });
};

const removeValidationHandlers = () => {
  const inputs = form.querySelectorAll('.form-control');
  inputs.forEach((input) => {
    input.removeEventListener('focus', handleFocus);
    input.removeEventListener('blur', handleBlur);
  });
};

const validateInputs = () => {
  const invalidInputs = [];
  const inputs = form.querySelectorAll('.form-control');
  inputs.forEach((input) => {
    const result = validateInput(input);
    if (result) {
      invalidInputs.push(result);
    }
  });
  return invalidInputs;
};

const escapeKeyHandler = (e) => {
  if (e.key === "Escape") {
    closeModal();
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
  const invalidInputs = validateInputs();
  if (invalidInputs.length === 0) {

    let formData = Object.fromEntries(new FormData(document.getElementById('form')).entries());

    const response = setRequests(formData);

    Array.prototype.forEach.call(form.querySelectorAll('label'), (node) => {
      node.parentNode.removeChild(node);
    });

    Array.prototype.forEach.call(document.querySelectorAll('.input-holder'), (node) => {
      node.classList.remove('success');
    });
  } else {
    //
  }
});

attachValidationHandlers();
