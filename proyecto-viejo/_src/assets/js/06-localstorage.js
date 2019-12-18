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
