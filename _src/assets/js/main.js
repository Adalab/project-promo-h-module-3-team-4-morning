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

function resetForm() {
  colorInputArr[1].removeAttribute('checked');
  colorInputArr[2].removeAttribute('checked');
  form.reset();
  document.querySelector('.preview__display').classList.remove('palette1');
  document.querySelector('.preview__display').classList.remove('palette2');
  document.querySelector('.preview__display').classList.remove('palette3');
  lsObj.image = '';
  handler();
  profileImage.style.backgroundImage = `url(${defaultImage})`;
  profilePreview.style.backgroundImage = `url('')`;
}
resetFormBtn.addEventListener('click', resetForm);

function getImage(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  if (!!fr.result === true) {
    profileImage.style.backgroundImage = `url(${fr.result})`;
    profilePreview.style.backgroundImage = `url(${fr.result})`;
    lsObj['image'] = fr.result;
    updateLocalStorage();
  } else {
    profileImage.style.backgroundImage = `url(${defaultImage})`;
    profilePreview.style.backgroundImage = `url('')`;
    lsObj['image'] = fr.result;
  }
}

function fakeFileClick(e) {
  e.preventDefault();
  fileField.click();
}
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

function updatePalette() {
  let color = document.querySelector('.preview__display');
  if (colorInputArr[0].checked === true) {
    color.classList.remove('palette1');
    color.classList.remove('palette2');
    color.classList.add('palette0');
    lsObj['palette'] = colorInputArr[0].id;
  } else if (colorInputArr[1].checked === true) {
    color.classList.remove('palette0');
    color.classList.remove('palette2');
    color.classList.add('palette1');
    lsObj['palette'] = colorInputArr[1].id;
  } else {
    color.classList.remove('palette0');
    color.classList.remove('palette1');
    color.classList.add('palette2');
    lsObj['palette'] = colorInputArr[2].id;
  }
  updateLocalStorage();
}

function checkForm() {
  if (formValidation.checkValidity() === true) {
    createAllowCard.classList.remove('filter');
  } else {
    createAllowCard.classList.add('filter');
  }
}

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

function updatePreview() {
  const lsArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (i < 2) {
      if (!!inputArr[i].value === false) {
        previewArr[i].innerHTML = defaultPreviewArr[i];
      } else {
        previewArr[i].innerHTML = inputArr[i].value;
      }
    } else if (!!inputArr[i].value === false) {
      previewArr[i].href = `${hrefArr[i]}${defaultPreviewArr[i]}`;
      colorIConsCard[i - 2].classList.add('filter');
    } else {
      previewArr[i].href = `${hrefArr[i]}${inputArr[i].value}`;
      colorIConsCard[i - 2].classList.remove('filter');
    }
    lsObj[inputArr[i].id] = inputArr[i].value;
    lsArr.push(inputArr[i].value);
  }
  twitterBtn.classList.add('hidden');
}

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

function sendData() {
  let inputs = Array.from(formValidation.elements);
  let json = getJSONFromInputs(inputs);
  json.skills = ['JavaScript', 'React'];
  if (fr.result !== null) {
    json.photo = fr.result;
  } else {
    json.photo = lsObj.image;
  }
  json.palette = lsObj.palette;
  sendRequest(json);
}

function loadPhoto() {
  const myFile = document.querySelector('#img-selector').files[0];
  if (myFile !== undefined) {
    fr.addEventListener('load', sendData);
    fr.readAsDataURL(myFile);
  } else {
    sendData();
  }
}

function getJSONFromInputs(inputs) {
  return inputs.reduce(function (acc, val) {
    if (val.nodeName !== 'BUTTON') {
      acc[val.name] = val.value;
    }
    return acc;
  }, {});
}

function sendRequest(json) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  const btnTwitter = document.querySelector('.js-button-twitter');
  if (result.success) {
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    btnTwitter.href = 'https://twitter.com/share?text=' + 'Quiero enseñar mi tarjeta de contacto' + '&url=' + result.cardURL + '&hashtags=' + 'tarjetavisita,html,css,javascript,businesscard,card,profile';
    twitterBtn.classList.remove('hidden');
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}

function handler() {
  updateLocalStorage();
  updatePreview();
  updatePalette();
  checkForm();
}
getFromLocalStorage();
