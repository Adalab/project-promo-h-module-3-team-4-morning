const inputArr = document.querySelectorAll('.js-input');
const previewArr = document.querySelectorAll('.js-preview');
const colorIConsCard = document.querySelectorAll('.menu__items');
const twitterBtn = document.querySelector('.twitter');


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

function listenInputs() {
  for (let i = 0; i < inputArr.length; i++) {
    inputArr[i].addEventListener('keyup', handler);

  }
}

listenInputs();
