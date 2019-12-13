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