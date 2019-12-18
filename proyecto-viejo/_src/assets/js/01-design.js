
const colorInputArr = document.querySelectorAll('.js-input-color');


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

function listenColors() {
  for (let i = 0; i < colorInputArr.length; i++) {
    colorInputArr[i].addEventListener('click', updatePalette);

  }
}

listenColors();
