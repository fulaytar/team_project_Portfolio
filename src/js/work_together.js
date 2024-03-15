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

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let checkValid = validateInputs();

  if(!checkValid){

    let formData = Object.fromEntries(new FormData(document.getElementById('form')).entries());

    const response = setRequests(formData);

    Array.prototype.forEach.call(form.querySelectorAll('label'), function(node) {
      node.parentNode.removeChild(node);
    });

    Array.prototype.forEach.call(document.querySelectorAll('.input-holder'), function(node) {
      node.classList.remove('success');
    })
  }
})

form.addEventListener('input', function(e){
  validateInputs();
});
function validateInputs(){
  const inputs = form.querySelectorAll('.form-control');
  const valid = [];
  let checkAttr = null;

  inputs.forEach(function(item,j){

    const parent = item.parentNode;

    if(item.getAttribute('type')){
      checkAttr = item.getAttribute('type');
    }else{
      checkAttr = item.tagName;
    }
    removeError(item);

    switch(checkAttr){
      case 'text':
        let _thisVal = item.value;

        if(_thisVal === ''){
          parent.classList.add("error");

          notification(item, "The field is required.", "error", "success")

          valid.push(item.getAttribute('name'));
        }else{
          parent.classList.remove("error");
          notification(item, "Success!", "success")
        }
        break;
      case 'email':
        const regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(item.value === '' || !regEmail.test(item.value)){
          parent.classList.add("error");

          notification(item, "Invalid email, try again", "error")

          valid.push(item.getAttribute('name'));
        }else{
          parent.classList.remove("error");
          notification(item, "Success!", "success")
        }
        break;
      default:
        if(item.value === ''){
          parent.classList.add("error");
          valid.push(item.getAttribute('name'));
        }else{
          parent.classList.remove("error");
        }
        break;
    }
  });
  return valid.length > 0;
}

function notification (input, text, format) {
  const parent = input.parentNode;
  const errorLabel = document.createElement('label');
  errorLabel.classList.add(format+'-label');
  errorLabel.textContent = text;

  parent.classList.add(format);
  parent.append(errorLabel);

}

function removeError(input) {
  const parent = input.parentNode;
  if(parent.classList.contains('error')) {
    parent.querySelector('.error-label').remove();
    parent.classList.remove('error');
  }
  if(parent.classList.contains('success')) {
    if( parent.querySelector('.success-label')) {
      parent.querySelector('.success-label').remove();
    }
    parent.classList.remove('success');
  }
}

function createHTML(data) {

  const content = document.querySelector('.content');
  content.replaceChildren();

  const title = document.createElement("h2");
  const paragraph = document.createElement("p");
  title.textContent = data.title;
  paragraph.textContent = data.message;

  content.append(title);
  content.append(paragraph);

  openModal();
}

document.addEventListener('keyup', function(e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
closeModalButton.addEventListener('click', function () {
  closeModal();
});
overlay.addEventListener('click', function () {
  closeModal();
})

function openModal() {
  if(modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal() {
  if(modal === null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}


async function setRequests(data) {
  try {
    const response = await INSTANCE.post(`/requests`, data);
    createHTML(response.data);
    form.reset();

  }catch (e){
    iziToast.error({
      title: 'Error',
      message: e.message,
      position: 'topRight'
    });
  }
}

