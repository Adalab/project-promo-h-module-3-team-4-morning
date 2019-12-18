
let form = document.querySelector('form');

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
