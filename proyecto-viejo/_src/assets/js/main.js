'use strict';

const inputArr = document.querySelectorAll('.js-input');
const previewArr = document.querySelectorAll('.js-preview');
const formValidation = document.querySelector('.js-form-container');
const createAllowCard = document.querySelector('.js-share__btn');
const colorIConsCard = document.querySelectorAll('.menu__items');
const colorInputArr = document.querySelectorAll('.js-input-color');
const lsObj = {
  palette: '',
  name: '',
  job: '',
  image: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};
const twitterBtn = document.querySelector('.twitter');
const responseURL = document.querySelector('.js-response');

// Image loading
const fr = new FileReader();
const uploadBtn = document.querySelector('.js-fill__image-btn');
const fileField = document.querySelector('.js-fill__image-upload-btn');
const profileImage = document.querySelector('.preview__display--img');
const profilePreview = document.querySelector('.fill__image--miniature');
let form = document.querySelector('form');
const resetFormBtn = document.querySelector('.preview__reset');
const defaultImage = './assets/images/default-profile.png';

resetFormBtn.addEventListener('click', resetForm);


uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

const twitterActive = function () {
  if (formValidation.checkValidity() === false) {
    twitterBtn.classList.add('hidden');
  }
};

function createButtonHandler(event) {
  event.preventDefault();
  twitterActive();
}
createAllowCard.addEventListener('click', createButtonHandler);

function listenColors() {
  for (let i = 0; i < colorInputArr.length; i++) {
    colorInputArr[i].addEventListener('click', updatePalette);

  }
}
listenColors();





function listenInputs() {
  for (let i = 0; i < inputArr.length; i++) {
    inputArr[i].addEventListener('keyup', handler);

  }
}
listenInputs();
const defaultPreviewArr = [
  'Nombre Apellido',
  'Front-End Developer',
  '',
  '',
  '',
  '',
];
const hrefArr = [
  false,
  false,
  'mailto:',
  'tel:+',
  'https://www.linkedin.com/in/',
  'https://www.github.com/',
];



function updateLocalStorage() {
  localStorage.setItem('userData', JSON.stringify(lsObj));
}

function getFromLocalStorage() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData !== null) {
    inputArr[0].value = userData.name;
    inputArr[1].value = userData.job;
    inputArr[2].value = userData.email;
    inputArr[3].value = userData.phone;
    inputArr[4].value = userData.linkedin;
    inputArr[5].value = userData.github;
    lsObj.image = userData.image;
    if (userData.image !== '') {
      profileImage.style.backgroundImage = `url(${userData.image})`;
      profilePreview.style.backgroundImage = `url(${userData.image})`;
    }
    updatePreview();
    for (let i = 0; i < colorInputArr.length; i++) {
      if (colorInputArr[i].id === userData.palette) {
        colorInputArr[i].setAttribute('checked', 'checked');
        updatePalette();
      }
    }
    checkForm();
  }
}
createAllowCard.addEventListener('click', loadPhoto);



function handler() {
  updateLocalStorage();
  updatePreview();
  updatePalette();
  checkForm();
}
getFromLocalStorage();
